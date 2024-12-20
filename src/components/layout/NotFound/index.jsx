import './index.css'
import ErrorAnimation from '../../Lotties/errorAnimation.json'
import Lottie from 'lottie-react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found vh-100 d-flex flex-column gap-3 align-items-center justify-content-center'>
      <Lottie
        style={{
          width: "100%",
          maxWidth: "400px",
        }}
        animationData={ErrorAnimation}
      />
      <h2 className='fw-bold '>لا يوجد رابط بهذا العنوان</h2>
      <Link
        to='/'
        className='w-100 d-flex align-items-center justify-content-center text-white px-3 fw-bold'
      >
        الرجوع للرئيسية
      </Link>
    </div>
  )
}

export default NotFound