import './index.css'
import footerLogo from '../../../assets/footer-logo.png'

const Footer = () => {
  return (
    <>
      <div className='footer d-flex flex-wrap-reverse justify-content-center align-items-center p-3 p-xlg-4 gap-md-3 gap-4'>
        <div className="footer-content w-100 d-flex justify-content-center flex-wrap gap-md-5 gap-4">
          <ul className='w-100 rounded-2 flex-column bg-white p-3 gap-3 '>
            <li>
              <a
                className='d-flex align-items-center gap-3 fw-bold position-relative overflow-hidden'
                href="#"
              >
                <svg
                  className='p-2 rounded-3 text-white position-relative'
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="M3.551 2.442c.854-.478 1.943-.59 2.984-.326c.507.128.94.457 1.2.91l.898 1.566a2.5 2.5 0 0 1-.829 3.354l-.79.502c-.327.207-.447.524-.372.775c.268.898.861 1.894 1.513 2.576c.194.204.55.252.898.049l.437-.255a2.5 2.5 0 0 1 3.44.938l.805 1.435c.263.47.306 1.031.12 1.536c-.371 1.003-1.086 1.812-1.965 2.217c-.893.411-1.938.394-2.884-.237c-1.498-.998-3.303-2.678-4.938-5.48c-1.656-2.84-2.073-5.257-2.026-7.059c.03-1.153.64-2.015 1.509-2.501m9.192-.38a.5.5 0 1 0-.486.874l.384.214a8.5 8.5 0 0 1 4.33 6.584l.032.315a.5.5 0 1 0 .994-.1l-.031-.314a9.5 9.5 0 0 0-4.84-7.36zm-1.172 2.68a.5.5 0 0 1 .686-.171l.124.074A6.5 6.5 0 0 1 15.45 9.15l.044.267a.5.5 0 1 1-.986.164l-.045-.266a5.5 5.5 0 0 0-2.595-3.813l-.124-.074a.5.5 0 0 1-.172-.686"
                  />
                </svg>
                <span className='position-relative'>+201060536977</span>
              </a>
            </li>
            <li>
              <a
                className='d-flex align-items-center gap-3 fw-bold position-relative overflow-hidden'
                href="https://www.google.com/maps/place/Rivoli+Cinema/@30.7877174,30.9891557,17z/data=!3m1!4b1!4m6!3m5!1s0x14f7c96166d03d3d:0x450e7dcaf7d8ca2f!8m2!3d30.7877174!4d30.9917306!16s%2Fg%2F1tp1dj4k?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
              >
                <svg
                  className='p-2 rounded-3 text-white'
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M8.75 10a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0" />
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M3.774 8.877a8.04 8.04 0 0 1 8.01-7.377h.432a8.04 8.04 0 0 1 8.01 7.377a8.7 8.7 0 0 1-1.933 6.217L13.5 20.956a1.937 1.937 0 0 1-3 0l-4.792-5.862a8.7 8.7 0 0 1-1.934-6.217M12 5.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="position-relative">
                  شارع النحاس متفرع من عثمان محمد
                </span>
              </a>
            </li>
            <li>
              <a
                className='d-flex align-items-center gap-3 fw-bold position-relative overflow-hidden'
                href="https://www.facebook.com/Ziad98E"
              >
                <svg
                  className='p-2 rounded-3 text-white'
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256"
                  />
                </svg>
                <span className="position-relative">
                  صفحتنا علي فيس بوك
                </span>
              </a>
            </li>
          </ul>
          <div className='w-100 rounded-2 d-flex flex-column bg-white p-3 gap-4 text-center'>
            <p className='fw-bold'>تم صنع هذة المنصة بهدف تهيئة الطالب لكامل جوانب مرحلته العلمية</p>
            <a
              className="call-support d-flex justify-content-center align-items-center px-3 rounded-pill fw-bold"
              href="https://wa.me/+201013818320"
              target="_blank"
            >
              محادثة الدعم
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 18v3.766l1.515-.909L11.277 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h1zM4 8h12v8h-5.277L7 18.234V16H4V8z"
                >
                </path>
                <path
                  d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z"
                >
                </path>
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-img w-100 p-4">
          <img className='w-100' src={footerLogo} alt="اكادمية الابطال" />
        </div>
      </div>
      <div className="developers-footer w-100 p-2 d-flex flex-column justify-content-center align-items-center gap-2">
        <p className='by-me fw-bold position-relative d-flex justify-content-center align-items-center'>تم التطوير من قبل</p>
        <p className='fw-bold'>(Ali ❣️ Ziad)</p>
      </div>
    </>
  )
}

export default Footer