/* @author Chady Ben Larbi */

/* VARIABLES GLOBALES */ 
const refbtnSubmit = document.getElementById('btnSubmit')
const refInputEmail = document.getElementById('champCourriel')
const refErreur = document.getElementById('erreurCourriel')
/* ÉCOUTEURS D'ÉVÉNEMENTS */ 
refbtnSubmit.addEventListener('click',validerForm)


/* FONCTIONS */ 

function validerForm() {
    const refValueEmail = refInputEmail.value
    localStorage.setItem('valueEmail', refValueEmail)
    if (refValueEmail.trim() == "") {
        refInputEmail.classList.add('erreur')
        refErreur.innerHTML = "Field is empty"
    }
    else {
        refInputEmail.classList.remove('erreur')
        refErreur.innerHTML = ""
    if(refInputEmail.checkValidity()) {
        refInputEmail.classList.remove('erreur')
        refErreur.innerHTML = ""
        document.getElementById('successmessage-email').innerHTML = localStorage.getItem('valueEmail')
        document.getElementById('mainForm').setAttribute('hidden', '')
        document.getElementById('successMessage').removeAttribute('hidden')
    }
    else {
        refInputEmail.classList.add('erreur')
        refErreur.innerHTML = "Valid email required"
    }
    }
}