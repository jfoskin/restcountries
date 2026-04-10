// import functions needed to get data
import { getAllCountries,
         getAllBasicCountriesDetails} from "../src/services/apiServices.js"

import { singleCountryDetails } from "./utils/singleCountry.js"


//define variables
let countriesList = document.getElementById('list')
let mainContainer = document.getElementById('mainContainer')
let country = document.querySelector('.card > h4')

// let alldetails = await getAllCountries()
// console.log(alldetails)

//define functions

let countryCards = async () =>{
    let countries = await getAllBasicCountriesDetails()
    // console.log(countries)
    let cards  = countries.forEach((country) => {
        
        
        //creating elements for the country data to be displayed in 
        // const li = document.createElement('li')
        const countryBasics = document.createElement('div')
        const nameTag = document.createElement('h4')
        const regionTag = document.createElement('p')
        const capitalTag = document.createElement('p')
        const populationTag = document.createElement('p')
        const imgTag = document.createElement('img')
        
        //assign class atribute
        countryBasics.classList = 'countryClass'
        countryBasics.className = 'card'
        imgTag.classList = 'card-img-top'
        
        
        //assigning data to each element
        imgTag.src = country.flags.svg
        
        nameTag.innerText = country.name.common
        populationTag.innerText = country.population
        regionTag.innerText = country.region
        capitalTag.innerText = country.capital
        
        // console.log(country)
        countryBasics.appendChild(imgTag)
        countryBasics.appendChild(nameTag)        
        countryBasics.appendChild(populationTag)        
        countryBasics.appendChild(regionTag)        
        countryBasics.appendChild(capitalTag)        
        
        // li.appendChild(countryBasics)
        
        countriesList.appendChild(countryBasics)
        // mainContainer.appendChild(countriesList)
    });
    

    

}



//call functions 
// countryCards()








//call eventlisteners

window.addEventListener('load', countryCards)

list.addEventListener('click',(e)=>{
    console.log(e)
    // console.log(e.target)
    
    let countryName = e.target.parentElement.childNodes[1].textContent.toLowerCase() 
    console.log(countryName)
    countriesList.innerHTML =''
    mainContainer.innerHTML = ''
    singleCountryDetails(countryName)

} )