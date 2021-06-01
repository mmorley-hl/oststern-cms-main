var kartenansicht = document.querySelectorAll('.kartenansicht')
var listenansicht = document.querySelectorAll('.listenansicht')

kartenansicht.forEach((elem) => {
    elem.onclick = function(e) {
        var tabsName = 'Kartenansicht'
        openTab(e, tabsName)
    }
    
})
listenansicht.forEach((elem) => {
    elem.onclick = function(e) {
        var tabsName = 'Listenansicht'
        openTab(e, tabsName)
    }
    
})

// document.getElementById("defaultOpen").click();

function openTab(evt, tabsName) {
    if (tabsName == 'Kartenansicht') {
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
    document.getElementById('Kartenansicht').style.display = "block";
    document.getElementById('Listenansicht').style.display = "none";
    evt.currentTarget.className += " active";
    }
    if (tabsName == 'Listenansicht') {
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
        document.getElementById('Listenansicht').style.display = "block";
        document.getElementById('Kartenansicht').style.display = "none";
        evt.currentTarget.className += " active";
        document.getElementById("defaultOpen").click();
        }

  }

