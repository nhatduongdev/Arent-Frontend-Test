import { Header } from "./Header";
import Footer from "./Footer";
import type { ReactNode } from "react";
import BackToTopButton from "../ui/BackToTopBtn";


interface ContainerProps {
    children: ReactNode;
}

export default function MainLayout({ children }: ContainerProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header notifications={2} />
            <main className="flex-1">
                <div>
                    {children}
                    <BackToTopButton />
                </div>
            </main>
            <Footer />
        </div>
    );
}
