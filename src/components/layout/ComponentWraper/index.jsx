import './index.css'
import NavBar from '../NavBar';
import SideBar from '../SideBar';
import Pending from '../Pending';
import Footer from '../Footer';
import { useContext } from 'react';
import { ProjectContext } from '../../Context/store';

const ComponentWraper = ({children}) => {
  const { token, isSideBarOpen } = useContext(ProjectContext);
  return (
    <div>
      <NavBar />
      <SideBar />
      <section style={isSideBarOpen ? { marginRight: '250px' } : { marginRight: '60px' }}>
        {
          token ?
            <>
              {children}
              <Footer />
            </>
            :
            <>
              <Pending />
              <Footer />
            </>
        }
      </section>
    </div>
  )
}

export default ComponentWraper