

//function to get all countries and a small number of details for a user to see initially

export const getAllBasicCountriesDetails = async () => {
    try {
        
        let response = await fetch(`https://restcountries.com/v3.1/all?fields=name,region,capital,flags,population`)
        
        let allCountriesDetails = await response.json()

        return allCountriesDetails
    } catch (error) {
        console.log(error)
    }
}




//function to get all countries in a region

export const getCountriesByRegion = async (regionValue) => {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/region/${regionValue}`)

        const countriesInRegion = await response.json()
        
        return countriesInRegion
    } catch (error) {
        console.log(error)
    }
}




