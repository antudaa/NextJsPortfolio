import Image from 'next/image';
import proPick from '../public/images/profile/developer-pic-1.png';
import AnimatedText from './Components/AnimatedText/AnimatedText';
import Link from 'next/link';
import { Download } from './Components/Icons/Icons';

export default function Home() {
  return (
    <div className='flex items-center w-full min-h-screen text-black'>
      <div className="flex items-center justify-between w-full">
        <div className='w-1/2'>
          <Image src={proPick} alt='Antu Das image' className="w-full hyphens-auto" >
          </Image>
        </div>
        <div className="w-2/4 flex flex-col items-center self-center">
          <AnimatedText text={`Turning Vision Into Reality With Code and Real Life Problem Solving...`} className={`text-3xl text-left`} />
          <p className='my-4 text-base font-medium'>
            Hi there 👋! I am Antu Das Computer Science Undergraduate from Mirpur University Dhaka Bangladesh. I have a great hunger of learn new technologies. I love to explore

            My expertise is in the area of React JS & Responsive Design. With every line of code, I strive to make the web a beautiful place. Feel free to take a look at my latest projects on the web portfolio page. Thank you for visiting my portfolio.✌️

            I have a good range of skills, of which I can say that I’ve mastered some.
          </p>
          <div className='flex items-center self-start mt-2'>
            <Link href="/dummy.pdf" target='_blank' className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid  border-transparent hover:border-dark'
              download={true}>
              Resume <Download className='w-6 ml-2 h-auto' />
            </Link>
            <Link href="antu.haks@gmail.com"
              className='ml-4 text-lg font-medium capitalize text-dark underline'
            >Contact</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
