
function startIncome() {
    const tipo = "income";
    const cuentas = getcuentas();

    const querySelecincome = cuentas.filter(function (cuenta, index, cuentas) {
        if (cuenta.type === tipo) {

            return true;
        }
        return false;
    });

    const listados_ingreso = document.querySelector('#lista_income');

    for (let i = 0; i < querySelecincome.length; i++) {
        const elemento = querySelecincome[i];
        listados_ingreso.innerHTML = listados_ingreso.innerHTML +
            `  
             <option>${elemento.name}</option>
          `;              
    }
}

function guardar(e) {
   e.preventDefault();
    
   
       const transacion = {
        fecha: e.target.elements["fecha"].value,
        cuenta: e.target.elements["lista_income"].value,
        monto: e.target.elements["monto"].value,
        nota: e.target.elements["nota"].value,
    }
    saveTransation(transacion); 
    
    
    if (validarDatos(transacion)) { 
       
     }
       
}
    
function validarDatos(transacion) {
      
    const errormessage = document.querySelector('#errormessage');
    if (!transacion.fecha) {
        errormessage.innerHTML = "La fecha no puede estar vacia";
        errormessage.classList.add("error");
        return false;
    } else if (transacion.monto <= 10) {
        errormessage.innerHTML = "Introducir un Monto Mayor de 10";
        errormessage.classList.add("error");
         return false;
       
    } else if (transacion.cuenta.value ==='Seleccionar una cuenta') { 
        errormessage.innerHTML = "Favor seleccionar una una Cuenta";
        errormessage.classList.add("error");
        return false;
    }
    else { 
        errormessage.innerHTML = "Registro Guardado Exitosamente";
        errormessage.classList.add("sucess");
        return true;
    }

 }

window.addEventListener('load', function (event) {
    startIncome();
   
    const form = document.querySelector('#miForm');
    form.addEventListener("submit", guardar);

});
