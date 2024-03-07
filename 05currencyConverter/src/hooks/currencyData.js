import { useEffect, useState } from "react";

function getCurrency() {
    const [data, setData] = useState(null);
    useEffect(() => {
        async function get() {
            const url = 'https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '950971baf9mshe9031faf91e466bp15fb3ajsn5f86cdf55777',
                    'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.text();
                setData(JSON.parse(result))
                // console.log(result);
            } catch (error) {
                console.error(error);
            }
        }
        get()

    }, [])
    return data;
}
export default getCurrency