import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function About() {
  return (
   <>
  <div className="bg-[#101119] text-white min-h-screen flex flex-col px-10 md:px-40">
  <div>
    <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-6xl pt-10">
      
      

      <div className="flex-1 flex flex-col items-center md:items-center text-center md:text-left">
        <div className="font-bold text-center md:mx-20 text-4xl md:text-5xl mb-6">
          <Link to='/'>billboardx100</Link>
          <br/>
          
         <div className='text-sm font-normal text-left py-10 break-words '>
            
            <p className="break-words [hyphens:auto]">
billboardx100 is a full-stack platform created to bring all academic and programming resources together in one organized place. it was built with the specific goal of helping students, especially college juniors, save time, stay focused, and have access to high-quality material without the endless search across multiple websites.<br/><br/>

the platform is designed to simplify learning. you will find curated notes for core ece subjects, previous year question papers for effective exam preparation, detailed syllabi to plan your studies, dsa sheets for programming practice, and web development roadmaps to help you build skills from the ground up. these resources are combined with carefully selected youtube playlists and tutorials that explain topics in a clear and practical way.<br/><br/>

billboardx100 is not just a simple collection of links. every resource is thoughtfully organized to match the needs of students. whether you are studying for exams, learning data structures and algorithms, or diving into web development, you can follow a clear path rather than feeling lost or overwhelmed.<br/><br/>

one of the key features of billboardx100 is its minimal design. the interface is distraction-free so that you can focus entirely on learning. there are no unnecessary pop-ups or ads—just the resources you need in a clean, structured layout.<br/><br/>

another major advantage is how the platform bridges the gap between academics and programming. many students struggle to manage both college studies and skill-building at the same time. billboardx100 provides a way to balance both by giving you direct access to academic resources and programming roadmaps side by side.<br/><br/>

previous year question papers and syllabus sections make exam preparation straightforward. instead of guessing what might come, you can analyze trends and focus on what really matters. meanwhile, the programming section equips you with industry-relevant skills, starting from basics and leading to more advanced concepts.<br/><br/>

this platform was built by a student who experienced these struggles firsthand and wanted to create a solution for others. billboardx100 is constantly updated based on feedback and aims to remain relevant and useful for every new batch of students.<br/><br/>

in short, billboardx100 is your one-stop solution for academics and programming. it saves time, removes confusion, and keeps everything organized so you can focus on learning, growing, and preparing for your future.<br/><br/>
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

export default About
