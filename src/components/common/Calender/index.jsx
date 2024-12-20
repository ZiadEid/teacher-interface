import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './index.css'
import { useContext, useEffect, useState } from 'react';
import { DateRange } from 'react-date-range';
import { ar } from 'date-fns/locale'
import { ProjectContext } from '../../Context/store';

export default function CalenderFilter() {
    const [isShowDateRange, setIsShowDateRange] = useState(false)
    const [isMobile, setIsmobile] = useState(false)
    const {selectedDate, setSelectedDate} = useContext(ProjectContext);

    useEffect(() => {
        const handleResize = () => {
            setIsmobile(window.innerWidth <= 1024)
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className='position-relative'>
            <div className="d-flex align-items-center gap-2">
                <button className="calender-btn d-flex align-items-center gap-3 rounded border px-4 py-2 text-white"
                    onClick={() => setIsShowDateRange(!isShowDateRange)}>
                    <span>اختار التاريح</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z" />
                    </svg>
                </button>
                <span className='text-muted' style={{ direction: 'rtl' }} >{selectedDate[0].startDate.toLocaleDateString()} - {selectedDate[0].endDate.toLocaleDateString()}</span>
            </div>
            {
                isShowDateRange && (
                    <div className="position-absolute mt-2" style={{ direction: 'ltr', zIndex: '5' }}>
                        <DateRange 
                            editableDateInputs={true}
                            onChange={item => setSelectedDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={selectedDate}
                            showSelectionPreview={false}
                            showPreview={false}
                            showDateDisplay={true}
                            months={isMobile ? 1 : 2}
                            direction={isMobile ? 'vertical' : 'horizontal'}
                            rangeColors={['#3182ce']}
                            locale={ar}
                            className='shadow-sm rounded'
                        />
                    </div>
                )
            }
        </div>
    )
}