import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function Terms() {
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
by using billboardx100, you agree to the terms described here. the platform is created solely for academic and programming purposes and is intended to provide students with a centralized hub of reliable and organized resources.<br/><br/>

all the materials available on billboardx100, including notes, dsa sheets, web development roadmaps, previous year question papers, and external youtube links, are for personal learning only. you may not use them for commercial purposes, redistribute them without permission, or misrepresent them as your own work.<br/><br/>

billboardx100 does not claim ownership of external resources. youtube videos and other third-party materials remain the property of their respective creators. the platform simply organizes these materials to make it easier for students to find and access them efficiently.<br/><br/>

you agree to use the platform responsibly and in compliance with academic integrity. misuse of the platform, such as exploiting resources in unauthorized ways or attempting to disrupt its functionality, is strictly prohibited.<br/><br/>

the platform is provided "as is" without any warranties. while we make every effort to ensure that the resources on billboardx100 are accurate and updated, we cannot guarantee that every link will always be current. users are encouraged to report any broken or outdated links so they can be corrected quickly.<br/><br/>

billboardx100 may include links to external websites. we are not responsible for the content, privacy practices, or policies of those sites. it is the responsibility of the user to review any external site before using it.<br/><br/>

we reserve the right to modify these terms if needed. any updates will be reflected on this page, and continued use of the platform will mean that you agree to the revised terms.<br/><br/>

by using billboardx100, you acknowledge that it is an academic aid designed to save you time and provide structured learning. your continued use of the platform indicates that you agree to these terms and that you will use the resources responsibly and ethically.<br/><br/>

billboardx100 is built to help students learn, grow, and succeed. use it as it was intended, and you will have a clear, distraction-free environment for both academic and programming resources.<br/><br/>
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

export default Terms
