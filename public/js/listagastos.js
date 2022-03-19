
window.addEventListener('load', function (event) {
    const textbuscar = document.querySelector('#textarea');
     

    listarGastos();

    textbuscar.addEventListener('keyup', listarGastos);

        
});


const textbuscar = document.querySelector('#textarea');
const boton = document.querySelector('.btnguardar');
const micuentas = getTransationGasto();
const listadogasto = document.querySelector('#listagasto');



const listarGastos = () => { 
    listadogasto.innerHTML = "";
   
    const texto = textbuscar.value.toLowerCase();
     
    for (let micuenta of micuentas) { 
       
        const gasto = micuenta.cuenta_gasto.toLowerCase();
        const nota = micuenta.nota_gasto.toLowerCase();

        if (gasto.indexOf(texto) !== -1 || nota.indexOf(texto) !== -1) {
            
            listadogasto.innerHTML += `
            <tr>
                 <td>${micuenta.fecha_gasto}</td>
                 <td value="">${micuenta.cuenta_gasto}</td>
                 <td>${micuenta.monto_gasto}</td>
                  <td>${micuenta.nota_gasto}</td>
               </tr>
          `
        } 
        
        }

    }



/*
function filterFunction(value,data) { 

    const filterData = [];
    for (let midata of data) {
       value = value.toLowerCase();
        let cuenta = midata.cuenta_gasto.toLowerCase();

        if (cuenta.indexOf(value) !== -1) {
            filterData.push(cuenta);

        }

    }
    return filterData;
}

function rebuildTable(data) { 
    const table = document.querySelector('#tablegastos');

    table.innerHTML ="";

    for (let micuenta of data) {
      
          let row =  `<tr>
                 <td>${micuenta.fecha_gasto}</td>
                 <td value="">${micuenta.cuenta_gasto}</td>
                 <td>${micuenta.monto_gasto}</td>
                  <td>${micuenta.nota_gasto}</td>
               </tr> `
    }

}
*/