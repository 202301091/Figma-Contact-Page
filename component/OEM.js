import React from 'react'
import { faArrowRight, faBullseye, faCircleCheck, faLayerGroup, faMedal, faRuler, faAlarmClock, faVial, faWandMagicSparkles, faClock, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const OEM = () => {
   return (
      <>

         {/* Section-1 */}
         <div className="section_1 bg-gradient-to-b from-[#FFFFFF] to-[#F6F8FA] w-full">
            <div className="container ">
               <div className="section flex flex-col md:flex-row gap-[50px] md:gap-[30px] lg:gap-[50px] px-[20px] py-[80px] items-center md:items-start">
                  <div className='left md:w-[55%] w-full'>
                     <h1 className='text-[56px] px-5 font-bold text-[#034695] pb-[30px]'><span className='text-[#F27092]'>OEM</span> Private Labeling</h1>
                     <p className='text-[18px] px-5 pb-[20px]'>A.M.Hygiene specializes in customized Private Label contract manufacturing of wet wipes. We offer services to businesses who wish to launch World Class wet wipes in their own Brand, from basic to high premium quality.Helping you through choosing the best wipes formulations, substrates and packaging for your specific needs.</p>
                     <p className='text-[18px] px-5 pb-[40px]'>Complete service from Art Work to formulation support is provided for individual requirement of the client at competitive cost.</p>

                     <div className="flex  gap-[30px] md:px-5 px-2">
                        <button className='bg-[#F27092] px-[30px] py-[15px] rounded-[50px] text-white text-[14px] flex gap-2.5 font-medium'><span>Contact Us </span> <FontAwesomeIcon className='w-4' icon={faArrowRight} /></button>
                        <button className='bg-white px-[30px] py-[15px] rounded-[50px] border text-[#034695] text-[14px] flex gap-2.5 font-medium'><span>About Us</span><FontAwesomeIcon className='w-4' icon={faArrowRight} /></button>
                     </div>
                  </div>
                  <div className='right px-8 py-10 md:w-[45%]  w-auto sm:w-[60%]   h-fit  shadow-[#0000000D] shadow-2xl md:py-10  md:mx-2 bg-white rounded-[20px]  flex items-center flex-col'>
                     <img className='w-[60px] h-[60px] bg-[#034695] p-[15px] rounded-[15px] ' src="OEM-icon1.png" alt="OEM-icon1" />
                     <h1 className='font-bold text-[40px] pt-[10px]'>Your Brand</h1>
                     <h3 className='text-[22px] text-[#034695] pt-[5px]'>Premium Wet Wipes</h3>
                     <div className="option flex mt-[15px] gap-[50px] lg:gap-[50px] md:gap-[20px]">
                        <div>
                           <p className='flex items-center gap-2.5'><img className='w-5 h-5' src="OEM-icon2.png" alt="OEM-icon2" /><span className=' text-[18px]'>Size Options</span></p>
                           <ul className='list-disc  text-[12px] flex flex-col gap-[5px] md:p-[7px] custom-marker ml-6'>
                              <li>170mm X 200mm</li>
                              <li>150mm X 200mm</li>
                              <li>Custom Sizes</li>
                           </ul>
                        </div>
                        <div>
                           <p className='flex items-center gap-2.5'><img className='w-5 h-5' src="OEM-icon3.png" alt="OEM-icon3" /><span className='text-[18px]'>Pack Size</span></p>
                           <ul className='list-disc text-[12px] flex flex-col gap-[5px] md:p-[7px] custom-marker ml-6'>
                              <li>20 - 25 Pulls</li>
                              <li>72 - 80 Pulls</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>


         {/* Section-2 */}
         <div className="section_2 w-full bg-white ">
            <div className="  container">
               <div className='flex gap-[80px] flex-col justify-center items-center py-[80px] px-[20px]  md:p-[80px]'>
                  <div className='Art_Work flex flex-col justify-center items-center '>
                     <div className='flex flex-col items-center'>
                        <h1 className='font-semibold text-[40px] text-[#034695]'>Art Work Approval Process</h1>
                        <p className='font-light text-[18px] py-[30px] md:p-[30px]'>Prior to processing your order, we will work with you to finalize all art work including any necessary regulatory information.</p>
                     </div>
                     <div className="flex flex-col sm:w-[80%] md:w-auto  md:flex-row gap-10 mt-[10px]">
                        <div className='flex   flex-col  items-center justify-normal  lg:items-start lg:text-start lg:flex-row md:w-1/2  gap-2.5 bg-[#DBEAFE] border border-[#BFDBFE] p-10 rounded-[20px]'>
                           <div className='w-[60px] h-[60px] bg-[#034695] p-[15px] rounded-[20px] text-white' ><FontAwesomeIcon className='w-[30px] h-[30px]' icon={faBullseye} /></div>
                           <div>
                              <h1 className='font-medium text-[24px] mb-[20px]'>Option-1 : Design Yourself</h1>
                              <p className='font-light text-[18px]'>You can design the art work yourself .Once completed please email us. We will review and prepare for laminate & label printing.</p>
                           </div>
                        </div>
                        <div className='flex flex-col  items-center justify-normal  lg:items-start lg:text-start lg:flex-row md:w-1/2 gap-2.5 bg-[#FFEFF3] border border-[#FFD2DE] p-10 rounded-[20px]'>
                           <div className='w-[60px] h-[60px] bg-[#F27092] p-[15px] rounded-[20px] text-white' ><FontAwesomeIcon className='w-[30px] h-[30px]' icon={faWandMagicSparkles} /></div>
                           <div>
                              <h1 className='font-medium text-[24px] mb-[20px]'>Option-2 : We Design For You</h1>
                              <p className='font-light text-[18px]'>Our design team can assist you in finalizing a unique design, Using your logos, colors and information or we can create something totally new from scratch.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='Formulation flex flex-col justify-center items-center '>
                     <div className='flex flex-col  items-center'>
                        <h1 className='font-semibold text-[40px] text-[#034695] mb-[40px]'>Formulation Process</h1>
                     </div>
                     <div className="flex sm:w-[80%] md:w-auto md:flex-row flex-col gap-10">
                        <div className='flex flex-col   items-center justify-normal  lg:items-start lg:text-start lg:flex-row md:w-1/2 gap-2.5 bg-[#FFEFF3] border border-[#FFD2DE] p-10 rounded-[20px]'>
                           <div className='w-[60px] h-[60px] bg-[#F27092] p-[15px] rounded-[20px] text-white' ><FontAwesomeIcon className='w-[30px] h-[30px]' icon={faMedal} /></div>
                           <div>
                              <h1 className='font-medium text-[24px] mb-[20px]'>Option-1 : Our Proven Formulations</h1>
                              <p className='font-light text-[18px]'>Our R&D have already developed unique and cost effective formulations for wet wipe impregnation .We will assist you in choosing the best formulation for your specific requirement .Once approved, we will provide samples before mass production for final consent of formulations and fragrance.</p>
                           </div>
                        </div>
                        <div className='flex flex-col  items-center justify-normal  lg:items-start lg:text-start lg:flex-row md:w-1/2 gap-2.5 bg-[#DBEAFE] border border-[#BFDBFE] p-10 rounded-[20px]'>
                           <div className='w-[60px] h-[60px] bg-[#034695] p-[15px] rounded-[20px] text-white' ><FontAwesomeIcon className='w-[30px] h-[30px]' icon={faVial} /></div>
                           <div>
                              <h1 className='font-medium text-[24px] mb-[20px]'>Option-2 : Your Custom Formulation</h1>
                              <p className='font-light text-[18px]'>You can provide your formulations .After complete development for proper stability and micro-testing we will provide lab developed samples before mass production for final consent of formulations and fragrances.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>


         {/* Section-3 */}
         <div className='section_3 w-full bg-[#F6F8FA]'>
            <div className="container ">
               <div className="start  py-[80px] px-[20px]  flex flex-col items-center gap-[80px] md:items-start  md:p-[80px]">
                  <div className='part-1 flex flex-col items-center md:items-start md:flex-row gap-[40px]'>
                     <div className='md:w-[60%]'>
                        <h1 className='font-semibold text-[40px] text-[#034695] mb-[30px]'>Addition</h1>
                        <p className='font-light text-[18px] text-[#000000] mb-[20px]'>We can guide you through selection of suitable spunlace non woven fabric substrates for your application ranging from 40 gsm to 80 gsm.</p>
                        <p className='font-light text-[18px] text-[#000000]'>Selection of specific gsm & fabric blend is important for its suitability to particular application .We will help you select the best blend of Polyester / Viscos and 100% Biodegradable Non woven fabric on request.</p>
                     </div>
                     <div className='md:w-[40%] md:min-w-[40%] min-w-[60vw] bg-[#FFEFF3] border rounded-[20px] border-[#FFD2DE] flex flex-col gap-[10px] items-center p-[20px] lg:p-[40px]'>
                        <div className='w-[60px] flex justify-center items-center h-[60px] bg-[#F27092] p-[15px] rounded-[15px]'>
                           <img className='w-11 h-8 ' src="OEM-icon1.png" alt="" />
                        </div>
                        <h2 className='font-medium text-[24px] mb-[10px] '>Fabric Selection</h2>
                        <div className="flex flex-col items-center gap-[10px]">
                           <div className="flex gap-[10px]">
                              <FontAwesomeIcon className='w-5 h-5 text-[#F27092] ' icon={faCircleCheck} />
                              <h3 className='text-[18px] font-light'>Polyster / Viscose blinds</h3>
                           </div>
                           <div className="flex gap-[10px]">
                              <FontAwesomeIcon className='w-5 h-5 text-[#F27092]' icon={faCircleCheck} />
                              <h3 className='text-[18px] font-light'>100% biodegradable options</h3>


                           </div>
                           <div className="flex  gap-[10px]">
                              <FontAwesomeIcon className='w-5 h-5 text-[#F27092]' icon={faCircleCheck} />
                              <h3 className='text-[18px] font-light'>Application-specific selection</h3>


                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='part-2 flex-col-reverse flex  items-center md:items-start md:flex-row gap-[40px]'>

                     <div className='md:w-[45%] md:min-w-[45%] min-w-[60vw]  bg-[#DBEAFE] border rounded-[20px] border-[#BFDBFE] flex flex-col gap-[10px] items-center p-[20px] lg:p-[40px]'>
                        <div className='w-[60px] flex justify-center items-center h-[60px] bg-[#034695] p-[15px] rounded-[15px]'>
                           <img className='w-11 h-8 ' src="OEM-icon1.png" alt="" />
                        </div>
                        <h2 className='font-medium text-[24px] mb-[6px] '>Laminate Structure</h2>
                        <div className="flex flex-col w-full items-center gap-[10px]">
                           <div className="flex flex-col items-center justify-center  w-full bg-white rounded-[10px] p-2.5">
                              <h3 className='font-medium text-[18px]'>Barrier Layer</h3>
                              <p className='font-light text-[16px]'>Polyster / Viscose blinds</p>
                           </div>
                           <div className="flex flex-col items-center justify-center  w-full bg-white rounded-[10px] p-2.5">
                              <h3 className='font-medium text-[18px]'>Print Layer</h3>
                              <p className='font-light text-[16px]'>Aesthetic appearance</p>
                           </div>
                           <div className="flex flex-col items-center justify-center  w-full bg-white rounded-[10px] p-2.5">
                              <h3 className='font-medium text-[18px]'>Seal Layer</h3>
                              <p className='font-light text-[16px]'>Functional integrity</p>
                           </div>
                        </div>
                     </div>
                     <div className='md:w-[59%] md:mt-[79px]'>
                        <h1 className='font-semibold text-[40px] text-[#034695] mb-[30px]'>Packing Laminate</h1>
                        <p className='font-light text-[18px] text-[#000000] mb-[20px]'>The structure of packing laminate plays a vital role in retaining the functional and active ingredients of the formulations. Keeping the wipe wet for prolonged period depends much upon the structure of the packaging laminate.</p>
                        <p className='font-light text-[18px] text-[#000000]'>We will assist you in choosing the most suitable laminate as per formulations for functional and aesthetic appearance</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>


         {/* Section-4 */}
         <div className="section_4 w-full bg-white ">
            <div className="container">
               <div className='py-[80px] px-[20px] md:p-[80px]'>
                  <div className="flex flex-col  items-center ">
                     <h1 className='font-semibold text-[40px] w-[100%] md:w-auto text-[#034695] mb-[30px]'>Counts & Size</h1>
                     <p className='font-light text-[18px] w-[100%] md:w-[65vw]'>We provide Single Piece Sachets and multi pulls flow packs of 20 pulls & 25 pulls. For Baby Wipes we have the facility to pack 72 pulls & 80 pulls per pack. Generally 150mm x 200mm unfolded wipe size is common for single & multi piece packs .</p>
                     <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 py-[40px] gap-[10px]">
                        <div className='flex flex-col p-10 gap-2.5 bg-[#DBEAFE] rounded-[20px]  items-center border border-[#BFDBFE]'>
                           <div className='p-[15px] rounded-[20px] flex justify-center items-center w-[60px] h-[60px] bg-[#034695]'>
                              <img className='w-11 h-9' src="OEM-icon1.png" alt="OEM-icon1" />
                           </div>
                           <h1 className='font-medium text-[24px]'>Single Sachets</h1>
                           <p className="font-light  text-[18px] my-10px">Individual packaging for convenience</p>
                        </div>
                        <div className='flex flex-col  p-10 gap-2.5 bg-[#F3E8FF] rounded-[20px]  items-center border border-[#E9D5FF]'>
                           <div className='p-[15px] rounded-[20px] text-white flex justify-center items-center w-[60px] h-[60px] bg-[#9333EA]'>
                              <FontAwesomeIcon className='regular ' icon={faLayerGroup} />
                           </div>
                           <div className='flex flex-col gap-2.5'>
                              <h1 className='font-medium text-[24px]'>Multi-Pack Options</h1>
                              <p className="font-light text-[18px] my-10px">20 & 25 pulls flow packs</p>
                              <p className="font-light text-[18px] my-10px">72 & 80 pulls (Baby Wipes)</p>
                           </div>
                        </div>
                        <div className='flex  flex-col p-10 gap-2.5 bg-[#FFEFF3] rounded-[20px]  items-center border border-[#FFD2DE]'>
                           <div className='p-[15px] rounded-[20px] text-white flex justify-center items-center w-[60px] h-[60px] bg-[#F27092]'>
                              <FontAwesomeIcon icon={faRuler} />
                           </div>
                           <h1 className='font-medium text-[24px]'>Size Options</h1>
                           <div className='flex flex-col gap-2.5'>
                              <p className="font-light text-[18px] my-10px">170mm x 200mm (Standard)</p>
                              <p className="font-light text-[18px] my-10px">150mm x 200mm (Baby Wipes)</p>
                              <p className="font-light text-[18px] my-10px">Custom sizes available</p>
                           </div>
                        </div>
                     </div>
                     <p className='font-light text-[18px] w-[100%] md:w-[55vw]'>However , we can produce different sizes on request. For Baby Wipes size of 150mm x 200 mm is popular.</p>
                  </div>
                  <div className='production w-[100%] pt-[80px] flex flex-col items-center md:flex-row gap-[10px] lg:gap-[40px]'>
                     <div className='lg:w-[55%] md:w-[45%]'>
                        <h1 className='font-semibold text-[40px] text-[#034695] mb-[30px]'>Production</h1>
                        <p className='font-light text-[18px] text-[#000000] mb-[20px]'>Through art work, laminate & label printing, we will confirm minimum time period of delivery.</p>
                        <p className='font-light text-[18px] text-[#000000]'>Generally it takes 4 to 5 weeks for standard wet wipe & Other hand sanitizer formulations.The time lead is obviously more for customized formulations.</p>
                     </div>
                     <div className='lg:w-[45%] md:w-[55%] min-w-[70vw] md:min-w-[45%] bg-[#FFFFFF] border border-[#E2E2E2] rounded-[20px] p-[40px]'>
                        <div className="flex gap-5  items-center mb-[18px]">
                           <FontAwesomeIcon className='w-[25px] h-[25px] bg-[#F27092] border-2 border-[#F27092] text-[#FFFFFF] rounded-full' icon={faClock} />
                           <h1 className='font-medium text-[24px] text-[#034695] '>Production Timeline</h1>
                        </div>
                        <ul className='mb-[10px] pl-[24px] w-full py-[10px] rounded-[10px]  bg-[#DBEAFE] border border-[#BFDBFE] font-light text-[18px] text-[#034695]'><li className='list-disc'>Standard wet wipes: 4-5 weeks</li></ul>

                        <ul className='w-full py-[10px] pl-[24px]  rounded-[10px]  bg-[#FFEFF3] border border-[#FFD2DE] font-light text-[18px] text-[#034695]'><li className='list-disc'>Custom formulations: Extended timeline</li></ul>

                     </div>
                  </div>
               </div>
            </div>
         </div>


         {/* Section-5 */}
         <div className="section_5  bg-[#F6F8FA]">
            <div className="container">
               <div className='flex flex-col-reverse md:flex-row py-[80px] px-[20px] md:p-[80px] gap-[40px] items-center '>
                  <div className='md:w-[52%] w-[80%] p-[20px] lg:p-[40px] bg-[#F3E8FF] border border-[#E9D5FF] rounded-[20px] gap-[10px] flex flex-col  justify-center items-center'>
                     <div className='w-[60px] bg-[#9333EA] h-[60px] flex justify-center items-center  p-[15px] rounded-[15px]'>
                        <FontAwesomeIcon className='text-white' icon={faTruck} />
                     </div>
                     <h1 className='font-medium text-[24px]'>Global Shipping</h1>
                     <div className="flex gap-[10px]">
                        <FontAwesomeIcon className='w-5 h-5 text-[#9333EA] ' icon={faCircleCheck} />
                        <h3 className='text-[18px] font-light'>Polyster / Viscose blinds</h3>
                     </div>
                     <div className="flex gap-[10px]">
                        <FontAwesomeIcon className='w-5 h-5 text-[#9333EA] ' icon={faCircleCheck} />
                        <h3 className='text-[18px] font-light'>Optimized shipping methods</h3>
                     </div>
                     <div className="flex gap-[10px]">
                        <FontAwesomeIcon className='w-5 h-5 text-[#9333EA] ' icon={faCircleCheck} />
                        <h3 className='text-[18px] font-light'>Transparent cost structure</h3>
                     </div>
                  </div>
                  <div className='mt-[83px] md:w-[48%] px-[3px]'>
                     <h1 className='font-semibold w-full md:w-auto text-[30px] lg:text-[40px] text-[#034695] mb-[30px]'>Shipping & Production Time</h1>
                     <p className='font-light w-full md:w-auto text-[18px]'>We will confirm the best shipping method including time, transit and cost. All product shipments are FOB shipping port.</p>
                  </div>
               </div>
               <div className='pb-[80px] px-[20px] flex flex-col items-center '>
                  <h1 className='font-semibold w-full md:w-auto text-[40px] text-[#034695]'>Commitment</h1>
                  <p className='md:p-[30px] py-[30px] text-[18px] w-full md:w-[65vw]'>A commitment-A promise. We take pride in understanding the different regulations and making sure that each wipe that we manufacture is in compliance with our standards for better hygiene to the world.</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 p-[10px] gap-[20px] md:gap-[10px] text-center">
                     <div className='flex flex-col items-center gap-[10px]'>
                        <div className='w-[60px] h-[60px] p-[15px] rounded-[20px] bg-[#034695] '>
                           <img className='w-[30px] h-[30px] ' src="c-icon2.png" alt="c-icon2" />
                        </div>
                        <h1 className='font-medium text-[24px]'>Quality Compliance</h1>
                        <p className='font-light text-[18px]'>Rigorous adherence to international standards</p>
                     </div>
                     <div className='flex flex-col items-center gap-[10px]'>
                        <div className='w-[60px] h-[60px] p-[15px] rounded-[20px] bg-[#9333EA] '>
                           <img className='w-[30px] h-[30px] ' src="c-icon1.png" alt="c-icon2" />
                        </div>
                        <h1 className='font-medium text-[24px]'>Safety First</h1>
                        <p className='font-light text-[18px]'>Uncompromising commitment to product safety</p>
                     </div>
                     <div className='flex flex-col items-center gap-[10px]'>
                        <div className='w-[60px] h-[60px] p-[15px] rounded-[20px] bg-[#F27092] '>
                           <img className='w-[30px] h-[30px] ' src="c-icon3.png" alt="c-icon2" />
                        </div>
                        <h1 className='font-medium text-[24px]'>Global Standards</h1>
                        <p className='font-light text-[18px]'>Meeting regulations worldwide</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default OEM
