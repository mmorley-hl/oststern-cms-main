var restaurants = document.querySelectorAll('.section_listenansicht__restaurants')
var bars = document.querySelectorAll('.section_listenansicht__bars')
var hotels = document.querySelectorAll('.section_listenansicht__hotels')
var fitness = document.querySelectorAll('.section_listenansicht__fitness')
var kitas = document.querySelectorAll('.section_listenansicht__kitas')
var retails = document.querySelectorAll('.section_listenansicht__retails')
var banken = document.querySelectorAll('.section_listenansicht__banken')
var parks = document.querySelectorAll('.section_listenansicht__parks')
var kultur = document.querySelectorAll('.section_listenansicht__kultur')
var tankstellen = document.querySelectorAll('.section_listenansicht__tankstellen')

restaurants.forEach((elem) => {
    elem.onclick = function(e) {
        var tabsName = 'Restaurantsansicht'
        openTabList(e, tabsName)
    }
})

bars.forEach((elem) => {
    elem.onclick = function(e) {
        var tabsName = 'Barsansicht'
        openTabList(e, tabsName)
    }
})

hotels.forEach((elem) => {
    elem.onclick = function(e) {
        var tabsName = 'Hotelsansicht'
        openTabList(e, tabsName)
    }
})

fitness.forEach((elem) => {
    elem.onclick = function(e) {
        var tabsName = 'Fitnessansicht'
        openTabList(e, tabsName)
    }
})

kitas.forEach((elem) => {
    elem.onclick = function(e) {
        var tabsName = 'Kitasansicht'
        openTabList(e, tabsName)
    }
})

retails.forEach((elem) => {
    elem.onclick = function(e) {
        var tabsName = 'Retailsansicht'
        openTabList(e, tabsName)
    }
})

banken.forEach((elem) => {
    elem.onclick = function(e) {
        var tabsName = 'Bankenansicht'
        openTabList(e, tabsName)
    }
})

parks.forEach((elem) => {
    elem.onclick = function(e) {
        var tabsName = 'Parksansicht'
        openTabList(e, tabsName)
    }
})

kultur.forEach((elem) => {
    elem.onclick = function(e) {
        var tabsName = 'Kulturansicht'
        openTabList(e, tabsName)
    }
})

tankstellen.forEach((elem) => {
    elem.onclick = function(e) {
        var tabsName = 'Tankstellenansicht'
        openTabList(e, tabsName)
    }
})

document.getElementById("defaultOpen").click();

function openTabList(evt, tabsName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("section_listenansicht__content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("section_listenansicht__button");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabsName).style.display = "flex";
    evt.currentTarget.className += " active";

  }

