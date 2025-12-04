import React,{useContext} from 'react'
import Header from '../components/Header'
import { slide_img_1, slide_img_2, slide_img_3, slide_img_4, slide_img_5, chief_minister, deputy_chief_minister_1,deputy_chief_minister_2,guardian_minister,ias_officer,deputy_chief_executive_officer } from '../assets/assets'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import { AppContext } from '../context/AppContext'


export default function Home() {
  const { language } = useContext(AppContext);
  const slides = [slide_img_1, slide_img_2, slide_img_3, slide_img_4, slide_img_5];
  return (
    <div>
      <Header />
      <Carousel images={slides} autoSlide={true} autoSlideInterval={4000} />
      <div className="flex flex-col md:flex-row gap-10 justify-evenly items-center p-8">
        {/* Chief Minister */}
        <div className="flex flex-col items-center">
          <img
            src={chief_minister}
            alt="Chief Minister"
            className="h-[200px] w-[200px] object-cover"
            loading="lazy"
          />
          <h2 className="mt-3 text-lg font-semibold">{language === "en" ? "Shri. Devendra Fadnavis" : "श्री. देवेंद्र फडणवीस"}  </h2>
          <h3 className="text-[16px]">{language === "en" ? "Hon. Chief Minister" : "माननीय मुख्यमंत्री"} </h3>
        </div>

        {/* Deputy Chief Minister */}
        <div className="flex flex-col items-center">
          <img
            src={deputy_chief_minister_1}
            alt="Deputy Chief Minister"
            className="h-[200px] w-[200px] object-cover"
            loading="lazy"
            />
          <h2 className="mt-3 text-lg font-semibold">{language === "en" ? "Shri. Eknath Shinde" : "श्री. एकनाथ शिंदे "} </h2>
          <h3 className="text-[16px]">{language === "en" ? "Hon. Deputy Chief Minister" : "माननीय उपमुख्यमंत्री"} </h3>
        </div>

        {/* Deputy Chief Minister */}
        <div className="flex flex-col items-center">
          <img
            src={deputy_chief_minister_2}
            alt="Deputy Chief Minister"
            className="h-[200px] w-[200px] object-cover "
            loading="lazy"
          />
          <h2 className="mt-3 text-lg font-semibold">{language === "en" ? "Shri. Ajit Pawar" : "श्री. अजित पवार"}   </h2>
          <h3 className="text-[16px]">{language === "en" ? "Hon. Deputy Chief Minister" : "माननीय उपमुख्यमंत्री"} </h3>
        </div>

        {/* Guardian Minister */}
        <div className="flex flex-col items-center">
          <img
            src={guardian_minister}
            alt="Guardian Minister"
            className="h-[200px] w-[200px] object-cover "
            loading="lazy"
          />
          <h2 className="mt-3 text-lg font-semibold">{language === "en" ? "Shri. Jaykumar Rawal" : "श्री. जयकुमार रावळ"}   </h2>
          <h3 className="text-[16px]">{language === "en" ? "Hon. Guardian Minister" : "माननीय पालकमंत्री"} </h3>
        </div>
      </div>

        <div className="flex flex-col md:flex-row gap-10 justify-evenly items-center p-8">
        {/*IAS Officer */}
        <div className="flex flex-col items-center">
          <img
            src={ias_officer}
            alt="Ias Officer"
            className="h-[200px] w-[200px] object-fill "
            loading="lazy"
          />
          <h2 className="mt-3 text-lg font-semibold">{language === "en" ? "Shri. Aziz Shaikh" : "श्री. अजिज शेख "}   </h2>
          <h3 className="text-[16px]">{language === "en" ? " Chief Officer Zilla Parishad, Dhule" : "मुख्य अधिकारी जिल्हा परिषद, धुळे"} </h3>
        </div>

        {/*Deputy Chief Executive Officer */}
        <div className="flex flex-col items-center">
          <img
            src={deputy_chief_executive_officer}
            alt="Deputy Chief Executive Officer"
            className="h-[200px] w-[200px] object-cover "
            loading="lazy"
          />
          <h2 className="mt-3 text-lg font-semibold">{language === "en" ? "Mrs. Snehal Pawar" : "श्रीमती. स्नेहल पवार"}   </h2>
          <h3 className="w-70 text-wrap text-[16px] text-center">{language === "en" ? "Deputy Chief Executive Officer," : "उपमुख्य कार्यकारी अधिकारी,"} </h3>
          <h3 className="w-84 text-wrap text-[16px] text-center">{language === "en" ? "Gram Panchayat Department, Zilla Parishad, Dhule" : "ग्रामपंचायत विभाग, जिल्हा परिषद, धुळे"} </h3>
        </div>
      </div>

       
      <Footer />
    </div>
  )
}
