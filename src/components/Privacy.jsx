import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function Privacy() {
  return (
   <>
  <div className="bg-[#101119] text-white min-h-screen flex flex-col px-10 md:px-40">
  <div>
    <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-6xl pt-10">
      
      

      <div className="flex-1 flex flex-col items-center md:items-center text-center md:text-left">
        <div className="font-bold text-center md:mx-20 text-4xl md:text-5xl mb-6">
          <Link to='/'>billboardx100</Link>
          <br/>
          
         <div className='text-sm font-normal text-left py-10 break-words'>
          <p className="break-words [hyphens:auto]">
billboardx100 values your privacy and is committed to keeping your learning experience secure and transparent. the platform does not collect personal information unnecessarily, and its goal is to allow students to access resources freely without any privacy concerns.<br/><br/>

you are not required to create an account to use billboardx100. this means you can access notes, dsa sheets, roadmaps, previous year question papers, and syllabi without sharing any personal details. we do not store your data or track your activity beyond what is required for the basic functionality of the platform.<br/><br/>

billboardx100 does not use third-party trackers or advertising networks that collect information about you. our focus is solely on providing a distraction-free environment for learning. the resources provided, including external links to youtube and other educational material, are carefully curated, but those external sites may have their own privacy policies, and we recommend reviewing them separately.<br/><br/>

the platform also does not share or sell any information to third parties. in the rare case that new features are added in the future which may require limited data collection, you will be informed in advance, and no data will ever be collected without your clear consent.<br/><br/>

we take steps to ensure that the platform remains safe from any form of unauthorized access. while billboardx100 itself does not store personal information, it still follows secure development practices to protect the platform and its users from any misuse.<br/><br/>

if you ever have questions about how your information is handled, you can contact us directly through the contact section. transparency is our priority, and we are committed to ensuring that billboardx100 remains a safe and trustworthy platform for every student.<br/><br/>

your trust matters, and billboardx100 is built around the idea that learning should be simple, secure, and private. you should be able to access the materials you need without worrying about hidden data collection or invasive practices. that is why we keep the platform minimal and privacy-focused.<br/><br/>

billboardx100 is not only a platform for learning but also a safe space where students can grow academically and technically without compromising their privacy.<br/><br/>
</p>



         </div>
        </div>

       
      </div>
    </div>
  </div>
  <Footer/>
  </div>
  
   </>
  )
}

export default Privacy
