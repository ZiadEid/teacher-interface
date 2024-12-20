import './index.css'
import { useContext } from 'react';
import Table from '../../components/common/Table';
import { TableContext } from '../../components/Context/TablesContext';

export default function Finance() {
    const { FinancesColumns, FinancesRows } = useContext(TableContext);
    return (
        <>
            <div className="d-flex flex-column p-3 gap-3 flex-fill">
                <div className="d-flex justify-content-between align-items-center">
                    <p className='fw-bold ' style={{ fontSize: '20px', lineHeight: '1.2' }}>اهلا بك في جدول المصروفات 📚</p>
                </div>
                <Table column={FinancesColumns} row={FinancesRows} />
            </div>
        </>
    )
}