

export const getAllCountries = async () => {
    try {
        
        let response = await fetch(`https://restcountries.com/v3.1/all?fields=name,region,capital,currencies`)
        
        let allCountries = await response.json()

        // console.log(allCountries)
        // console.log(allCountries[1])
        return allCountries
    } catch (error) {
        console.log(error)
    }
}

// getAllCountries()


export const getAllCountriesFlags = async () => {
    try {
        
        let response = await fetch(`https://flagcdn.com/en/codes.json`)
        
        let allCountries = await response.json()

        // console.log(allCountries)
        console.log(allCountries)
        
    } catch (error) {
        console.log(error)
    }
}

// getAllCountriesFlags()


