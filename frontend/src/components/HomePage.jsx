import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const { authUser } = useSelector(store => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  }, []);
  return (
    <div className='flex sm:h-[650px] md:h-[650px] rounded-lg overflow-hidden bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default HomePage