import { useEffect, useState } from "react";
import { ScrollIcon } from "@/assets/icons";



export default function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isAtBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10;
            setIsVisible(isAtBottom);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed top-1/2 right-96 z-50 w-16 h-16 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-primary-300 hover:text-white
  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
        >
            <ScrollIcon className={`w-15 h-15 transition-all duration-300
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`} />
        </button>
    );
}
