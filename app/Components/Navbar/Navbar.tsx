"use client"
import Link from 'next/link'
import React from 'react';
import Logo from '../Logo/Logo';
import { useRouter } from 'next/navigation';
import { GithubIcon, LinkedInIcon, TwitterIcon } from '../Icons/Icons';
import { motion } from 'framer-motion';

const Navbar = () => {

    const router = useRouter();
    console.log(router);

    const CustomLinks = ({ href = "", title = "", className = "" }) => {

        return (
            <Link href={href} className={`${className} relative group`}>
                {title}

                <span className={`h-[2px] w-0 inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${""}`}>&nbsp;</span>
            </Link>
        )
    }

    return (
        <header className='w-full px-32 py-8 font-medium flex justify-between items-center'>
            {/* Page Links  */}
            <nav className='text-dark'>
                <CustomLinks href='/' title="Home" className="mr-4" />
                <CustomLinks href='/about' title="About" className="mx-4" />
                <CustomLinks href='/projects' title="Projects" className="mx-4" />
                <CustomLinks href='/articles' title="Articles" className="ml-4" />
            </nav>
            {/* Social Media Icons */}
            <nav className='flex items-center justify-center flex-wrap'>
                <motion.a href='/' target={"_blank"}
                    whileHover={{ y: -2 }} className='w-6 mx-3'
                    whileTap={{ scale: 0.9 }}
                >
                    <TwitterIcon />
                </motion.a>
                <motion.a href='/' target={"_blank"}
                    whileHover={{ y: -2 }} className='w-6 mx-3'
                    whileTap={{ scale: 0.9 }}
                >
                    <GithubIcon />
                </motion.a>
                <motion.a href='/' target={"_blank"}
                    whileHover={{ y: -2 }} className='w-6 ml-3'
                    whileTap={{ scale: 0.9 }}
                >
                    <LinkedInIcon />
                </motion.a>
            </nav>
            {/* Logo OR Icon */}
            <div className='absolute left-[50%] top-2 translate-x-[50%]'>
                <Logo />
            </div>
        </header>
    );
};

export default Navbar;