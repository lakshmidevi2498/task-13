
var input=document.getElementById("inputLocation");
var temp=document.getElementById("temp");
var descp=document.getElementById("description");
var loc=document.getElementById("location");
var wind=document.getElementById("wind");
var pres=document.getElementById("pressure");
var hum=document.getElementById("humidity");
var btn=document.getElementById("button");
var keyapi="4632a4142b1f952d79d377305970a690";

function searchWeather() {
   console.log("searchWeather function called");
    console.log("input value:", input.value);

    if(input.value == "")
     { 
        
        document.getElementById("error").innerHTML="Please enter Location";
     }
     else
      {
        var location=input.value;
        document.getElementById("error").innerHTML="";
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${keyapi}`;
        axios.get(url)
        .then((data)=>{
      
            console.log(data);
            console.log(data.name);
            console.log(Math.floor(data.main.temp - 273));
            console.log(data.weather[0].main);
            console.log(data.wind.speed);
            console.log(data.main.pressure);
            console.log(data.main.humidity);

            temp.innerText=`${Math.floor(data.main.temp - 273)}`;
            descp.innerText=`${data.weather[0].main}`;
            loc.innerText=`${data.name}`;
            wind.innerText=`${data.wind.speed}`;
            pres.innerText=`${data.main.pressure}`;
            hum.innerText=`${data.main.humidity}`;
            document.getElementById("icon").src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
         })
        
      .catch(() => {
            document.getElementById("error").innerHTML = "Please enter a valid location";
        });
    }
    
   }


   //  .then((response)=>console.log(response))
   //  .catch((error)=>console.log(error));