import './index.css'
import Lottie from 'lottie-react'
import pendingAnimation from '../../Lotties/pendingAnimation.json'

const Pending = () => {
  return (
    <div className='pending d-flex flex-column justify-content-center align-items-center py-3'>
      <div className="pending-animation rounded-2 overflow-hidden">
        <Lottie
          animationData={pendingAnimation}
          style={{
            width: "100%",
            maxWidth: "400px",
          }}
        />
      </div>
      <div className="pending-content w-100 d-flex flex-column justify-content-center align-items-center">
        <h2 className='text-center fw-bold'>الرجاء التوجه الي مشرفين المنصة لتفعيل حسابك كمعلم</h2>
        <a
          href="https://wa.me/+201060536977"
          className='w-100 fw-bold border-0 text-white d-flex justify-content-center align-items-center'
        >
          التحدث الي مشرف
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M8.886 7.17c.183.005.386.015.579.443c.128.285.343.81.519 1.238c.137.333.249.607.277.663c.064.128.104.275.02.448l-.028.058a1.4 1.4 0 0 1-.23.37l-.143.17c-.085.104-.17.206-.242.278c-.129.128-.262.266-.114.522s.668 1.098 1.435 1.777a6.6 6.6 0 0 0 1.903 1.2q.105.045.17.076c.257.128.41.108.558-.064c.149-.173.643-.749.817-1.005c.168-.256.34-.216.578-.128c.238.089 1.504.71 1.761.837l.143.07c.179.085.3.144.352.23c.064.109.064.62-.148 1.222c-.218.6-1.267 1.176-1.742 1.22l-.135.016c-.436.052-.988.12-2.956-.655c-2.426-.954-4.027-3.32-4.35-3.799l-.053-.076l-.006-.008c-.147-.197-1.048-1.402-1.048-2.646c0-1.19.587-1.81.854-2.092l.047-.05a.95.95 0 0 1 .687-.32c.173 0 .347 0 .495.005"
            />
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M2.184 21.331a.4.4 0 0 0 .487.494l4.607-1.204a10 10 0 0 0 4.76 1.207h.004c5.486 0 9.958-4.446 9.958-9.912a9.83 9.83 0 0 0-2.914-7.011A9.92 9.92 0 0 0 12.042 2c-5.486 0-9.958 4.446-9.958 9.911c0 1.739.458 3.447 1.33 4.954zm2.677-4.068a1.5 1.5 0 0 0-.148-1.15a8.4 8.4 0 0 1-1.129-4.202c0-4.63 3.793-8.411 8.458-8.411c2.27 0 4.388.877 5.986 2.468a8.33 8.33 0 0 1 2.472 5.948c0 4.63-3.793 8.412-8.458 8.412h-.005a8.5 8.5 0 0 1-4.044-1.026a1.5 1.5 0 0 0-1.094-.132l-2.762.721z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Pending