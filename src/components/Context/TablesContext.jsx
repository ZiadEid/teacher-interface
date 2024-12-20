import { createContext } from "react"

const TableContext = createContext();
const TableProvider = ({ children }) => {
  const AssestantsColumns = [
    {
      name: "كود المساعد",
      selector: row => row.id,
      sortable: true
    },
    {
      name: "اسم المساعد",
      selector: row => row.fullName,
      sortable: true
    },
    {
      name: "رقم الهاتف",
      selector: row => row.height,
      sortable: true
    },
    {
      name: "التاريخ",
      selector: row => row.date,
      sortable: true
    },
    {
      name: "",
      cell: row => (
        <div className='d-flex gap-3'>
          <button style={{ backgroundColor: 'transparent', border: 'none', color: '#00B5D8' }}
            onClick={() => setModalType('update')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path fill="currentColor" d="M7.243 17.997H3v-4.243L14.435 2.319a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1 0 1.415zm-4.243 2h18v2H3z" />
            </svg>
          </button>
          <button style={{ backgroundColor: 'transparent', border: 'none', color: '#e53e3e' }}
            onClick={() => handleDelete(row.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" />
            </svg>
          </button>
        </div>
      ),
    },
  ];
  const AssestantsRows = [
    {
        id: 1,
        fullName: "John Doe",
        height: "1.75m",
        date: new Date('2024-11-10').toLocaleDateString()
    },
    {
        id: 2,
        fullName: "Jane Doe",
        height: "1.64m",
        date: new Date('2024-9-10').toLocaleDateString()
    },
    {
        id: 3,
        fullName: "Sheera Maine",
        height: "1.69m",
        date: new Date('2024-8-10').toLocaleDateString()
    },
    {
        id: 4,
        fullName: "Sheera Maine",
        height: "1.69m",
        date: new Date('2024-8-20').toLocaleDateString()
    },
  ];
  const StudentsColumns = [
    {
      name: "كود المساعد",
      selector: row => row.id,
      sortable: true
    },
    {
      name: "اسم المساعد",
      selector: row => row.fullName,
      sortable: true
    },
    {
      name: "رقم الهاتف",
      selector: row => row.height,
      sortable: true
    },
    {
      name: "التاريخ",
      selector: row => row.date,
      sortable: true
    },
    {
      name: "",
      cell: row => (
        <div className='d-flex gap-3'>
          <button style={{ backgroundColor: 'transparent', border: 'none', color: '#00B5D8' }}
            onClick={() => setModalType('update')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path fill="currentColor" d="M7.243 17.997H3v-4.243L14.435 2.319a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1 0 1.415zm-4.243 2h18v2H3z" />
            </svg>
          </button>
          <button style={{ backgroundColor: 'transparent', border: 'none', color: '#e53e3e' }}
            onClick={() => handleDelete(row.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" />
            </svg>
          </button>
        </div>
      ),
    },
  ];
  const StudentsRows = [
    {
        id: 1,
        fullName: "John Doe",
        height: "1.75m",
        date: new Date('2024-11-10').toLocaleDateString()
    },
    {
        id: 2,
        fullName: "Jane Doe",
        height: "1.64m",
        date: new Date('2024-9-10').toLocaleDateString()
    },
    {
        id: 3,
        fullName: "Sheera Maine",
        height: "1.69m",
        date: new Date('2024-8-10').toLocaleDateString()
    },
    {
        id: 4,
        fullName: "Sheera Maine",
        height: "1.69m",
        date: new Date('2024-8-20').toLocaleDateString()
    },
  ];
  const FinancesColumns = [
    {
      name: "كود المساعد",
      selector: row => row.id,
      sortable: true
    },
    {
      name: "اسم المساعد",
      selector: row => row.fullName,
      sortable: true
    },
    {
      name: "رقم الهاتف",
      selector: row => row.height,
      sortable: true
    },
    {
      name: "التاريخ",
      selector: row => row.date,
      sortable: true
    },
    {
      name: "",
      cell: row => (
        <div className='d-flex gap-3'>
          <button style={{ backgroundColor: 'transparent', border: 'none', color: '#00B5D8' }}
            onClick={() => setModalType('update')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path fill="currentColor" d="M7.243 17.997H3v-4.243L14.435 2.319a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1 0 1.415zm-4.243 2h18v2H3z" />
            </svg>
          </button>
          <button style={{ backgroundColor: 'transparent', border: 'none', color: '#e53e3e' }}
            onClick={() => handleDelete(row.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" />
            </svg>
          </button>
        </div>
      ),
    },
  ];
  const FinancesRows = [
    {
        id: 1,
        fullName: "John Doe",
        height: "1.75m",
        date: new Date('2024-11-10').toLocaleDateString()
    },
    {
        id: 2,
        fullName: "Jane Doe",
        height: "1.64m",
        date: new Date('2024-9-10').toLocaleDateString()
    },
    {
        id: 3,
        fullName: "Sheera Maine",
        height: "1.69m",
        date: new Date('2024-8-10').toLocaleDateString()
    },
    {
        id: 4,
        fullName: "Sheera Maine",
        height: "1.69m",
        date: new Date('2024-8-20').toLocaleDateString()
    },
  ];
  const GroupStudentsColumns = [
    {
      name: "كود المساعد",
      selector: row => row.id,
      sortable: true
    },
    {
      name: "اسم المساعد",
      selector: row => row.fullName,
      sortable: true
    },
    {
      name: "رقم الهاتف",
      selector: row => row.height,
      sortable: true
    },
    {
      name: "التاريخ",
      selector: row => row.date,
      sortable: true
    },
    {
      name: "",
      cell: row => (
        <div className='d-flex gap-3'>
          <button style={{ backgroundColor: 'transparent', border: 'none', color: '#00B5D8' }}
            onClick={() => setModalType('update')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path fill="currentColor" d="M7.243 17.997H3v-4.243L14.435 2.319a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1 0 1.415zm-4.243 2h18v2H3z" />
            </svg>
          </button>
          <button style={{ backgroundColor: 'transparent', border: 'none', color: '#e53e3e' }}
            onClick={() => handleDelete(row.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" />
            </svg>
          </button>
        </div>
      ),
    },
  ];
  const GroupStudentsRows = [
    {
        id: 1,
        fullName: "John Doe",
        height: "1.75m",
        date: new Date('2024-11-10').toLocaleDateString()
    },
    {
        id: 2,
        fullName: "Jane Doe",
        height: "1.64m",
        date: new Date('2024-9-10').toLocaleDateString()
    },
    {
        id: 3,
        fullName: "Sheera Maine",
        height: "1.69m",
        date: new Date('2024-8-10').toLocaleDateString()
    },
    {
        id: 4,
        fullName: "Sheera Maine",
        height: "1.69m",
        date: new Date('2024-8-20').toLocaleDateString()
    },
  ];
  const contextValues = {
    AssestantsColumns,
    AssestantsRows ,
    StudentsColumns,
    StudentsRows,
    FinancesColumns,
    FinancesRows,
    GroupStudentsColumns,
    GroupStudentsRows,
  }

   

  return (
    <TableContext.Provider value={contextValues}>
      {children}
    </TableContext.Provider>
  )
}

export { TableContext, TableProvider };