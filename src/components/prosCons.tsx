import React from 'react'

const ProsCons = ({prosTitle, consTitle, data}:any) => {
  console.log("🚀 ~ ProsCons ~ data:", data)
  return (
    <section className='mt-5'>
     <div className="container mx-auto px-3 grid gap-5 md:gap-8 grid-cols-1 md:grid-cols-2 text-sec">
          <div className='bg-green-100 p-5 md:p-10 rounded-2xl'>
               <h5 className='font-semibold text-xl text-main'>{prosTitle || 'Pros'}</h5>
               <ul className='mt-6 list-decimal pl-4'>
                    {
                        data?.prosList.map((item:any,idx:number)=>(
                              <li key={idx} className='mt-2'>{item.pros}</li>
                        ))
                    }
               </ul>
          </div>
          <div className='bg-red-100 p-5 md:p-10 rounded-2xl'>
               <h5 className='font-semibold text-xl text-red-400'>{consTitle || 'Cons'}</h5>
               <ul className='mt-6 list-decimal pl-4'>
                    {
                        data?.consList.map((item:any,idx:number)=>(
                              <li className='mt-2' key={idx}>{item.cons}</li>
                        ))
                    }
               </ul>
          </div>
     </div>
    </section>
  )
}

export default ProsCons