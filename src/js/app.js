const waLinker = document.querySelector('#waLinker'),
    phone = waLinker.querySelector('#phoneNumber'),
    country = waLinker.querySelector('#countryCode')

phone.addEventListener('keyup', function(){
        if ( this.value != '' ) {
            this.classList.remove('non-valid')
        }
})

waLinker.addEventListener('submit', function(e) {
    let phoneNumber = phone.value.replace(/\D/g, '')
        countryCode = country.value
        whatsappUrl = 'https://wa.me/' + countryCode + phoneNumber
    
    if (phoneNumber.length == 0) {
        phone.classList.add('non-valid')
    } else {
        window.open(
            whatsappUrl,
            '_blank'
        )
    }

    e.preventDefault()
})
