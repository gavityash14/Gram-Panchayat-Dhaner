import React from 'react'
import Header from '../components/Header'
import { sarpanch, deputy_sarpanch, panchayat_officer, panchayat_member_1, panchayat_member_2, panchayat_member_3, panchayat_member_4, panchayat_member_5, panchayat_member_6, panchayat_member_7, panchayat_staff_1, panchayat_staff_2, panchayat_staff_3, panchayat_staff_4, panchayat_staff_5 } from '../assets/assets'
import Footer from '../components/Footer'


export default function ContactUs() {
  return (
    <div>
      <Header />
      <div className="bg-black  flex items-center justify-center px-4 py-4 md:px-10 md:py-10">
        <div className="bg-gray-600 rounded-2xl p-2 md:p-8 w-full text-center">
          <h1 className="text-white font-bold text-3xl mb-8">Contact Us</h1>

          <div className="flex flex-row gap-10 justify-center items-center text-white">
            {/* Sarpanch */}
            <div className="flex flex-col items-center">
              <img
                src={sarpanch}
                alt="sarpanch"
                className="h-[60px] w-[60px] md:h-[200px] md:w-[200px] object-cover rounded-full"
              />
              <h2 className="mt-3 text-[12px] md:text-lg font-semibold">श्री.गोटू लासू माळचे </h2>
              <h3 className="text-[10px] md:text-[16px]">माननीय सरपंच</h3>
              <h3 className="text-[10px] md:text-sm">मो. 9022524067</h3>
            </div>

              {/* Deputy Sarpanch */}
             <div className="flex flex-col items-center">
              <img
                src={deputy_sarpanch}
                alt="deputy_sarpanch"
                className="h-[60px] w-[60px] md:h-[200px] md:w-[200px] object-cover rounded-full"
                />
                <h2 className="mt-3 text-[12px] md:text-lg font-semibold">सौ.आल्काबाई प्रभाकर पाटील </h2>
                <h3 className="text-[10px] md:text-[16px]">माननीय उपसरपंच</h3>
                <h3 className="text-[10px] md:text-sm">मो. 9623286318</h3>
              </div>

            {/* Panchayat Officer */}
            <div className="flex flex-col items-center">
              <img
                src={panchayat_officer}
                alt="panchayat_officer"
                className="h-[60px] w-[60px] md:h-[200px] md:w-[200px] object-cover rounded-full"
              />
              <h2 className="mt-3 text-[12px] md:text-lg font-semibold">श्री.बी.टी.पवार </h2>
              <h3 className="text-[10px] md:text-[16px]">ग्रामपंचायत अधिकारी</h3>
              <h3 className="text-[10px] md:text-sm">मो. 8888562085</h3>
            </div>
          </div>
          {/* Panchayat Members */}
          <h1 className="text-green-500 font-bold text-2xl mb-8 mt-8 text-center">
            ग्रामपंचायत सदस्य
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 justify-items-center text-white">
            {/* Member 1 */}
            <div className="flex flex-col items-center">
              <img
                src={panchayat_member_1}
                alt="panchayat member"
                className="h-[60px] w-[60px] md:h-[200px] md:w-[200px] object-cover rounded-full"
              />
              <h2 className="mt-3 text-[12px] md:text-lg font-semibold">श्री.प्रताप खंडेराव पाटील</h2>
            </div>

            {/* Member 2 */}
            <div className="flex flex-col items-center">
              <img
                src={panchayat_member_2}
                alt="panchayat member"
                className="h-[60px] w-[60px] md:h-[200px] md:w-[200px] object-cover rounded-full"
              />
              <h2 className="mt-3 text-[12px] md:text-lg font-semibold">श्री.लक्ष्मण सुक्राम सोनवणे </h2>
            </div>

            {/* Member 3 */}
            <div className="flex flex-col items-center">
              <img
                src={panchayat_member_3}
                alt="panchayat member"
                className="h-[60px] w-[60px] md:h-[200px] md:w-[200px] object-cover rounded-full"
              />
              <h2 className="mt-3 text-[12px] md:text-lg font-semibold">श्री.भुरा नारायण भिल </h2>
            </div>

            {/* Member 4 */}
            <div className="flex flex-col items-center">
              <img
                src={panchayat_member_4}
                alt="panchayat member"
                className="h-[60px] w-[60px] md:h-[200px] md:w-[200px] object-cover rounded-full"
              />
              <h2 className="mt-3 text-[12px] md:text-lg font-semibold">सौ.सुवर्णाबाई अरुण पाटील </h2>
            </div>

            {/* Member 5 */}
            <div className="flex flex-col items-center">
              <img
                src={panchayat_member_5}
                alt="panchayat member"
                className="h-[60px] w-[60px] md:h-[200px] md:w-[200px] object-cover rounded-full"
              />
              <h2 className="mt-3 text-[12px] md:text-lg font-semibold">सौ.अनिताबाई महेंद्र पवार </h2>
            </div>

            {/* Member 6 */}
            <div className="flex flex-col items-center">
              <img
                src={panchayat_member_6}
                alt="panchayat member"
                className="h-[60px] w-[60px] md:h-[200px] md:w-[200px] object-cover rounded-full"
              />
              <h2 className="mt-3 text-[12px] md:text-lg font-semibold">सौ.ग्यानूबाई काळू भिल </h2>
            </div>

            {/* Member 7 */}
            <div className="flex flex-col items-center">
              <img
                src={panchayat_member_7}
                alt="panchayat member"
                className="h-[60px] w-[60px] md:h-[200px] md:w-[200px] object-cover rounded-full"
              />
              <h2 className="mt-3 text-[12px] md:text-lg font-semibold">सौ.आक्काबाई बापू भिल</h2>
            </div>
          </div>

          {/* Staff */}
          <h1 className='text-green-500 font-bold text-2xl mb-8 mt-8'>कर्मचारी वृंद</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 justify-items-center text-white">
            {/* Staff 1 */}
            <div className="flex flex-col items-center">
              <img
                src={panchayat_staff_1}
                alt="staff 1"
                className="h-[60px] w-[60px] md:h-[200px] md:w-[200px] object-cover rounded-full"
              />
              <h2 className="mt-3 text-[12px] md:text-lg font-semibold">श्री.राजू वसंत खोरे </h2>
              <h3 className="text-[10px] md:text-[16px]">ग्रामपंचायत शिपाई</h3>
              <h3 className="text-[10px] md:text-sm">मो. 9545347121</h3>
            </div>

            {/* Staff 2 */}
            <div className="flex flex-col items-center">
              <img
                src={panchayat_staff_2}
                alt="staff 2"
                className="h-[60px] w-[60px] md:h-[200px] md:w-[200px] object-cover rounded-full"
              />
              <h2 className="mt-3 text-[12px] md:text-lg font-semibold">श्री.सुनिल आनंदा पवार </h2>
              <h3 className="text-[10px] md:text-[16px]">पाणी पुरवठा कर्मचारी</h3>
              <h3 className="text-[10px] md:text-sm">मो. 7498083546</h3>
            </div>

            {/* Staff 3 */}
            <div className="flex flex-col items-center">
              <img
                src={panchayat_staff_3}
                alt="staff 3"
                className="h-[60px] w-[60px] md:h-[200px] md:w-[200px] object-cover rounded-full"
              />
              <h2 className="mt-3 text-[12px] md:text-lg font-semibold">श्री.हंसराज संजय पाटील  </h2>
              <h3 className="text-[10px] md:text-[16px]">ग्राम रोजगार सेवक</h3>
              <h3 className="text-[10px] md:text-sm">मो. 8605331422</h3>
            </div>

            {/* Staff 4 */}
            <div className="flex flex-col items-center">
              <img
                src={panchayat_staff_4}
                alt="staff 3"
                className="h-[60px] w-[60px] md:h-[200px] md:w-[200px] object-cover rounded-full"
              />
              <h2 className="mt-3 text-[12px] md:text-lg font-semibold">श्री.दिलीप गोकुळ अहिरे </h2>
              <h3 className="text-[10px] md:text-[16px]">संगणक परिचालक</h3>
              <h3 className="text-[10px] md:text-sm">मो. 9765091915</h3>
            </div>

            {/* Staff 5 */}
            <div className="flex flex-col items-center">
              <img
                src={panchayat_staff_5}
                alt="staff 3"
                className="h-[60px] w-[60px] md:h-[200px] md:w-[200px] object-cover rounded-full"
              />
              <h2 className="mt-3 text-[12px] md:text-lg font-semibold">सौ.मंजुळाबाई सुनिल भिल </h2>
              <h3 className="text-[10px] md:text-[16px]">पेसा मोबिलायझर</h3>
            </div>
          </div>
          <div className='flex flex-col md:flex-row text-white mt-16 gap-4 md:px-20 md:pb-20 md:pt-10'>
            <div className='md:w-[100%] rounded-2xl overflow-hidden'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29779.616944862697!2d74.05364531032518!3d21.09453379647357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdfad2ae063cd33%3A0x90cca9384151911b!2sDhaner%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1764650019997!5m2!1sen!2sin" width="600" height="450" style={{border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
               </iframe>

            </div>

            <div className='flex-row text-start py-4 px-10 bg-gray-500 md:ml-5 rounded-2xl self-center w-full md:h-[450px]'>
              <h3 className='font-bold text-2xl text-center'>Gram Panchayat, Dhaner</h3>
              <hr className='mt-4 mb-4' />
              <p className='md:text-[18px] md:pt-4'><strong>Email Id:</strong> dhanersarpanch@gmail.com</p>
              <p className='md:text-[18px] md:pt-4'><strong>LGD Code: </strong>174356</p>
              <p className='md:text-[18px] md:pt-4'><strong>Censes Code: </strong>526336</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}
