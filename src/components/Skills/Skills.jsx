import React from "react";
import { SkillsInfo } from "../../constant";
import Tilt from "react-parallax-tilt";

const Skills = () => {
    return (
        <section
            id="skills"
            className="py-12 pb-12 md:py-24 md:pb-24 px-4 md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom"
        >
            {/* section title */}
            <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
                <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold">
                    A collection of my technical skills and expertise, honed through
                    various projects and experiences
                </p>
            </div>

            {/* skills categories */}
            <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
                {SkillsInfo.map((category) => (
                    <div
                        key={category.title}
                        className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
            shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] overflow-hidden"
                    >
                        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
                            {category.title}
                        </h3>

                        <Tilt
                            tiltMaxAngleX={20}
                            tiltMaxAngleY={20}
                            perspective={1000}
                            scale={1.05}
                            transitionSpeed={1000}
                            gyroscope={true}
                        >
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                                {category.skills.map((skill) => (
                                    <a
                                        key={skill.name}
                                        href={skill.url || "#"}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center transition duration-300 hover:border-[#8245ec] hover:shadow-[0_0_15px_rgba(130,69,236,0.6)] hover:scale-110 cursor-pointer"
                                    >
                                        {skill.logo ? (
                                            <>
                                                <img
                                                    src={skill.logo}
                                                    alt={`${skill.name} logo`}
                                                    className="w-6 h-6 sm:w-8 sm:h-8 transition duration-300"
                                                />
                                                <span className="text-xs sm:text-sm text-gray-300 transition duration-300 hover:text-[#8245ec]">
                                                    {skill.name}
                                                </span>
                                            </>
                                        ) : (
                                            <span className="text-xs sm:text-sm text-gray-300 transition duration-300 hover:text-[#8245ec]">
                                                {skill.name}
                                            </span>
                                        )}
                                    </a>
                                ))}
                            </div>
                        </Tilt>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;