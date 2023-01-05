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
      validarCampo(expresiones.docnnumber, e.target, "docnumber");
      break;
  }
}