
import React from 'react'
import Header from './components/header'
import { headers } from 'next/headers'
import Image from  'next/image'

 function Home  ()  {
  return (
    <div className='h-screen'>
      <Header/>
      <section className='flex h-[189px]'>
      <section className='w-1/2 flex flex-col item-start m-12 p-20'>
      <h1 className='text-[40px] w-[496]'>IMPECCABLE CRAFTSMANSHIP AND FITNESS</h1>

      <section>
        <p className='h-[147px] w-[902px] text-yellow-800 p-5'>An example of intricate wormanship and detail,elegant
           <br />necklaces and long and short chains form a part of our<br/>desirable collection</p>
           <button className='h-[58px] w-[288px] rounded-full p-10px  gap-10px' style={{backgroundColor:'rgb(162,152,117)'}}>Explore Now</button>
      </section>

      </section>

      
      <div className='flex md:justify-center items-center h-screen flex-col p-20 '>
        <Image className="border-r-yellow-700" src={"/image/jewellary.svg"} alt="jewellary-image" width={462} height={647}></Image>
        
      </div>
      </section>

    </div>
  )
}

export default Home
