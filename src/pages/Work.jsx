import { Asterisk } from "lucide-react";
import { Icon } from '@iconify/react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip"
import ShineBorder from "@/components/ui/shine-border";
import { Dock, DockIcon } from "@/components/ui/dock";
import Marquee from "@/components/ui/marquee";
import ReviewCard from "@/components/ReviewCard";
import { useMediaQuery } from "react-responsive";

const setOne = [ "Figma", "HTML", "CSS", "Node.js", "VS Code", "JavaScript" ];
const setTwo = [ "MySQL", "PHP", "React.js", "Git", "Tailwind CSS", "Bootstrap" ];

const setIconOne = {
    "Figma": "devicon:figma",
    "HTML": "vscode-icons:file-type-html",
    "CSS": "vscode-icons:file-type-css",
    "Node.js": "logos:nodejs-icon",
    "VS Code": "vscode-icons:file-type-vscode",
    "JavaScript": "vscode-icons:file-type-js-official"
};

const setIconTwo = {
    "MySQL": "logos:mysql",
    "PHP": "vscode-icons:file-type-php",
    "React.js": "vscode-icons:file-type-reactjs",
    "Git": "devicon:git",
    "Tailwind CSS": "logos:tailwindcss-icon",
    "Bootstrap": "devicon:bootstrap"
};

const Work = ({ theme }) => {
    const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

    return(
        <main className="grid place-items-center gap-y-5 md:gap-y-10 font-montserrat w-full h-full py-12 md:py-0 lg:p-20">
            <section className="space-y-4 w-full lg:w-[65rem]">
                <div className="flex items-center justify-center gap-x-2">
                    <span className="bg-[#006FFF] grid place-items-center rounded-full size-5">
                        <Asterisk className="size-5" />
                    </span>
                    <h1 className="text-[#006FFF] text-lg font-semibold">WHAT WILL YOU GET</h1>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold md:px-32">I resolve problems associated with creative procedures.</h2>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-5 md:gap-x-5 lg:gap-x-10 lg:w-[70rem]">
                <div className="w-[21.5rem] h-96 bg-gradient-to-br from-[#191919] to-[#7F7F7F] rounded-2xl md:col-span-2 lg:col-span-1">
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
                <div className="w-[21.5rem]  lg:w-[21.5rem] h-96 bg-gradient-to-br from-[#191919] to-[#7F7F7F] rounded-2xl">
                    <h1 className="text-3xl text-white font-bold px-10 pt-10">App</h1>
                    <p className="text-white px-10 mt-2">Designing mobile apps for iOS and Android users.</p>
                    <div className="w-full h-[65.6%] relative overflow-hidden">
                        <img src="/assets/asset3.png" alt="asset1" className="absolute bottom-0 right-0 object-cover rounded-br-2xl" />
                    </div>
                </div>
            </section>
            <section className="w-[21.5rem] md:w-[44.25rem] lg:w-[70rem]">
                <div className="w-full lg:h-52 bg-gradient-to-r from-[#191919] to-[#7F7F7F] rounded-2xl lg:flex justify-between px-10 py-8">
                    <div className="lg:w-3/12 text-center lg:text-start space-y-2 lg:space-y-3">
                        <h1 className="text-xl md:text-3xl text-white font-bold">Workflow integration</h1>
                        <p className="text-white">Seamlessly connect all your existing apps.</p>
                    </div>
                    <div className="flex md:flex-wrap gap-y-4 lg:w-4/5 lg:pl-5 mt-6 lg:mt-0">
                        <section className="w-full">
                            <Dock direction="middle" className="flex flex-col md:flex-row justify-between items-center gap-y-5 md:gap-y-0 lg:pr-10">
                            {setOne.map((firstSet) => (
                                <DockIcon key={firstSet}>
                                    <ShineBorder className="size-16" color={[ "#1F1F1F", "#1F1F1F", "#FFFFFF" ]}>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <Icon icon={setIconOne[firstSet]} className="size-9" />
                                                </TooltipTrigger>
                                                <TooltipContent>{firstSet}</TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </ShineBorder>
                                </DockIcon>
                            ))}
                            </Dock>
                        </section>
                        <section className="w-full">
                            <Dock direction="middle" className="flex flex-col md:flex-row justify-between items-center gap-y-5 md:gap-y-0 lg:pl-10">
                            {setTwo.map((secondSet) => (
                                <DockIcon key={secondSet}>
                                    <ShineBorder className="size-16" color={[ "#1F1F1F", "#1F1F1F", "#FFFFFF" ]}>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <Icon icon={setIconTwo[secondSet]} className="size-9" />
                                                </TooltipTrigger>
                                                <TooltipContent>{secondSet}</TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </ShineBorder>
                                </DockIcon>
                            ))}
                            </Dock> 
                        </section>
                    </div>
                </div>
            </section>
            <section className="w-[21.5rem] md:w-[44.25rem] lg:w-[70rem] h-[50rem] md:h-full bg-gradient-to-r from-[#191919] to-[#7F7F7F] rounded-2xl px-10 py-9 space-y-5">
                <div className="text-center lg:text-start space-y-2 lg:space-y-3">
                    <h1 className="text-xl md:text-3xl text-white font-semibold">Explore My Projects</h1>
                    <p>Here are some of my projects feel free to explore them!</p>
                </div>
                <Marquee pauseOnHover vertical={isMobile} className="[--duration:20s] h-[90%]">
                    <ReviewCard theme={theme} />
                </Marquee>
            </section>
        </main>
    )
}

export default Work;