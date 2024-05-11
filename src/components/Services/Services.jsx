import React from 'react';
import { FaCameraRetro } from 'react-icons/fa';
import { GiNotebook } from 'react-icons/gi';
import { SlNote } from 'react-icons/sl';


const skillsData = [
    {
        name: "Best Price",
        icon: (
            <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
        ),
        link: "#",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, magnam?",
        aosDisplay: "0",
    },
    {
        name: "Fast and Safe",
        icon: (
            <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
        ),
        link: "#",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, magnam?",
        aosDisplay: "500",
    },
    {
        name: "Experience Drivers",
        icon: (
            <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
        ),
        link: "#",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, magnam?",
        aosDisplay: "1000",
    },
]

const Services = () => {
    return (
        <div className="py-14 dark:bg-black dark:text-white sm:min-h[600px] sm:grid sm:place-items-center">
            <div className="container">
                <div className="pb-12">
                    <h1 className="text-3xl font-semibold text-center font-serif sm:text-4xl">Why Choose Us</h1>
                </div>
                <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {
                        skillsData.map((skill) => (
                            <div key={skill.name} data-aos="fade up" data-aos-delay={skill.aosDelay}
                            className="card text-center"
                            >
                                <div>{skill.icon}</div>
                                <h1>{skill.name}</h1>
                                <p>{skill.description}</p>
                                <a href={skill.link}>Learn More</a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Services;
