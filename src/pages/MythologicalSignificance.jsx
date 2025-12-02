import React, { useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AppContext } from '../context/AppContext'

export default function MythologicalSignificance() {
  const { language } = useContext(AppContext);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 bg-gray-200 px-10 py-10">
        <h1 className="text-black font-bold text-4xl">{language === "en" ? "Mythological Significance" : "पौराणिक महत्व"} </h1>
        <hr className='mt-5 mb-5' />
        
          <h2 className='font-bold'>{language === "en" ? "Historical events of Dhaner-Amali village.":"धनेर -आमळी गावातील ऐतिहासिक घटना."}</h2>
          <h3 classname='text-2xl'>{language === "en"? "Shri Kanhaiyalal Maharaj Temple at Dhaner-Amli is located in Sakri taluka of Dhule district and is a temple of Shri Vishnu. This temple is built in Hemadpanti style and is believed to be a Jagraj temple. A big pilgrimage is held here on Ekadashi in the month of Kartik, in which lakhs of devotees come for darshan." : " धनेर -आमळी येथील श्री कन्हैयालाल महाराज मंदिर हे धुळे जिल्ह्यातील साक्री तालुक्यात आहे आणि ते श्री विष्णूचे मंदिर आहे. हे मंदिर हेमाडपंती शैलीत बांधलेले आहे आणि भाविकांच्या श्रद्धेनुसार हे एक जागृत देवस्थान आहे. कार्तिक महिन्यातील एकादशीला येथे मोठी यात्रा भरते, ज्यामध्ये लाखो भाविक दर्शनासाठी येतात."}</h3>
          {language === "en" ?
            (
          <ol className='list-decimal md:mt-4'>
            <ul className='list-disc md:pl-4'>
            </ul>
            <li>Location: Amli village, Sakri taluka, Dhule district.</li>
            <li>Deity: This temple is dedicated to Shri Vishnu, who is also known as 'Kanhaiyalal Maharaj'. This is not a temple of Krishna.</li>
            <li>Construction: This temple is built in Hemadpanti architectural style.</li>
            <li>Belief: Devotees believe that this is a Jagraj temple.</li>
            <li>Fame: The pilgrimage held here on Ekadashi in the month of Kartik is very famous, where a large number of devotees come for darshan.</li>
            <li>Story: According to a mythological story, the idol in the temple at Amli is related to King Makardhwaj of Mulher.</li>
      
      </ol>)
      : (
        <ol className='list-decimal md:mt-4'>
          <ul className='list-disc md:pl-4'>
            </ul>
            <li>स्थान: आमळी गाव, साक्री तालुका, धुळे जिल्हा.</li>
            <li>बांधकाम: हे मंदिर हेमाडपंती स्थापत्यशैलीत बांधलेले आहे.</li>
            <li>श्रद्धा: भाविकांचा असा विश्वास आहे की हे एक जागृत देवस्थान आहे.</li>
            <li>प्रसिद्धी: कार्तिक महिन्यातील एकादशीला येथे भरणारी यात्रा खूप प्रसिद्ध आहे, जिथे मोठ्या संख्येने भाविक दर्शनासाठी येतात.</li>
            <li>कथा: एका पौराणिक कथेनुसार, आमळी येथील मंदिरातील मूर्तीचा संबंध मुल्हेरचा राजा मकरध्वज याच्याशी आहे.</li>
          
        </ol>
      )}
          
      </div>
      <Footer />
    </div>
  )
}
