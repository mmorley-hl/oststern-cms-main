// var restaurants = document.querySelectorAll('.section_listenansicht__restaurants')
// var bars = document.querySelectorAll('.section_listenansicht__bars')
// var hotels = document.querySelectorAll('.section_listenansicht__hotels')
// var fitness = document.querySelectorAll('.section_listenansicht__fitness')
// var kitas = document.querySelectorAll('.section_listenansicht__kitas')
// var retails = document.querySelectorAll('.section_listenansicht__retails')
// var banken = document.querySelectorAll('.section_listenansicht__banken')
// var parks = document.querySelectorAll('.section_listenansicht__parks')
// var kultur = document.querySelectorAll('.section_listenansicht__kultur')
// var tankstellen = document.querySelectorAll('.section_listenansicht__tankstellen')



//////////////custom selct
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

//////////////////////////////
// restaurants.forEach((elem) => {
//     elem.onclick = function(e) {
//         var tabsName = 'Restaurantsansicht'
//         openTabList(e, tabsName)
//     }
// })

// bars.forEach((elem) => {
//     elem.onclick = function(e) {
//         var tabsName = 'Barsansicht'
//         openTabList(e, tabsName)
//     }
// })

// hotels.forEach((elem) => {
//     elem.onclick = function(e) {
//         var tabsName = 'Hotelsansicht'
//         openTabList(e, tabsName)
//     }
// })

// fitness.forEach((elem) => {
//     elem.onclick = function(e) {
//         var tabsName = 'Fitnessansicht'
//         openTabList(e, tabsName)
//     }
// })

// kitas.forEach((elem) => {
//     elem.onclick = function(e) {
//         var tabsName = 'Kitasansicht'
//         openTabList(e, tabsName)
//     }
// })

// retails.forEach((elem) => {
//     elem.onclick = function(e) {
//         var tabsName = 'Retailsansicht'
//         openTabList(e, tabsName)
//     }
// })

// banken.forEach((elem) => {
//     elem.onclick = function(e) {
//         var tabsName = 'Bankenansicht'
//         openTabList(e, tabsName)
//     }
// })

// parks.forEach((elem) => {
//     elem.onclick = function(e) {
//         var tabsName = 'Parksansicht'
//         openTabList(e, tabsName)
//     }
// })

// kultur.forEach((elem) => {
//     elem.onclick = function(e) {
//         var tabsName = 'Kulturansicht'
//         openTabList(e, tabsName)
//     }
// })

// tankstellen.forEach((elem) => {
//     elem.onclick = function(e) {
//         var tabsName = 'Tankstellenansicht'
//         openTabList(e, tabsName)
//     }
// })

// document.getElementById("defaultOpen").click();

// function openTabList(evt, tabsName) {
//     // Declare all variables
//     var i, tabcontent, tablinks;
  
//     // Get all elements with class="tabcontent" and hide them
//     tabcontent = document.getElementsByClassName("section_listenansicht__content");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }
  
//     // Get all elements with class="tablinks" and remove the class "active"
//     tablinks = document.getElementsByClassName("section_listenansicht__button");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
  
//     // Show the current tab, and add an "active" class to the button that opened the tab
//     document.getElementById(tabsName).style.display = "flex";
//     evt.currentTarget.className += " active";

//   }

