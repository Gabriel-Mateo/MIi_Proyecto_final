
function startoutcome() {
    const tipo = "autcome";
    const cuentas = getcuentas();

    const querySelecoutcome = cuentas.filter(function (cuenta, index, cuentas) {
        if (cuenta.type === tipo) {

            return true;
        }
        return false;
    });

    const listados_gastos = document.querySelector('#lista_outcome');

    for (let i = 0; i < querySelecoutcome.length; i++) {
        const elemento = querySelecoutcome[i];
        listados_gastos.innerHTML = listados_gastos.innerHTML +
            `  
             <option value="${elemento.name}">${elemento.name}</option>
          `;
    }
}

function guardarOutcome(e) {
    //e.preventDefault();

    const transaciongasto = {
        fecha_gasto: e.target.elements["fechaoutcome"].value,
        cuenta_gasto: e.target.elements["listacuentaout"].value,
        monto_gasto: e.target.elements["montoOutcome"].value,
        nota_gasto: e.target.elements["notaoutcome"].value,
    }

    saveTransationGasto(transaciongasto);

}



window.addEventListener('load', function (event) {
   startoutcome();
  const form = document.querySelector('#formautcome');

    form.addEventListener("submit",guardarOutcome);


});
