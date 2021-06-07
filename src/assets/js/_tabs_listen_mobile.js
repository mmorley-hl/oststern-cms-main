var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  a.setAttribute("class", `select-selected`);
  // a.classList.add(a.innerHTML)
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.classList.add(c.innerHTML)
    
    
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
            a.setAttribute("class", `select-selected ${this.innerHTML}`);
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
    openTabListMobile(e, a.innerHTML)
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

function openTabListMobile(evt, tabsName) {
  // Declare all variables
  var i, tabcontent_mobile, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent_mobile = document.getElementsByClassName("section_listenansicht_mobile__content");
  for (i = 0; i < tabcontent_mobile.length; i++) {
    tabcontent_mobile[i].style.display = "none";
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabsName).style.display = "flex";
  // evt.currentTarget.className += " active";

}

var intialMobileClickCheck = document.querySelectorAll('.select-items')

intialMobileClickCheck.forEach((elem) => {
    var intialMobileClick = document.querySelector(".select-items").childNodes
    intialMobileClick[0].click()
})

