import { useRef, useEffect } from "react";
import "./Rain.css"


function Rain() {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current as HTMLCanvasElement | null;
        if (!canvas) return; //handle missing canvas
        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D | null;
        if (!ctx) return;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);
        const DPR = window.devicePixelRatio || 1;
        canvas.width = width * DPR;
        canvas.height = height * DPR;
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        ctx.scale(DPR, DPR);

        // get card element
        const cardEl = document.querySelector(".board") as HTMLElement | null;
        function getCardRect() {
            if (!cardEl) return null;
            const r = cardEl.getBoundingClientRect();
            return { left: r.left, top: r.top, right: r.right, bottom: r.bottom };
        }
        let cardRect = getCardRect();

        // Raindrop settings
        const dropCount = Math.floor((width * height) / 16000); // density based on area
    
        type Drop = {
            x: number;
            y: number;
            len: number;
            speed: number;
            wind: number;
            alpha: number;
        };
        const drops: Drop[] = [];

        function rand(min:number, max:number) {
            return Math.random() * (max - min) + min;
        }

        for (let i = 0; i < dropCount; i++) {
            drops.push({
                x: Math.random() * width,
                y: Math.random() * height,
                len: rand(40, 100),
                speed: rand(900, 2700) / 1000, // px per ms
                wind: rand(-0.3, 0.6),
                alpha: rand(0.2, 0.6),
            });
        }

        let last = performance.now();
        let running = true;

        function resize() {
            width = window.innerWidth;
            height = window.innerHeight;
            if (!canvas) return; //handle missing canvas
            canvas.width = width * DPR;
            canvas.height = height * DPR;
            canvas.style.width = width + "px";
            canvas.style.height = height + "px";
            if (!ctx) return;
            ctx.scale(DPR, DPR);
        }
        window.addEventListener("resize", resize);

        function isInCard(x:number, y:number) {
            if (!cardRect) return;
            return x >= cardRect.left && x <= cardRect.right && y >= cardRect.top && y <= cardRect.bottom;
        }

        function updateCardRect() { cardRect = getCardRect(); }
        window.addEventListener("scroll", updateCardRect, { passive: true });
        window.addEventListener("resize", updateCardRect);

        function draw(now:number) {
            if (!running) return;
            const dt = now - last;
            last = now;

            // Clear with slight opacity for motion blur effect
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = "rgba(10,12,15,0.12)"; // subtle dark overlay; tweak as needed
            ctx.fillRect(0, 0, width, height);

            ctx.lineWidth = 1;
            ctx.lineCap = "round";

            for (let i = 0; i < drops.length; i++) {
                const d = drops[i];
                d.y += d.speed * dt;
                d.x += d.wind * (d.len / 20) * (dt / 16);

                if (d.y > height + d.len) {
                    d.y = -20;
                    d.x = Math.random() * width;
                    d.len = rand(40, 75);
                    d.speed = rand(900, 2700) / 1000;
                    d.wind = rand(0, 0);
                    d.alpha = rand(0.2, 0.6);
                }

                // respawn when off bottom
                if (d.y > height + d.len) {
                    d.y = -20;
                    d.x = Math.random() * width;
                    d.len = rand(40, 75);
                    d.speed = rand(900, 2700) / 1000;
                    d.wind = rand(-0.3, 0.6);
                    d.alpha = rand(0.2, 0.6);
                }

                // If the drop's tip is inside the card rect, skip drawing it (disappear on collision)
                const tipX = d.x + d.wind * 8;
                const tipY = d.y + d.len;
                if (isInCard(tipX, tipY)) {
                    // Optionally create a tiny splash just outside the card edge:
                    // if the tip is just inside top/bottom/left/right edges, draw a small line at the border instead.
                    // For simplicity, just respawn the drop above the screen so it disappears immediately:
                    d.y = -Math.random() * 200;
                    d.x = Math.random() * width;
                    continue;
                }

                ctx.strokeStyle = `rgba(200,220,255,${d.alpha})`;
                ctx.beginPath();
                ctx.moveTo(d.x, d.y);
                ctx.lineTo(d.x + d.wind * 8, d.y + d.len);
                ctx.stroke();

                // small splash when reaching bottom
                if (d.y >= height - 2) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(200,220,255,${d.alpha * 0.5})`;
                    ctx.moveTo(d.x - 2, height - 2);
                    ctx.lineTo(d.x + 2, height - 2);
                    ctx.stroke();
                }
            }

            requestAnimationFrame(draw);
        }

        requestAnimationFrame(draw);

        return () => {
            running = false;
            window.removeEventListener("resize", resize);
        };
    }, []);


    return (
        <div className={"page"}>
            <canvas ref={canvasRef} className={"canvas"} aria-hidden="true" />
        </div>
    );  
}

export default Rain;