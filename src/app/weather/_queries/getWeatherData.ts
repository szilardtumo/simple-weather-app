interface WeatherData {
  coord: { lon: number; lat: number };
  weather: { id: number; main: string; description: string; icon: string }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: { speed: number; deg: number };
  clouds: { all: number };
  rain?: {
    '1h': number;
    '3h': number;
  };
  snow?: {
    '1h': number;
    '3h': number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

const parseWeatherData = (data: WeatherData) => {
  return {
    location: data.name,
    countryCode: data.sys.country,
    main: data.main,
    weather: data.weather[0],
  };
};

export const getWeatherData = async () => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=46.769379&lon=23.589954&units=metric&appid=${process.env.OPENWEATHERMAP_API_KEY}`,
    {
      next: { revalidate: 3600 },
    },
  );

  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }

  const data: WeatherData = await response.json();

  return parseWeatherData(data);
};
