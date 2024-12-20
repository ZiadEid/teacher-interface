import './index.css'
import profilePic from '../../assets/profile-pic.svg'
const Profile = () => {
  return (
    <div className='profile p-3'>
      <div className="profile-header rounded-2 overflow-hidden">
        <div className="profile-header-cover position-relative w-100">
          <div className="profile-header-img position-absolute rounded-circle overflow-hidden">
            <img
              className='w-100'
              src={profilePic}
              alt="الصورة الشخصية"
            />
          </div>
          <svg
            className='position-absolute p-1 rounded-circle text-white'
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 48 48"
          >
            <path
              fill="currentColor"
              d="M16.8 9.186A4.25 4.25 0 0 1 20.515 7h6.97A4.25 4.25 0 0 1 31.2 9.186l1.286 2.314h3.764A5.75 5.75 0 0 1 42 17.25v6.794A12.94 12.94 0 0 0 35 22c-1.181 0-2.326.158-3.414.453a8 8 0 1 0-9.4 10.34a13.1 13.1 0 0 0 .81 7.207H11.75A5.75 5.75 0 0 1 6 34.25v-17a5.75 5.75 0 0 1 5.75-5.75h3.765zM24 19.5a5.5 5.5 0 0 0-1.155 10.879a13.05 13.05 0 0 1 6.4-7.039A5.5 5.5 0 0 0 24 19.5M35 46c6.075 0 11-4.925 11-11s-4.925-11-11-11s-11 4.925-11 11s4.925 11 11 11m0-18a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5h-5a1 1 0 1 1 0-2h5v-5a1 1 0 0 1 1-1"
            />
          </svg>
        </div>
        <div className="profile-header-content d-flex flex-column gap-2 bg-white overflow-hidden">
          <h2 className='fw-bold'
            data-aos="fade"
            data-aos-easing="ease"
            data-aos-duration="700"
          >زياد مصطفي عيد</h2>
          <p className='text-black'>(الصف الثاني الثانوي)</p>
        </div>
      </div>
      <div className="profile-content position-relative bg-white mt-3 rounded-2 overflow-hidden">
        <svg
          className='position-absolute rounded text-white'
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 20 20"
        >
          <path
            fill="currentColor"
            d="M8.5 2a1.5 1.5 0 0 0-1.415 1H5.5A1.5 1.5 0 0 0 4 4.5v12A1.5 1.5 0 0 0 5.5 18h2.504a2 2 0 0 1 .054-.347l.375-1.498a3.2 3.2 0 0 1 .84-1.485l4.83-4.83A2.86 2.86 0 0 1 16 9.004V4.5A1.5 1.5 0 0 0 14.5 3h-1.585A1.5 1.5 0 0 0 11.5 2zM8 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m1.98 11.877l4.83-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.83 4.829a2.2 2.2 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.2 2.2 0 0 1 .578-1.02"
          />
        </svg>
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 px-4 py-4">
          <h3 className='fw-bold mx-auto mx-md-0'>معلم</h3>
          <span className='text-center text-md-start'>تم انشاء هذا الحساب في 11/12/2024, 1:12 AM, منذ 21 ايام</span>
        </div>
        <div className="d-flex flex-wrap align-items-center gap-3 px-4 py-4 text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M4 3a2 2 0 0 0-2 2v.201l6 3.231l6-3.23V5a2 2 0 0 0-2-2zm10 3.337L8.237 9.44a.5.5 0 0 1-.474 0L2 6.337V11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z"
            />
          </svg>
          <h5 className='fw-bold'>ziadeid.web@gmail.com</h5>
        </div>
        <div className="d-flex flex-wrap align-items-center gap-3 px-4 py-4 text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 48 48"
          >
            <path
              fill="currentColor"
              d="M16.25 4A4.25 4.25 0 0 0 12 8.25v31.5A4.25 4.25 0 0 0 16.25 44h15.5A4.25 4.25 0 0 0 36 39.75V8.25A4.25 4.25 0 0 0 31.75 4zm5 31.5h5.5a1.25 1.25 0 1 1 0 2.5h-5.5a1.25 1.25 0 1 1 0-2.5"
            />
          </svg>
          <h5 className='fw-bold'>+201060536977</h5>
        </div>
        <div className="d-flex flex-wrap align-items-center gap-3 px-4 py-4 text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M13.75 2A2.25 2.25 0 0 1 16 4.25v7.087A3.5 3.5 0 0 0 15.05 17h-.277A2.77 2.77 0 0 0 12 19.772v.103c0 .74.214 1.48.665 2.125H6.25A2.25 2.25 0 0 1 4 19.75V4.25A2.25 2.25 0 0 1 6.25 2zm-2.5 16h-2.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5M20 14.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m2 5.375C22 21.431 20.714 23 17.5 23S13 21.437 13 19.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"
            />
          </svg>
          <h5 className='fw-bold'>+201060536977</h5>
          <span className='text-muted'>( ولــي الامــر )</span>
        </div>
      </div>
    </div>
  )
}

export default Profile