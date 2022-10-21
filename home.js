//copy this code
// function loadCoupon() {
//     document.getElementById('coupon').style.visibility = 'visible';
//     //document.getElementById('main9').style.opacity = '1';
//     document.getElementById('nav').style.opacity = '0.4';
//     document.getElementById('roop').style.opacity = '0.4';
//     document.getElementById('categories').style.opacity = '0.4';
//     document.getElementById('veriouscategories').style.opacity = '0.4';
//     document.getElementById('collection').style.opacity = '0.4';
//     document.getElementById('offervideo').style.opacity = '0.4';
//     document.getElementById('adverties').style.opacity = '0.4';
//     document.getElementById('trends').style.opacity = '0.4';
//     document.getElementById('footer').style.opacity = '0.4';
//     document.getElementById('coupon').style.opacity = '1';
// }

// function closeCoupon() {
//     document.getElementById('coupon').style.visibility = 'hidden';
//     //document.getElementById('main9').style.opacity = '1'
//     document.getElementById('nav').style.opacity = '1';
//     document.getElementById('roop').style.opacity = '1';
//     document.getElementById('categories').style.opacity = '1';
//     document.getElementById('veriouscategories').style.opacity = '1';
//     document.getElementById('collection').style.opacity = '1';
//     document.getElementById('offervideo').style.opacity = '1';
//     document.getElementById('adverties').style.opacity = '1';
//     document.getElementById('trends').style.opacity = '1';
//     document.getElementById('footer').style.opacity = '1';
// }

function geolocation(){
  if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(showPosition)
  }else{
      x.innerText = "Geo Not Supported"
  }
}

function showPosition(data){
  console.log(data)
  let lat = data.coords.latitude;
  let long = data.coords.longitude;
  //x.innerText = `Latitude is ${lat} and longitude is ${long}`
  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
  //api calling
  fetch(url,{method: 'GET'})
  // return promise
  .then((res) => res.json())
  // resolve promise
  .then((data) => {
      console.log(data)
      let cityName = data.city.name;
      let temp = data.list[0].temp.day;
      y.innerText = ` ${cityName} , ${temp}°C`
  })
  .catch((err) => {
      console.log(err)
  })

}
