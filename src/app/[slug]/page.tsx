import ListCard from '@/components/listCard'
import PageBanner from '@/components/main/pageBanner'
import StarRating from '@/components/starRating'
import { client } from '@/config/client'
import { QBrokers, QSingleCategory } from '@/config/query'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function getData(props: any) {
  
  const brokerResponse = await client.query({
    query: QBrokers,
    variables: {
      terms: props.params.slug,
    },
  });

  const brokers = brokerResponse.data.brokers
  return {
    brokers
  }
}

async function SlugCategory(props: any) {
  const { brokers} = await getData(props)

  return (
    <>
      <PageBanner title={'category.title'} />
      {/* {
        category?.content &&
        <>
          <section className='my-20 container content px-3 mx-auto'>
            <div dangerouslySetInnerHTML={{ __html: category?.content }} />
          </section>
        </>
      } */}
      <StarRating />

      {
        brokers?.nodes.length > 0 &&
        <section className='mt-10 mb-20 container mx-auto px-3'>
          <div className='container mx-auto grid px-3 md:px-0 sm:grid-cols-2 my-20 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
              brokers?.nodes?.map((item: any, idx: number) => (
                <div className='relative' key={idx}>
                  <div className='flex flex-col bg-sec justify-center items-center text-gray-300 text-center z-10 p-4 relative rounded-xl'>
                    <Image src={item?.featuredImage?.node?.mediaItemUrl} alt={item?.title} width={300} height={200} className='w-full h-full object-cover rounded-xl' />
                    <h4 className='font-bold my-6'>{item?.title}</h4>
                    {/* <p className='mb-4'>Krav: Svenskt registrerat företag, enskild firma eller AB. Försäljning i minst 6 månader.</p> */}
                    <Link href={item.applyLink || '#'} className='bg-main w-full hover:bg-transparent hover:text-main border border-transparent hover:border-main text-sec py-2.5 font-semibold rounded-md'>Ansök</Link>
                    <Link href={item.readMoreLink || '#'} className='bg-transprent w-full text-main border hover:text-sec hover:bg-main hover:border-transparent border-main mt-3 py-2.5 font-semibold rounded-md'>Låna nu</Link>
                  </div>
                </div>
              ))
            }
          </div>
        </section>
      }


    </>
  )
}

export default SlugCategory


const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]


