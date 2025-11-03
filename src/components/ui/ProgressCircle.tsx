import { useEffect, useRef, useState } from "react";

interface ProgressCircleProps {
    progress: number;
    date?: string;
    size?: number;
    glow?: boolean;
    duration?: number;
    className?: string;
}

export default function ProgressCircle({
    progress,
    date = "05/21",
    size = 180,
    glow = true,
    duration = 700,
    className,
}: ProgressCircleProps) {
    const clamped = Math.max(0, Math.min(100, progress));
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const [animatedValue, setAnimatedValue] = useState<number>(0);
    const rafRef = useRef<number | null>(null);
    const startRef = useRef<number | null>(null);
    const startValRef = useRef<number>(0);
    const targetRef = useRef<number>(clamped);

    useEffect(() => {
        startValRef.current = animatedValue;
        targetRef.current = clamped;
        startRef.current = null;

        const step = (ts: number) => {
            if (startRef.current == null) startRef.current = ts;
            const elapsed = ts - startRef.current;
            const t = Math.min(1, elapsed / Math.max(1, duration));
            const eased = 1 - (1 - t) * (1 - t);
            const next = startValRef.current + (targetRef.current - startValRef.current) * eased;
            setAnimatedValue(next);
            if (t < 1) {
                rafRef.current = requestAnimationFrame(step);
            } else {
                rafRef.current = null;
            }
        };

        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(step);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [clamped, duration]);

    const offset = circumference * (1 - animatedValue / 100);


    return (
        <div 
            className={className}
            style={className ? { position: "relative" } : { width: size, height: size, position: "relative" }}
            aria-label={`Progress ${clamped}%`} 
            role="img"
        >
            <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }} xmlns="http://www.w3.org/2000/svg">
                <defs>
                    {glow && (
                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                            </feMerge>
                        </filter>
                    )}
                </defs>

                <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />

                {glow && (
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#FC7400"
                        strokeWidth="4"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        transform="rotate(-90 50 50)"
                        filter="url(#glow)"
                    />
                )}
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    transform="rotate(-90 50 50)"
                />
            </svg>

            <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{ 
                    textShadow: '0 0 10px #FC7400, 0 0 20px rgba(252,116,0,0.45)',
                }}
            >
                <div className="text-white flex items-center gap-1">
                    <span className="text-[18px]">{date}</span>
                    <span className="text-[25px]">{Math.round(animatedValue)}%</span>
                </div>
            </div>
        </div>
    );
}