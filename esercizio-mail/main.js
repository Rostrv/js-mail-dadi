const mailList = ['ciao@123.it']

const address = prompt('inserisci la tua mail')

if (address == mailList) {
    alert('indirizzo verificato')
    console.log('indirizzo verificato')

} else {
    alert('accesso negato')
    window.location.reload();

}