import { WeatherHero } from './_components';
import { getWeatherData } from './_queries';

export default async function WeatherPage() {
  const data = await getWeatherData();
  console.log('data', data);

  return (
    <div className="bg-base-100 min-h-screen flex justify-center items-center">
      <WeatherHero
        location={data.location}
        currentTemp={data.main.temp}
        minTemp={data.main.temp_min}
        maxTemp={data.main.temp_max}
        weatherDescription={data.weather.description}
        weatherCode={data.weather.id}
      />
    </div>
  );
}
