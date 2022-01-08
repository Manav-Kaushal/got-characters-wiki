import React from "react";
import Link from "next/link";
import { Logo } from "@components";

interface Header {
    navigationData: string[];
    currentRoute: string;
    setCurrentRoute: (value: string) => void;
}

export const Header: React.FC<Header> = ({
    navigationData,
    currentRoute,
    setCurrentRoute,
}) => {
    return (
        <nav className="sticky top-0 flex-row items-center justify-between hidden h-20 px-8 bg-white/50 backdrop-blur-sm md:flex">
            <span className="text-5xl text-gray-800">
                <Link href={{ pathname: "/" }}>
                    <Logo />
                </Link>
            </span>
            <ul className="flex flex-row self-end h-12">
                {navigationData.map((item: string, index: number) => (
                    <li
                        className={`flex items-start justify-center w-20 text-sm font-medium tracking-wide text-gray-400 cursor-pointer hover:text-gray-700 ${
                            currentRoute === item &&
                            "text-gray-700 border-b-4 border-gray-700 bg-gradient-to-b from-white to-gray-100"
                        }`}
                        key={index}
                        onClick={() => setCurrentRoute(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    );
};
