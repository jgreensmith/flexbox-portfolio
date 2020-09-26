//function showDropDown() {
//    var dropDownMenu = document.getElementById("dropDownMenu");
//    if (dropDownMenu.className === 'topnav') {
//        dropDownMenu.className += ' clicked';
//    }
//    else {
//        dropDownMenu.className = 'topnav';
//    }
//}


function showDropDown() {
    var dropDownMenu = document.getElementById("dropDownMenu");
    dropDownMenu.className = dropDownMenu.className === 'topnav' ? "topnav clicked" : "topnav";
}
