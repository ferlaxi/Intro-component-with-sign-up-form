const boton = document.querySelector('#boton');
const nombre = document.querySelector('#nombre')
const errornombre = document.querySelector('.errorname');
const nameImg = document.querySelector('.errornameImg');

boton.addEventListener('click',() => {
    if(nombre.value.length == 0){
        errornombre.style.visibility = 'visible';
        nombre.classList.add('errorLine');
        nameImg.style.visibility = 'visible';
        nombre.classList.add('placehide');
    } else{
        errornombre.style.visibility = 'hidden';
        nombre.classList.remove('errorLine');
        nameImg.style.visibility = 'hidden';
        nombre.classList.remove('placehide');
    }
})




const apellido = document.querySelector('#apellido')
const errorapellido = document.querySelector('.errorlastname');
const apellidoImg = document.querySelector('.errorlastnameImg');

boton.addEventListener('click',() => {
    if(apellido.value.length == 0){
        errorapellido.style.visibility = 'visible';
        apellido.classList.add('errorline2');
        apellidoImg.style.visibility = 'visible';
        apellido.classList.add('placehide');
    } else{
        errorapellido.style.visibility = 'hidden';
        apellido.classList.remove('errorline2');
        apellidoImg.style.visibility = 'hidden';
        apellido.classList.remove('placehide');
    }
})




const correo = document.querySelector('#correo')
const correocolor = document.querySelector('.correo')
const errorcorreo = document.querySelector('.errorcorreo');
const correoImg = document.querySelector('.errorcorreoImg');


boton.addEventListener('click',() => {
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let valido = expReg.test(correo.value);
    if(correo.value.length == 0){
        errorcorreo.style.visibility = 'visible';
        correo.classList.add('errorline3');
        correoImg.style.visibility = 'visible';
        correo.classList.add('placehide');
        correocolor.style.color = '#000000';
    } else if(valido == true){
        console.log("asd")
        errorcorreo.style.visibility = 'hidden';
        correo.classList.remove('errorline3');
        correoImg.style.visibility = 'hidden';
        correo.classList.remove('placehide');
        correocolor.style.color = '#000000';
    } else{
        errorcorreo.style.visibility = 'visible';
        correo.classList.add('errorline3');
        correoImg.style.visibility = 'visible';
        correo.classList.add('placehide');
        correocolor.style.color = '#ff7a7a';
    }
})



const pw = document.querySelector('#pw');
const errorpw = document.querySelector('.errorpw');
const pwImg = document.querySelector('.errorpwImg');

boton.addEventListener('click',() => {
    if(pw.value.length == 0){
        errorpw.style.visibility = 'visible';
        pw.classList.add('errorline4');
        pwImg.style.visibility = 'visible';
        pw.classList.add('placehide');
    } else{
        errorpw.style.visibility = 'hidden';
        pw.classList.remove('errorline4');
        pwImg.style.visibility = 'hidden';
        pw.classList.remove('placehide');
    }
})
