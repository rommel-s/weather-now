import styles from "./forecast.module.css";

const WEEK_DAYS = ["SEG", "TER", "QUA", "QUI", "SEX", "SAB", "DOM"];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <div className={styles.forecastContainer}>
      {data.list.splice(0, 5).map((item, index) => (
        <div key={index} className={styles.dailyForecast}>
          <p className={`${"textBig"} ${styles.dayToForecast}`}>
            {forecastDays[index]}
          </p>
          <img
            className={styles.iconSmall}
            src={`icons/${item.weather[0].icon}.png`}
            alt="weather"
          />
          <p className={`${"textMediumSmall"}`}>
            {Math.round(item.main.temp_max)}°
          </p>
          <p className={`${"textMediumSmall"} ${styles.tempMin}`}>
            {Math.round(item.main.temp_min)}°
          </p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
