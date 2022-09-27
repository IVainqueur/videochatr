import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Middle from '../components/Middle'
import Navbar from '../components/Navbar'
import OtherBar from '../components/OtherBar'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | VideoCHATr</title>
      </Head>
      <main className='bg-white-800 h-screen w-screen grid place-content-center'>
        <section className='bg-white-default mx-2 w-screen h-[100vh] lg:w-[90vw] max-w-[1400px] lg:h-[80vh] lg:min-w-[37.5rem] lg:rounded-2xl shadow-lg flex'>
          <Navbar />
          <Middle></Middle>
          <OtherBar></OtherBar>
        </section>
      </main>
    </>
  )
}

export default Home
