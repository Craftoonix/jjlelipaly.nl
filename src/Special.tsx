import { useEffect, useRef } from "react";
import "./Special.css";

import theSpecialVideo from "/src/assets/rickroll.mov"

function Special () {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        videoRef.current?.play().catch((err) => {
            console.log("Autoplay blocked:", err);
        });
    }, []);
    return <div className="td" style={{height:"31.5em"}}>
        <div className={"video"}>
            <video width="100%" autoPlay controls playsInline>
                <source src={theSpecialVideo} type="video/mp4" />
                    Your browser does not support the video tag.
            </video>
        </div>
    </div>
}

export default Special