import { useState,useEffect } from "react";

const Card=(props)=>{
    const [imageUrl,setImageUrl]=useState("");
    
    useEffect(() => {
      if(imageUrl.length>0) document.body.style.backgroundImage = `url(${imageUrl})`;
    }, [imageUrl]);
    if(props.data){

    const { data } = props;
    const weather = data.name+" "+data.weather[0].main;
    const query = encodeURIComponent(weather);
    const unsplashApiKey = 'YyEfiDoQp9rJKkCgk4UquCBA60hr8mGcL69pcfLMc_c';
    const unsplashApiUrl = `https://api.unsplash.com/search/photos?query=${query}&client_id=${unsplashApiKey}`;
    fetch(unsplashApiUrl)
  .then(response => response.json())
  .then(data => {
    setImageUrl(data.results[0].urls.raw); 
  })

  return (data && <>
<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12" style={{backgroundColor:"inherit"}}>
  <div className="relative py-3 max-w-7xl mx-auto">
    <div className="relative px-8 py-10 bg-white shadow-lg rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200" style={{backdropFilter: 'blur(20px)'}}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="Weather Icon" className="w-24 h-24" />
            <div className="text-left">
              <p className="text-4xl font-bold">{data.name}</p>
              <p className="text-xl">{data.weather[0].description}</p>
              <div className="flex flex-col sm:flex-row items-center sm:space-x-4 mt-4">
                <div className="flex flex-col items-center">
                  <p className="text-lg font-medium"><span className="font-bold text-4xl sm:text-6xl">{Math.round(data.main.temp)}</span>°C</p>
                  <p className="text-sm font-bold text-gray-500">Temperature</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-lg">{Math.round(data.main.feels_like)}°C</p>
                  <p className="text-sm font-bold text-gray-500">Feels like</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-lg">{data.main.humidity}%</p>
                  <p className="text-sm font-bold text-gray-500">Humidity</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-lg">{Math.round(data.wind.speed)} km/h</p>
                  <p className="text-sm font-bold text-gray-500">Wind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </>)}
}
export default Card;