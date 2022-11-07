import { useState, useEffect } from "react";
import { DateTime } from "luxon";
import {
  WiBarometer,
  WiCloudy,
  WiStrongWind,
  WiRaindrop,
  WiSunrise,
  WiSunset,
} from "react-icons/wi";

import styles from "./currentWeather.module.css";

const CurrentWeather = ({ data }) => {
  const [color, setColor] = useState(styles.blackSky);

  useEffect(() => {
    changeColor();
  }, [color, setColor]);

  const changeColor = () => {
    const weatherIcon = data.weather[0].icon;

    switch (weatherIcon) {
      //clear sky
      case "01d":
        setColor(styles.clearSky);
        break;
      case "01n":
        setColor(styles.nightClearSky);
        break;
      //cloudy sky
      case "02d":
        setColor(styles.cloudySky);
        break;
      case "02n":
        setColor(styles.nightCloudySky);
        break;
      case "03d":
        setColor(styles.cloudySky);
        break;
      case "03n":
        setColor(styles.nightCloudySky);
        break;
      case "04d":
        setColor(styles.cloudySky);
        break;
      case "04n":
        setColor(styles.nightCloudySky);
        break;
      //rain
      case "09d":
        setColor(styles.rainySky);
        break;
      case "09n":
        setColor(styles.nightRainySky);
        break;
      case "10d":
        setColor(styles.rainySky);
        break;
      case "10n":
        setColor(styles.nightRainySky);
        break;
      case "11d":
        setColor(styles.rainySky);
        break;
      case "11n":
        setColor(styles.nightRainySky);
        break;
      case "13d":
        setColor(styles.snowy);
        break;
      case "13n":
        setColor(styles.nightSnowy);
        break;
      case "50d":
        setColor(styles.mist);
        break;
      case "50n":
        setColor(styles.nightMist);
        break;

      default:
        break;
    }
  };

  const formatTime = (secs, format = "HH:mm") => {
    let a = DateTime.fromSeconds(secs).toFormat(format);
    return a;
  };

  return (
    <>
      <div className={`${styles.mainDashboard} ${color}`}>
        <div className={styles.weatherInfo}>
          <img alt="weather" src={`icons/${data.weather[0].icon}.png`} />
          <p className={`${"textMediumSmall"}`}>
            {data.weather[0].description}
          </p>
          <p className={`${"textSmall"}`}>
            Sensação térmica: {Math.round(data.main.feels_like)}°
          </p>
        </div>

        <div className={styles.temperaturesContainer}>
          <h3>{data.name}</h3>
          <h1 className={styles.currentTemp}>{Math.round(data.main.temp)}°</h1>
          <div className={styles.thermalAmplitude}>
            <p className={styles.aplitudeTemp}>
              máx: {Math.round(data.main.temp_max)}°
            </p>{" "}
            |
            <p className={styles.aplitudeTemp}>
              min: {Math.round(data.main.temp_max)}°
            </p>
          </div>
        </div>
      </div>

      <div className={`${"smoothShadow"} ${styles.secondaryInfos}`}>
        <div className={styles.pairContainer}>
          <div className={styles.secondaryContainer}>
            <p className={`${"textSmall"} ${styles.measureLabel}`}>
              Velocidade do vento
            </p>
            <p className={`${"textBig"} ${styles.measureOutput}`}>
              <WiStrongWind size={40} /> {Math.round(data.wind.speed)} m/s
            </p>
          </div>

          <div className={styles.secondaryContainer}>
            <p className={`${"textSmall"} ${styles.measureLabel}`}>Umidade</p>
            <p className={`${"textBig"} ${styles.measureOutput}`}>
              <WiRaindrop size={40} /> {Math.round(data.main.humidity)}%
            </p>
          </div>
        </div>

        <div className={styles.pairContainer}>
          <div className={styles.secondaryContainer}>
            <p className={`${"textSmall"} ${styles.measureLabel}`}>
              Nebulosidade
            </p>
            <p className={`${"textBig"} ${styles.measureOutput}`}>
              <WiCloudy size={40} /> {data.clouds.all}%
            </p>
          </div>
          <div className={styles.secondaryContainer}>
            <p className={`${"textSmall"} ${styles.measureLabel}`}>
              Pressão atmosférica
            </p>
            <p className={`${"textBig"} ${styles.measureOutput}`}>
              <WiBarometer size={40} /> {data.main.pressure} hPA
            </p>
          </div>
        </div>
      </div>

      <div className={`${"smoothShadow"} ${styles.tertiaryInfos}`}>
        <div className={styles.pairContainer}>
          <p className={`${"textSmall"} ${styles.measureLabel}`}>
            Nascer do Sol
          </p>
          <p className={`${"textBig"} ${styles.measureOutput}`}>
            <WiSunrise size={50} /> {formatTime(data.sys.sunrise)}h
          </p>
        </div>
        <div className={styles.pairContainer}>
          <p className={`${"textSmall"} ${styles.measureLabel}`}>Pôr do Sol</p>
          <p className={`${"textBig"} ${styles.measureOutput}`}>
            <WiSunset size={50} /> {formatTime(data.sys.sunset)}h
          </p>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
