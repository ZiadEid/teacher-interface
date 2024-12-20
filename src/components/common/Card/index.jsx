import { useNavigate } from 'react-router-dom'
import './index.css'

export default function Card({ title, i, bg, p, navigateName }) {
    const navigate = useNavigate()

    return (
        <>
            <div className="card d-flex flex-column w-100 p-3 rounded-4 text-white fw-bold gap-3 overflow-hidden"
                style={{ backgroundColor: bg }}
                onClick={() => { navigate(`/${navigateName}`) }}>
                <div className="layer position-absolute"></div>
                <div className='d-flex justify-content-start align-items-center gap-2'>
                    <span
                        style={{ color: bg }}
                        className="d-flex justify-content-center align-items-center rounded-circle bg-white p-2 fw-bold"
                    >
                        {i}
                    </span>
                    <p>{title}</p>
                </div>
                <div className="d-flex flex-column gap-3">
                    <p className=''>{p}</p>
                    <hr className='w-100' />
                    <div className="number fw-bold">
                        100
                    </div>
                </div>
            </div>
        </>
    )
}