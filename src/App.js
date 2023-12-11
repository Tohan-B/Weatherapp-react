import "./App.css";
import WeatherApp from "./WeatherApp";

function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <WeatherApp />
        <footer>
          <small class="author-info">
            <a
              href="https://github.com/Tohan-B/SheCodes-Weather-app"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            , by Blessing Itohan
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
