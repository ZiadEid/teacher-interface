import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'aos/dist/aos.css';
import './index.css'
import { ProjectProvider } from './components/Context/store.jsx'
import { TableProvider } from './components/Context/TablesContext.jsx';

createRoot(document.getElementById('root')).render(
    <ProjectProvider>
        <TableProvider>
            <App />
        </TableProvider>
    </ProjectProvider>
)