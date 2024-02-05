import ListCard from '@/components/listCard'
import PageBanner from '@/components/main/pageBanner'
import StarRating from '@/components/starRating'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function SlugCategory() {
  return (
    <>
      <PageBanner title=""/>
      <section className='mt-20 container content px-3 mx-auto'>
        <p>Vi tittar på kundnöjdhet och kundomdömen hos TrustPilot, Google omdömen, Reco och Eniro som är oberoende källor. Härigenom kan vi presentera vilka som är de bästa låneförmedlarna just nu.</p>
        <h2>Ni kan också se vilka låneförmedlare som har flest långivare och vilka som använder sig av UC.  </h2>
        <p>Det finns idag en uppsjö av låneförmedlare. Något som är värt att nämna bland dessa låneförmedlare är att flera av dem går under olika namn men ingår i samma företag. Exempelvis kan vi se att Zmarta lån och lånföralla ingår i företaget Se Freedom Finance hos alla bolag. Klicka här för att komma till Freedom Finans!</p>
        <h3>Låneförmedlare med flest banker</h3>
        <ol>
          <li><strong>Sambla:</strong> 44 st långivare</li>
          <li><strong>Advisa:</strong> 40 st långivare</li>
          <li><strong>Lånemarknad:</strong> 39 st långivare</li>
        </ol>
        <h4>** Direkto säger att de jämför 20 långivare, men samarbetar med 40 banker. Det gör att de skulle ligga först på listan, men eftersom det inte är bekräftat av oss, så ligger de sist.</h4>
      </section>
      <StarRating/>
      <section className='mt-10 mb-20 container mx-auto px-3'>
        <div className='container mx-auto grid px-3 md:px-0 sm:grid-cols-2 my-20 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {
            data?.map((item: any, idx: number) => (
              <div className='relative'>
                <div className='flex flex-col bg-sec justify-center items-center text-gray-300 text-center z-10 p-4 relative rounded-xl'>
                  <Image src={`/images/coopmedmera.png`} alt={`coopmedmera`} width={300} height={200} className='w-full h-full object-cover rounded-xl' />
                  <h4 className='font-bold my-6'>Coop Privatlån hos MedMera Bank</h4>
                  {/* <p className='mb-4'>Krav: Svenskt registrerat företag, enskild firma eller AB. Försäljning i minst 6 månader.</p> */}
                  <Link href={`#`} className='bg-main w-full hover:bg-transparent hover:text-main border border-transparent hover:border-main text-sec py-2.5 font-semibold rounded-md'>Ansök</Link>
                  <Link href={`#`} className='bg-transprent w-full text-main border hover:text-sec hover:bg-main hover:border-transparent border-main mt-3 py-2.5 font-semibold rounded-md'>Låna nu</Link>
                </div>
              </div>
            ))
          }
        </div>
      </section>

    </>
  )
}

export default SlugCategory


const data = [1,2,3,4,5,6,7,8,9]


