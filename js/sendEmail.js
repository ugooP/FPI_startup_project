const nameInput = document.querySelectorAll('#contact-form input')[0]
const mailInput = document.querySelectorAll('#contact-form input')[1]
const messageArea = document.querySelector('#contact-form textarea')
const infoMsg = document.querySelector('.infoMsg')

document.querySelector('#send-mail-btn').addEventListener('click', (event) => {
    event.preventDefault()
    
    // Get user inputs
    const params = {
        fromName: nameInput.value,
        fromMail: mailInput.value,
        message:  messageArea.value
    }

    // Set the IDs
    // 🚫 INSECURE 🚫 //
    const SERVICE_ID = 'service_ybm82im'
    const TEMPLATE_ID = 'template_bl9e5q7'
    const USER_ID = 'user_fKOFTHNVkZuzqNqHfz7Yw'
    
    // Check the validity of inputs
    if (isInputsValid(params)) {
        infoMsg.innerHTML = ''
        // Send email
        /* .then(() => {
            // Display success message and reset all inputs
            successMsg('Email envoyé')
            nameInput.value = ''
            mailInput.value = ''
            messageArea.value = ''
        }) */
}

function isInputsValid(params) {
    // Check the validity of all inputs
    const emailRegexp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,7})$/

    if (params.fromName.length < 3) {
        errorMsg('Nom prénom trop court')
        return false
    } else if (!emailRegexp.test(params.fromMail)) {
        errorMsg('Email invalide')
        return false
    } else if (params.message.length < 5) {
        errorMsg('Message trop court')
        return false
    } else {
        return true
    }
}

function errorMsg(msg) {
    infoMsg.innerHTML = msg
    infoMsg.style.color = 'red'
}

function successMsg(msg) {
    infoMsg.innerHTML = msg
    infoMsg.style.color = 'green'
    setTimeout(() => {
        infoMsg.innerHTML = ''
    }, 3000)
}

