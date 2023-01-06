import './App.css';


export default function App() {
  let weather = {
    city: "New York",
    date: "Sunday 11pm",
    description: "rainy",
    humidity: "40",
    wind: "6",
    temperature: "13",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png"
  };

  return (
    <div className="App">
      <div>
        <h1 className="app">
          <div>Vanilla Weather App</div>
        </h1>
        <div className="weather-app">
        <form action="" id="search-form" className="mb-3">
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city"
                class="form-control"
                id="city-input"
                autocomplete="off"
              />
            </div>
            <div className="col-4">
              <input type="submit" value="Search" className="button" />
            </div>
          </div>
        </form>
        

        <table>
          <tr className="row2">
            <td className="morespace">
              <ul className="listnone">
                <li className="city">{weather.city}</li>
                <li id="date" className="inline kursiv">
                  {weather.date}, {weather.description}
                </li>
                <li className="kursiv">
                  Humidity: {weather.humidity}%, Wind: {weather.wind} km/h
                </li>
              </ul>
            </td>
            <td>
              <span>
                <strong className="temperaturemain">
                  {weather.temperature}
                </strong>
                <sup className="degree">
                  <a href="/" className="units active">
                    °C
                  </a>
                  |
                  <a href="/" className="units">
                    F
                  </a>
                </sup>
              </span>
            </td>
            <td>
              <img src={weather.imgUrl} alt="" className="image1" />
            </td>
          </tr>
        </table>
        </div>
        <footer>
          <a
            href="https://github.com/HelenHMac/Vanilla-weather-app-advanced"
            className="footer-app"
          >
            Open source code by Olena Honcharova
          </a>
        </footer>
      </div>
    </div>
  );
}
