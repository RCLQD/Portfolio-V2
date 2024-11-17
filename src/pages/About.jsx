const About = ({ theme }) => {
    return(
        <main className="grid place-items-center font-montserrat w-full h-screen">
            <div className="space-y-10 px-10">
                <section className="space-y-5">
                    <h1 className="text-5xl font-extrabold">About <span className="text-[#006FFF]">Me</span></h1>
                    <p className="text-justify">
                        Hello, I’m Reysil M. Clarion, a recent graduate with a Bachelor of Engineering Technology, majoring in Computer Engineering Technology. I’m passionate about technology, with a strong focus on web development, and I constantly seek opportunities to innovate and enhance digital experiences. I have hands-on experience in both frontend and backend development, and I enjoy tackling complex challenges by building efficient, user-centric applications. I’m always eager to learn new technologies and contribute to impactful projects that make a difference in the digital world. My goal is to continually grow as a developer while creating meaningful solutions that improve user experiences.
                    </p>
                </section>
                <section className="space-y-5">
                    <h1 className="text-5xl font-extrabold text-[#006FFF]">Edu<span className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>cation</span></h1>
                    <div>
                        <p>2020-2024</p>
                        <p>Technological University of the Philippines Visayas</p>
                        <p>Bachelor of Engineering Technology Major in Computer Engineering Technology</p>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default About