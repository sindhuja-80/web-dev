const cityInput=document.getElementById("cityInput")
const searchBtn=document.getElementById("searchBtn")
const cityName=document.getElementById("cityName")
const temperature=document.getElementById("temperature")
const humidity=document.getElementById("humidity")
const wind=document.getElementById("wind")
const description = document.getElementById("description")

const apiKey="86315386b5b5ac067e3bb324e38723b9";

async function getWeather(city){
    try{
        const url=  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response= await fetch(url)
        if(!response.ok){
            throw new Error("enter valid city name")
        }
        const data=await response.json()

        cityName.innerText=data.name;
        temperature.innerText=`${Math.round(data.main.temp)} `
        description.innerText=data.weather[0].description;
        humidity.innerText=`${data.main.humidity} %`
        wind.innerText=`${data.wind.speed}km/hr`
    }
    catch(error){
        alert("enter valid city name")
    }
}

searchBtn.addEventListener("click",function (){
  
  const city=cityInput.value
    if(city === ""){
        alert("please enter city name");
        return
    }
    getWeather(city)

})