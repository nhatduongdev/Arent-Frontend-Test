import { MemoIcon, ChallengeIcon, InfoIcon, MenuIcon, CloseIcon}from "@/assets/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


interface HeaderProps {
    notifications?: number;
}

export function Header({ notifications = 0 }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const navItems = [
        { text: "自分の記録", path: "/record", Icon: MemoIcon },
        { text: "チャレンジ", path: "/challenge", Icon: ChallengeIcon },
        { text: "お知らせ", path: "/notification", Icon: InfoIcon, showNotification: true },
    ];

    const menuItems = [
        { text: "自分の記録", path: "/record" },
        { text: "体重グラフ", path: "/weight-graph" },
        { text: "目標", path: "/goal" },
        { text: "選択中のコース", path: "/my-course" },
        { text: "コラム一覧", path: "/column" },
        { text: "設定", path: "/settings" },
    ];

    return (
        <header className="flex items-center justify-between bg-dark-500 sm:px-6 lg:px-10 py-3 sm:py-5 shadow-md h-[60px] sm:h-[70px]">
            <Link to="/" className="flex items-center">
                <img
                    src="/logo/logo_main.svg"
                    alt="Healthy Logo"
                    width={109}
                    height={40}
                    className="object-contain"
                />
            </Link>

            <div className="flex items-center">
                <nav className="hidden sm:flex items-center gap-4 lg:gap-8 text-base font-light mr-4">
                    {navItems.map(({ text, path, Icon, showNotification }) => (
                        <button
                            key={text}
                            onClick={() => navigate(path)}
                            className="flex items-center gap-2 cursor-pointer hover:opacity-80"
                        >
                            <div className="relative">
                                <Icon className="w-8 h-8" />
                                {showNotification && notifications > 0 && (
                                    <span className="absolute -top-1 -right-1 translate-x-2 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center border-2 border-dark-500">
                                        {notifications > 99 ? '99+' : notifications}
                                    </span>
                                )}
                            </div>
                            <span className="text-light font-jp text-base">{text}</span>
                        </button>
                    ))}
                </nav>

                <div className="mx-8" />

                <button
                    className="cursor-pointer hover:opacity-80"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setIsMenuOpen(true)}
                >
                    {isMenuOpen ? (
                        <CloseIcon
                            className="w-8 h-8"
                            onClick={(e: React.MouseEvent) => {
                                e.stopPropagation();
                                setIsMenuOpen(false);
                            }}
                        />
                    ) : (
                        <MenuIcon className="w-8 h-8" />
                    )}
                </button>

                {isMenuOpen && (
                    <aside
                        className="fixed top-[60px] sm:top-[70px] right-4 sm:right-10 z-50 w-[calc(100vw-32px)] sm:w-64 bg-gray-400 text-light shadow-lg"
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="relative">
                            <ul className="divide-y divide-[#565656]">
                                {menuItems.map((item) => (
                                    <li key={item.text}>
                                        <button
                                            className="w-full text-left px-6 py-6 text-[18px] font-light font-jp"
                                            onClick={() => {
                                                navigate(item.path);
                                                setIsMenuOpen(false);
                                            }}
                                        >
                                            {item.text}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                )}
            </div>
        </header>
    );
}
