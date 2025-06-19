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
                    <h1 className='font-bold mt-[80px] text-4xl text-[#034695] '>Contact Us</h1>
                    <div className="flex flex-col w-full gap-[60px] items-center md:items-start md:flex-row">
                        <div className='md:w-1/2 p-2'>
                            <p className='text-sm mb-[40px] mt-[30px] text-gray-700'>Your trusted partner in hygiene solution ,here to supprt your inquries and ensure you receive the right products with the quality and care you deserve </p>
                            <div className="contact flex flex-col gap-[30px]">

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

                <div className='inquiry-steps'>
                    <div className='container bg-white text-black flex flex-col items-center '>
                        <div className='steps flex flex-col  items-center text-center w-full '>
                            <h1 className='font-semibold text-[25px] mt-[80px] sm:text-[40px] text-[#034695]'>Our 3-Step Inquiry Process</h1>
                            <p className='md:w-[50vw] px-2  text-[#1F1F1F] my-[30px]'>We've made it simple and transparent to get started wih us. Here's hoe your inquiry turn into action - in just three easy steps</p>
                            <div className='steps-inner grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
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
                        <div className='map relative w-[80vw]  h-[600px] rounded-[10px] overflow-hidden my-10 shadow-xl text-black'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117460.61817125842!2d72.61528008285418!3d23.07349803487568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e7fd8f5298b4b%3A0x314e1f2d589d9e2!2sAM%20HYGIENE!5e0!3m2!1sen!2sin!4v1750306749170!5m2!1sen!2sin" className="border-0 w-full h-full " allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            <div className='flex flex-col gap-5 absolute bottom-0 bg-white w-full lg:flex-row justify-between py-[20px] px-[30px] items-center'>
                                <div className='flex flex-col '>
                                    <h1 className='font-medium  text-[24px]'>AM Hygiene</h1>
                                    <p className='font-light text-[18px]'>Plot No. 75, Vibrent Platinum Park, Kodadara Road, Near Zak Gidc, Dehgam</p>
                                </div>
                                <button className='bg-pink-400 rounded-full font-medium text-[14px]  mx-[30px] my-[26.5] text-white py-[15px] px-[30px] '>View in Map</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Contact
