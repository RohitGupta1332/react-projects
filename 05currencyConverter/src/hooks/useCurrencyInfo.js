import { useState, useEffect } from 'react';

function useCurrencyInfo(from, to) {
    const [data, setData] = useState({});

    useEffect(() => {
        async function getData() {
            const url = `https://currency-converter-pro1.p.rapidapi.com/convert?from=${from}&to=${to}&amount=100`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '950971baf9mshe9031faf91e466bp15fb3ajsn5f86cdf55777',
                    'X-RapidAPI-Host': 'currency-converter-pro1.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.text();
                setData(JSON.parse(result))
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        }

        getData();

    }, [from, to]);

    return data;
}

export default useCurrencyInfo;
