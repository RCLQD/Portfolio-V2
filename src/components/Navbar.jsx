import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

const sections = ["Home", "About", "Work", "Experience"];

const sectionIcons = {
    Home: "solar:home-2-linear",
    About: "fluent:person-32-regular",
    Work: "fluent:folder-person-32-regular",
    Experience: "fluent:person-accounts-20-regular"
};

const Navbar = ({ onScrollTo, theme, toggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleScroll = () => {
        setScrolled(window.scrollY > 0);
    };

    const updateScreenSize = () => {
        setIsMobile(window.innerWidth <= 767);
    };

    const toggleMenu = () => {
        setIsDrawerOpen((prev) => !prev);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        updateScreenSize();
        window.addEventListener('resize', updateScreenSize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateScreenSize);
        };
    }, []);

    const handleSectionClick = (section) => {
        onScrollTo(section);
        setIsDrawerOpen(false);
    };

    return (
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <nav 
                className={`flex justify-between fixed top-0 w-full z-50 px-5 md:px-12 py-3 border-b border-opacity-20
                ${scrolled ? (theme === 'dark' ? 'bg-black border-white' : 'bg-white border-black') : 'bg-transparent border-transparent'}`}
            >
                {isMobile && (
                    <DrawerTrigger>
                        <button className='grid place-items-center' onClick={toggleMenu}>
                            <Icon icon="ci:menu-duo-lg" className="size-10" />
                        </button>
                    </DrawerTrigger>
                )}
                <section className='hidden md:block'>
                    {theme === 'light' ? (
                        <img src="/logos/Logo1.png" alt="Logo" className="size-10 cursor-pointer" onClick={() => onScrollTo("Home")} />
                    ) : (
                        <img src="/logos/Logo2.png" alt="Logo" className="size-10 cursor-pointer" onClick={() => onScrollTo("Home")} />
                    )}
                </section>
                {isMobile ? (
                    <DrawerContent className="h-1/2" theme={theme}>
                        <section className="h-full grid place-items-center font-montserrat">
                            <div className="h-1/2 grid place-items-center grid-cols-1 gap-y-10 -mt-10">
                            {sections.map((section) => (
                                <button
                                    key={section}
                                    onClick={() => handleSectionClick(section)}
                                    className="flex items-center gap-x-2 h-full text-sm"
                                >
                                     <Icon icon={sectionIcons[section]} className="size-6" />
                                    {section.toUpperCase()}
                                </button>
                            ))}
                            </div>
                        </section>
                    </DrawerContent>
                ) : (
                    <section className="hidden md:flex items-center gap-x-7 font-montserrat">
                        {sections.map((section) => (
                            <button
                                key={section}
                                onClick={() => handleSectionClick(section)}
                                className="h-full text-sm border-b-2 border-transparent hover:border-blue-600"
                            >
                                {section.toUpperCase()}
                            </button>
                        ))}
                    </section>
                )}
                <section className="hidden md:block">
                    <button 
                        onClick={toggleTheme} 
                        className={`p-2 rounded-md hover:bg-opacity-20 ${theme === 'dark' ? 'hover:bg-white' : 'hover:bg-[#ccd2d8]'}`}
                    >
                        {theme === 'light' ? (
                            <Icon icon="bi:cloud-sun" className='size-6' />
                        ) : (
                            <Icon icon="bi:cloud-moon" className='size-6' />
                        )}
                    </button>
                </section>
                {isMobile && (
                <div className='flex flex-row-reverse'>
                <section className='flex items-center'>
                    {theme === 'light' ? (
                        <img src="/logos/Logo1.png" alt="Logo" className="size-10 cursor-pointer" onClick={() => onScrollTo("Home")} />
                    ) : (
                        <img src="/logos/Logo2.png" alt="Logo" className="size-10 cursor-pointer" onClick={() => onScrollTo("Home")} />
                    )}
                </section>
                <section className="flex items-center">
                    <button 
                        onClick={toggleTheme} 
                        className={`p-2 rounded-md hover:bg-opacity-20 ${theme === 'dark' ? 'hover:bg-white' : 'hover:bg-[#ccd2d8]'}`}
                    >
                        {theme === 'light' ? (
                            <Icon icon="bi:cloud-sun" className='size-6' />
                        ) : (
                            <Icon icon="bi:cloud-moon" className='size-6' />
                        )}
                    </button>
                </section>
                </div>
                )}
            </nav>
        </Drawer>
    );
};

export default Navbar;