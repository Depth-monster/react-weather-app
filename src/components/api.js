export const APIOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ce9e12a801mshcd92cb5aabe0947p1c63ebjsnc3119d4be87b',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GET_API='https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=100000';

export const OPEN_WEATHER_KEY='814a79c17d4df4e9e8b2bcacf2722dc8';
export const GET_OPENWEATHER_DAILY='https://api.openweathermap.org/data/2.5/weather?'
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
export const GET_OPENWEATHER_FORECAST = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}';
//https://api.openweathermap.org/data/2.5/weather?&appid=814a79c17d4df4e9e8b2bcacf2722dc8
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}