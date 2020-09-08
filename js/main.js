var spinner = document.getElementById('spinner')
var enter = document.getElementById('enter')
var send = document.getElementById('send')
var light = document.getElementById('light')
var dark = document.getElementById('dark')





spinner.style.display = 'block'
fetch('https://restcountries.eu/rest/v2/all')

.then((response) => {
    return response.json()
})

.then((data) => {
    console.log(data)
    data.forEach(function(data) {
        document.getElementById('container').innerHTML += `
        <div class="col-lg-3 m-4 text-capitalize">
        <img src="${data.flag}">
        <strong>
        <p>${data.name}</p>
        </strong>
        <p>population: ${data.population}</p>
        <p>region: ${data.region}</p>
        <p>capital: ${data.capital}</p>
        </div>
        `
        spinner.style.display = 'none'
    })
})



dark.addEventListener('click', () => {
    if (document.body.style.backgroundColor == 'white') {
        document.body.style.backgroundColor = 'hsl(209, 23%, 22%)'
    } else {
        document.body.style.backgroundColor = 'white'
    }
})

send.addEventListener('click', () => {
    spinner.style.display = 'block'
    document.getElementById('container').innerHTML = ""
    fetch('https://restcountries.eu/rest/v2/name/' + enter.value)

    .then((response) => {
        return response.json()
    })

    .then((data) => {
        console.log(data)
        data.forEach(function(data) {
            document.getElementById('container').innerHTML += `
        <div id="content" class="col-lg-3 m-4 text-capitalize">
        <img src="${data.flag}">
        <strong>
        <p>${data.name}</p>
        </strong>
        <p>population: ${data.population}</p>
        <p>region: ${data.region}</p>
        <p>capital: ${data.capital}</p>
        </div>
        `
            spinner.style.display = 'none'

        })
    })
})