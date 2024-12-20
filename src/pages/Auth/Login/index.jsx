import './index.css'
import logo from '../../../assets/footer-logo.png'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginSchema } from './LoginSchema';
import { useContext, useRef, useState } from 'react';
import { ProjectContext } from '../../../components/Context/store';
import Loader from '../../../components/common/Loader';
const Login = () => {
  const {baseUrl, isLoading, setIsLoading} = useContext(ProjectContext)
  // Navigation hook
  const navigate = useNavigate();
  // show password state and function
  const [visablePassword, setVisablePassword] = useState(false);
  const [showKey, setShowKey] = useState(0);
  const passwordInput = useRef();

  const showPassword = () => {
    if (!visablePassword) {
      passwordInput.current.type = 'text'
      setVisablePassword(!visablePassword)
      setShowKey(prev => prev + 1)
    }
    else {
      passwordInput.current.type = 'password'
      setVisablePassword(!visablePassword)
      setShowKey(prev => prev + 1)
    }
  }
  // form on submit function
  const onSubmit = (values, actions) => {
    setIsLoading(true)
    axios.post(`${baseUrl}/api/auth/teacher/login`, values).then((res) => {
      // if (res.data.err) {
      //   alert(res.data.msg);
      // } else {
      //   let token = res.data.data[0].user_token
      //   sessionStorage.setItem('token', JSON.stringify(token))
      //   navigate('/');
      //   alert(res.data.msg);
      // }
      setIsLoading(false)
      console.log(values)
    }).catch((err) => {
      setIsLoading(false)
      console.log(err)
    })
    actions.resetForm()
  }
  // formik hook for handling login form actions
  const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      password: '',
      email: ''
    },
    validationSchema: loginSchema,
    onSubmit
  });

  return (
    <div className='login vh-100 position-relative d-flex align-items-center justify-content-center'>
      <div className="position-absolute top-0 bottom-0 start-0 end-0 login-layer"></div>
      <div className="login-box position-relative rounded py-4 px-3 bg-white">
        <div className="login-logo mx-auto mb-2 overflow-hidden">
          <img
            data-aos="fade"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className='w-100'
            src={logo}
            alt="منصة الابطال"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className='row flex-column g-3'
        >
          <input
            type="email"
            name='email'
            placeholder='البريد الالكتروني'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className='rounded pe-3'
          />
          {
            errors.email && touched.email &&
            <p className='error text-danger'>{errors.email}</p>
          }
          <div className="position-relative px-0 d-flex align-items-center justify-content-start">
            <input
              type="password"
              name='password'
              placeholder='الرقم السري'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className='rounded pe-3 rounded-start-0'
              ref={passwordInput}
            />
            {
              visablePassword ?
                <svg
                  onClick={showPassword}
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  className="eyed position-absolute top-0 bottom-0 start-0 rounded-start border-end-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    key={showKey}
                    data-aos="fade-up"
                    d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                  >
                  </path>
                </svg>
                :
                <svg
                  onClick={showPassword}
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 256 256"
                  className="eyed position-absolute top-0 bottom-0 start-0 rounded-start border-end-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    key={showKey}
                    data-aos="fade-up"
                    d="M228,175a8,8,0,0,1-10.92-3l-19-33.2A123.23,123.23,0,0,1,162,155.46l5.87,35.22a8,8,0,0,1-6.58,9.21A8.4,8.4,0,0,1,160,200a8,8,0,0,1-7.88-6.69l-5.77-34.58a133.06,133.06,0,0,1-36.68,0l-5.77,34.58A8,8,0,0,1,96,200a8.4,8.4,0,0,1-1.32-.11,8,8,0,0,1-6.58-9.21L94,155.46a123.23,123.23,0,0,1-36.06-16.69L39,172A8,8,0,1,1,25.06,164l20-35a153.47,153.47,0,0,1-19.3-20A8,8,0,1,1,38.22,99c16.6,20.54,45.64,45,89.78,45s73.18-24.49,89.78-45A8,8,0,1,1,230.22,109a153.47,153.47,0,0,1-19.3,20l20,35A8,8,0,0,1,228,175Z"
                  >
                  </path>
                </svg>
            }
          </div>
          {
            errors.password && touched.password &&
            <p className='error text-danger'>{errors.password}</p>
          }
          {/* <Link to={'/register'}>ليس لديك حساب ؟ الرجاء الضغط هنا لانشاء حساب</Link> */}
          <Link>نسيت الرقم السري ؟ متقلقش دوس هنا و هنرجعلك الرقم السري</Link>
          <button disabled={isSubmitting} type='submit' className='text-white rounded position-relative overflow-hidden'>
            {
              isLoading && <Loader />
            }
            تسجيل الدخول
            <svg
              className="me-2"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              >
              </path>
            </svg>
          </button>
          {/* <button disabled={isSubmitting} type='submit' className='text-white rounded'>
            تسجيل الدخول بواسطة جوجل
            <svg
              className="me-2"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"
              >
              </path>
            </svg>
          </button> */}
        </form>
      </div>
    </div>
  )
}

export default Login