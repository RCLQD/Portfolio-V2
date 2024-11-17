import { Asterisk } from "lucide-react";
import { Icon } from '@iconify/react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip"
import ShineBorder from "@/components/ui/shine-border";
import projectFiles from '../components/projects.json'
// import { useTheme } from "next-themes";
  

const Work = ({ theme }) => {
    return(
        <main className="grid place-items-center gap-y-10 font-montserrat w-full h-full px-20 py-20">
            <section className="space-y-4 w-[70rem]">
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
                <div className="w-full h-52 bg-gradient-to-r from-[#191919] to-[#7F7F7F] rounded-2xl flex justify-between px-10 py-9">
                    <div className="w-3/12 space-y-3">
                        <h1 className="text-3xl text-white font-bold">Workflow integration</h1>
                        <p className="text-white">Seamlessly connect all your existing apps.</p>
                    </div>
                    <div className="flex flex-wrap gap-y-4 w-4/5 pl-5">
                        <section className="w-full flex justify-between items-center pr-10">
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
                        </section>
                        <section className="w-full flex justify-between items-center ml-10 overflow-hidden">
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
                        </section>
                    </div>
                </div>
            </section>
            <section className="w-[70rem] h-full bg-gradient-to-r from-[#191919] to-[#7F7F7F] rounded-2xl flex justify-between p-10">
                {projectFiles.Projects.map((project) => (
                    <div key={project.P_id} className="w-80 h-96 hover:scale-[1.02] relative group">
                        <img
                            src={project.img}
                            alt="project image"
                            className="w-full h-full rounded-xl object-cover absolute transition-opacity group-hover:opacity-50"
                        />
                        
                        <div className="relative p-10 z-40">
                            <h1
                            className={`border rounded-md inline-block py-1 px-4 font-medium ${project.status === 'Live' ? 'text-green-500 border-green-500' : 'text-red-500 border-red-500'}`}
                            >
                            {project.status}
                            </h1>
                            <h2 className="text-2xl text-[#006FFF]">{project.project_name}</h2>
                        </div>
                        
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-5 transform opacity-0 z-30 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="text-white text-sm">{project.description}</p>
                            <div className="flex gap-x-4 mt-4">
                            {project.link && (
                                <a href={project.link} target="_blank" className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} text-sm rounded-md py-1 px-2 flex items-center justify-center gap-x-1 duration-75 hover:translate-y-0.5`}>
                                    <Icon icon="mdi:web" className="size-5" />
                                    Website
                                </a>
                            )}
                            {project.github && (
                                <a href={project.github} target="_blank" className={`${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'} text-sm rounded-md py-1 px-2 flex items-center justify-center gap-x-1 duration-75 hover:translate-y-0.5`}>
                                    <Icon icon="formkit:github" className="size-5" />
                                    GitHub
                                </a>
                            )}
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    )
}

export default Work;