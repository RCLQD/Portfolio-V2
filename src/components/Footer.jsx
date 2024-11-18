import { Icon } from '@iconify/react';
import { Dock, DockIcon } from "@/components/ui/dock";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip"

const Footer = ({ theme }) => {
    return(
        <footer className={`${theme === 'dark' ? 'border-t-white' : 'border-t-black'} border-t border-opacity-20 font-montserrat flex justify-between items-center p-4 mt-12`}>
        <aside className="flex gap-x-1 items-center">
            {theme === 'light' ? (
                <img src="/logos/Logo1.png" alt="Logo" className="size-12" />
            ) : (
                <img src="/logos/Logo2.png" alt="Logo" className="size-12" />
            )}
            <p>Reysil M. Clarion</p>
        </aside>
        <nav className="flex items-center">
            <Dock direction="middle" className="h-[55px] gap-x-1">
                <DockIcon>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <a href="https://www.linkedin.com/in/reysilclarion/" target="_blank">
                                    <Icon icon="circum:linkedin" className="size-10" />
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>LinkedIn</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </DockIcon>
                <DockIcon>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <a href="https://github.com/RCLQD" target="_blank">
                                    <Icon icon="akar-icons:github-outline-fill" className="size-9" />
                                </a>
                                </TooltipTrigger>
                            <TooltipContent>GitHub</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </DockIcon>
                <DockIcon>
                <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <a href="https://www.facebook.com/reysil.clarion.1" target="_blank">
                                    <Icon icon="qlementine-icons:facebook-16" className="size-9" />
                                </a>   
                            </TooltipTrigger>
                            <TooltipContent>Facebook</TooltipContent>
                        </Tooltip>
                    </TooltipProvider> 
                </DockIcon>
            </Dock>
        </nav>
        </footer>
    )
}

export default Footer;