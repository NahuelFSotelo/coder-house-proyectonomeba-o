
/// botones cambio de formulario ////////
let formpaciente = document.getElementById("btnradio1");
let formprofecional = document.getElementById("btnradio2");
formprofecional.onclick = function () {
  document.getElementById("pacienteform").setAttribute("hidden", true);
  document.getElementById("profesionalform").removeAttribute("hidden");
};
formpaciente.onclick = function () {
  document.getElementById("pacienteform").removeAttribute("hidden");
  document.getElementById("profesionalform").setAttribute("hidden", true);
};
//// mostrar contraseñas ////////
const password3 = document.getElementById("password201");
const password4 = document.getElementById("password21");
const password1 = document.getElementById("password10");
const password2 = document.getElementById("password11");
let estadocontraseña1 = "-1";
let estadocontraseña2 = "-1";
let estadocontraseña3 = "-1";
let estadocontraseña4 = "-1";
function mostrarcontraseña1() {
  estadocontraseña1 = estadocontraseña1 * -1;
  if (estadocontraseña1 >= "1") {
    password1.type = "text";
  } else {
    password1.type = "password";
  }
}
function mostrarcontraseña2() {
  estadocontraseña2 = estadocontraseña2 * -1;
  if (estadocontraseña2 >= "1") {
    password2.type = "text";
  } else {
    password2.type = "password";
  }
}
function mostrarcontraseña3() {
  estadocontraseña3 = estadocontraseña3 * -1;
  if (estadocontraseña3 >= "1") {
    password3.type = "text";
  } else {
    password3.type = "password";
  }
}
function mostrarcontraseña4() {
  estadocontraseña4 = estadocontraseña4 * -1;
  if (estadocontraseña4 >= "1") {
    password4.type = "text";
  } else {
    password4.type = "password";
  }
}
//// validaciones/////
//////formulario paciente
let numDocumento2 = document.getElementById("Documentonum2");
let numDni2 = document.getElementById("celupacinte");
numDocumento2.addEventListener("keypress", (event) => {
  event.preventDefault();
  let codigokey = event.keyCode;
  let valorkey = String.fromCharCode(codigokey);
  let valor = parseInt(valorkey);
  if (numDocumento2.value.length < 8) {
    if (valor) {
      numDocumento2.value += valor;
    }
    if (valor === 0) {
      numDocumento2.value += valor;
    }
  }
});
numDni2.addEventListener("keypress", (event) => {
  event.preventDefault();
  let codigokey = event.keyCode;
  let valorkey = String.fromCharCode(codigokey);
  let valor = parseInt(valorkey);
  if (numDni2.value.length < 10) {
    if (valor) {
      numDni2.value += valor;
    }
    if (valor === 0) {
      numDni2.value += valor;
    }
  }
});
const nombrepaciente = document.getElementById("nombrepaciente");
const apellidopaciente = document.getElementById("apellidopaciente");
const cellupacinte = document.getElementById("celupacinte");
const documentopaciente = document.getElementById("Documentonum2");
const emailpaciente = document.getElementById("emailpaciente");
const passwordpaciente = document.getElementById("password10");
const confirmpass = document.getElementById("password11");

pacienteform.addEventListener("submit", (e) => {
  e.preventDefault();
  if (passwordpaciente.value.length < 8) {
    alert("contraseña corta");
  } else if (passwordpaciente.value !== confirmpass.value) {
    // alert("asdasdasd");
    document.getElementById("mensajesalertasid").removeAttribute("hidden");
  } else {
    document.getElementById("pacienteform").reset();
    alert("chuchu");
    document.getElementById("mensajesalertasid").setAttribute("hidden", true);
  }
});

/////formulario porfecional
let numDocumento = document.getElementById("Documentonum");
let numDni = document.getElementById("Dninum");
numDocumento.addEventListener("keypress", (event) => {
  event.preventDefault();
  let codigokey = event.keyCode;
  let valorkey = String.fromCharCode(codigokey);
  let valor = parseInt(valorkey);
  if (numDocumento.value.length < 8) {
    if (valor) {
      numDocumento.value += valor;
    }
    if (valor === 0) {
      numDocumento.value += valor;
    }
  }
});
numDni.addEventListener("keypress", (event) => {
  event.preventDefault();
  let codigokey = event.keyCode;
  let valorkey = String.fromCharCode(codigokey);
  let valor = parseInt(valorkey);
  if (numDni.value.length < 10) {
    if (valor) {
      numDni.value += valor;
    }
    if (valor === 0) {
      numDni.value += valor;
    }
  }
});

const nombreprofecional = document.getElementById("nombreprofecionalimput");
const apellidoprofecional = document.getElementById("apeliidoprofecionalimput");
const celularprofesional = document.getElementById("Dninum");
const emailprofesional = document.getElementById("emailprofesionala");
const passwordprofesional = document.getElementById("password201");
const comfirmpasswordprofesional = document.getElementById("password21");
const documentoprofesional = document.getElementById("Documentonum");
const numeromatricula = document.getElementById("numeromatriculaimput");
const Especializacionimput = document.getElementById("Especializacionimput");
let especializacionprofesional = "Especializacion";
Especializacionimput.addEventListener("change", function (event) {
  const especializacionexpres =
    event.target.options[event.target.selectedIndex].text;
  especializacionprofesional = especializacionexpres;
});

profesionalform.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(nombreprofecional.value);
  console.log(apellidoprofecional.value);
  console.log(celularprofesional.value);
  console.log(documentoprofesional.value);
  console.log(numeromatricula.value);
  console.log(especializacionprofesional);
  console.log(emailprofesional.value);
  console.log(passwordprofesional.value);

  if (
    nombreprofecional.value === "" ||
    apellidoprofecional.value === "" ||
    celularprofesional.value === "" ||
    documentoprofesional.value === "" ||
    numeromatricula.value === "" ||
    passwordprofesional.value === "" ||
    comfirmpasswordprofesional.value === "" ||
    emailprofesional.value === ""
  ) {
    alert("imput vacio");
  }
  if (passwordprofesional.value.length < 8) {
    alert("contraseña corta");
  } else if (passwordprofesional.value !== comfirmpasswordprofesional.value) {
    document.getElementById("mensajesalertasid2").removeAttribute("hidden");
  } else if (especializacionprofesional === "Especializacion") {
    alert("nomebaño");
  } else {
    document.getElementById("profesionalform").reset();
    alert("todo ok");
    document.getElementById("mensajesalertasid2").setAttribute("hidden", true);
  }
});
