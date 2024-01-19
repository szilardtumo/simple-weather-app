'use client';

import { Tab } from '@headlessui/react';
import classNames from 'classnames';

import { DailyWeather, HourlyWeather } from '@/app/_model/weather';
import { getRelativeDayName } from '@/app/_utils/date';

import VerticalWeatherCard from './VerticalWeatherCard';

interface WeatherTabsProps {
  hourly: HourlyWeather[];
  daily: DailyWeather[];
}

export default function WeatherTabs({ hourly, daily }: WeatherTabsProps) {
  return (
    <div className="w-full max-w-lg">
      <Tab.Group>
        <Tab.List className="tabs tabs-boxed bg-neutral">
          <Tab className={({ selected }) => classNames('tab', selected && 'tab-active')}>Daily</Tab>
          <Tab className={({ selected }) => classNames('tab', selected && 'tab-active')}>
            Hourly
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel className="tab-content flex gap-3">
            <div className="carousel gap-3">
              {daily.map((day) => (
                <VerticalWeatherCard
                  className="carousel-item"
                  key={`day-${day.timestamp}`}
                  title={new Date(day.timestamp).toLocaleDateString('en-US', {
                    weekday: 'short',
                  })}
                  currentTemp={day.temp}
                  weatherCode={day.weather.id}
                  weatherDescription={day.weather.description}
                />
              ))}
            </div>
          </Tab.Panel>
          <Tab.Panel className="tab-content flex">
            <div className="carousel gap-3">
              {hourly.map((day) => (
                <VerticalWeatherCard
                  className="carousel-item"
                  key={`hour-${day.timestamp}`}
                  title={new Date(day.timestamp).toLocaleTimeString('en-US', { hour: 'numeric' })}
                  subtitle={getRelativeDayName(new Date(day.timestamp))}
                  currentTemp={day.temp}
                  weatherCode={day.weather.id}
                  weatherDescription={day.weather.description}
                />
              ))}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
