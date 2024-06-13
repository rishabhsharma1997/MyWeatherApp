import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import WeatherForm from './components/formsComponents/WeatherForm';
function App() {
  const isDarkMode = useSelector(state => state.isDark);

  useEffect(() => {
    document.body.classList.toggle('bg-dark', isDarkMode);
    document.body.classList.toggle('bg-light', !isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="App">
      <WeatherForm />
    </div>
  );
}

export default App;