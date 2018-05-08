window.addEventListener("submit", function (event) {
  var form = document.getElementById("form-validation");
  if (form.checkValidity() == false) {
    event.preventDefault();
    event.stopPropagation();
  } form.classList.add("was-validated");
}, false);

window.addEventListener("submit", function (event) {
  var form1 = document.getElementById("login", );
  if (form1.checkValidity() == false) {
    event.preventDefault();
    event.stopPropagation();
  } form1.classList.add("was-validated");
}, false);

window.addEventListener("submit", function (event) {
  var form1 = document.getElementById("patient-form", );
  if (form1.checkValidity() == false) {
    event.preventDefault();
    event.stopPropagation();
  } form1.classList.add("was-validated");
}, false);

window.addEventListener("submit", function (event) {
  var form1 = document.getElementById("patient-update", );
  if (form1.checkValidity() == false) {
    event.preventDefault();
    event.stopPropagation();
  } form1.classList.add("was-validated");
}, false);

window.addEventListener("submit", function (event) {
  var form1 = document.getElementById("doctor-update", );
  if (form1.checkValidity() == false) {
    event.preventDefault();
    event.stopPropagation();
  } form1.classList.add("was-validated");
}, false);