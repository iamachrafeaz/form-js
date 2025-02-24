document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let inputs = document.querySelectorAll("input");

    let is_empty = false;

    inputs.forEach(input => {
        if (input.value == '') {
            is_empty = true;
            input.nextElementSibling.innerText = "Ce champs est oblogatoire!";
        } else {
            input.nextElementSibling.innerText = '';
        };
    });
    
    const reg_email = /^[A-Za-z0-9-_.]+@[A-Za-z0-9-_.]+\.[a-zA-Z]{2,}$/;
    const reg_tel = /^\+[0-9]{1,3}\d{10}$/;

    if (!is_empty) {
        let email = document.querySelector("#email");
        let nom = document.querySelector("#nom");
        let prenom = document.querySelector("#prenom");
        let telephone = document.querySelector("#telephone");
        let password = document.querySelector("#password");
        let confirmPassword = document.querySelector("#confirmPassword");
        let adresse = document.querySelector("#adresse");
        let civility = document.querySelector("#civility");
        let country = document.querySelector("#country");


        if (!reg_email.test(email.value)) {
            email.nextElementSibling.innerHTML = "Le format de votre e-mail n'est pas compatible."
        }

        if (!reg_tel.test(telephone.value)) {
            telephone.nextElementSibling.innerHTML = "Le format de votre numéro de téléphone n'est pas compatible."
        }

        if (password.value != confirmPassword.value) {
            confirmPassword.nextElementSibling.innerText = "Les mots de passe sont différents"
        }
    }

    if (reg_email.test(email.value) && reg_tel.test(telephone.value) && password.value == confirmPassword.value) {
        let user = {
            nom: nom.value,
            prenom: prenom.value,
            email: email.value,
            telephone: telephone.value,
            password: password.value,
            adresse: adresse.value,
            civility: civility.value,
            country: country.value
        }

        alert("Check Console");

        console.log(user);
    }


})


