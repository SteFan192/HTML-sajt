function prikaziPoruku() {
    // Get the checkbox
    var checkBox = document.querySelectorAll(".checkbox");

    // Get the output text
    var text = document.querySelectorAll(".hidden");
  
    // If the checkbox is checked, display the output text
    for(var i = 0; i<checkBox.length; i++) {
        if (checkBox[i].checked == true) {
            text[i].style.display = "block";
        } 
        else {
            text[i].style.display = "none";
        }
    }
}