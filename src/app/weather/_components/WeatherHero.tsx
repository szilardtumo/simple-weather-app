import WeatherIcon from '@/app/_components/WeatherIcon';

interface WeatherHeroProps {
  location: string;
  currentTemp: number;
  minTemp: number;
  maxTemp: number;
  weatherDescription: string;
  weatherCode: number;
}

export default function WeatherHero({
  location,
  currentTemp,
  minTemp,
  maxTemp,
  weatherDescription,
  weatherCode,
}: WeatherHeroProps) {
  return (
    <div className="hero bg-neutral max-w-xs rounded-2xl sm:max-w-lg">
      <div className="hero-content w-full px-10 flex flex-col-reverse justify-between items-center gap-10 sm:flex-row">
        <div className="flex flex-col">
          <div className="text-center">
            <div className="text-2xl">{location}</div>
            <div className="text-8xl font-thin">{currentTemp.toFixed(0)}&deg;</div>
            <div className="flex justify-between gap-3 font-semibold text-base">
              <p>Min: {minTemp.toFixed(0)}&deg;</p>
              <p>Max: {maxTemp.toFixed(0)}&deg;</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <WeatherIcon
            size={150}
            weatherCode={weatherCode}
            weatherDescription={weatherDescription}
          />
          <div className="text-lg capitalize font-semibold text-gray-400">{weatherDescription}</div>
        </div>
      </div>
    </div>
  );
}
