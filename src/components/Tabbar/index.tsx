import React, { useCallback } from "react";
import { AiFillHome, AiFillCompass } from "react-icons/ai";
import { BsFillBagFill, BsFillPersonFill } from "react-icons/bs";
import { CgInbox } from "react-icons/cg";

interface TabbarType {
    navigationData: string[];
    currentRoute: string;
    setCurrentRoute: (value: string) => void;
}

const Tabbar: React.FC<TabbarType> = ({
    navigationData,
    currentRoute,
    setCurrentRoute,
}) => {
    const getTabIcon = useCallback((item) => {
        switch (item) {
            case "Home":
                return <AiFillHome />;
            case "Discover":
                return <AiFillCompass />;
            case "Store":
                return <BsFillBagFill />;
            case "Inbox":
                return <CgInbox />;
            case "Profile":
                return <BsFillPersonFill />;
        }
    }, []);

    return (
        <nav className="fixed bottom-0 flex flex-row items-center justify-around visible w-full h-20 px-8 text-2xl bg-white md:hidden md:invisible rounded-t-3xl">
            {navigationData.map((item, index) => (
                <span
                    key={index}
                    className={`flex items-center justify-center w-20 h-full text-gray-400 cursor-pointer hover:text-gray-700 ${
                        currentRoute === item &&
                        "text-gray-700 border-t-4 border-gray-700 bg-gradient-to-t from-white to-gray-100"
                    }`}
                    onClick={() => setCurrentRoute(item)}
                >
                    <span className="-mb-1">{getTabIcon(item)}</span>
                </span>
            ))}
        </nav>
    );
};

export default Tabbar;
