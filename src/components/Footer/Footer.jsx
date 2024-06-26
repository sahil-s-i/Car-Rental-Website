import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';

const FooterLinks = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "About Us",
        link: "/about",
    },
    {
        title: "Services",
        link: "/services",
    },
    {
        title: "Contact Us",
        link: "/contact",
    },
    {
        title: "FAQs",
        link: "/faqs",
    },
    {
        title: "Terms & Conditions",
        link: "/terms",
    },
    {
        title: "Privacy Policy",
        link: "/privacy",
    },
    {
        title: "Blog",
        link: "/blog",
    },
    {
        title: "Careers",
        link: "/careers",
    },
];

const Footer = () => {
    return (
        <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-3 py-5">
                    {/* company details  */}
                    <div className="py-8 px-4">
                        <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 gap-3 flex items-center">RideNow</h1>
                        <p>We offer a wide range of vehicles to suit all your needs, providing reliable and affordable rental services with exceptional customer care.</p>
                        <br />
                        <div className="flex items-center gap-3">
                            <FaLocationArrow />
                            <p>Gadag, Karnataka</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaMobileAlt />
                            <p>+91 6362774739</p>
                        </div>
                        {/* Social Handles  */}
                        <div className="flex items-center gap-3 mt-6">
                            <a href="https://instagram.com">
                                <FaInstagram className="text-3xl hover:text-primary duration-300" />
                            </a>
                            <a href="https://facebook.com">
                                <FaFacebook className="text-3xl hover:text-primary duration-300" />
                            </a>
                            <a href="https://linkedin.com">
                                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
                            </a>
                        </div>
                    </div>
                    {/* NavLinks  */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                        {/* first col  */}
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">Quick Links</h1>
                                <ul className="flex flex-col gap-3">
                                    {FooterLinks.slice(0, 3).map((data) => (
                                        <li key={data.title} className="cursor-pointer hover:text-primary duration-300">
                                            <span className="mr-2">&#11162;</span>
                                            <a href={data.link}>{data.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {/* Second col  */}
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">Resources</h1>
                                <ul className="flex flex-col gap-3">
                                    {FooterLinks.slice(3, 6).map((data) => (
                                        <li key={data.title} className="cursor-pointer hover:text-primary duration-300">
                                            <span className="mr-2">&#11162;</span>
                                            <a href={data.link}>{data.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {/* Third col  */}
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">Company</h1>
                                <ul className="flex flex-col gap-3">
                                    {FooterLinks.slice(6).map((data) => (
                                        <li key={data.title} className="cursor-pointer hover:text-primary duration-300">
                                            <span className="mr-2">&#11162;</span>
                                            <a href={data.link}>{data.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
