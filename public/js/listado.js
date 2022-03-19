
window.addEventListener('load', function (event) {
    const textbuscaringreso = document.querySelector('#textbuscaringreso');
    listaIngresos();
    textbuscaringreso.addEventListener('keyup',listaIngresos);
});


   const textbuscaringreso = document.querySelector('#textbuscaringreso');
    const listados = document.querySelector('#lista');







 
   function listaIngresos() { 
    const textoBuscar = textbuscaringreso.value.toLowerCase();
   const cuentas = getTransation();

     listados.innerHTML = '';
         for (let micuenta of cuentas) {
         
             const concepto = micuenta.cuenta.toLowerCase();
             if (concepto.indexOf(textoBuscar) !== -1) {
            
             listados.innerHTML += `
                 <tr>
                 <td>${micuenta.fecha}</td>
                 <td value="">${micuenta.cuenta}</td>
                 <td>${micuenta.monto}</td>
                  <td>${micuenta.nota}</td>
                 
                 </tr>
               `
    } 
  }
}
