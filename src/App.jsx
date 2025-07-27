import React, { useEffect, useRef, useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Navbar from '../components/Navbar';
import Mainroutes from '../routes/Mainroutes';
import Footer from '../components/Footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'

const App = () => {
  const [count, setcount] = useState(0)
  const [showmain, setshowmain] = useState(false)
  const preloader = useRef(null);
  const loadingtext = useRef(null)


  useEffect(() => {
    const interval = setInterval(() => {
      setcount(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      })
    }, 30)
    return () => clearInterval(interval)
  }, [])

  useGSAP(() => {
    if(count === 100){
      const tl = gsap.timeline({
        onComplete: ()=>{
          setshowmain(true);
        }
      })
      tl.to(preloader.current, {
        y: '-100vh',
        opacity: 0,
        duration: 2,
        ease:'power2.inOut'
      })
      tl.to(loadingtext.current, {
        y: '100px',
        opacity: 0,
        duration: 2,
        ease : 'power2.inOut',
      }, '<')
    }
  }, [count])

  return (
    <>
      {!showmain && (
        <>
          <div ref={preloader} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50" id='preloader'>
            <DotLottieReact
              src="/cart-loader.lottie"
              loop
              autoplay
              muted
              style={{ width: 350, height: 350 }}
            />
          </div>
          <div ref={loadingtext} className='text-3xl font-semibold absolute bottom-10 right-10 z-50'>Loading Gadgets... {count}% </div>
        </>
      )}

      {showmain && (
        <>
          <Navbar />
          {/* <Mainroutes /> */}
          {/* <Footer /> */}
        </>
      )}
    </>
  )
}

export default App