import { createContext, useState } from "react"

const ProjectContext = createContext();
const ProjectProvider = ({ children }) => {
    const [baseUrl, setBaseUrl] = useState('http://localhost:3000')
    const [token, setToken] = useState(true);
    const [modalType, setModalType] = useState(false);

    // Loader
    const [isLoading, setIsLoading] =useState(false)

    // Side bar 
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [tabIndex, setTabIndex] = useState(0);

    const [selectedDate, setSelectedDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const contextValues = {
        modalType,
        setModalType,
        isSideBarOpen,
        setIsSideBarOpen,
        selectedDate,
        setSelectedDate,
        token,
        setToken,
        tabIndex,
        setTabIndex,
        baseUrl,
        isLoading,
         setIsLoading,
    }

    return (
        <ProjectContext.Provider value={contextValues}>
            {children}
        </ProjectContext.Provider>
    )
}

export { ProjectContext, ProjectProvider };