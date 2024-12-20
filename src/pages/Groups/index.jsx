import './index.css'
// import GroupModal from '../../components/GroupModal'
import { useContext } from 'react'
import Card from '../../components/common/Card'
import { ProjectContext } from '../../components/Context/store'
import { useParams } from 'react-router-dom'
import { colors } from './../../Data/Colors/index';



export default function Groups() {
    const { modalType, setModalType } = useContext(ProjectContext);
    const {classId, groupId} = useParams()

    return (
        <>
            <div className="d-flex flex-column p-3 gap-3 flex-fill">
                <div className="d-flex justify-content-between align-items-center">
                    <p className='fw-bold ' style={{ fontSize: '20px', lineHeight: '1.2' }}>
                        اهلا بك في مجموعاتك 📚
                    </p>
                    <button className='add-group-btn d-flex justify-content-center align-items-center border-0 text-white fw-bold'
                        onClick={() => setModalType('add')}>
                        اضافة مجموعه
                    </button>
                </div>
                <div className="groups-section">
                    {
                        colors.map((color, index) => {
                            return (
                                <Card key={index} title={'حد واربع 5 صباحا'} i={index + 1}
                                    bg={color} p={'طلاب'} navigateName={`classes/${classId}/groups/${groupId}/students`} />
                            )
                        })
                    }
                </div>
                {
                    // modalType && <GroupModal />
                }
            </div>
        </>
    )
}