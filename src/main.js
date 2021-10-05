import {suma, saludo} from './operaciones';
import Swal from 'sweetalert2'

document.write(`<h1>${suma(5,6)}</h1>`)

console.log(saludo());
console.log(suma(6,5));


Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
})