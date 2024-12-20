import './index.css'
import DataTable from "react-data-table-component";
import { useState, useContext } from 'react';
import { ProjectContext } from "../../Context/store";
import CalenderFilter from '../Calender';

export default function Table({column, row}) {
    const { modalType, setModalType, selectedDate, setSelectedDate } = useContext(ProjectContext)


    const columns = column;
    const rows = row;

    const [data, setData] = useState(rows);

    const handleSearch = (e) => {
        let searchValue = ''
        const newRows = rows.filter((row) => {
            let idValue = row.id
                .toString()
                .toLowerCase()
                .includes(e.target.value.toLowerCase());
            let fullNameValue = row.fullName
                .toLowerCase()
                .includes(e.target.value.toLowerCase());
            let heightValue = row.height
                .toLowerCase()
                .includes(e.target.value.toLowerCase());

            if (idValue) {
                searchValue = idValue;
            } else if (fullNameValue) {
                searchValue = fullNameValue;
            } else {
                searchValue = heightValue;
            }

            return searchValue;
        });

        setData(newRows);
    }

    return (
        <div
            className="assestant-table d-flex flex-column gap-3 p-4 rounded-3"
            data-aos="fade"
            data-aos-easing="ease"
            data-aos-duration="700"
        >
            <div className="d-flex align-items-center gap-5">
                <div className='overflow-auto mx-auto mx-md-0'>
                    <div className="table-search">
                        <input
                            type="search"
                            className="search-btn text-center p-0 pe-md-3 w-100"
                            placeholder="بحث"
                            onChange={handleSearch}
                        />
                    </div>
                </div>
                <CalenderFilter />
            </div>
            <div className="table-section rounded-1 overflow-hidden">
                <DataTable columns={columns} data={data}
                    fixedHeader pagination striped selectableRows selectableRowsSingle selectableRowsHighlight />
            </div>
            {
                // modalType && <EmployeeModal />
            }
        </div>
    )
}