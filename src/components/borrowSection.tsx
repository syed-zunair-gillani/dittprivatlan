import { client } from '@/config/client';
import { QBrokers } from '@/config/query';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

async function getData() {
     const brokerResponse = await client.query({
          query: QBrokers,
          variables: {
               terms: 'laneformedling'
          },
     });

     const brokers = brokerResponse.data.brokers
     return {
          brokers
     }
}

const BorrowSection = async ({ title }: any) => {
     var number = title.replace('lan-', '')
     const { brokers } = await getData()
     console.log("🚀 ~ BorrowSection ~ brokers:", brokers)

     return (
          <>

               <section className='container mx-auto px-3 content py-20 pt-16'>
                    <h3>Låna {number} kronor hos de bästa långivarna</h3>
                    <p className='mt-4'>När du ska låna en större summa pengar är det extra noga att du får det bästa tänkbara lånet med den lägsta räntan. Här vill du också få en bra amorteringsplan samt att det hela går smidigt och enkelt vid ansökan. Idag är det nästan så att alla storlekar på lån erbjuds via ansökan online. Med det sagt kommer det alltså att gå utmärkt att ansöka om att låna {number} kronor utan säkerhet för alla som har en fast inkomst och en relativt ordnad ekonomi.</p>
                    <p className='mt-4'>Det bästa och enklaste sättet att ansöka om lån online är att använda sig av en låneförmedlare. Idag finns det många olika låneförmedlare på nätet. Även när det gäller ett lån {number} kronor kommer en låneförmedling online att vara bästa alternativet. De bästa låneförmedlarna finner du här på dittprivatlan.se. Vi har samlat alla de bästa svenska låneförmedlarna, så att du kan läsa om dessa innan du bestämmer dig för var du vill ansöka om lån {number} kronor.</p>
                    <h3>Enkla krav hos de flesta låneförmedlare</h3>
                    <p className='mb-4'>Aven om du ska ansöka om ett lån {number} kronor utan säkerhet, kommer en långivare ändå att vilja ha någon form av säkerhet. Denna säkerhet ligger i din kreditvärdighet. Olika långivare ser olika på hur mycket vikt de ska lägga på kreditvärdigheten och den kreditupplysning som tas. Dessa har också olika regler när det gäller kraven för att ett lån {number} kronor ska kunna beviljas.</p>
                    <strong>Dock kommer det alltid finnas grundläggande krav. Dessa brukar normalt sett vara följande:</strong>
                    <ul className='mt-4'>
                         <li>Den som ansöker måste inneha en ålder av minst 18-20 år.</li>
                         <li>Det måste finnas en taxerad inkomst som inte understiger 100 000 kronor. (undantag existerar)</li>
                         <li>Det får inte finnas ett aktivt skuldsaldo hos kronofogden.</li>
                    </ul>
                    <p className='mt-4'>Utöver detta kommer både de som har betalningsanmärkningar och många UC att kunna beviljas lån hos någon av de låneförmedlare vi rekommenderar på denna webbplats.</p>

               </section>
               {
                    brokers?.nodes.length > 0 &&
                    <div className='container mx-auto grid px-3 md:px-0 sm:grid-cols-2 mb-20 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                         {
                              brokers?.nodes?.map((item: any, idx: number) => (
                                   <div className='relative' key={idx}>
                                        <div className='flex flex-col bg-sec justify-center items-center !text-gray-300 text-center z-10 p-4 relative rounded-xl'>
                                             <Image src={item?.featuredImage?.node?.mediaItemUrl} alt={item?.title} width={300} height={200} className='!w-[100%] h-full object-cover rounded-xl' />
                                             <h4 className='font-bold my-6 !text-gray-300'>{item?.title}</h4>
                                             {/* <p className='mb-4'>Krav: Svenskt registrerat företag, enskild firma eller AB. Försäljning i minst 6 månader.</p> */}
                                             <Link href={'/' + item.slug || '#'} className='bg-main w-full hover:bg-transparent hover:!text-main border border-transparent hover:border-main !text-sec py-2.5 font-semibold rounded-md'>Ansök</Link>
                                             <Link href={'/' + item.slug || '#'} className='bg-transprent w-full text-main border hover:text-sec hover:bg-main hover:border-transparent border-main mt-3 py-2.5 font-semibold rounded-md'>Låna nu</Link>
                                        </div>
                                   </div>
                              ))
                         }
                    </div>
               }
          </>
     )
}

export default BorrowSection