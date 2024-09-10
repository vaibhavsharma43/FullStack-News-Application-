import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category, isLoggedIn }) => {
  const [articles, setArticles] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('general');

  useEffect(() => {
    const fetchNews = async () => {
      let selectedCategory = isLoggedIn ? category : 'general'; 
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${selectedCategory}&apiKey=ddef22f55220491ea6ee812e1cf8b46a`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [category, isLoggedIn]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.map((news, index) => {
        if (news.urlToImage == null) {
          news.urlToImage =
            "https://m.media-amazon.com/images/M/MV5BMTU3MTE2Nzc2OV5BMl5BanBnXkFtZTgwMzc1OTgyNDM@._V1_.jpg";
        }
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

export default NewsBoard;
