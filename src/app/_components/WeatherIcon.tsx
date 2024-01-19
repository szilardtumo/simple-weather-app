import classNames from 'classnames';
import Image from 'next/image';

interface WeatherIconProps {
  size: number;
  weatherCode: number;
  weatherDescription: string;
  className?: string;
}

export default function WeatherIcon({
  size,
  weatherCode,
  weatherDescription,
  className,
}: WeatherIconProps) {
  const getIconName = (code: number) => {
    if (code >= 200 && code < 300) {
      if ([201, 202, 230, 231, 232].includes(code)) {
        return 'lightning-rain';
      }
      return 'lightning';
    }

    if (code >= 300 && code < 400) {
      return 'drizzle-alt';
    }

    if (code >= 500 && code < 600) {
      return 'rain-alt';
    }

    if (code >= 600 && code < 700) {
      return 'snow-alt';
    }

    if (code >= 700 && code < 800) {
      if ([771, 781].includes(code)) {
        return 'hurricane';
      }

      return 'fog';
    }

    if (code === 800) {
      return 'sun';
    }

    if (code >= 801 && code < 900) {
      if ([800, 801].includes(code)) {
        return 'cloud-sun';
      }

      return 'cloud';
    }

    return 'thermometer-full';
  };

  return (
    <Image
      className={classNames(className, 'filter invert')}
      src={`/icons/weather/${getIconName(weatherCode)}.svg`}
      alt={weatherDescription}
      width={size}
      height={size}
    />
  );
}
