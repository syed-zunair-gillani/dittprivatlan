import ListCard from '@/components/listCard'
import PageBanner from '@/components/main/pageBanner'
import StarRating from '@/components/starRating'
import { client } from '@/config/client'
import { QSingleBrokers } from '@/config/query'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function getData(props: any) {
  
  const brokerResponse = await client.query({
    query: QSingleBrokers,
    variables: {
      id: props.params.slug,
    },
  });

  const broker = brokerResponse.data.broker
  return {
    broker
  }
}

async function SlugCategory(props: any) {
  const { broker } = await getData(props)

  return (
    <>
      <PageBanner title={broker.title} />
      {
        broker?.content &&
        <>
          <section className='my-20 container content px-3 mx-auto'>
            <Link href={broker?.brokerPostMeta?.applyLink} className="bg-main p-3 px-10 border font-semibold hover:bg-sec rounded-lg hover:!text-main text-xl !text-sec">Ansök</Link>
            <div dangerouslySetInnerHTML={{ __html: broker?.content }} className='mt-10'/>
            <StarRating tRating={broker?.brokerPostMeta?.totalRating || 69 } avgRating={broker?.brokerPostMeta?.avgRating || 4.9}/>
            <div className="mt-10"/>
            <Link href={broker?.brokerPostMeta?.applyLink} target='_blank' className="bg-main p-3 px-10 border font-semibold hover:bg-sec rounded-lg hover:!text-main text-xl !text-sec">Ansök</Link>
          </section>
        </>
      }
    </>
  )
}

export default SlugCategory


