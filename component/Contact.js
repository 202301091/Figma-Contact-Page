import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
    return (
        <>
            <div className=" flex flex-col justify-center items-center  ">
                <div className=' sm:container flex items-center md:items-start  flex-col p-3 w-full sm:w-[60vw] sm:mt-13 '>
                    <h1 className='font-bold mb-5 text-4xl text-[#034695] '>Contact Us</h1>
                    <div className="flex flex-col w-full gap-3 items-center md:items-start md:flex-row">
                        <div className='md:w-1/2 p-2'>
                            <p className='text-sm mb-3 text-gray-700'>Your trusted partner in hygiene solution ,here to supprt your inquries and ensure you receive the right products with the quality and care you deserve </p>
                            <div className="contact flex flex-col gap-3">

                                <div className="flex gap-3 ">
                                    <FontAwesomeIcon className='w-9 flex-start h-9 rounded-xl text-[#034695] bg-[#DBEAFE] p-2' icon={faPhone} />
                                    <div className='number flex flex-col '>
                                        <h5 className='text-[#034695] font-semibold text-[12px]'>Call Us</h5>
                                        <h4 className='text-[14px]'>+91-99136 13494</h4>
                                        <h4 className='text-[14px]'>+91-83477 76125</h4>
                                        <h4 className='text-[14px]'>+91-78746 19206</h4>
                                    </div>
                                </div>
                                <div className="flex gap-3 ">
                                    <FontAwesomeIcon className='text-[#9333EA] w-9 flex-start h-9 rounded-xl bg-[#F3E8FF] p-2' icon={faEnvelope} />
                                    <div className='number flex flex-col '>
                                        <h5 className='text-[#9333EA] font-semibold text-[12px] '>Mail Us</h5>
                                        <h4 className='text-[14px]'>sales@amhygiene.co.in</h4>
                                        <h4 className='text-[14px]'>info@amhygiene.co.in</h4>
                                    </div>
                                </div>
                                <div className="flex gap-3 ">
                                    <FontAwesomeIcon className='text-[#F27092] w-9 flex-start h-9 rounded-xl bg-[#FFEFF3] p-2 ' icon={faLocationDot} />
                                    <div className='number flex flex-col '>
                                        <h5 className='text-[#F27092] font-semibold text-[12px]'>Visit Us</h5>
                                        <h4 className='text-[12px]'>Plot No. 75, Vibrant Platinum Park,</h4>
                                        <h4 className='text-[12px]'>Kadadara Road, Near Zak Gidc,</h4>
                                        <h4 className='text-[12px]'>Dehgam, Gandhinagar-382305,</h4>
                                        <h4 className='text-[12px]'>Gujarat, India.</h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full max-w-[400px] md:w-1/2 '>
                            <form className=' border rounded-[10px] flex flex-col flex-start p-4 gap-4 border-[#CFCFCF] ' >
                                <h2 className='font-bold text-[24px]'>Fill The Form</h2>
                                <div className='flex flex-col'>
                                    <label className='text-[14px] text-[#4D4D4D]'>Your name</label>
                                    <input
                                        className='bg-[#E3E3E3]  rounded-[10px] p-2'
                                        type="text"
                                        name="name"
                                        required
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='text-[14px] text-[#4D4D4D]'>Your email</label>
                                    <input
                                        className='bg-gray-200 rounded-[10px] p-2'
                                        type="text"
                                        name="name"
                                        required
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='text-[14px] text-[#4D4D4D]'>Mobile no.</label>
                                    <input
                                        className='bg-gray-200 rounded-[10px] p-2'
                                        type="text"
                                        name="name"
                                        required
                                    />
                                </div>

                                <div className='flex flex-col'>
                                    <label className='text-[14px] text-[#4D4D4D]'>Message</label>
                                    <textarea
                                        className='bg-gray-200 rounded-[10px] p-2 h-20'
                                        type="text"
                                        name="name"
                                        required
                                    />
                                </div>
                                <button className='bg-pink-400 rounded-2xl text-[11px] text-white p-2'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className=' sm:container bg-white text-black  flex justify-center'>
                    <div className='flex flex-col  items-center text-center w-full sm:w-[60vw]'>
                     <h1 className='font-semibold text-[25px] sm:text-[40px] text-[#034695]'>Our 3-Step Inquiry Process</h1>
                     <p className='w-auto  text-[#1F1F1F] m-5'>We've made it simple and transparent to get started wih us. Here's hoe your inquiry turn into action - in just three easy steps</p>

                     <div className="flex lg:flex-row flex-col  gap-5 mt-6">
                        <div className='flex flex-col  gap-2 justify-center items-center'>
                            <div className='w-[60px] h-[60px] bg-[#034695] justify-center items-center flex rounded-[20px]'>
                            <img className='w-[28px] h-[28px]' src="c-icon2.png" alt="icon2" />
                            </div>
                          <h3 className='text-[24px] font-medium'>Submit Inquiry</h3>
                          <p className='w-[326px] text-[18px] h-[58px]  font-light'>Share your requirment or questions through the contact form.</p>
                        </div>
                       <div className='flex flex-col  gap-2 justify-center items-center '>
                         <div className='w-[60px] h-[60px] bg-[#034695] justify-center items-center flex rounded-[20px]'>
                            <img className='w-[28px] h-[28px]' src="c-icon1.png" alt="icon1" />
                            </div>
                          <h3 className='text-[24px] font-medium'>Get a Prompt Response</h3>
                          <p className='w-[326px] text-[18px] h-[58px]  font-light '>We'll review your message and respond within 24-48 hours with relevant details.</p>
                        </div>
                        <div className='flex flex-col gap-2 justify-center items-center'>
                             <div className='w-[60px] h-[60px] bg-[#034695] justify-center items-center flex rounded-[20px]'>
                            <img className='w-[28px] h-[28px]' src="c-icon3.png" alt="icon3" />
                            </div>
                          <h3 className='text-[24px] font-medium'>Start the Collabration</h3>
                          <p className='w-[326px] text-[18px] h-[58px] font-light'>Once everything is aligned, we'll proceed with a proposal, meeting, or project kickoff.</p>
                        </div>
                     </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Contact
