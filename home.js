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


function setTheme() {
    switch (theme) {
      case "dark":
        setLight();
        theme = "light";
        break;
      case "light":
        setDark();
        theme = "dark";
        break;
    }
  }
  function setLight() {
    root.style.setProperty(
      "--bs-dark",
      "linear-gradient(318.32deg, #c3d1e4 0%, #dde7f3 55%, #d4e0ed 100%)"
    );
    container.classList.remove("shadow-dark");
    setTimeout(() => {
      container.classList.add("shadow-light");
      themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = sun;
  }
  function setDark() {
    root.style.setProperty("--bs-dark", "#212529");
    container.classList.remove("shadow-light");
    setTimeout(() => {
      container.classList.add("shadow-dark");
      themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = moon;
  }