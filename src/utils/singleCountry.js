// import {getCountryDetails} from '../services/apiServices.js'
let countriesList = document.getElementById('list')
let mainContainer = document.getElementById('mainContainer')
// let detailsBox = document.querySelector('.detailsBox')


// console.log(detailsBox)

export const  singleCountryDetails = async(name) => {
console.log(name)
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    const aCountry = await response.json()
    console.log(aCountry)
    const detailsDiv = document.createElement('div')
    const detailsFlag = document.createElement('div')
    const details = document.createElement('div')

    detailsFlag.className = 'detailsFlag'
    details.className = 'detailsBox'


//  console.log(country)
    const countryName = document.createElement('h3')
    const nativeNameDetail = document.createElement('p')
    const populationDetails = document.createElement('p')
    const regionDetails = document.createElement('p')
    const subRegionDetails = document.createElement('p')
    const capitalDetails = document.createElement('p')
    const domainDetails = document.createElement('p')
    const currencyDetails = document.createElement('p')
    const languageDetails = document.createElement('p')
    // const borderCountryDetails = document.createElement('p')
    const borderCountries= document.createElement('div')
    const borderCountryDetails = document.createElement('div')

    // countryName.textContent = country.name
    // nativeNameDetail.textContent = country.name
    populationDetails.textContent = aCountry[0].population
    regionDetails.textContent = aCountry[0].region
    subRegionDetails.textContent = aCountry[0].subregion
    capitalDetails.textContent = aCountry[0].capital[0]
    domainDetails.textContent = aCountry[0].tld
    // currencyDetails.textContent = country.currencies
    // languageDetails.textContent = country.languages
    // borderCountryDetails.textContent = country.borderCountries


    // console.log(detailsBox)


    // borderCountries.appendChild(borderCountryDetails)

    // detailsBox.appendChild(countryName)
    // detailsBox.appendChild(nativeNameDetail)
    details.appendChild(populationDetails)
    details.appendChild(regionDetails)
    details.appendChild(subRegionDetails)
    details.appendChild(capitalDetails)
    details.appendChild(domainDetails)
    // detailsBox.appendChild(currencyDetails)
    // detailsBox.appendChild(languageDetails)
    // detailsBox.appendChild(borderCountries)

    
    
    
    detailsDiv.appendChild(detailsFlag)
    detailsDiv.appendChild(details)
    countriesList.appendChild(detailsDiv)
    // countryDetailsBox(aCountry)
    mainContainer.appendChild(countriesList)
}

// function countryDetailsBox (country)  {
//     console.log(country)
//     const countryName = document.createElement('h3')
//     const nativeNameDetail = document.createElement('p')
//     const populationDetails = document.createElement('p')
//     const regionDetails = document.createElement('p')
//     const subRegionDetails = document.createElement('p')
//     const capitalDetails = document.createElement('p')
//     const domainDetails = document.createElement('p')
//     const currencyDetails = document.createElement('p')
//     const languageDetails = document.createElement('p')
//     // const borderCountryDetails = document.createElement('p')
//     const borderCountries= document.createElement('div')
//     const borderCountryDetails = document.createElement('div')

//     // countryName.textContent = country.name
//     // nativeNameDetail.textContent = country.name
//     populationDetails.textContent = country[0].population
//     regionDetails.textContent = country[0].region
//     subRegionDetails.textContent = country[0].subregion
//     capitalDetails.textContent = country[0].capital[0]
//     domainDetails.textContent = country[0].tld
//     // currencyDetails.textContent = country.currencies
//     // languageDetails.textContent = country.languages
//     // borderCountryDetails.textContent = country.borderCountries


//     console.log(detailsBox)


//     // borderCountries.appendChild(borderCountryDetails)

//     // detailsBox.appendChild(countryName)
//     // detailsBox.appendChild(nativeNameDetail)
//     detailsBox.appendChild(populationDetails)
//     detailsBox.appendChild(regionDetails)
//     detailsBox.appendChild(subRegionDetails)
//     detailsBox.appendChild(capitalDetails)
//     detailsBox.appendChild(domainDetails)
//     // detailsBox.appendChild(currencyDetails)
//     // detailsBox.appendChild(languageDetails)
//     // detailsBox.appendChild(borderCountries)





// }