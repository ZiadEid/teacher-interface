import Card from '../../components/common/Card';
import './index.css'
import { useParams } from 'react-router-dom';


export default function Classes() {
    const {classId} =useParams()
    const cardProperties = [
        {
            color: '#DD6B20',
            title: 'الصف الاول الثانوي'
        },
        {
            color: '#00B5D8',
            title: 'الصف الثاني الثانوي'
        },
        {
            color: '#38a169',
            title: 'الصف الثالث الثانوي'
        }
    ]

    return (
        <>
            <div className="d-flex flex-column p-3 gap-3 flex-fill">
                <div className="d-flex justify-content-between align-items-center">
                    <p className='fw-bold ' style={{ fontSize: '20px', lineHeight: '1.2' }}>اهلا بك في فصولك 📚</p>
                </div>
                <div className="classes-section">
                    {
                        cardProperties.map((cardPropertie, index) => {
                            return (
                                // <ClassCard key={index} CardBackGroundColor={cardPropertie.color} ClassCardName={cardPropertie.name} cardNumber={index} />
                                <Card key={index} title={cardPropertie.title} i={index + 1}
                                    bg={cardPropertie.color} p={'المجاميع'} navigateName={`classes/${classId}/groups`} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}