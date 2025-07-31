import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Coresubjects() {
  const [openCard, setOpenCard] = useState(null);
  const [userCount, setUserCount] = useState(0);

  const subjects = [
    { number: 1, title: "Basic Electrical Engineering", links: ["link1", "link2"] },
    { number: 2, title: "Mathematics I", links: ["link1", "link2", "link3"] },
  ];

  const toggleLinks = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/count`);
        setUserCount(response.data.totalUsers);
      } catch (error) {
        console.error("Error fetching user count:", error);
      }
    };

    fetchUserCount();
  }, []);

  return (
    <>
      <div>
        <div className="text-4xl md:text-8xl font-bold text-center">billboardx100</div>
        <div className="w-full h-[2px] bg-black my-5"></div>

        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div className="text-base md:text-xl font-bold text-center md:text-left pt-5">
            billboardx100 since 1 Aug 2025
            <br />
            A place where one can get all resources for academics as well as programming
          </div>

          <div className="text-2xl md:text-4xl font-bold flex flex-col md:flex-row items-center justify-center gap-4">
            <img src="/user.png" alt="user" className="w-12 md:w-20" />
            <div className="px-0 md:px-8">Subscribers {userCount}</div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="bg-[#D9D9D9]">
          <div className="px-5 md:px-20 py-10">
            <div className="font-bold text-xl">billboardx100 electronics and communication</div>

            <div className="py-5">
              <div className="bg-white">
                <div className="bg-[#1A48C4] p-5 md:p-10 font-bold text-white text-xl">
                  syllabus according to university
                </div>

                <div className="py-10 px-5">
                  {subjects.map((subject, index) => (
                    <div key={index} className="border-b border-gray-300 pb-4 mb-4">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black text-white flex items-center justify-center text-lg sm:text-xl font-bold">
                          {subject.number}
                        </div>

                        <div className="flex-1">
                          <div className="font-bold text-lg sm:text-xl">{subject.title}</div>

                          <div className="flex gap-4 sm:gap-6 mt-1 flex-wrap">
                            <span
                              className="font-semibold cursor-pointer text-blue-600"
                              onClick={() => toggleLinks(index)}
                            >
                              Links
                            </span>
                            <span className="font-semibold cursor-pointer">Notes</span>
                          </div>

                          {openCard === index && (
                            <div className="mt-5 px-3 py-5 bg-gray-200  w-full">
                              {subject.links.map((link, i) => (
                                <div key={i} className="font-semibold text-gray-800">
                                  {link}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coresubjects;
