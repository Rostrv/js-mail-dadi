let address = prompt('inserisci la tua mail')
console.log(address)


let mailList = ['ciao@123.it', 'pippo@gmail.com']
console.log(mailList);

let mailPresente = false;

for (let i = 0; i < mailList.length; i++) {
    if (address == mailList[i]) {
        mailPresente = true;
    }
}


if (mailPresente == true) {
    alert('indirizzo verificato')
    console.log('indirizzo verificato')

} else {
    alert('accesso negato')
    window.location.reload()


}