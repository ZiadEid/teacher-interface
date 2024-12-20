import { useContext } from "react";
import { ProjectContext } from "../../Context/store";
import Profile from './../Profile';
import Statistics from "../Statistics";
import Classes from './../Classes';
import Assestant from "../Assestant";

const NavigateTabs = () => {
  const { tabIndex, setTabIndex } = useContext(ProjectContext);

  const navigatetab = () => {
    switch (tabIndex) {
      case 0:
        return <Profile />
      case 1:
        return <Statistics />
      case 2:
        return <Classes />
      case 3:
        return <Assestant />
      default:
        return <Profile />
    }
  }

  return (
    <div className="navigate-tabs">
      {
        navigatetab()
      }
    </div>
  )
}

export default NavigateTabs