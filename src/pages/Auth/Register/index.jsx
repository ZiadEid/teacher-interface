import './index.css'
import logo from '../../../assets/footer-logo.png'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { registerSchema } from './registerSchema';
import uploadFile from '../../../components/Lotties/uploadFile.json'
import { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';

const Register = () => {
  // Navigation hook
  const navigate = useNavigate();
  // display uploaded image state and function
  const [uploadedImage, setUploadedImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    }
  };
  // clear image input
  const [inputKey, setInputKey] = useState(0);
  const clearImage = () => {
    setUploadedImage(null);
    values.user_img = ''
    setInputKey(prev => prev = 1); // Update key to reset input 
  };
  useEffect(() => {
    return () => {
      if (uploadedImage) {
        URL.revokeObjectURL(uploadedImage);
      }
    };
  }, [uploadedImage]);
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
  // show confirm password state and function
  const [showConfirmKey, setShowConfirmKey] = useState(0);
  const [confirmVisablePassword, setConfirmVisablePassword] = useState(false);
  const confirmPasswordInput = useRef();
  const showConfirmPassword = () => {
    if (!confirmVisablePassword) {
      confirmPasswordInput.current.type = 'text'
      setConfirmVisablePassword(!confirmVisablePassword)
      setShowConfirmKey(prev => prev + 1)
    }
    else {
      confirmPasswordInput.current.type = 'password'
      setConfirmVisablePassword(!confirmVisablePassword)
      setShowConfirmKey(prev => prev + 1)
    }
  }
  // form on submit function
  const onSubmit = (values, actions) => {
    axios.post(`${baseUrl}/users/store`, values).then((res) => {
      if (res.data.err) {
        alert('This email is already taken');
      } else {
        alert('Register Done');
        navigate('/register');
        actions.resetForm();
      }
    }).catch((err) => {
      alert(err)
    })
  }
  // formik hook for handling login form actions
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      user_img: '',
      user_email: '',
      user_name: '',
      user_phone: '',
      user_password: '',
      confirm_password: ''
    },
    validationSchema: registerSchema,
    onSubmit
  });


  return (
    <div className='register min-vh-100 position-relative d-flex align-items-center justify-content-center p-2'>
      <div className="position-absolute top-0 bottom-0 start-0 end-0 register-layer"></div>
      <div className="register-box position-relative rounded py-3 px-4 bg-white">
        <div className="register-logo mx-auto mb-2 overflow-hidden">
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
          <div className="upload-img position-relative w-100 d-flex flex-column justify-content-center align-items-center gap-2 rounded-2 overflow-hidden">
            {
              uploadedImage ?
                <div className='uploaded-image-fram w-100 position-relative rounded-2 overflow-hidden'>
                  <img
                    data-aos="fade"
                    className='w-100'
                    src={uploadedImage}
                    alt="صورة المستخدم"
                  />
                  <svg
                    onClick={clearImage}
                    className='position-absolute text-white rounded-circle'
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 12L7 7m5 5l5 5m-5-5l5-5m-5 5l-5 5"
                    />
                  </svg>
                </div>
                :
                <>
                  <p className='text-pill position-absolute py-2 px-4 text-white rounded-pill'>اختياري</p>
                  <Lottie
                    style={{ width: "100px" }}
                    animationData={uploadFile}
                  />
                </>
            }
            <div className="d-flex justify-content-center align-items-center gap-2">
              <label
                className={`${uploadedImage ? 'uploaded' : ''} d-flex justify-content-center align-items-center text-white rounded px-3`}
                htmlFor="uploadImg"
              >
                {
                  uploadedImage ?
                    'تغير الصورة'
                    :
                    'رفع صورة شخصية'
                }
                <input
                  key={inputKey}
                  id='uploadImg'
                  hidden
                  accept="image/gif, image/jpg, image/jpeg, image/png"
                  required={false}
                  type="file"
                  name="user_img"
                  value={values.user_img}
                  onChange={(e) => {
                    handleChange(e)
                    handleImageChange(e)
                  }
                  }
                  onBlur={handleBlur}
                />
              </label>
              {
                uploadedImage &&
                <button
                  type='button'
                  className="save-uploaded d-flex justify-content-center align-items-center text-white rounded px-3"
                >
                  حفظ الصورة
                </button>
              }
            </div>
          </div>
          <input
            type="email"
            name='user_email'
            placeholder='البريد الالكتروني'
            value={values.user_email}
            onChange={handleChange}
            onBlur={handleBlur}
            className='rounded pe-3'
          />
          {
            errors.user_email && touched.user_email &&
            <p className='error text-danger'>{errors.user_email}</p>
          }
          <input
            type="text"
            name='user_name'
            placeholder='الاسم المعلم'
            value={values.user_name}
            onChange={handleChange}
            onBlur={handleBlur}
            className='rounded pe-3'
          />
          {
            errors.user_name && touched.user_name &&
            <p className='error text-danger'>{errors.user_name}</p>
          }
          <input
            type="text"
            name='user_phone'
            placeholder='رقم الهاتف ( واتساب )'
            value={values.user_phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className='rounded pe-3'
          />
          {
            errors.user_phone && touched.user_phone &&
            <p className='error text-danger'>{errors.user_phone}</p>
          }
          <div className='position-relative px-0 d-flex align-items-center justify-content-start'>
            <input
              type="password"
              name='user_password'
              placeholder='الرقم السري'
              value={values.user_password}
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
            errors.user_password && touched.user_password &&
            <p className='error text-danger'>{errors.user_password}</p>
          }
          <div className='position-relative px-0 d-flex align-items-center justify-content-start'>
            <input
              type="password"
              name='confirm_password'
              placeholder=' تاكيد الرقم السري'
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
              className='rounded pe-3 rounded-start-0'
              ref={confirmPasswordInput}
            />
            {
              confirmVisablePassword ?
                <svg
                  onClick={showConfirmPassword}
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  className="eyed position-absolute top-0 bottom-0 start-0 rounded-start border-end-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    key={showConfirmKey}
                    data-aos="fade-up"
                    d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                  >
                  </path>
                </svg>
                :
                <svg
                  onClick={showConfirmPassword}
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 256 256"
                  className="eyed position-absolute top-0 bottom-0 start-0 rounded-start border-end-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    key={showConfirmKey}
                    data-aos="fade-up"
                    d="M228,175a8,8,0,0,1-10.92-3l-19-33.2A123.23,123.23,0,0,1,162,155.46l5.87,35.22a8,8,0,0,1-6.58,9.21A8.4,8.4,0,0,1,160,200a8,8,0,0,1-7.88-6.69l-5.77-34.58a133.06,133.06,0,0,1-36.68,0l-5.77,34.58A8,8,0,0,1,96,200a8.4,8.4,0,0,1-1.32-.11,8,8,0,0,1-6.58-9.21L94,155.46a123.23,123.23,0,0,1-36.06-16.69L39,172A8,8,0,1,1,25.06,164l20-35a153.47,153.47,0,0,1-19.3-20A8,8,0,1,1,38.22,99c16.6,20.54,45.64,45,89.78,45s73.18-24.49,89.78-45A8,8,0,1,1,230.22,109a153.47,153.47,0,0,1-19.3,20l20,35A8,8,0,0,1,228,175Z"
                  >
                  </path>
                </svg>
            }
          </div>
          {
            errors.confirm_password && touched.confirm_password &&
            <p className='error text-danger'>{errors.confirm_password}</p>
          }
          <Link to={'/login'}>لديك حساب بالفعل ؟ الرجاء الضغط هنا لتسجيل الدخول</Link>
          <button disabled={isSubmitting} type='submit' className='text-white rounded '>
            انشاء حساب
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
          <button disabled={isSubmitting} type='submit' className='text-white rounded'>
            انشاء حساب بواسطة جوجل
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
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register