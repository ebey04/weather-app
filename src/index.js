import "./style.css";
import { getWeather } from "./api.js";
import { iconMap, showSpinner, hideSpinner } from "./dom.js";


const container = document.getElementById('container');
const input = document.getElementById('input');
const button = document.getElementById('weatherBtn');


button.addEventListener("click", async () => {
    container.innerHTML = ""

    const location = input.value.trim(); 
    if (!location) return;     

    showSpinner();

    await new Promise(resolve => setTimeout(resolve, 500)); 

    const data = await getWeather(location);
    hideSpinner();

    const icon = document.createElement('img');
    icon.src = iconMap[data.icon]

    const textBlock = document.createElement('div');
    textBlock.classList.add('text-block');

    const address = document.createElement("h1");
    address.textContent = data.location.toUpperCase();

    const date = document.createElement("p");
    date.textContent = new Date (data.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

    const forecast = document.createElement("p");
    forecast.textContent = data.forecast;

    const temp = document.createElement('p');
    temp.classList.add('temp');
    temp.textContent = `${data.temp}°F`;

    input.value = "";

    container.appendChild(icon);
    container.appendChild(textBlock);
    textBlock.appendChild(address);
    textBlock.appendChild(date);
    textBlock.appendChild(forecast);
    textBlock.appendChild(temp);
});

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        button.click();
    }
});
