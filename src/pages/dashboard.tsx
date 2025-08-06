import Button from '../components/Button'
import { plusIcon } from '../assets/plus'
import { shareIcon } from '../assets/share'
import { Card } from '../components/card'
import { SideBar } from '../components/sideBar'
import { ShareModal } from '../components/shareModal'
import { useEffect, useState } from 'react'
import { NewContentModal } from '../components/newContentModal'
import axios from 'axios'
import { URL } from '../utils/backendURL'
import { useNavigate } from 'react-router-dom'

type modalType = "addContent" | "shareContent"

interface modalProps {
  callFrom: modalType
}

function Dashboard() {
  const [showModal, setShowModal] = useState(false)
  const [showContentModal, setShowContentModal] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)
  const navigate = useNavigate()
  let check;

  useEffect(function () {
    check = localStorage.getItem("accessToken")
    if(check?.startsWith("e")){
      setAuthenticated(true)
    }
    console.log(check);
  },[])

  async function logout() {
    const token = localStorage.getItem("accessToken");
  
    try {
      await axios.post(`${URL}/api/v1/auth/logout`, {}, {
        headers: {
          Authorization: `Bearer ${token}` 
        },
        withCredentials: true 
      });
      alert("Logged Out successfully");
      localStorage.removeItem("accessToken");
      setAuthenticated(false)
    } catch (err) {
      console.error(err);
      alert("Logout failed");
    }
  }

  function openModal (props: modalProps) {
    if(authenticated){ 
      {props.callFrom==="addContent" 
        ? setShowContentModal(true) 
        : setShowModal(true) 
      }
    }else{
      alert("Authenticate first") 
      navigate("/signin") 
    }
  }
  
  return (
    <>
    {showModal &&
        <ShareModal setModal={setShowModal}/>
    }
    {showContentModal &&
        <NewContentModal setModal={setShowContentModal}/>
    }
    <div className='flex bg-neutral-90 gap-3 h-screen'>
      <div className='h-screen bg-white sticky top-0 flex-shrink-0'>
        <SideBar/>
      </div>
      <div className='p-2 flex-1 overflow-y-scroll pt-3'>
        <div className='flex justify-between items-center mb-4'>
          <div className='text-[24px] font-normal'>All notes</div>
          <div className='flex gap-2'>
            <Button onClick={()=>openModal({callFrom: "shareContent"})} buttonVariant='secondary' startIcon={shareIcon({size: "medium"})} text="Share Brain"/>
            <Button onClick={()=>openModal({callFrom: "addContent"})} buttonVariant='primary' startIcon={plusIcon({size: "medium"})} text="Add Content"/>
            {authenticated? <Button onClick={logout} buttonVariant='primary' text="Logout"/> : null }
          </div>
        </div>
        {authenticated==true ?
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4'>
            <Card size='large' startIconType="video" title='Testing My App' />
            <Card size='large' startIconType="video" title='Testing My App' />
            <Card size='large' startIconType="video" title='Testing My App' />
            <Card size='large' startIconType="video" title='Testing My App' />
          </div> 
        :
          <div className='flex flex-1 items-center justify-center gap-1 flex-col'>
            <div className='text-stone-600'>No contents Yet? </div>
            <Button onClick={()=>openModal({callFrom: "addContent"})} text='Create Your First Content' buttonVariant='primary' />
          </div>
        }
      </div>
    </div>
    </>
  )
}

export default Dashboard
