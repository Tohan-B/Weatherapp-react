import "./App.css";
import WeatherApp from "./WeatherApp";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <WeatherApp defaultCity="Lagos" />
      </div>
      <footer>
        This project was coded by{" "}
        <a
          href="https://jolly-sunflower-770661.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blessing Itohan
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/Tohan-B/weatherapp-react/tree/master/src"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://glistening-panda-9d7180.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
