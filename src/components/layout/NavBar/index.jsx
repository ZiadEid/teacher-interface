import './index.css'
import LogoImage from '../../../assets/logo.png'
import AvatarImage from '../../../assets/avatar.svg'
import { useContext, useEffect, useState } from 'react'
import { ProjectContext } from '../../Context/store'

export default function NavBar() {
    const { isSideBarOpen, setIsSideBarOpen } = useContext(ProjectContext);
    const [showKey1, setShowKey1] = useState(0);
    const [showKey2, setShowKey2] = useState(0);
    useEffect(() => {
        isSideBarOpen ? setShowKey1(prev => prev + 1) : setShowKey2(prev => prev + 1)
    }, [isSideBarOpen])

    return (
        <>
            <div className="top-navbar d-flex justify-content-between align-items-center">
                <div className="right-side d-flex align-items-center">
                    <button
                        className='menu-button d-flex justify-content-center align-items-center overflow-hidden'
                        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
                    >
                        {
                            isSideBarOpen ?
                                <svg
                                    key={showKey1}
                                    data-aos="fade"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M3 6a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
                                        opacity="0.5"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M18.97 8.97a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22H5a.75.75 0 0 1 0-1.5h15.19l-1.22-1.22a.75.75 0 0 1 0-1.06"
                                    />
                                </svg>
                                :
                                <svg
                                    key={showKey2}
                                    data-aos="fade"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M8 5a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2zm0 12a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z"
                                        opacity="0.5"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M5.03 8.97a.75.75 0 0 1 0 1.06l-1.22 1.22H19a.75.75 0 0 1 0 1.5H3.81l1.22 1.22a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0"
                                    />
                                </svg>
                        }
                    </button>
                    <div className="logo-image">
                        <img src={LogoImage} alt="" />
                    </div>
                </div>
                <div className="left-side d-flex align-items-center">
                    <a className='support-link d-flex justify-content-center align-items-center'
                        href="https://wa.me/+201280804940" target="_blank">
                        محادثة الدعم
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 18v3.766l1.515-.909L11.277 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h1zM4 8h12v8h-5.277L7 18.234V16H4V8z"></path>
                            <path d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z"></path>
                        </svg>
                    </a>
                    <button className='d-flex justify-content-center align-items-center border-0 rounded-circle'>
                        <div className='profile-image'>
                            <img
                                className='rounded-circle w-100'
                                src={AvatarImage}
                                alt="صورة المدرس"
                            />
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}