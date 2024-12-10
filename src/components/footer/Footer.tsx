import Dropdown, { LanguageOption } from '../buttons/dropdown/DropDownButton';
import USFlag from "/src/assets/icons/flags/twemoji--flag-united-states.svg?react";
import RUFlag from "/src/assets/icons/flags/twemoji--flag-russia.svg?react";
import KZFlag from "/src/assets/icons/flags/twemoji--flag-kazakhstan.svg?react";
import React from 'react';

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
            <hr className="w-1/2 h-0.5 bg-white flex items-center justify-center mx-auto my-2" />
            <div>
                <span>HealMe © 2025 All rights reserved</span>
                <span></span>
                </div>
        </footer>
    );
};

export default Footer;

