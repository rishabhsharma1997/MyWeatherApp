import {React} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {isDarkActions} from "../../store/index";
function DLButton() {
    const isDarkMode=useSelector((state)=>state.isDark);
    const dispatch=useDispatch();
    const handleToggle = () => {
        dispatch(isDarkActions.toggleMode());
    };
return (<>
    <div className="ml-4">
        <label className="flex items-center">
          <span className="mr-2">Dark mode</span>
          <button type="button" onClick={handleToggle} className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <span className={`transition-transform ease-in-out duration-300 inline-block w-5 h-5 transform ${isDarkMode ? 'translate-x-5' : 'translate-x-0'} rounded-full shadow-md ${isDarkMode ? 'bg-white' : 'bg-gray-500'}`}></span>
          </button>
        </label>
      </div>
  </>)
}

export default DLButton;