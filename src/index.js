import {suma, saludo} from './operaciones';
import Swal from 'sweetalert2';
import 'fslightbox';

document.write(`<h1>${suma(5,6)}</h1>`)

console.log(saludo);
console.log(suma(6,5));

/*
Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
})
*/
Swal.fire({
  title: 'Armando Martínez!',
  text: 'Alerta personalizada',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-qTuFLYKoUp-prSH3qu_VJhdfEtoO4YyMVA&usqp=CAU',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
});

fsLightboxInstances['first-lightbox'].open(0);
fsLightboxInstances['second-lightbox'].props.onOpen = () => console.log('Lightbox open!');






/*
import _ from 'lodash';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());
  */