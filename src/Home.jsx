import React, { useEffect, useState } from 'react';
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
import Footer from './components/Footer';
import Algorithms from './components/Algorithms';

function Home() {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();
  
  const logout = () => {
    localStorage.removeItem('user-info');
    navigate('/login');
  };

  useEffect(() => {
    const userDetails = localStorage.getItem('user-info');
    if (userDetails) {
      const userData = JSON.parse(userDetails);
      setUserInfo(userData);
    }
  }, []);

  return (
    <>
      <div>
        <div className="bg-[#101119] text-white py-5">
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 px-4 md:px-10">
            <button className="text-3xl font-bold font-poppins cursor-pointer"  onClick={() => navigate('/')}> bbx100</button>
            <div className="text-4xl font-bold text-center hidden md:block">billboardx100</div>
            <div className="flex flex-col md:flex-row justify-center md:justify-between gap-2">
              <div className="p-2 bg-[#1A48C4] font-bold px-5 text-xl  items-center gap-2 hidden md:block">
                {userInfo?.image && (
                  <img
                    src={userInfo.image}
                    alt="User"
                    className="w-6 h-6 rounded-full object-cover"
                  />
                )}
                
              </div>
              <div className="cursor-pointer p-2 bg-[#1A48C4] font-bold px-5 text-xl text-center ">
                <button onClick={logout} className='cursor-pointer'>SIGNOUT</button>
              </div>
            </div>
          </div>

          <div className="w-full h-[0.5px] bg-white my-5"></div>

          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-4 md:gap-10">
             <div className="text-xl">FUNDAMENTAL</div>
             
             <Link to={'algorithms'}>
             <div className="text-xl">ALGORITHMS</div>
             </Link>
             <Link to={'development'}>
              <div className="text-xl">DEVELOPMENT</div>
             </Link>  
              <div className="text-xl">ROADMAPS</div>
              <div className="text-xl">SYLLABUS</div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="py-10 px-4 md:px-20">
        <Outlet/>
        
      </div>


      <Footer/>
    </>
  );
}

export default Home;
