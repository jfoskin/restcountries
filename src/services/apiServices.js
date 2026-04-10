

export const getAllCountries = async () => {
    try {
        
        let response = await fetch(`https://restcountries.com/v3.1/all`)
        
        let allCountries = await response.json()

        // console.log(allCountries)
        // console.log(allCountries[1])
        return allCountries
    } catch (error) {
        console.log(error)
    }
}

export const getAllBasicCountriesDetails = async () => {
    try {
        
        let response = await fetch(`https://restcountries.com/v3.1/all?fields=name,region,capital,flags,population`)
        
        let allCountriesDetails = await response.json()

        // console.log(allCountries)
        // console.log(allCountries[1])
        return allCountriesDetails
    } catch (error) {
        console.log(error)
    }
}

export async function getCountryDetails(name) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    const singleCountry = await response.json()
    
    // console.log(singleCountry)
    return singleCountry[1]
    
}

// getCountryDetails('jamaica')

// console.log(getCountryDetails('jamaica'))


// getCountryDetails('ivory coast')

// getAllCountries()


// getAllCountriesFlags()


