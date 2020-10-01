// Een Cookie consent banner tonen 2 seconden nadat de pagina geladen is.
let consentContainer = document.getElementById("cookie-consent");
let consentVisible = false;

const waitTime = 2000;

const otherOperation = () => {
    if (consentContainer.style.display === 'none') {
        consentContainer.style.display = 'block';
    }
    
}

const toggleConsentContainer = () => {
    window.addEventListener("DOMContentLoaded", () => {
        setTimeout(otherOperation, waitTime);


    })

}

toggleConsentContainer();




