import clearDayIcon from "./icons/wi-day-sunny.svg";
import clearNightIcon from "./icons/wi-night-clear.svg";
import partlyCloudyDayIcon from "./icons/wi-day-cloudy.svg";
import partlyCloudyNightIcon from "./icons/wi-night-alt-cloudy.svg";
import cloudyIcon from "./icons/wi-cloudy.svg";
import fogIcon from "./icons/wi-fog.svg";
import windIcon from "./icons/wi-strong-wind.svg";
import rainIcon from "./icons/wi-rain.svg";
import rainMixIcon from "./icons/wi-rain-mix.svg";
import snowIcon from "./icons/wi-snow.svg";
import sleetIcon from "./icons/wi-sleet.svg";
import hailIcon from "./icons/wi-hail.svg";
import stormShowersIcon from "./icons/wi-storm-showers.svg";
import dayThunderIcon from "./icons/wi-day-thunderstorm.svg";
import nightThunderIcon from "./icons/wi-night-alt-thunderstorm.svg";

export const iconMap = {
    "clear-day": clearDayIcon,
    "clear-night": clearNightIcon,

    "partly-cloudy-day": partlyCloudyDayIcon,
    "partly-cloudy-night": partlyCloudyNightIcon,

    "cloudy": cloudyIcon,
    "fog": fogIcon,
    "wind": windIcon,

    "rain": rainIcon,
    "rain-snow": rainMixIcon,
    "rain-sleet": rainMixIcon,   // closest match available

    "snow": snowIcon,
    "snow-sleet": sleetIcon,     // you can decide sleet or snow icon

    "sleet": sleetIcon,
    "hail": hailIcon,

    "thunder-rain": stormShowersIcon,
    "thunder-showers-day": dayThunderIcon,
    "thunder-showers-night": nightThunderIcon,
};

const spinner = document.getElementById("spinner");

export function showSpinner() {
    spinner.style.display = "block";
}

export function hideSpinner() {
    spinner.style.display = "none";
}