import React from 'react';
import Dropdown, { LanguageOption } from '../../components/buttons/dropdown/DropDownButton';
import USFlag from "/src/assets/icons/flags/twemoji--flag-united-states.svg?react";
import RUFlag from "/src/assets/icons/flags/twemoji--flag-russia.svg?react";
import KZFlag from "/src/assets/icons/flags/twemoji--flag-kazakhstan.svg?react";
import IconX from "/src/assets/icons/brandicons/ri--twitter-x-fill.svg?react";
import IconWP from "/src/assets/icons/brandicons/mdi--whatsapp.svg?react";
import IconYT from "/src/assets/icons/brandicons/cib--youtube.svg?react";
import IconIG from "/src/assets/icons/brandicons/cib--instagram.svg?react";
import IconTT from "/src/assets/icons/brandicons/cib--tiktok.svg?react";
import IconDis from "/src/assets/icons/brandicons/cib--discord.svg?react";

const Footer: React.FC = () => {
    const languages: LanguageOption[] = [
        { label: "English", flag: <USFlag /> },
        { label: "Русский", flag: <RUFlag /> },
        { label: "Qazaqşa", flag: <KZFlag /> },
    ];

    const [, setSelectedLanguage] = React.useState(null as LanguageOption | null);
    const handleLanguageChange = (language: LanguageOption) =>
        setSelectedLanguage(language);

    return (

        <footer className="w-screen h-100 bg-grayish-red">
            <div className="flex">
                <div className="grid grid-cols-3 gap-y-6 text-white mt-14 ml-23">
                    <ul className="w-19 h-38 grid gap-x-6">
                        <li className="font-bold ">Link 0</li>
                        <li>Link 1</li>
                        <li>Link 2</li>
                        <li>Link 3</li>
                    </ul>
                    <ul className="w-19 h-38 grid gap-x-6">
                        <li className="font-bold ">Link 0</li>
                        <li>Link 1</li>
                        <li>Link 2</li>
                        <li>Link 3</li>
                    </ul>
                    <ul className="w-19 h-38 grid gap-x-6">
                        <li className="font-bold ">Link 0</li>
                        <li>Link 1</li>
                        <li>Link 2</li>
                        <li>Link 3</li>
                    </ul>
                </div>
                <Dropdown
                    options={languages}
                    defaultOption={languages[0]}
                    onSelect={handleLanguageChange}
                />
            </div>
            <hr className="w-1/2 h-0.5 bg-white flex items-center justify-center mx-auto my-20" />
            <div className="flex justify-between mx-16 my-8">
                <span className="text-white">HealMe © 2025 All rights reserved</span>
                <span className="flex items-center space-x-4">
                    <IconX className="w-8 h-8 fill-rose-taupe hover:fill-[#000000]" />
                    <IconWP className="w-8 h-8 fill-rose-taupe hover:fill-[#075E54]" />
                    <IconYT className="w-8 h-8 fill-rose-taupe hover:fill-[#FF0000]" />
                    <IconIG className="w-8 h-8 fill-rose-taupe hover:fill-[#E1306C]" />
                    <IconTT className="w-8 h-8 fill-rose-taupe hover:fill-[#000000]" />
                    <IconDis className="w-8 h-8 fill-rose-taupe hover:fill-[#5865F2]" />
                </span>
            </div>

        </footer>
    );
};

export default Footer;

