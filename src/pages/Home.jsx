import { File } from 'lucide-react';
import { Icon } from '@iconify/react';
import Resume from '../assets/Reysil Clarion Resume.pdf'
import Indicator from '@/components/Indicator';
import { useMediaQuery } from "react-responsive";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
  

const Home = ({ theme }) => {
    const Mobile = useMediaQuery({ query: "(max-width: 767px)" });

    return(
        <main className="grid place-items-center font-montserrat">
            <div className="overflow-hidden relative w-full h-screen">
            <div className="absolute inset-0 -z-10 flex justify-center items-center">
                <svg
                    width="1117"
                    height="768"
                    viewBox="0 0 1117 768"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${theme === 'dark' ? 'opacity-5' : 'opacity-50'}`}
                >
                    <circle
                        cx="557.304"
                        cy="387.714"
                        r="147"
                        transform="rotate(-24.1614 557.304 387.714)"
                        stroke="#D9D9D9"
                    />
                    <circle
                        cx="557.965"
                        cy="387.965"
                        r="260.5"
                        transform="rotate(-24.1614 557.965 387.965)"
                        stroke="#D9D9D9"
                    />
                    <circle
                        cx="551.777"
                        cy="390.777"
                        r="420"
                        transform="rotate(-24.1614 551.777 390.777)"
                        stroke="#D9D9D9"
                    />
                    <circle
                        cx="558.318"
                        cy="388.319"
                        r="557.354"
                        transform="rotate(-24.1614 558.318 388.319)"
                        stroke="#D9D9D9"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_17_2"
                            x1="557.304"
                            y1="240.214"
                            x2="557.304"
                            y2="535.214"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.62022" stopColor="#7D7D7D" />
                            <stop offset="1" stopColor="#909090" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_17_2"
                            x1="557.965"
                            y1="126.965"
                            x2="557.965"
                            y2="648.965"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.62022" stopColor="#7D7D7D" />
                            <stop offset="1" stopColor="#909090" />
                        </linearGradient>
                        <linearGradient
                            id="paint2_linear_17_2"
                            x1="551.777"
                            y1="-29.7234"
                            x2="551.777"
                            y2="811.277"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.62022" stopColor="#7D7D7D" />
                            <stop offset="1" stopColor="#909090" />
                        </linearGradient>
                        <linearGradient
                            id="paint3_linear_17_2"
                            x1="558.318"
                            y1="-169.536"
                            x2="558.318"
                            y2="946.173"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.62022" stopColor="#7D7D7D" />
                            <stop offset="1" stopColor="#909090" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <section className="grid place-items-center h-screen w-full">
            <div className='w-full md:w-4/5 lg:w-3/5 grid gap-y-6 lg:py-36 px-1 md:px-0 '>
                <div className='flex justify-center w-full'>
                    <span className="whitespace-nowrap flex justify-center items-center gap-x-1 rounded-full bg-[#222222] px-4 py-1.5">
                        <Indicator />
                        <p className="text-white text-sm md:text-base">
                            Hello! I’m open for projects
                        </p>
                    </span>
                </div>
                <h1 className="font-extrabold text-2xl md:text-4xl lg:text-5xl text-center">
                    Experienced <span className="text-[#006FFF]">full-stack developer</span> shaping code into <span className="text-[#006FFF]">digital experience</span>.
                </h1>
                <p className="text-center text-sm md:text-base px-10 lg:px-24">Helping startups and brands to craft expressive and engaging solutions for their software needs.</p>
                <div className="grid md:flex justify-center gap-y-4 gap-x-6 mt-5">
                    <a 
                        href={Resume}
                        download
                        className={`flex items-center gap-x-2 border-[1.5px] rounded-full px-20 md:px-7 py-3 md:py-2 
                        ${theme === 'dark' ? 'bg-white text-black hover:bg-black hover:text-white border-white' : 'bg-black text-white hover:bg-white hover:text-black border-black'}`}
                    >
                        <File className="size-5 text-[#006FFF]" />
                        Resume
                    </a>
                    {Mobile ? (
                    <a 
                        href="mailto:reysilclarion17@gmail.com"
                        target="_blank" rel="noopener noreferrer" 
                        className={`flex items-center gap-x-2 border-[1.5px] rounded-full px-20 md:px-7 py-3 md:py-2 
                        ${theme === 'dark' ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'}`}
                    >
                        <Icon icon="carbon:circle-solid" className="size-5 text-[#006FFF]" />
                        Contacts
                    </a>    
                    ) : (
                    <AlertDialog>
                        <AlertDialogTrigger asChild theme={theme}>
                            <button 
                                className={`flex items-center gap-x-2 border-[1.5px] rounded-full px-20 md:px-7 py-3 md:py-2 
                                ${theme === 'dark' ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'}`}
                            >
                                <Icon icon="carbon:circle-solid" className="size-4 text-[#006FFF]" />
                                Contacts
                            </button>
                        </AlertDialogTrigger>
                        <AlertDialogContent theme={theme} className='w-[70rem]'>
                            <AlertDialogCancel className="flex justify-end w-full">
                                <Icon icon="mingcute:close-line" width="24" height="24" className='hover:text-red-600' />
                            </AlertDialogCancel>
                            <div className='flex justify-between px-4 py-2'>
                                <div className='w-1/2'>
                                    <h1 className='text-[#006FFF] text-3xl font-semibold'>Contact Me</h1>
                                    <h1 className='text-sm'>Feel Free to Get in Touch with Me for Any Inquiries or Collaborations.</h1>
                                    <div className='w-full h-[22rem] my-2'>
                                        <iframe 
                                            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3528.5005189477806!2d123.19878771677692!3d11.000153672786622!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1733375354417!5m2!1sen!2sph"
                                            className="rounded-md w-full h-full"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center gap-2'>
                                            <span>
                                                <Icon icon="mynaui:location" className='size-8 text-[#006FFF]' />
                                            </span>
                                            <span>
                                                <p className='text-[10px] text-slate-400'>Prk. Malinong, Brgy. Cadiz Viejo, <br />Cadiz City, Negros Occidental</p>
                                            </span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <span>
                                                <Icon icon="fontisto:email" className='size-8 text-[#006FFF]' />
                                            </span>
                                            <span>
                                                <p className='text-xs text-slate-400'>reysilclarion17@gmail.com</p>
                                            </span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <span>
                                                <Icon icon="iconoir:phone" className='size-8 text-[#006FFF]' />
                                            </span>
                                            <span>
                                                <p className='text-xs text-slate-400'>09060880048</p>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-1/2'>
                                    <div className='w-full h-full py-5 px-16'>
                                        <div className={`${theme === 'dark' ? 'bg-[#181a1a] shadow-white/10 border-white/20' : 'bg-[#f4f5f0] shadow-black/10 border-black/20'} w-full h-full border rounded-md shadow p-6`}>
                                            <h1 className='text-2xl mb-5 text-[#006FFF]'>Send Message</h1>
                                            <form action="" className='space-y-4'>
                                                <label className={`bg-transparent border rounded-md shadow flex items-center gap-1 pl-2 ${theme === 'dark' ? 'shadow-white/10 border-white/20' : 'shadow-black/10 border-black/20'}`}>
                                                    Name
                                                    <span className='text-red-600'>*</span>
                                                    <input type="text" className='bg-transparent w-full p-2 focus:outline-none' required />
                                                </label>
                                                <label className={`bg-transparent border rounded-md shadow flex items-center gap-1 pl-2 ${theme === 'dark' ? 'shadow-white/10 border-white/20' : 'shadow-black/10 border-black/20'}`}>
                                                    Email
                                                    <span className='text-red-600'>*</span>
                                                    <input type="email" className='bg-transparent w-full p-2 focus:outline-none' required />
                                                </label>
                                                <textarea 
                                                    name="" 
                                                    id="" 
                                                    rows="5"
                                                    placeholder='Type your message here...'
                                                    className={`w-full bg-transparent border rounded-md shadow overflow-y-auto resize-none p-2 focus:outline-none ${theme === 'dark' ? 'shadow-white/10 border-white/20' : 'shadow-black/10 border-black/20'}`} 
                                                ></textarea>
                                                <div className="flex justify-end">
                                                    <button className={`bg-transparent border rounded-md shadow flex items-center gap-x-1 py-2 px-4 group ${theme === 'dark' ? 'shadow-white/10 border-white/20' : 'shadow-black/10 border-black/20'}`}>
                                                        <Icon icon="mynaui:send-solid" className="size-5 group-hover:rotate-45 transition-transform duration-300" />
                                                        <span>Send Message</span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AlertDialogContent>
                    </AlertDialog>
                    )}
                </div>
            </div>
            </section>

            </div>
        </main>
    )
}

export default Home;