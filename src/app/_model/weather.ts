interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface DailyWeather {
  timestamp: number;
  temp: number;
  feelsLike: number;
  minTemp: number;
  maxTemp: number;
  weather: WeatherCondition;
}

export interface HourlyWeather {
  timestamp: number;
  temp: number;
  feelsLike: number;
  weather: WeatherCondition;
}
