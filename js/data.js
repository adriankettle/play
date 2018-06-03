function validateForm() {
  var must = document.forms['regForm']['username'].value;
  document.forms['regForm']['fullname'].value;
  document.forms['regForm']['email'].value;
  document.forms['regForm']['password'].value;
  if (must == "") {
  alert("All Fields Should Be Filled Out!");
    return false;
  }
}
