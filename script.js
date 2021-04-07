function login(){
    var usuario=document.getElementById('formulario').getElementsByTagName('input').login.value;
    var password=document.getElementById('formulario').getElementsByTagName('input').password.value;

    if (usuario=='sponce' && password=='sp2021'){ 
            alert("Bienvenido "+document.getElementById('formulario').getElementsByTagName('input').login.value+" !!!"); 
            window.location="https://www.google.com.pe"; 
        } else if (usuario=='barevalo' && password=='sba2021') {
            alert("Bienvenido "+document.getElementById('formulario').getElementsByTagName('input').login.value+" !!!"); 
            window.location="https://www.pucp.edu.pe"; 
        }  else if (usuario=='amendoza' && password=='am2021') {
            alert("Bienvenido "+document.getElementById('formulario').getElementsByTagName('input').login.value+" !!!"); 
            window.location="https://www.elcomercio.pe"; 
        } else{ 
            alert("Usuario y/o contraseña incorrectos"); 
        } 
    }