
import Image from 'next/image'
import Link from 'next/link'
import Main from '@/components/main'
import { BsBank2 } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import MorgageCard from '@/components/morgageCard';
import Range from '@/components/range';
import { client } from '@/config/client'
import { QMortgages, QCategoriesList } from '@/config/query'

async function getData() {
  const response = await client.query({ query: QMortgages });
  const categoriesResponse = await client.query({ query: QCategoriesList });
  
  const mortgage = response.data.mortgages.nodes
  const categories = categoriesResponse.data.categories.nodes
 
  return { mortgage, categories }
}


export default async function Home() {

  const { mortgage, categories } =  await getData()
  console.log("🚀 ~ Home ~ categories:", categories)

  const backgroundStyle = {
    background: 'linear-gradient(rgba(9, 38, 53, 0.4), rgba(9, 38, 53, 1))',
  }

  return (
    <>
      <Main />
      <section className='container mx-auto grid px-3 md:px-0 sm:grid-cols-3 my-20 grid-cols-2  md:grid-cols-5 gap-3'>
        {
          categories?.map((item:any, idx:number) => {
            const icon = dataIconList.find((i:any)=> i.name === item.categoriesPostMeta.categoriyIcon)
            return(
              <Link href={`category/${item.slug}`}>
              <div className='group border overflow-hidden rounded-xl border-main'>
                <div key={idx} className='py-10 flex group-hover:bg-sec justify-center transition-all duration-200 ease-linear flex-col items-center'>
                  <span className='text-4xl group-hover:scale-110 transition-all duration-200 ease-linear text-main'>{icon?.icon}</span>
                </div>
                <p className='bg-main p-2 md:text-base text-sm text-center font-semibold'>{item.title}</p>
              </div>
            </Link>
            )
          })
        }
      </section>
      <section>
        <h2 className='text-3xl sm:text-4xl md:text-6xl justify-center items-center h-full font-bold text-sec mx-auto text-center'>Hitta bästa bolånet hos Ordna Bolån</h2>
        <p className='md:text-2xl font-semibold text-center mt-3'>Ansöka om privatlån – Bäst blancolån</p>
        <p className="text-center text-main">Omdömen, fakta och partners</p>
        <div className='container mx-auto grid px-3 md:px-0 sm:grid-cols-2 my-20 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {
            mortgage?.map((item:any, idx:number) => (
              <MorgageCard key={idx} data={item} />
            ))
          }
        </div>
      </section>
      <section className=' py-20 bg' >
        <h2 className='text-3xl sm:text-4xl md:text-6xl justify-center items-center h-full font-bold text-main mx-auto text-center'>Välj önskat lånebelopp</h2>
        <Range />
      </section>
      <section className='my-20 container gap-6 mx-auto px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          [1, 2, 3].map((item, idx) => (
            <div key={idx} className='flex flex-col bg-sec justify-center items-center text-gray-300 text-center z-10 p-10 relative rounded-2xl'>
              <h2 className='font-bold text-2xl text-main py-2'>Axo lån hos Axo Finans AB</h2>
              <div className='pt-1 my-6 bg-main w-20' />
              <h4 className='font-bold my-3'>{`Med Axo lån hos Axo Finans AB kan ni pressa ner den effektiva räntan rejält och få mer pengar över till annat. Låga inkomstkrav, 18 årsgräns för att göra en ansökan och hela 30 långivare.`}</h4>
              <p> {`Låna från 10 000 kronor upp till 600 000 kronor. Endast 1 kreditupplysning. Kostnadsfri och ej bindande. Axo erbjuder lån med lång återbetalningstid, hela 20 år.`}</p>
              <h4 className='font-bold my-3 text-main'> {`Axo har skyhöga omdömen hos Trustpilot`}</h4>
              <Link href={`#`} className='bg-transprent w-full text-main border hover:text-sec hover:bg-main hover:border-transparent border-main mt-3 py-2.5 font-semibold rounded-md'>Ansök</Link>
            </div>
          ))
        }
      </section>
      <section className='container mx-auto my-20 px-3'>
        {
          dataContent?.map((item, idx) => (
            <div className={`grid gap-8 items-center my-8 ${!item?.image ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`} key={idx}>
              <div className={`${idx % 2 === 0 ? '' : 'order-1'}`}>
                <h3 className='font-bold text-3xl text-main'>{item.title}</h3>
                <p className='text-gray-700 mt-4 text-xl'>{item.content}</p>
              </div>
              {
                item?.image && <div>
                  <Image src={item?.image} alt="image" width={600} height={600} className='rounded-2xl' />
                </div>
              }
            </div>
          ))
        }
      </section>
    </>
  )
}


const dataIconList = [
  {
    icon: <BsBank2 />,
    name: 'bank',
  },
  {
    icon: <FaPhoneVolume />,
    name: 'phone',
  },
  {
    icon: <FaLocationArrow />,
    name: 'arrow',
  },
  {
    icon: <FaCcVisa />,
    name: 'visa card',
  },
]

const dataContent = [
  {
    title: 'Betala alltid dina fakturor I tid',
    content: 'Enklaste sättet att bibehålla en god kreditvärdighet är att alltid betala fakturor i tid och vårda din privatekonomi. Dels för att undvika extra kostnader i form av påminnelseavgifter och räntekostnader. Framförallt undviker du betalningsanmärkningar och Kronofogden. Du bör regelbundet lägga tid för din privatekonomi och skulle du ha betalningsproblem får du aldrig strunta i fakturorna. Ring istället din långivare för att hitta lösningar som funkar för er båda (som avbetalning).',
    image: '/images/invoice.jpeg'
  },
  {
    title: 'Betala alltid dina fakturor I tid',
    content: 'Enklaste sättet att bibehålla en god kreditvärdighet är att alltid betala fakturor i tid och vårda din privatekonomi. Dels för att undvika extra kostnader i form av påminnelseavgifter och räntekostnader. Framförallt undviker du betalningsanmärkningar och Kronofogden. Du bör regelbundet lägga tid för din privatekonomi och skulle du ha betalningsproblem får du aldrig strunta i fakturorna. Ring istället din långivare för att hitta lösningar som funkar för er båda (som avbetalning).',
    image: '/images/invoice.jpeg'
  },
  {
    title: 'Betala alltid dina fakturor I tid',
    content: 'Enklaste sättet att bibehålla en god kreditvärdighet är att alltid betala fakturor i tid och vårda din privatekonomi. Dels för att undvika extra kostnader i form av påminnelseavgifter och räntekostnader. Framförallt undviker du betalningsanmärkningar och Kronofogden. Du bör regelbundet lägga tid för din privatekonomi och skulle du ha betalningsproblem får du aldrig strunta i fakturorna. Ring istället din långivare för att hitta lösningar som funkar för er båda (som avbetalning).',
  },
  {
    title: 'Betala alltid dina fakturor I tid',
    content: 'Enklaste sättet att bibehålla en god kreditvärdighet är att alltid betala fakturor i tid och vårda din privatekonomi. Dels för att undvika extra kostnader i form av påminnelseavgifter och räntekostnader. Framförallt undviker du betalningsanmärkningar och Kronofogden. Du bör regelbundet lägga tid för din privatekonomi och skulle du ha betalningsproblem får du aldrig strunta i fakturorna. Ring istället din långivare för att hitta lösningar som funkar för er båda (som avbetalning).',
  }
]