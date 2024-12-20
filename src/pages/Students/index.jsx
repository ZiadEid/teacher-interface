import './index.css'
import Table from '../../components/common/Table'
import { useContext } from 'react';
import { ProjectContext } from "../../components/Context/store";
import { TableContext } from '../../components/Context/TablesContext';
// import StudentModal from '../../components/StudentModal';

const Students = () => {
  const {modalType, setModalType} = useContext(ProjectContext);
  const { StudentsColumns, StudentsRows } = useContext(TableContext);

  return (
    <>
      <div className="d-flex flex-column p-3 gap-3 flex-fill">
        <div className="d-flex justify-content-between align-items-center">
          <p className='fw-bold ' style={{ fontSize: '20px', lineHeight: '1.2' }}>اهلا بك في بيانات طلابك 📚</p>
          <button className='add-student-btn d-flex justify-content-center align-items-center border-0 text-white fw-bold'
            onClick={() => setModalType('add')}
          >
            اضافة طالب
          </button>
        </div>
        <Table column={StudentsColumns} row={StudentsRows} />
        {
          // modalType && <StudentModal />
        }
      </div>
    </>
  )
}

export default Students