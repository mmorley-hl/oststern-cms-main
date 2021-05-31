var london = document.querySelectorAll('.london')
var paris = document.querySelectorAll('.paris')
london.forEach((elem) => {
    elem.onclick = function(e) {
        var cityName = 'London'
        openCity(e, cityName)
    }
    
})
paris.forEach((elem) => {
    elem.onclick = function(e) {
        var cityName = 'Paris'
        openCity(e, cityName)
    }
    
})

// document.getElementById("defaultOpen").click();

function openCity(evt, cityName) {
    if (cityName == 'London') {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById('London').style.display = "block";
    document.getElementById('Paris').style.display = "none";
    evt.currentTarget.className += " active";
    }
    if (cityName == 'Paris') {
        // Declare all variables
        var i, tabcontent, tablinks;
      
        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
      
        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
      
        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById('Paris').style.display = "block";
        document.getElementById('London').style.display = "none";
        evt.currentTarget.className += " active";
        }

  }

