import { Asterisk } from "lucide-react";
import { Icon } from '@iconify/react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip"
import ShineBorder from "@/components/ui/shine-border";
import { Dock, DockIcon } from "@/components/ui/dock";
import Marquee from "@/components/ui/marquee";
import ReviewCard from "@/components/ReviewCard";

const Work = ({ theme }) => {
    return(
        <main className="grid place-items-center gap-y-10 font-montserrat w-full h-full px-20 py-20">
            <section className="space-y-4 w-[65rem]">
                <div className="flex items-center justify-center gap-x-2">
                    <span className="bg-[#006FFF] grid place-items-center rounded-full size-5">
                        <Asterisk className="size-5" />
                    </span>
                    <h1 className="text-[#006FFF] text-lg font-semibold">WHAT WILL YOU GET</h1>
                </div>
                <h2 className="text-4xl text-center font-bold px-32">I resolve problems associated with creative procedures.</h2>
            </section>
            <section className="grid grid-cols-3 justify-items-center gap-x-10 w-[70rem]">
                <div className="w-[21.5rem] h-96 bg-gradient-to-br from-[#191919] to-[#7F7F7F] rounded-2xl">
                    <h1 className="text-3xl text-white font-bold px-10 pt-10">Design</h1>
                    <p className="text-white px-10 mt-2">Building robust and flexible design systems for easy scalability.</p>
                    <div className="w-full h-[59%] relative overflow-hidden">
                        <img src="/assets/asset1.png" alt="asset1" className="absolute bottom-0 right-0 object-cover" />
                    </div>
                </div>
                <div className="w-[21.5rem] h-96 bg-gradient-to-br from-[#191919] to-[#7F7F7F] rounded-2xl">
                    <h1 className="text-3xl text-white font-bold px-10 pt-10">Website</h1>
                    <p className="text-white px-10 mt-2">Responsive websites and dashboards for your business.</p>
                    <div className="w-full h-[65.6%] relative overflow-hidden">
                        <img src="/assets/asset2.png" alt="asset1" className="absolute bottom-0 right-0 object-cover rounded-br-2xl" />
                    </div>
                </div>
                <div className="w-[21.5rem] h-96 bg-gradient-to-br from-[#191919] to-[#7F7F7F] rounded-2xl">
                    <h1 className="text-3xl text-white font-bold px-10 pt-10">App</h1>
                    <p className="text-white px-10 mt-2">Designing mobile apps for iOS and Android users.</p>
                    <div className="w-full h-[65.6%] relative overflow-hidden">
                        <img src="/assets/asset3.png" alt="asset1" className="absolute bottom-0 right-0 object-cover rounded-br-2xl" />
                    </div>
                </div>
            </section>
            <section className="w-[70rem]">
                <div className="w-full h-52 bg-gradient-to-r from-[#191919] to-[#7F7F7F] rounded-2xl flex justify-between px-10 py-8">
                    <div className="w-3/12 space-y-3">
                        <h1 className="text-3xl text-white font-bold">Workflow integration</h1>
                        <p className="text-white">Seamlessly connect all your existing apps.</p>
                    </div>
                    <div className="flex flex-wrap gap-y-4 w-4/5 pl-5">
                        <section className="w-full">
                        <Dock direction="middle" className="justify-between items-center pr-10">
                            <DockIcon className="">
                            <ShineBorder className="size-16" color={[ "#1F1F1F", "#1F1F1F", "#FFFFFF" ]}>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Icon icon="devicon:figma" className="size-9" />
                                        </TooltipTrigger>
                                        <TooltipContent>Figma</TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </ShineBorder>
                            </DockIcon>
                            <DockIcon> 
                            <ShineBorder className="size-16" color={[ "#1F1F1F", "#1F1F1F", "#FFFFFF" ]}>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Icon icon="vscode-icons:file-type-html" className="size-9" />
                                        </TooltipTrigger>
                                        <TooltipContent>HTML</TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </ShineBorder>
                            </DockIcon>
                            <DockIcon> 
                            <ShineBorder className="size-16" color={[ "#1F1F1F", "#1F1F1F", "#FFFFFF" ]}>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Icon icon="vscode-icons:file-type-css" className="size-9" />
                                        </TooltipTrigger>
                                        <TooltipContent>CSS</TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </ShineBorder>
                            </DockIcon>
                            <DockIcon>
                            <ShineBorder className="size-16" color={[ "#1F1F1F", "#1F1F1F", "#FFFFFF" ]}>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Icon icon="logos:nodejs-icon" className="size-9" />
                                        </TooltipTrigger>
                                        <TooltipContent>Node.js</TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </ShineBorder>
                            </DockIcon>
                            <DockIcon>
                            <ShineBorder className="size-16" color={[ "#1F1F1F", "#1F1F1F", "#FFFFFF" ]}>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Icon icon="vscode-icons:file-type-vscode" className="size-9" />
                                        </TooltipTrigger>
                                        <TooltipContent>VS Code</TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </ShineBorder>
                            </DockIcon>
                            <DockIcon>
                            <ShineBorder className="size-16" color={[ "#1F1F1F", "#1F1F1F", "#FFFFFF" ]}>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Icon icon="vscode-icons:file-type-js-official" className="size-9" />
                                        </TooltipTrigger>
                                        <TooltipContent>JavaScript</TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </ShineBorder>
                            </DockIcon>
                        </Dock>
                        </section>
                        <section className="w-full">
                        <Dock direction="middle" className="justify-between items-center pl-10">
                            <DockIcon>
                            <ShineBorder className="size-16" color={[ "#1F1F1F", "#1F1F1F", "#FFFFFF" ]}>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Icon icon="logos:mysql" className="size-9" />
                                        </TooltipTrigger>
                                        <TooltipContent>MySQL</TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </ShineBorder>
                            </DockIcon>
                            <DockIcon>
                            <ShineBorder className="size-16" color={[ "#1F1F1F", "#1F1F1F", "#FFFFFF" ]}>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Icon icon="vscode-icons:file-type-php" className="size-9" />
                                        </TooltipTrigger>
                                        <TooltipContent>PHP</TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </ShineBorder>
                            </DockIcon>
                            <DockIcon>
                            <ShineBorder className="size-16" color={[ "#1F1F1F", "#1F1F1F", "#FFFFFF" ]}>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Icon icon="vscode-icons:file-type-reactjs" className="size-9" />
                                        </TooltipTrigger>
                                        <TooltipContent>React.js</TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </ShineBorder>
                            </DockIcon>
                            <DockIcon>
                            <ShineBorder className="size-16" color={[ "#1F1F1F", "#1F1F1F", "#FFFFFF" ]}>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Icon icon="devicon:git" className="size-9" />
                                        </TooltipTrigger>
                                        <TooltipContent>Git</TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </ShineBorder>
                            </DockIcon>
                            <DockIcon>
                            <ShineBorder className="size-16" color={[ "#1F1F1F", "#1F1F1F", "#FFFFFF" ]}>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Icon icon="logos:tailwindcss-icon" className="size-9" />
                                        </TooltipTrigger>
                                        <TooltipContent>Tailwind CSS</TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </ShineBorder>
                            </DockIcon>
                            <DockIcon>
                            <ShineBorder className="size-16" color={[ "#1F1F1F", "#1F1F1F", "#FFFFFF" ]}>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Icon icon="devicon:bootstrap" className="size-9" />
                                        </TooltipTrigger>
                                        <TooltipContent>Bootstrap</TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </ShineBorder>
                            </DockIcon>
                        </Dock> 
                        </section>
                    </div>
                </div>
            </section>
            <section className="w-[70rem] h-full bg-gradient-to-r from-[#191919] to-[#7F7F7F] rounded-2xl px-10 py-9 space-y-5">
                <h1 className="text-3xl text-white font-semibold">Explore My Projects</h1>
                <Marquee pauseOnHover className="[--duration:20s]">
                    <ReviewCard theme={theme} />
                </Marquee>
            </section>
        </main>
    )
}

export default Work;