import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className='w-full px-10 border-t-2 border-solid border-dark font-medium text-lg text-dark'>
            <div className='py-8 flex items-center justify-between'>
                <span>
                    {new Date().getFullYear()}&copy;
                </span>
                <div className='flex items-center'>
                    Build With <span className='text-sky-600 text-4xl px-1'>&#9825;</span>
                    By &nbsp;
                    <Link target='_blank' href="https://portfolioan.netlify.app/" className='underline underline-offset-2'>Antu_Das</Link>
                </div>
                <Link target='_blank' href="https://portfolioan.netlify.app/">Connect With Antu</Link>
            </div>
        </footer>
    );
};

export default Footer;