import React, { useRef, useState } from 'react';
import Input from '../UI/Input';
import Card from '../UI/Card';
import ErrorModal from '../modals/ErrorModal';
function WeatherForm() {
  const [data, setData] = useState(null);
  const [errorModal, setErrorModal] = useState(false);
  const placeRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = "https://weatherapp-jmt1.onrender.com/" + placeRef.current.value + "/";
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      if (jsonData.cod === '404') {
        setErrorModal(true);
      } else {
        setData(jsonData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const closeErrorModal = () => {
    setErrorModal(false);
  };
  return (
    <>
      <div>
        <Input handleSubmit={handleSubmit} placeRef={placeRef} />
        <Card data={data} />
      </div>
      {errorModal && <ErrorModal closeErrorModal={closeErrorModal} />}
    </>
  );
}

export default WeatherForm;
