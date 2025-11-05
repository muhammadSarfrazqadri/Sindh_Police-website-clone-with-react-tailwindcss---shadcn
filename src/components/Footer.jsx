import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, ArrowUp, Facebook, Twitter, Linkedin, Youtube, Instagram, Share2, PhoneCall, Link, Home, Users, Image as ImageIcon, Contact, ShoppingCart } from 'lucide-react';
import spLogo from "../assets/images/sp_logo.png";

const TikTokIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="currentColor" d="M448 221.7c0-26.7-21.7-48.4-48.4-48.4-1.2 0-2.5.1-3.7.2 0-14.7-5.9-28.5-16.1-38.7-10.2-10.2-24-16.1-38.7-16.1h-44.1V10.2C344.9 4.6 340.3 0 334.7 0h-53.4c-5.6 0-10.2 4.6-10.2 10.2v126.9H135.5c-5.6 0-10.2 4.6-10.2 10.2v53.4c0 5.6 4.6 10.2 10.2 10.2h135.6v129.5c0 5.6-4.6 10.2-10.2 10.2H203.3v53.4c0 5.6 4.6 10.2 10.2 10.2h101.9c5.6 0 10.2-4.6 10.2-10.2v-53.4h57.4c5.6 0 10.2-4.6 10.2-10.2v-53.4c0-5.6-4.6-10.2-10.2-10.2h-57.4V221.7z"/>
  </svg>
);

const WhatsAppIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path fill="currentColor" d="M380.9 97.1C339.7 54.7 284.1 32 224 32S108.3 54.7 67.1 97.1 24 200.4 24 256c0 59.6 22.7 115.3 62.4 156.9l-25.1 82.5 85.3-25.7c39.6 16.5 84.7 25 131.4 25s91.8-8.5 131.4-25l85.3 25.7-25.1-82.5c39.6-41.6 62.4-97.3 62.4-156.9 0-55.6-22.7-111-64.1-153zM224 430.2c-47 0-93.7-12.8-133.4-38.8l-7.7-4.8-80.6 24.3 24.3-80.6-4.8-7.7c-26-39.7-38.8-86.4-38.8-133.4 0-45.7 11.8-90.1 34.6-129.1 22.7-39 54.1-70.4 93.1-93.1 39-22.7 83.4-34.6 129.1-34.6s90.1 11.8 129.1 34.6c39 22.7 70.4 54.1 93.1 93.1 22.7 39 34.6 83.4 34.6 129.1s-11.8 90.1-34.6 129.1c-22.7 39-54.1 70.4-93.1 93.1-39 22.7-83.4 34.6-129.1 34.6zm106.6-136.7c-5.5-2.8-32.5-16.1-37.4-17.9-4.8-1.8-8.4-2.8-11.9 2.8s-13.9 17.9-17 21.5c-3.1 3.6-6.1 4.1-11.4 1.3-5.3-2.8-22.3-8.2-42.5-26.3-15.7-14.2-26.2-31.8-29.3-37.4-3.1-5.6-.3-8.7 2.4-11.5s5.5-4.5 8.4-6.8c2.8-2.3 3.6-4.1 4.2-6.8s.7-5.1-.3-7.7c-1-2.5-11.2-26.9-15.3-36.9-3.9-9.8-7.9-8.3-11.4-8.5-3.5-.2-7.4-.2-11.4-.2s-10.5 1.4-16 6.9c-5.5 5.5-21.1 20.6-21.1 50.3s21.6 58.3 24.7 62c3.1 3.6 42.4 64.6 102.7 89.2 13.9 5.6 24.8 9 33.4 11.5 14.3 4.2 27.2 3.6 37.4 2.2 11.2-1.6 32.5-13.3 37-26.2s5.5-24.1 3.9-26.9c-1.6-2.8-5.9-4.5-12.2-7.7z"/>
    </svg>
);


const FooterLink = ({ href, children, subText }) => (
    <a href={href} className="text-sm font-medium hover:text-red-400 transition-colors duration-200">
        {children}
        {subText && <span className="block text-xs text-gray-400 font-light">{subText}</span>}
    </a>
);

