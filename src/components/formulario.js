const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario .input");

const expresiones = {
  name: /^([ a-zA-Z0-9\sÁÉÍÓÚáéíóúÑñ]+)$/,
  lastname: /^([ a-zA-Z0-9\sÁÉÍÓÚáéíóúÑñ]+)$/,
  nationality: /^([ a-zA-Z0-9\sÁÉÍÓÚáéíóúÑñ]+)$/,
  docnumber: /[A-Za-z0-9]+/i
}

const campos = {
  name: false,
  lastname: false,
  nationality: false,
  docnumber: false
}

const validarFormulario = (e) =>{
  switch (e.target.name){
    case "name":
      validarCampo(expresiones.name, e.target, "name");
      break;
      case "lastname":
      validarCampo(expresiones.lastname, e.target, "lastname");
      break;
      case "nationality":
      validarCampo(expresiones.nationality, e.target, "nationality");
      break;
      case "docnumber":
      validarCampo(expresiones.docnumber, e.target, "docnumber");
      break;
  }
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}




