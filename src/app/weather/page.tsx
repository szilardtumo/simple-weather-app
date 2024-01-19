import { InformationCircleIcon } from '@heroicons/react/20/solid';

import WeatherHero from './_components/WeatherHero';
import WeatherTabs from './_components/WeatherTabs';
import { getWeatherData } from './_queries/getWeatherData';

export default async function WeatherPage() {
  const data = await getWeatherData();
  console.log('## data', data);

  return (
    <div className="bg-base-100 min-h-screen flex flex-col justify-center items-center gap-6">
      <div className="alert bg-neutral max-w-lg">
        <InformationCircleIcon className="w-6 h-6" />
        {data.current.summary}
      </div>
      <WeatherHero
        location="Insert location"
        currentTemp={data.current.temp}
        minTemp={data.current.minTemp}
        maxTemp={data.current.maxTemp}
        weatherDescription={data.current.weather.description}
        weatherCode={data.current.weather.id}
      />

      <WeatherTabs daily={data.daily} hourly={data.hourly} />
    </div>
  );
}
