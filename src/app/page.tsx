
import Image from 'next/image'
import Link from 'next/link'
import Main from '@/components/main'
import { BsBank2 } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import MorgageCard from '@/components/morgageCard';
import Range from '@/components/range';

export default function Home() {

  return (
    <>
      <Main />
      <section className='container mx-auto grid px-3 md:px-0 sm:grid-cols-3 my-20 grid-cols-2  md:grid-cols-5 gap-3'>
        {
          dataIconList?.map((item, idx) => (
            <Link href={item.link}>
              <div className='group border overflow-hidden rounded-xl border-main'>
                <div key={idx} className='py-10 flex group-hover:bg-sec justify-center transition-all duration-200 ease-linear flex-col items-center'>
                  <span className='text-4xl group-hover:scale-110 transition-all duration-200 ease-linear text-main'>{item.icon}</span>
                </div>
                <p className='bg-main p-2 md:text-base text-sm text-center font-semibold'>{item.title}</p>
              </div>
            </Link>
          ))
        }
      </section>
      <section>
        <h2 className='text-3xl sm:text-4xl md:text-6xl justify-center items-center h-full font-bold text-sec mx-auto text-center'>Hitta bästa bolånet hos Ordna Bolån</h2>
        <p className='md:text-2xl font-semibold text-center mt-3'>Ansöka om privatlån – Bäst blancolån</p>
        <p className="text-center text-main">Omdömen, fakta och partners</p>
        <div className='container mx-auto grid px-3 md:px-0 sm:grid-cols-2 my-20 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {
            morgageList?.map((item, idx) => (
              <MorgageCard key={idx} data={item} />
            ))
          }
        </div>
      </section>
      <section className='bg-gray-100 py-20'>
        <h2 className='text-3xl sm:text-4xl md:text-6xl justify-center items-center h-full font-bold text-sec mx-auto text-center'>Välj önskat lånebelopp</h2>
        <Range/>
      </section>
    </>
  )
}


const dataIconList = [
  {
    icon: <BsBank2 />,
    title: 'Privatlån',
    link: '#'
  },
  {
    icon: <FaPhoneVolume />,
    title: 'Låneförmedling',
    link: '#'
  },
  {
    icon: <FaLocationArrow />,
    title: 'Snabblån',
    link: '#'
  },
  {
    icon: <FaCcVisa />,
    title: 'Kreditkort',
    link: '#'
  },
  {
    icon: <BsBank2 />,
    title: 'Privatlån',
    link: '#'
  },
  {
    icon: <FaPhoneVolume />,
    title: 'Låneförmedling',
    link: '#'
  },
  {
    icon: <FaLocationArrow />,
    title: 'Snabblån',
    link: '#'
  },
  {
    icon: <FaCcVisa />,
    title: 'Kreditkort',
    link: '#'
  },
  {
    icon: <FaLocationArrow />,
    title: 'Snabblån',
    link: '#'
  },
  {
    icon: <FaCcVisa />,
    title: 'Kreditkort',
    link: '#'
  },

]

const morgageList = [
  {
    title: 'lendo',
    info: 'Låneförmedlaren Lendo - bra lånejämförelse för lägre ränta',
    intrustRate: '2,95',
    reviewLink: '#',
    borrowLink: '#',
    image: '/images/image1.jpeg'
  },
  {
    title: 'lendo',
    info: 'Låneförmedlaren Lendo - bra lånejämförelse för lägre ränta',
    intrustRate: '2,95',
    reviewLink: '#',
    borrowLink: '#',
    image: '/images/image1.jpeg'
  },
  {
    title: 'lendo',
    info: 'Låneförmedlaren Lendo - bra lånejämförelse för lägre ränta',
    intrustRate: '2,95',
    reviewLink: '#',
    borrowLink: '#',
    image: '/images/image1.jpeg'
  },
  {
    title: 'lendo',
    info: 'Låneförmedlaren Lendo - bra lånejämförelse för lägre ränta',
    intrustRate: '2,95',
    reviewLink: '#',
    borrowLink: '#',
    image: '/images/image1.jpeg'
  },
  {
    title: 'lendo',
    info: 'Låneförmedlaren Lendo - bra lånejämförelse för lägre ränta',
    intrustRate: '2,95',
    reviewLink: '#',
    borrowLink: '#',
    image: '/images/image1.jpeg'
  },
  {
    title: 'lendo',
    info: 'Låneförmedlaren Lendo - bra lånejämförelse för lägre ränta',
    intrustRate: '2,95',
    reviewLink: '#',
    borrowLink: '#',
    image: '/images/image1.jpeg'
  },
  {
    title: 'lendo',
    info: 'Låneförmedlaren Lendo - bra lånejämförelse för lägre ränta',
    intrustRate: '2,95',
    reviewLink: '#',
    borrowLink: '#',
    image: '/images/image1.jpeg'
  },
  {
    title: 'lendo',
    info: 'Låneförmedlaren Lendo - bra lånejämförelse för lägre ränta',
    intrustRate: '2,95',
    reviewLink: '#',
    borrowLink: '#',
    image: '/images/image1.jpeg'
  }
]