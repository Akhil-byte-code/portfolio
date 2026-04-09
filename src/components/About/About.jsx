import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from 'react-parallax-tilt'
import profileImage from '../../assets/profile2.jpeg'

const About = () => {
    return (
        <section
            id="about"
            className="py-4 px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
        >
            <div className="flex flex-col-reverse md:flex-row justify-between items-center">

                {/* left side */}
                <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">

                    {/* greetings */}
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
                        Hi, I am
                    </h1>

                    {/* name */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                        Akhil Dixit
                    </h2>

                    {/* typing effect */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
                        <span className="text-white">I am a </span>

                        <span className="text-[#8245ec]">
                            <Typewriter
                                words={[
                                    "Fullstack Developer",
                                    "App Developer",
                                    "UI/UX Designer",
                                    "Coder",
                                    "AI/ML Engineer",
                                ]}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </span>
                    </h3>

                    {/* about paragraph */}
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                        I am a full-stack developer skilled in building scalable and responsive web applications.
                        Experienced in both front-end and back-end development, I specialize in the MERN stack
                        and modern technologies to create seamless user experiences and efficient solutions.
                        I also have an interest in AI/ML engineering and continuously work on improving my
                        skills through real-world projects and learning.
                    </p>

                    {/* resume Button  */}
                    <a href="https://drive.google.com/file/d/1iMf-Lxe9X3xcWxVIpsfyt4prZyPIKve8/view" target="_blank" rel="noopener noreferrer" className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
                        style={{
                            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                        }}>
                        DOWNLOAD RESUME
                    </a>
                </div>
                {/* RIGHT side  */}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <Tilt
                        className="w-48 h-48 sm:w-64 sm:h-64 md:w-120 md:h-120 border-4 border-purple-700 rounded-full overflow-hidden"
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={20}
                        perspective={1000}
                        scale={1.05}
                        transitionSpeed={1000}
                        gyroscope={true}
                    >
                        <img
                            src={profileImage}
                            alt="Akhil Dixit"
                            className="w-full h-full rounded-full object-cover"
                        />
                    </Tilt>
                </div>
            </div>
        </section>
    );
};

export default About;