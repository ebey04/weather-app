
export async function getWeather(location) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=LARM9ULEU5XM2GV3ASNMLFY9W`;
    const response = await fetch(url);
    const data = await response.json();
    return {
        location: data.address,
        date: data.days[0].datetime,
        forecast: data.currentConditions.conditions,
        temp: data.currentConditions.temp,
        icon: data.currentConditions.icon
    };
}