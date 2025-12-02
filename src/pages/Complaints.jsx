import React,{useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default function Complaints() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
      <title>तक्रारी</title>
      <meta  name='description' content='तुमची तक्रार किंवा सूचना नोंदवण्यासाठी कृपया खालील फॉर्म भरा'/>
      <link rel="canonical" href="/complaints" />
      <Header />
      <div style={{display: 'flex', justifyContent: 'center'}}>
        {
          isLoading && (
            <div className='absolute inset-72 flex flex-col items-center justify-center bg-gray-600 z-10 border-2 border-black rounded-2xl'>
              <div className='w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin'></div>
              <p className='text-white'>Loading Form ...</p>
            </div>
          )
        }
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScsHNOk02GzhLMIEOvM6M0u0BEZwbz4ogms2hxYbtxCFTVYRg/viewform?embedded=true" width="640" height="1577" frameborder="0" marginheight="0" marginwidth="0">लोड करत आहे…</iframe>
      </div>
      <Footer />
    </div>
  )
}