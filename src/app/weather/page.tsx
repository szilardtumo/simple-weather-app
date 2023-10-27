import WeatherBackground from './_components/WeatherBackground';

async function getWeatherData() {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=46.769379&lon=23.589954&appid=${process.env.OPENWEATHERMAP_API_KEY}`,
    {
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log('res', await res.json());
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function WeatherPage() {
  const data = await getWeatherData();
  console.log('data', data);

  return (
    <WeatherBackground>
      <div>Content</div>
    </WeatherBackground>
  );
}
