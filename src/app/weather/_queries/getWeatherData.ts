import { DailyWeather, HourlyWeather } from '@/app/_model/weather';

import sampleData from '../../../../data.json';

interface CurrentWeatherData {
  dt: number;
  sunrise?: number;
  sunset?: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility?: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust?: number;
  weather: { id: number; main: string; description: string; icon: string }[];
}

interface MinutelyWeatherData {
  dt: number;
  precipitation: number;
}

interface HourlyWeatherData {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility?: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust?: number;
  weather: { id: number; main: string; description: string; icon: string }[];
  pop: number;
}

interface DailyWeatherData {
  dt: number;
  sunrise?: number;
  sunset?: number;
  moonrise?: number;
  moonset?: number;
  moon_phase: number;
  summary: string;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust?: number;
  weather: { id: number; main: string; description: string; icon: string }[];
  clouds: number;
  pop: number;
  rain?: number;
  uvi: number;
}

interface OneCallWeatherData {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: CurrentWeatherData;
  minutely: MinutelyWeatherData[];
  hourly: HourlyWeatherData[];
  daily: DailyWeatherData[];
}

interface OneCallWeather {
  current: DailyWeather;
  hourly: HourlyWeather[];
  daily: DailyWeather[];
}

const parseOneCallWeatherData = (data: OneCallWeatherData): OneCallWeather => {
  return {
    current: {
      timestamp: data.current.dt * 1000,
      temp: data.current.temp,
      feelsLike: data.current.feels_like,
      minTemp: data.daily[0].temp.min,
      maxTemp: data.daily[0].temp.max,
      weather: data.current.weather[0],
    },
    hourly: data.hourly.map((hourly) => ({
      timestamp: hourly.dt * 1000,
      temp: hourly.temp,
      feelsLike: hourly.feels_like,
      weather: hourly.weather[0],
    })),
    daily: data.daily.map((daily) => ({
      timestamp: daily.dt * 1000,
      temp: daily.temp.day,
      feelsLike: daily.feels_like.day,
      minTemp: daily.temp.min,
      maxTemp: daily.temp.max,
      weather: daily.weather[0],
    })),
  };
};

export const getWeatherData = async (): Promise<OneCallWeather> => {
  // const response = await fetch(
  //   `https://api.openweathermap.org/data/3.0/onecall?lat=46.769379&lon=23.589954&units=metric&appid=${process.env.OPENWEATHERMAP_API_KEY}`,
  //   {
  //     next: { revalidate: 3600 },
  //   },
  // );

  // if (!response.ok) {
  //   throw new Error('Failed to fetch weather data');
  // }

  // const data: OneCallWeatherData = await response.json();

  const data = sampleData;

  return parseOneCallWeatherData(data);
};
