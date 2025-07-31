import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function Help() {
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
billboardx100 is built to make learning simple and organized for students. the purpose of this help section is to guide you in understanding how to use the platform effectively and get the maximum value from its resources.<br/><br/>

when you open billboardx100, you are welcomed by a clean interface that avoids unnecessary distractions. the platform is divided into clear sections so that you can easily find what you are looking for. if your goal is academic preparation, start by exploring the academic section, which contains carefully curated notes for core ece subjects. these notes are simplified, relevant, and designed to help you focus only on what is necessary.<br/><br/>

besides notes, the academic section also includes previous year question papers. these papers help you analyze exam patterns and prepare more efficiently by understanding which topics are repeated often. paired with the syllabus section, you can create a clear study plan, ensuring that nothing important is missed.<br/><br/>

if you are learning programming, billboardx100 has a separate programming section that focuses on practical skill-building. here, you will find dsa sheets designed for step-by-step practice. these sheets begin with basic problems and gradually move to advanced ones, allowing you to strengthen your problem-solving skills at your own pace. in addition, the platform offers web development roadmaps that cover everything from the fundamentals of html, css, and javascript to full-stack development with frameworks and backend technologies.<br/><br/>

to make learning more engaging and effective, youtube links are added for most topics. these are curated playlists and tutorials from trusted sources, ensuring that you learn from quality content. by combining notes, dsa sheets, roadmaps, and video tutorials, billboardx100 gives you an all-in-one solution for academic success and skill development.<br/><br/>

the platform is built to be easy to use, but if you face any issues like broken links or outdated resources, you can report them through the contact section. this feedback is important because it helps keep the platform updated and useful for every student. billboardx100 is a community-driven platform created by students for students, and contributions or suggestions are always welcome.<br/><br/>

if you are unsure where to begin, we recommend starting with your syllabus. once you are comfortable with your academic subjects, gradually move to programming resources such as dsa sheets and web development roadmaps. this approach ensures you stay balanced between your academics and skill-building.<br/><br/>

billboardx100 is designed to save time. instead of searching across multiple platforms for notes, previous year papers, or tutorials, you will find everything organized in one place. this organization helps you stay productive and reduces the stress of preparing for exams and improving your skills.<br/><br/>

if you require more guidance, the help section will be expanded with frequently asked questions and step-by-step tutorials on how to use each feature. our goal is to make billboardx100 the ultimate resource hub for every student in need of structured learning and reliable material.<br/><br/>

with billboardx100, you do not just study; you learn in a way that is planned, accessible, and efficient. follow the sections, use the provided roadmaps, practice consistently, and you will see significant improvement in both academics and programming. if you ever feel stuck, you can always reach out for help through the contact section.<br/><br/>

billboardx100 is your companion for academic growth and skill development, created to keep everything simple and effective.<br/><br/>
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

export default Help
