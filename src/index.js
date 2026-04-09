// import functions needed to get data
import { getAllCountries, getAllCountriesFlags } from "./services/apiServices.js"


//define variables
let countriesList = document.getElementById('list')


//define functions

let countryCards = async () =>{
    let countries = await getAllCountries()
    console.log(countries)
    let cards  = countries.forEach((country) => {
        
        const li = document.createElement('li')
        const countryBasics = document.createElement('div')
        const nameTag = document.createElement('h5')
        const regionTag = document.createElement('p')
        const capitalTag = document.createElement('p')
        
        nameTag.innerText = country.name.common
        regionTag.innerText = country.region
        capitalTag.innerText = country.capital
        
        console.log(country)

        countryBasics.appendChild(nameTag)        
        countryBasics.appendChild(regionTag)        
        countryBasics.appendChild(capitalTag)        

        li.appendChild(countryBasics)
        
    });
    countriesList.appendChild(cards)
    return cards
}



//call functions 
countryCards()


window.addEventListener('load', countryCards)
