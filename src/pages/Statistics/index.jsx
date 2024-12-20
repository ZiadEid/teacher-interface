import './index.css'
import Card from '../../components/common/Card';
import { statisticProps } from '../../Data/StatisticProps/index.jsx';

export default function Statistics() {
    

    return (
        <>
            <div className="d-flex flex-column p-3 gap-3 flex-fill">
                <div className="d-flex justify-content-between align-items-center">
                    <p className='fw-bold ' style={{ fontSize: '20px', lineHeight: '1.2' }}>اهلا بك في احصائياتك 📚</p>
                </div>
                <div className="statistics-section">
                    {
                        statisticProps.map((statistic, index) => {
                            return (
                                <Card key={index} title={statistic.title} i={statistic.icon} 
                                bg={statistic.color} p={'العدد'} navigateName={statistic.name} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}