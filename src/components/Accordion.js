import React, {useState} from 'react';
import {FaChevronCircleUp, FaChevronCircleDown} from 'react-icons/fa'
const Accordion = ({accordion}) => {
  const [isOpen, setIsOpen] = useState(false)

  const {question, answer} = accordion;
  return (
    <>
    <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer'>
    <div className='bg-white border rounded-sm'>
    <div className='min-h-[80px] flex items-center justify-between px-[40px]'>
      <h6 className='h6'>{question}</h6>
      <div>{isOpen ? <FaChevronCircleUp className='text-[20px] text-neutral-500'/>  : <FaChevronCircleDown className='text-[20px] text-neutral-500'/>}</div>
    </div>
    <div className={`${isOpen ? 'min-h-[120px] lg:min-h-[120px]' : 'min-h-0'} max-h-0 overflow-hidden flex justify-center transition-all px-[30px]`}>
      <div className='mt-4'>Chatbase is an AI chatbot builder, it trains ChatGPT on your data and lets you add a chat widget to your website. Just upload a document or add a link to your website and get a chatbot that can answer any question about their content.</div>
    </div>
    </div>


    </div>
    </>
  );
};

export default Accordion;
