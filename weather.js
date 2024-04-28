const btn = document.getElementById("search-btn");
const input = document.getElementById("enter-city");
const cityName = document.getElementById("city-Name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");
const cityCondition = document.getElementById("condition");
const cityWindSpeed = document.getElementById("wind-speed");
const cityHumidity = document.getElementById("humidity");






async function getData (cityName){ 
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=b3ec890025c1424cb6c190150242604&q=${cityName}&aqi=yes`);

    return await promise.json();

}


btn.addEventListener("click" , async () => {


    if(input.value == ""){
        alert("Please Enter City name")
    }
    else{
    const value = input.value;
    const result = await getData(value);
    
    const Mph = `${result.current.wind_mph}`;
    const Kmph = Math.round(Mph* 1.60934);
    


   cityName.innerText = `City-Region-Country  |   ${result.location.name},${result.location.region},${result.location.country}`;
   cityTime.innerText = `Current Date and Time  |  ${result.location.localtime}`;
   cityTemp.innerText = `Current Temperature  | ${result.current.temp_c + "c"}`;
   cityCondition.innerText = `Current condition | ${result.current.condition.text}`;
   cityWindSpeed.innerText = `Current Wind Speed | ${Kmph + ".kmph"}`
//    cityWindSpeed.innerText = `${result.current.wind_mph* 1.60934}`;
   cityHumidity.innerText = `Current Humidity  |  ${result.current.humidity+ "%"}`

   input.value="";
}

});


// http://api.weatherapi.com/v1/current.json?key=b3ec890025c1424cb6c190150242604&q=London&aqi=yes