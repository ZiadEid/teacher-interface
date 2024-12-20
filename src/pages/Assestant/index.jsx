import './index.css'
import { useContext } from 'react';
import { ProjectContext } from "../../components/Context/store";
import Table from '../../components/common/Table';
import { TableContext } from '../../components/Context/TablesContext';


export default function Assestant() {
    const { modalType, setModalType } = useContext(ProjectContext);
    const { AssestantsColumns, AssestantsRows } = useContext(TableContext);

    return (
        <>
            <div className="d-flex flex-column p-3 gap-3 flex-fill">
                <div className="d-flex flex-column flex-md-row gap-3 justify-content-between align-items-center">
                    <h2 className='fw-bold ' style={{ fontSize: '20px', lineHeight: '1.2' }}>
                        اهلا بك في تهيئة المحررين 📚
                    </h2>
                    <button className='add-employee-btn d-flex justify-content-center align-items-center border-0 text-white fw-bold'
                    // onClick={() => setModalType('add')}
                    >
                        اضافة محرر
                    </button>
                </div>
                <Table column={AssestantsColumns} row={AssestantsRows} />
                {
                    // modalType && <EmployeeModal />
                }
            </div>
        </>
    )
}