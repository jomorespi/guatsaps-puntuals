window.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('#waLinker'),
        phone = form.querySelector('#phoneNumber'),
        country = form.querySelector('#countryCode')
        submitLink = form.querySelector('#submitLink')

    phone.addEventListener('input', () => {

        let phoneNumber = country.value + phone.value.replace(/\s/g, ''),
            regex = /^\+?[1-9][0-9]{7,14}$/,
            valid = regex.test(phoneNumber)

        if(valid) {

            phone.classList.remove('non-valid')
            submitLink.disabled = false

        } else {

            phone.classList.add('non-valid')
            submitLink.disabled = true

        }
    })

    form.addEventListener('submit', (e) => {

        e.preventDefault()

        let phoneLink = 'https://wa.me/' + country.value + phone.value.replace(/\s/g, '')

        window.open(
            phoneLink,
            '_blank'
        )

    })

})

