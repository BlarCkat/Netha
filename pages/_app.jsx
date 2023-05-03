import { useRouter } from 'next/router'
import '../styles/globals.css'
import { useEffect, useState } from 'react'


function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(()=>{

    const handleStart = (url)=> (url !== router.asPath) && setLoading(true);
    const handleComplete = (url)=> (url === router.asPath) && setTimeout(()=> {setLoading(false)}, 5000);

    router.events.on('routerChangeStart', handleStart)
    router.events.on('routerChangeComplete', handleComplete)
    router.events.on('routerChangeError', handleComplete)

    return ()=> {
      router.events.off('routerChangeStart', handleStart)
      router.events.off('routerChangeComplete', handleComplete)
      router.events.off('routerChangeError', handleComplete)
    }
  })

  return loading && (
    <>
    <div className="loadingScreen">
      <h1>Welcome to the Nether.</h1>
    </div>
    </>
  )
}

export default function App({ Component, pageProps }) {
  return (<><Loading/><Component {...pageProps} /></>)
}
