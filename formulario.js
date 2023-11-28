//Declaramos fvariables
    var formulario= document.getElementById('formulario'),
        nombre= formulario.nombre,
        email = formulario.email,
        sexo = formulario.sexo,
        terminos = formulario.terminos,
        error = document.getElementById('error');

//Declaramos funciones 
//Por medio de condicionales (if, else) comenzamos a validar variables 
//Validando con funcion nombre
     function validarNombre(e){
        //condicional
        //Si(el valor de nombre es = a vacio O es invalido/nulo)
                if(nombre.value =='' || nombre.value == null){
        //En Java Script ocupamos la consola para imprimir resultados
            console.log('Por favor complete el nombre');
        //En caso de no cumplirse la condiciòn se mandara a llamar un error dentro del mismo formulario    
            error.style.display = 'block';
            error.innerHTML = `${error.innerHTML}<li>Por favor ingresa tu nombre</li>`;
        //Nos ayuda a que no se envien datos que son erroneos
            e.preventDefault();
        }else{
        //En caso de que se cumpla la condiciòn noas ayuda a que no aparezca el mensaje de error
            error.style.display='none';
        }
     }
//Validando con funcion email
     function validarEmail(e){
        if(email.value ==='' || nombre.value == null){
            console.log('Por favor complete el correo');
            error.style.display = 'block';
            error.innerHTML = `${error.innerHTML}<li>Por favor ingresa tu correo</li>`;
            e.preventDefault();
        }else{
            error.style.display='none';
        }   
     }

     //Validando con funcion sexo
     function validarSexo(e){
        if(sexo.value == '' || sexo.value == null){
        console.log('Por favor seleccione una opción');
        error.style.display = 'block';
        error.innerHTML = `${error.innerHTML}<li>Por favor selecciona una opción</li>`;
        e.preventDefault();
     } else {
        error.style.display ='none';
         }
     }

     //Validando con funcion terminos
     function validarTerminos(e){
      if(terminos.checked == false){
        console.log('Por favor seleccione Acepte los terminos');
        error.style.display = 'block';
        error.innerHTML = `${error.innerHTML}<li>Aceptar terminos</li>`;
        e.preventDefault();
     } else {
        error.style.display ='none';
     }
        
     }

    // Validamos cada funciòn que esta dentrode 'formulario'
     function validarFormulario(e){
        error.innerHTML = '';
        validarNombre(e);
        validarEmail(e);
        validarSexo(e);
        validarTerminos(e);
     }

     //Estamos accionando el boton de Enviar
     formulario.addEventListener('submit', validarFormulario);
   