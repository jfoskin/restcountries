

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



export const getCountriesByRegion = async (regionValue) => {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/region/${regionValue}`)
        const countriesInRegion = await response.json()
        // console.log(countriesInRegion)
        return countriesInRegion
    } catch (error) {
        console.log(error)
    }
}

// getCountriesByRegion('europe')

// getCountryDetails('jamaica')

// console.log(getCountryDetails('jamaica'))


// getCountryDetails('ivory coast')

// getAllCountries()


// getAllCountriesFlags()


