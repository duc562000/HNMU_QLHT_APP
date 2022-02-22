const API_KEY = 'c5cf11803d2649d89513d886102e06b4';
export async function getNews(page = 1 ,pageSize = 10) {
    try{
    const response = await fetch(
        `https://newsapi.org/v2/top-headlines?language=en&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`);
    const jsonData = await response.json();
    return jsonData.articles || [];
} catch (error) {
    return [];
  }
}