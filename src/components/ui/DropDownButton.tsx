import React, { useRef } from 'react';
import IconChevronDown from '/src/assets/icons/chevron-down.svg?react';
import IconChevronUp from '/src/assets/icons/chevron-up.svg?react';

interface DropdownProps {
    onSelect: (option: LanguageOption) => void;
    defaultOption: LanguageOption;
    options: LanguageOption[];
};

export type LanguageOption = {
    flag: React.ReactNode;
    label: string;
};


const Dropdown: React.FC<DropdownProps> = ({ options, defaultOption, onSelect }) => {
    const [selected, setSelected] = React.useState<LanguageOption | null>(defaultOption); 
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [active, setActive] = React.useState<boolean>(false);
    const ref = useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && ref.current.contains(event.target as Node)) {
                return;
            }
            setIsOpen(false);
            setActive(false);
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleChangeActive = () => {
        setActive((previousChevron) => !previousChevron);
    };

    const handleSelect = (option: LanguageOption) => {
        setSelected(option); 
        onSelect(option);
        setIsOpen(false); 
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setActive(!active);
    };


    return (
        <div ref={ref}>
            <div className="w-36 mt-14">
                <div>
                    <button
                        onClick={toggleDropdown}
                        className="w-36 h-6 bg-white-smoke px-3 flex items-center justify-between rounded-xl cursor-pointer shadow-md border border-rose-taupe"
                    >
                        <div className="flex justify-between w-29">
                            {selected ? (
                                <div className="flex gap-x-2">
                                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                                        {selected.flag}
                                    </div>
                                    <span className="font-normal block truncate">{selected.label}</span>
                                </div>
                            ) : (
                                <span className="font-normal block truncate text-gray-400">Select Language</span>
                            )}
                            <div>
                                {active ? (
                                    <IconChevronUp
                                        className="fill-rose-taupe w-6 h-6"
                                        onClick={() => handleChangeActive()}
                                    />
                                ) : (
                                    <IconChevronDown
                                        className="fill-rose-taupe w-6 h-6"
                                        onClick={() => handleChangeActive()}
                                    />
                                )}
                            </div>
                        </div>
                    </button>
                    {isOpen && (
                        <ul className="w-36 absolute bg-white-smoke shadow-lg mt-2 z-10">
                            {options.map((option) => (
                                <li
                                    key={option.label}
                                    className={`w-full h-6 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-200 ${
                                        selected?.label === option.label ? 'border-l-2 border-rose-taupe' : ''
                                    }`}
                                    onClick={() => handleSelect(option)}
                                >
                                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                                        {option.flag}
                                    </div>
                                    <span className="text-md truncate">{option.label}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