const SocialIcon = ({ Icon, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-white rounded-full text-blue-900 shadow-lg hover:bg-gray-200 transition-colors duration-200">
        <Icon size={18} />
    </a>
);

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show/hide scroll button logic
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Color definitions based on the image
    const MAIN_BG_COLOR = 'bg-[#210202]'; // Deep dark maroon/red
    const BOTTOM_BAR_BG_COLOR = 'bg-[#1a2d52]'; // Deep navy blue

    // Placeholder for the Sindh Police Logo SVG
    const PoliceLogo = () => (
        <div className="flex flex-col items-center">
            {/* Placeholder for the Sindh Police Emblem */}
            <div className="w-16 h-16 mb-2 bg-white rounded-full flex items-center justify-center">
                <img src={spLogo} alt="Logo" />
            </div>
            <h3 className="text-white text-lg font-serif tracking-widest">SINDH</h3>
            <h2 className="text-white text-3xl font-serif tracking-widest leading-none">POLICE</h2>
            <div className="w-24 h-px bg-white my-2"></div>
            <p className="text-gray-300 text-sm italic font-light">PROUD TO SERVE</p>
        </div>
    );

    return (
        <footer className="w-full font-sans relative">
            {/* Top Red/White Stripe Border */}
            <div 
                className="h-2 w-full"
                style={{ 
                    // Using repeating gradient to approximate the stripe pattern
                    backgroundImage: `repeating-linear-gradient(45deg, #FF0000, #FF0000 10px, #FFFFFF 10px, #FFFFFF 20px)`,
                }}
            ></div>

            {/* Main Footer Content */}
            <div className={`py-12 px-6 lg:px-20 ${MAIN_BG_COLOR} text-white`}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
                    
                    {/* 1. Logo Section (Col 1-3) */}
                    <div className="md:col-span-3 flex justify-center md:justify-start">
                        <PoliceLogo />
                    </div>

                    {/* 2. Links Section (Col 4-9) */}
                    <div className="md:col-span-6 flex flex-col items-center md:items-start text-center md:text-left">
                        
                        {/* 2a. Top Row of White Circles (Replaced with common icons for structure) */}
                        <div className="flex space-x-3 mb-6">
                            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                                <div key={i} className="w-8 h-8 bg-white rounded-full opacity-10"></div>
                            ))}
                        </div>

                        {/* 2b. Main Navigation Links */}
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-y-3 gap-x-6 mb-6">
                            <FooterLink href="#">Go to Main Website</FooterLink>
                            <FooterLink href="#">Home</FooterLink>
                            <FooterLink href="#">About Us</FooterLink>
                            <FooterLink href="#">Gallery</FooterLink>
                            <FooterLink href="#">Contact Us</FooterLink>
                        </div>

                        {/* 2c. Sub-Links */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-1 gap-x-6 text-center sm:text-left mb-6">
                            <FooterLink href="#" subText="Online Service">Sindh Police Welfare</FooterLink>
                            <FooterLink href="#" subText="Online Service">Driving License Branch</FooterLink>
                            <FooterLink href="#" subText="Online Service">Online Character Certificate</FooterLink>
                        </div>

                        {/* 2d. Social Media Icons Row 1 */}
                        <div className="flex space-x-3 items-center mb-4">
                            <SocialIcon Icon={TikTokIcon} href="https://www.tiktok.com/" />
                            <SocialIcon Icon={Instagram} href="https://www.instagram.com/" />
                            <SocialIcon Icon={Twitter} href="https://twitter.com/" />
                            <SocialIcon Icon={Facebook} href="https://www.facebook.com/" />
                            {/* Placeholder for the blank circle */}
                            <div className="w-9 h-9 bg-white rounded-full opacity-10"></div> 
                        </div>

                         {/* 2e. Social Media Icons Row 2 (The second row of social icons is below the links in the image) */}
                        <div className="flex space-x-3 items-center mb-6">
                            <SocialIcon Icon={Facebook} href="https://www.facebook.com/" />
                            <SocialIcon Icon={Facebook} href="https://www.facebook.com/" />
                            <SocialIcon Icon={Twitter} href="https://twitter.com/" />
                            <SocialIcon Icon={Linkedin} href="https://www.linkedin.com/" />
                            <SocialIcon Icon={Youtube} href="https://www.youtube.com/" />
                            <SocialIcon Icon={TikTokIcon} href="https://www.tiktok.com/" />
                        </div>
                        
                        {/* 2f. Floating WhatsApp Icon (Center-aligned in the image) */}
                        <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-105">
                            <WhatsAppIcon size={24} className="text-white" />
                        </div>
                    </div>

                    {/* 3. Contact Section (Col 10-12) */}
                    <div className="md:col-span-3 flex flex-col items-center md:items-start space-y-4 pt-12 md:pt-0">
                        
                        {/* Address Block */}
                        <div className="flex items-start text-sm text-center md:text-left">
                            <MapPin size={20} className="text-red-400 mr-3 mt-1 flex-shrink-0" />
                            <div>
                                <p className="font-semibold">DIGP Traffic Office, Aga Khan</p>
                                <p>III Road, Karachi, Police</p>
                                <p>Headquarter Garden, South</p>
                                <p>Karachi</p>
                            </div>
                        </div>

                        {/* Phone Number */}
                        <div className="flex items-center text-sm">
                            <PhoneCall size={20} className="text-red-400 mr-3" />
                            <p className="font-semibold">0219-9216355</p>
                        </div>

                        {/* Email */}
                        <div className="flex items-center text-sm">
                            <Mail size={20} className="text-red-400 mr-3" />
                            <p className="font-semibold">trafficpolicekhi@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className={`py-4 px-6 lg:px-20 ${BOTTOM_BAR_BG_COLOR} text-white text-xs`}>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                    <p className="text-center md:text-left">
                        &copy; 2024 Sindh Police - All Rights Reserved.
                    </p>
                    <p className="text-center md:text-right">
                        Powered By: <span className="font-semibold">Software Section, I.T Directorate Sindh, Sindh Police.</span>
                    </p>
                </div>
            </div>

            {/* Floating Scroll Up Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-6 right-6 bg-red-600 p-3 rounded-full shadow-lg transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-5 h-5 text-white" />
            </button>
        </footer>
    );
};

export default Footer;
