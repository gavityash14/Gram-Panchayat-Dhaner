import React, { useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AppContext } from '../context/AppContext'

export default function TalukaBackground() {
  const { language } = useContext(AppContext);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 bg-gray-200 px-10 py-10">
        <h1 className="text-black font-bold text-4xl">{language === "en" ? "Taluka Background" : "तालुका पार्श्वभूमी"}</h1>
        <hr className='mt-5 mb-5' />
        <h2 className='font-bold'>{language === "en" ? "Sakri taluka is one of the largest talukas in Dhule district (Maharashtra). This taluka has historical and cultural importance due to its natural resources, mountain ranges, tribal culture, and sacred river-temple sites.":"साक्री तालुका हा धुळे जिल्ह्यातील (महाराष्ट्र) सर्वात मोठ्या तालुक्यांपैकी एक आहे. नैसर्गिक संपदा, पर्वतश्रेणी, आदिवासी संस्कृती, आणि पावन नदी-देवस्थानांमुळे या तालुक्याला ऐतिहासिक व सांस्कृतिक महत्त्व आहे."}</h2>
        <p>
          {language === "en" ?
           (
            <ol className='list-decimal md:mt-4'>
                <li>Geographical Background</li>
                <ul className='list-disc md:pl-4'>
                  <li>Sakri taluka is situated between the Satpura and Western Ghats.</li>
                  <li>The Panjra River flows through the taluka.</li>
                  <li>It is blessed with natural beauty due to dense forests, hilly areas, and valleys.</li>
                  <li>The largest taluka in Dhule district in terms of area.</li>
                </ul>

                <li>Historical Background</li>
                <ul className='list-disc md:pl-4'>
                  <li>In ancient times, this area was an important part of the Khandesh region.</li>
                  <li>The influences of all the ruling periods like Satavahana, Pandava, Yadava, Badshahi, Peshwa are visible here.</li>
                  <li>The Lagod Mahal, the ruins of caves, and the remains of old towers and forts near Sakri reveal the ancient heritage.</li>
                  <li>During the previous rule, this area was connected to the trade route.</li>
                </ul>
           </ol>
           )
           
            : ( 
             <ol className='list-decimal md:mt-4'>
                <li>भौगोलिक पार्श्वभूमी</li>
                 <ul className='list-disc md:pl-4'>
                  <li>साक्री तालुका सातपुडा व पश्चिम घाटाच्या टोकांमध्ये वसलेला आहे.</li>
                  <li>तालुक्यातून पांझरा नदी वाहते.</li>
                  <li>घनदाट जंगल, डोंगराळ भाग, दरी–खोऱ्यांमुळे नैसर्गिक सौंदर्य लाभलेले.</li>
                  <li>क्षेत्रफळाच्या दृष्टीने धुळे जिल्ह्यातील सर्वात विस्तीर्ण तालुका.</li>
                 </ul>

                 <li>ऐतिहासिक पार्श्वभूमी</li>
                 <ul className='list-disc md:pl-4'>
                  <li>प्राचीन काळात हा परिसर खंडेश प्रदेशाचा महत्त्वाचा भाग होता.</li>
                  <li>सातवाहन, पांडव, यादव, बादशाही, पेशवाई या सर्व सत्ताकाळांचे प्रभाव येथे दिसतात.</li>
                  <li>साक्री जवळील लागूद महाल, लेण्यांचे अवशेष, जुन्या बुरूज–किल्ल्यांचे अवशेष यामुळे प्राचीन वारसा दिसून येतो.</li>
                  <li>पूर्वीच्या शासनकाळात हा भाग व्यापार मार्गाशी जोडलेला होता.</li>
                  </ul>
              </ol>
            )
          }
        </p>
      </div>
      <Footer />
    </div>
  )
}
