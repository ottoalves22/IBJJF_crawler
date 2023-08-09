const axios = require('axios');
const cheerio = require('cheerio');
const url = "https://ibjjf.com/2023-athletes-ranking";

async function fetchData(url:string) {
    console.log("Coletando dados...")
    var response = await axios(url).catch((err: any) => console.log(err))

    if(response.status != 200) {
        console.log(`Request returned ${response.status}`)
        return
    }
    return response
}

fetchData(url)