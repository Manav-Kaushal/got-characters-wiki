import React from "react";
import Image from "next/image";

export const Logo: React.FC = () => {
    return (
        <Image
            data-test="icon"
            src="/icons/Game_of_Thrones_logo.svg"
            alt="GOT Logo"
            width="200"
            height="65"
        />
    );
};
