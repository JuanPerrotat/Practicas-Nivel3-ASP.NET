function saludar(){
            var user = document.getElementById("txtUser").value;
            var pass = document.getElementById("txtPass").value;
            if(user == ""){
                alert("Completar el usuario, por favor.")
            }
            if(pass == ""){
                alert("Completar la contraseña, por favor.")
            }
            
            if (pass != "" && user != ""){
                alert("Bienvenido/a " + user + ". Tú contraseña es: " + pass);
                console.log("Tú contraseña es: " + pass);

            }
        }
        function sumar(){
            var n1 = parseInt(document.getElementById("N1").value);
            var n2 = parseInt(document.getElementById("N2").value);
            alert("La suma de los números es: " + (n1 + n2));
        }