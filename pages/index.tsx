import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useReducer, useState } from 'react'
import Middle from '../components/Middle'
import Navbar from '../components/Navbar'
import OtherBar from '../components/OtherBar'
import Prompt from '../components/Prompt'
import { SnackbarKey, useSnackbar } from 'notistack'
import { CallHistoryInfo, CallInfo } from '../utils/interfaces'
import { updateCallInfo } from '../utils/handlers'
import History from '../components/History'


const Home: NextPage = () => {
  const [username, setUsername] = useState<string | undefined>(undefined)
  const [callInfo, setCallInfo] = useReducer(updateCallInfo, {
    isInCall: false,
    isBeingCalled: false,
    isCalling: false,
    isBusy: false
  })
  const [callHistory, setCallHistory] = useState<CallHistoryInfo[]>([])

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  useEffect(() => {
    let id: SnackbarKey | undefined = undefined;
    if (!!username) {
      id = enqueueSnackbar(`Username: ${username}`, { persist: true });
      localStorage.setItem('vc_username', username)
    }
    return () => closeSnackbar(id)
  }, [username, enqueueSnackbar, closeSnackbar])

  useEffect(() => {
    setUsername(localStorage.getItem('vc_username') ?? undefined)
    setCallHistory(JSON.parse(localStorage.getItem('vc_callhistory') ?? '[]'))
  }, [])

  return (
    <>
      <Head>
        <title>Home | VideoCHATr</title>
      </Head>
      <main className='bg-white-800 h-screen w-screen grid place-content-center'>
        <section className='bg-white-default mx-2 w-screen h-[100vh] lg:w-[90vw] max-w-[1400px] lg:h-[80vh] lg:min-w-[37.5rem] lg:rounded-2xl shadow-lg flex'>
          <Navbar />
          <Middle>
            {
              !username ?
                <Prompt
                  question='What username will you be using today?'
                  update={setUsername}
                />
                :
                <></>
            }
            {
              (!!username && !callInfo.isBusy) ?
                <p className='in-center-ish text-white-500'>Ready for call...</p>
                :
                <></>
            }
          </Middle>
          <OtherBar>
            {
              !username ?
                <p className='in-center-ish text-white-500'>Waiting for config...</p>
                :
                <></>
            }
            {
              !!username ?
                <>
                  <History history={callHistory} />
                </>
                :
                <></>
            }
          </OtherBar>
        </section>
      </main>
    </>
  )
}

export default Home
