import React,{useContext} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AppContext } from '../context/AppContext'

export default function HistoricalSignificance() {
  const { language } = useContext(AppContext);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 bg-gray-200 px-10 py-10">
        <h1 className='text-black font-bold text-4xl' >{language === "en" ? "Historical Significance" : "ग्रामपंचायतीचे ऐतिहासिक महत्व"}</h1>
        <hr className='mt-5 mb-5' />
        <p>
          {language === "en" ?
          "Dhaner Gram Panchayat is located 87 km from the district headquarters and 34 km from Sakri taluka, adjacent to Kanhaiyalal Maharaj Tirth Kshetra Amli, which is called Kashi in Dhule district and Khandesh. According to the 2011 census, the population of the Gram Panchayat is 1667, out of which 846 are women and 821 are men. The village has a population of 1181 non-tribals and 14 are scheduled castes. The total number of families in the village is 267. Experts say that the village was named Dhaner because it was a wealthy village from the past. With the cooperation and guidance of the dedicated Group Development Officer of Sakri Taluka, Mr. Shashikant Sonawane, Extension Officer (Pt.) Mr. Shashikant Thackeray, other officers and employees, and villagers of the village, we are participating in the Chief Minister's Gram Samruddha Panchayat Raj Abhiyan."
          :`धनेर ग्रामपंचायत जिल्हा मुख्यालयापासुन 87 कि.मी. अंतरावर व साक्री तालुक्यापासुन 34 कि.मी.अंतरावर तर धुळे जिल्ह्यातील व खानदेशातील काशी म्हणून संबोधल्या गेलेल्या कन्हैयालाल महाराज तिर्थक्षेत्र आमळी लगत वसलेली ग्रामपंचायत आहे.ग्रामपंचायतीची लोकसंख्या 2011 च्या जनगणनेनुसार 1667 इतकी असुन त्यापैकी महिला 846 व पुरुष 821 लोकसंख्या आहे.गावात अन.जमाती लोकसंख्या 1181 व अनु.जाती 14 इतकी आहे. गावात एकुण कुटूंबे 267 इतकी आहेत.पुर्वीपासुन धन संपत्तीने समृध्द असलेला गाव असल्याकारणाने गावाचे नाव धनेर असे पडलेले असल्याचे जाणकारांचे म्हणणे आहे. साक्री तालुक्याचे कर्तव्यदक्ष गटविकास अधिकारी मा.शशिकांत सोनवणे व विस्तार अधिकारी(पं.)मा.शशिकांत ठाकरे व इतर अधिकारी व कर्मचारी व गावातील ग्रामस्थ यांचे सहकार्याने व मार्गदर्शनाखाली आम्ही मुख्यमंत्री ग्राम समृध्द पंचायतराज अभियानात सहभाग घेत आहोत.
`}
        </p>
      </div>
      <Footer />
    </div>
  )
}