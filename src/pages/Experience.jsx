const Experience = ({ theme }) => {
    return(
        <main className="flex items-center font-montserrat w-full h-screen">
            <div className="space-y-10 px-10">
                <section className="space-y-5">
                    <h1 className="text-5xl font-extrabold text-[#006FFF]">Exp<span className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>rience</span></h1>
                    <div className="flex justify-between gap-x-20">
                        <div>
                            <p>January - June, 2024</p>
                            <a href="https://www.philkoei.com.ph/" target="_blank" className="hover:text-[#006FFF]">
                                <h1>Philkoei International Inc.</h1>
                            </a>
                            <p>Web Developer/IT Technical Support Intern</p>
                        </div>
                        <div>
                            <p>July - August, 2023</p>
                            <a href="https://pixel8websolutions.com/" target="_blank" className="hover:text-[#006FFF]">
                                <h1>Pixel8 Web Solutions & Consultancy Inc.</h1>
                            </a>
                            <p>System Analyst Intern</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Experience;