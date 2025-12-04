import React, { useState, useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AppContext } from '../context/AppContext';

export default function AboutGramPanchayat() {
  const [field, setField] = useState('overview');
  const { language } = useContext(AppContext);
  const tabClass = (isActive, isFirst) => {
    const base = 'border-2 bg-cyan-300 rounded-2xl text-center py-1 px-4 hover:bg-amber-300 cursor-pointer transition';
    const spacing = isFirst ? '' : 'mt-4';
    const active = 'bg-amber-300 text-white';
    const inactive = 'bg-cyan-300 text-black';
    return `${base} ${spacing} ${isActive ? active : inactive}`;
  }
  const tabs = [
    { key: 'overview', en: 'Overview', mr: 'आढावा'},
    { key: 'demographics', en: 'Demographics', mr: 'लोकसंख्या'},
    { key: 'education', en: 'Education', mr: 'शिक्षण'},
    { key: 'culture', en: 'Culture', mr: 'संस्कृती'}
  ];

  const details = {
    overview: {
      title: "Dhaner Gram Panchayat",
      details: `Mouje Dhaner is a Gram Panchayat and the Gram Panchayat was established on 10/05/1962 and there are a total of 9 members in the Gram Panchayat. Out of which 5 seats are for women and 4 seats are for men. <br />
      The post of Sarpanch of the Panchayat is for Scheduled Tribe men. A total of 6 seats are reserved for women and men and 3 seats are open.<br />
      The term of the Gram Panchayat Executive is from 20/08/2022 to 21/08/2027.`,
      mr_title: "धनेर ग्रामपंचायत",
      mr_details: `मौजे धनेर ग्रामपंचायत असून ग्रामपंचायत स्थापना १०/०५/१९६२ रोजी झाली असून ग्रामपंचायतीत एकूण ९ सदस्य आहेत. त्यापैकी ५ जागा महिलांसाठी व ४ जागा पुरुषांसाठी आहेत.<br /> 
      पंचायतीचे सरपंच पद अनुसूचित जमाती पुरुष आहे.स्त्री व पुरुष एकूण ६जागा राखीव आहेत ३ जागा खुल्या आहेत.<br />
      ग्रामपंचायत कार्यकारिणीचा कार्यकाळ २०/०८/२०२२ ते २१/०८/२०२७ असा आहे.`,
    },
    demographics: {
      title: "Population and Geographic Information",
      details: `The population of the Gram Panchayat according to the 2011 census: Female-846, Male-821, Total-1667.<br />
      Geographic area of the village: 1757.16 hectares:<br />
      • Dry land area-247.33hectares<br />
      • Irrigated area-616.17 hectares<br />
      • Forest area-587.33 hectares<br />
      • Village settlement area-14.54 hectares<br />
      • River bed-15.81 hectares<br />
      • Roads, canals, pipelines-7.95 hectares<br />
      • Area Under Cultivation-879.70 hectares<br />
      Distance from taluka: 34 km, Distance from district: 87 km.`,
      mr_title: "लोकसंख्या आणि भौगोलिक माहिती",
      mr_details: `ग्रामपंचायतीची लोकसंख्या सन-२०११ च्या जनगणना नुसार:
<br />
स्त्री-846 पुरुष-821 एकूण 1667 एवढी आहे.
<br />
गावाचे भौगोलिक क्षेत्र: 1757.16 हेक्टर आहे:
<br />
• जिरायत क्षेत्र-247.33 हेक्टर
<br />
• बागायत क्षेत्र- 616.17 हेक्टर
<br />
• वनक्षेत्र-587.33 हेक्टर
<br />
• गावठाण क्षेत्र-14.54 हेक्टर
<br />
• नदीपात्र-15.81 हेक्टर
<br />
• रस्ते, कॅनोल, नळमार्ग- 7.95 हेक्टर
<br />
• लागवडीखालील क्षेत्र-879.70 हेक्टर
<br />
गावापासून तालुक्याचे अंतर 34 कि.मी. व जिल्ह्याचे अंतर 87 कि.मी. आहे.`,
    },
    education: {
      title: "Educational Facilities",
      details: `Educational facilities under the Gram Panchayat:<br />
      Zilla Parishad Primary Schools-1<br />
      • Dhaner (Grades 1-4): Boys-55, Girls-53<br />
      • Late B G Patil Secondary and Higher Secondary School Dhaner Boys-365, Girls-384, Total=749<br />
      Anganwadi Centers-2<br />
      • Children aged 0-6 years: Boys-95, Girls-69`,
      mr_title: "शैक्षणिक सुविधा",
      mr_details: `ग्रामपंचायत अंतर्गत शैक्षणिक सुविधा:
<br />
जि.प.प्राथमिक शाळा-1
<br />
• धनेर  (वर्ग 1 ते 4): मुले-55, मुली-53
<br />
• कै. बी. जी. पाटील माध्यमिक आणि उच्च माध्यमिक शाळा धानेर मुले-३६५, मुली-३८४, एकूण=७४९
<br />
अंगणवाडी केंद्र-2
<br />
• 0 ते 6 वर्ष वयोगटातील मुले-95, मुली-69`,
    },
    culture: {
      title: "Cultural Information",
      details: `Tradition and Culture:<br />
      Gram Panchayat Dhaner is located approximately 3 km east of Shri. Kanhaiyalal Maharaj pilgrimage site Amli. It is the only Swayambhu Vishnu in Uttar Maharashtra, which is said to have appeared before the 1000th BC. It is also a tourist destination. Malangaon Dam is located in the east of the village and Kan River is in the south. Dhaner village is named after the woman Dhanu.<br /><br />
      Special Information:<br />
      • 81% of the tribal Bhil community lives under the Gram Panchayat.<br />
      • 19% of the people of other communities live under the Gram Panchayat.<br />
      • Worshipped deity: Dongriya Dev.<br />
      • Nature worship: Wagh Dev, Nag Dev, Nilwa Dev, Surya Dev, Chandra Dev, Masan Dev.<br />
      • This area is rich in biodiversity and traditional tribal culture is preserved.<br />
      • People of other communities worship Bhavani, Mahadev, Dhaneshwar etc.<br />`,
      mr_title: "सांस्कृतिक माहिती",
      mr_details: `परंपरा आणि संस्कृती:
<br />
ग्रामपंचायत धनेर  ही श्री.कन्हैयालाल महाराज तीर्थक्षेत्र आमळी च्या पूर्वेस साधारणपणे ३कि.मी. अंतरावर असून उत्तरमहाराष्ट्रातील एकमेव स्वयंभू विष्णू मृती प्रगट इ.स.पूर्वीची आख्यायिका आहे तसेच आलालदरी धबधबा पर्यटनस्थळ आहे.तसेच गावाच्या पूर्वेस मालनगाव धरण असून दक्षिणेस कान नदी आहे.धनेर  गाव धनू या महिलेच्या नावावरून आस्तीवात आला आहे.<br />
<br />
विशेष माहिती:<br />
* ग्रामपंचायत अंतर्गत ८१% आदिवासी भिल्ल समाजाचे लोक वास्तव्य करतात. <br />
* ग्रामपंचायत अंतर्गत १९% इतर समाजाचे लोक वास्तव्य करतात.<br />
* आराध्यदैवत: डोंगऱ्या देव.<br />
* निसर्ग पूजा: वाघ देव, नाग देव, नीळवा देव, सुर्या देव, चंद्र देव, मसान देव.<br />
हे क्षेत्र जैवविविधतेने समृद्ध असून पारंपरिक आदिवासी संस्कृती जपली जाते.<br />
•इतर समाजाचे लोक भवानी,महादेव,धनेश्वर इ.पूजा करतात.<br />`,
    }
  };

  

  return (
    <div>
      <Header />
      <div className='flex flex-col md:flex-row bg-gray-200 px-10 gap-5 py-10 md:h-[550px] justify-center'>
        <h1 className='text-black font-bold text-4xl self-center hidden md:flex' dangerouslySetInnerHTML={{ __html: (language === "en") ? "About <br />Gram <br />Panchayat" : "ग्रामपंचायतीबद्दल" }}></h1>
        <h1 className='text-black font-bold text-4xl self-center flex md:hidden text-center' dangerouslySetInnerHTML={{ __html: (language === "en") ? "About <br />Gram Panchayat" : "ग्रामपंचायतीबद्दल" }}></h1>
        <div className='flex-col self-center'>
          {tabs.map((tab,idx) => (
            <div
            key={tab.key}
            onClick={() => setField(tab.key)}
            className={tabClass(field === tab.key, idx === 0)}
            >
              {language === "en" ? tab.en : tab.mr}
            </div>
          ))}
        </div>

        <div className='flex max-w-[760px] flex-col bg-white rounded-2xl p-5 w-full mt-4 md:mt-0 max-h-[80vh] overflow-y-auto'>
          <h1 className='font-bold text-[18px]'>{language === "en" ? details[field].title : details[field].mr_title}</h1>
          <hr />
          <div className='mt-4' dangerouslySetInnerHTML={{ __html: (language === "en") ? details[field]?.details : details[field]?.mr_details }} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
