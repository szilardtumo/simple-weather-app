import classNames from 'classnames';

import WeatherIcon from '@/app/_components/WeatherIcon';

interface WeatherHeroProps {
  title: string;
  subtitle?: string;
  currentTemp: number;
  weatherDescription: string;
  weatherCode: number;
  className?: string;
}

export default function VerticalWeatherCard({
  title,
  subtitle,
  currentTemp,
  weatherDescription,
  weatherCode,
  className,
}: WeatherHeroProps) {
  return (
    <div className={classNames(className, 'card bg-neutral w-20 rounded-lg')}>
      <div className="card-body items-center gap-5 text-center px-2 py-3">
        <div className="">
          <h2 className="card-title text-sm justify-center">{title}</h2>
          <h3 className="card-title text-xs font-normal  opacity-60 justify-center">{subtitle}</h3>
        </div>
        <p>
          <WeatherIcon
            size={24}
            weatherCode={weatherCode}
            weatherDescription={weatherDescription}
          />
        </p>
        <p className="">{currentTemp.toFixed(0)}&deg;</p>
      </div>
    </div>
  );
}
