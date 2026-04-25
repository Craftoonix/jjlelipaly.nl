import { useRef, useEffect } from "react";
import "./Rain.css"


function Rain() {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);
        const DPR = window.devicePixelRatio || 1;
        canvas.width = width * DPR;
        canvas.height = height * DPR;
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        ctx.scale(DPR, DPR);

        // Raindrop settings
        const dropCount = Math.floor((width * height) / 16000); // density based on area
        const drops = [];
        

        function rand(min, max) {
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
            canvas.width = width * DPR;
            canvas.height = height * DPR;
            canvas.style.width = width + "px";
            canvas.style.height = height + "px";
            ctx.scale(DPR, DPR);
        }
        window.addEventListener("resize", resize);

        function draw(now) {
            if (!running) return;
            const dt = now - last;
            last = now;

            // Clear with slight opacity for motion blur effect
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