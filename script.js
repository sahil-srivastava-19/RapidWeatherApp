let str=document.getElementById("input");
let btn=document.getElementById('btn');
btn.addEventListener('click',handleValue)
function handleValue(e){
    e.preventDefault();
const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${str.value}&format=json&u=f`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'fa7f1c1b84msh38641908d4c1f8fp196ca7jsnf227da417019',
		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	}
};

fetch(url,options).then((result)=>(result.json())).then((response)=>{
    return document.getElementById("name").innerHTML=`${(response.location.city)}, ${response.location.country}`   
})
fetch(url,options).then((result)=>(result.json())).then((response)=>{
    return document.getElementById("data").innerHTML=`
          <td id="1">${response.current_observation.wind.direction}</td>
          <td id="2">${response.current_observation.wind.speed}</td>
          <td id="3">${response.current_observation.atmosphere.humidity}</td>
          <td id="4">${response.current_observation.atmosphere.visibility}</td>
          <td id="5">${response.current_observation.atmosphere.pressure}</td>
          <td id="6">${response.current_observation.condition.text}</td>`   
})
fetch(url,options).then((result)=>result.json()).then((response)=>{
    return document.getElementById("temp").innerHTML=`${response.current_observation.condition.temperature}°F`;
})

}


