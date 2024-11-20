import { File } from 'lucide-react';
import Resume from '../assets/Reysil Clarion Resume.pdf'
import Indicator from '@/components/Indicator';

const Home = ({ theme }) => {
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
                    <a 
                        href="mailto:reysilclarion17@gmail.com"
                        target="_blank" rel="noopener noreferrer" 
                        className={`flex items-center gap-x-2 border-[1.5px] rounded-full px-20 md:px-7 py-3 md:py-2 
                        ${theme === 'dark' ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'}`}
                    >
                        <span className="size-3 bg-[#006FFF] rounded-full"></span>
                        Contacts
                    </a>
                </div>
            </div>
            </section>

            </div>
        </main>
    )
}

export default Home;