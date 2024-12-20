import './index.css'
import { useContext, useState } from 'react';
import { ProjectContext } from '../../Context/store';
import { Link } from 'react-router-dom';

export default function SideBar() {
    const { isSideBarOpen, tabIndex, setTabIndex } = useContext(ProjectContext);

    return (
        <div
            className={`side-bar d-flex flex-column position-fixed end-0 ${!isSideBarOpen && 'closed'}`}
        >
            <Link
                to={'/'}
                onClick={() => setTabIndex(0)}
                className={`d-flex justify-content-center side-btn ${tabIndex == 0 && 'active'}`}
            >
                <div
                    className='d-flex justify-content-start align-items-center side-link'
                    data-aos='fade'
                    data-aos-easing="ease"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="side-icon" width="448" height="512" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128m89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4" />
                    </svg>
                    {isSideBarOpen && <span>حساب المعلم</span>}
                </div>
            </Link>
            <Link
                to={'/statistics'}
                onClick={() => setTabIndex(1)}
                className={`d-flex justify-content-center side-btn ${tabIndex == 1 && 'active'}`}
            >
                <div className='d-flex justify-content-start align-items-center side-link'>
                    <svg viewBox="0 0 24 24" focusable="false" className="side-icon">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="m344 280 88-88m-200 24 64 64M80 320l104-104"></path>
                            <circle cx="456" cy="168" r="24" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></circle>
                            <circle cx="320" cy="304" r="24" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></circle>
                            <circle cx="208" cy="192" r="24" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></circle>
                            <circle cx="56" cy="344" r="24" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></circle>
                        </svg>
                    </svg>
                    {isSideBarOpen && <span>الاحصائيات</span>}
                </div>
            </Link>
            <Link
                to={'/classes'}
                onClick={() => setTabIndex(2)}
                className={`d-flex justify-content-center side-btn ${tabIndex == 2 && 'active'}`}
            >
                <div className='d-flex justify-content-start align-items-center side-link'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="side-icon" width="1rem" height="1rem" viewBox="0 0 24 24">
                        <g fill="currentColor">
                            <path d="M3 3h18v4.385h-2V5H5v9h4.333v2H3z" />
                            <path d="M12.684 10.287C13.558 11.212 14.303 12 16 12h2a2 2 0 0 1 2 2v1a2 2 0 0 1-1 1.732V22h-3v-8c-2.617 0-3.956-1.45-4.84-2.405a14 14 0 0 0-.367-.388l1.414-1.414q.249.25.477.494M19 9.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" />
                        </g>
                    </svg>
                    {isSideBarOpen && <span>الفصول الدراسية</span>}
                </div>
            </Link >
            <Link
                to={'/assestant'}
                onClick={() => setTabIndex(3)}
                className={`d-flex justify-content-center side-btn ${tabIndex == 3 && 'active'}`}
            >
                <div className='d-flex justify-content-start align-items-center side-link'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="side-icon" width="1rem" height="1rem" viewBox="0 0 640 512"><path fill="currentColor" d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64m448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64m32 32h-64c-17.6 0-33.5 7.1-45.1 18.6c40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64m-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32S208 82.1 208 144s50.1 112 112 112m76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2m-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4" />
                    </svg>
                    {isSideBarOpen && <span>المساعدين</span>}
                </div>
            </Link>
            <Link
                to={'/students'}
                onClick={() => setTabIndex(4)}
                className={`d-flex justify-content-center side-btn ${tabIndex == 4 && 'active'}`}
            >
                <div className='d-flex justify-content-start align-items-center side-link'>
                    <svg stroke="currentColor" className="side-icon" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg">
                        <path d="M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z"></path>
                    </svg>
                    {isSideBarOpen && <span>الطلاب</span>}
                </div>
            </Link>
            <Link
                to={'/finance'}
                onClick={() => setTabIndex(5)}
                className={`d-flex justify-content-center side-btn ${tabIndex == 5 && 'active'}`}
            >
                <div className='d-flex justify-content-start align-items-center side-link'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="side-icon" width="1rem" height="1rem" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 12.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M10.5 16a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0" />
                        <path fill="currentColor" d="M17.526 5.116L14.347.659L2.658 9.997L2.01 9.99V10H1.5v12h21V10h-.962l-1.914-5.599zM19.425 10H9.397l7.469-2.546l1.522-.487zM15.55 5.79L7.84 8.418l6.106-4.878zM3.5 18.169v-4.34A3 3 0 0 0 5.33 12h13.34a3 3 0 0 0 1.83 1.83v4.34A3 3 0 0 0 18.67 20H5.332A3.01 3.01 0 0 0 3.5 18.169" />
                    </svg>
                    {isSideBarOpen && <span>المصروفات</span>}
                </div>
            </Link>
        </div >
    )
}