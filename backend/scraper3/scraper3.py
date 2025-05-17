# scraper3/scraper3.py
import requests
from bs4 import BeautifulSoup
from .models import NewsArticle  # Your Django model

def scrape_hindu_international_news():
    URL = "https://www.thehindu.com/news/international/"
    HEADERS = {"User-Agent": "Mozilla/5.0"}
    news_items = []

    response = requests.get(URL, headers=HEADERS)

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, "html.parser")

        # Find all h3 elements with class 'title' (headline container)
        news_headlines = soup.find_all("h3", class_="title")

        for headline in news_headlines:
            a_tag = headline.find("a")
            if a_tag:
                title = a_tag.text.strip()
                link = a_tag.get("href")

                if link and not link.startswith("http"):
                    link = "https://www.thehindu.com" + link

                # Save to DB
                news_article = NewsArticle.objects.create(
                    title=title,
                    link=link,
                )

                news_items.append({"title": title, "link": link})

    return news_items
