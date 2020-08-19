var inputName = document.querySelector("#exampleInputName");
var inputGener = document.querySelectorAll("#form-user-create [name=gender]:checked");
var inputBirth = document.querySelector("#exampleInputBirth");
var inputCountry = document.querySelector("#exampleInputCountry");
var inputEmail = document.querySelector("#exampleInputEmail");
var inputPassword = document.querySelector("#exampleInputPassword");
var inputFile = document.querySelector("#exampleInputFile");
var checkAdmin = document.querySelector("#exampleInputAdmin");

var fields = document.querySelectorAll("#form-user-create [name]");
fields.forEach(function(field, index) {
  if(field.name == "gender") {
    if(field.checked) {
      console.log("Sim");
    }
  } else {
    console.log("Não")
  }
});