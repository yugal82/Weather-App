const API_KEY = "eda2741e7915487088c37104870a3a8d";
const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast"
// https://api.openweathermap.org/data/2.5/forecast?q=pune&appid=eda2741e7915487088c37104870a3a8d

// const getWeather = async (city) =>  {
//     const http = new slhttp();
//     const url = `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`;
//     try {
//         const res = await http.get(url);
//         const data = await res.json();
//         console.log(data.list);
//         return {
//             state: 'Success',
//             weatherInfo: res
//         };
//     } catch (e) {
//         return {
//             state: 'Failure',
//             weatherInfo: null
//         };
//     }
// }

// getWeather('Pune');

const getWeather = async (city) => {
    const url = `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        return {
            state: 'Success',
            weatherInfo: data
        }
    } catch (e) {
        return {
            state: 'Error',
            weatherInfo: null
        }
    }

}

// getWeather('Pune')