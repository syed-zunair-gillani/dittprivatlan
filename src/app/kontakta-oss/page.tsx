import PageBanner from '@/components/main/pageBanner'
import React from 'react'

const ContactUs = () => {
     return (
          <>
               <PageBanner title="kontakta oss" />
               <section className="">
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                         <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Här kan ni kontakta oss om ni har frågor, synpunkter eller feedback om webbplatsen. Gäller ert ärende någon långivare så ber vi er kontakta respektive långivare istället. Vi besvarar din fråga via e-post så snart vi kan.</p>
                         <form action="#" className="space-y-8">
                              <div>
                                   <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                                   <input type="text" id="name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Your name" required />
                              </div>
                              <div>
                                   <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                   <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                              </div>
                              <div>
                                   <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                   <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Let us know how we can help you" required />
                              </div>
                              <div className="sm:col-span-2">
                                   <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                   <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 h-[200px]" placeholder="Leave a comment..."></textarea>
                              </div>
                              <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-md bg-sec hover:bg-main">Send message</button>
                         </form>
                    </div>
               </section>
          </>
     )
}

export default ContactUs