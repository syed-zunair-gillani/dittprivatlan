import ListCard from '@/components/listCard'
import PageBanner from '@/components/main/pageBanner'
import ProsCons from '@/components/prosCons'
import StarRating from '@/components/starRating'
import { client } from '@/config/client'
import { QSingleMortgage } from '@/config/query'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function getData(props:any) {
  const response = await client.query({
    query: QSingleMortgage,
    variables: {
      id: props.params.slug,
    },
  });
  const mortgage = response.data.mortgage
 
  return mortgage
}

async function SlugCategory(props:any) {

  const mortgage =  await getData(props)
  
  return (
    <div className='pb-20'>
      <PageBanner title={mortgage.title} />
      <section className='pt-20 container content px-3 mx-auto'>
        <div dangerouslySetInnerHTML={{ __html : mortgage.content }}/>
      </section>
      {/* pros and cons  */}
      {
        mortgage?.mortgagePostTypeMeta?.prosAndCons?.consList.length > 0 && <ProsCons
          prosTitle = "Fördelar med Axo lån"
          consTitle= "Nackdelar med Axo lån"
          data={mortgage?.mortgagePostTypeMeta?.prosAndCons}
        />
      }
      {/* extra content  */}
      {
        mortgage?.mortgagePostTypeMeta?.extraContent && <section className='pt-3 container content px-3 mx-auto'>
        <div dangerouslySetInnerHTML={{ __html : mortgage?.mortgagePostTypeMeta?.extraContent }}/>
      </section>
      }
      
    </div>
  )
}

export default SlugCategory


const data = [1,2,3,4,5,6,7,8,9]


