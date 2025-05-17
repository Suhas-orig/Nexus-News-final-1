#scraper2/scraper2
from bs4 import BeautifulSoup
import requests
from .models import NewsArticle  # Import your model to save the data

def scrape_ndtv_news():
    URL = "https://www.ndtv.com/"
    HEADERS = {"User-Agent": "Mozilla/5.0"}
    news_items = []

    response = requests.get(URL, headers=HEADERS)

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, "html.parser")
        news_items_html = soup.find_all("a", class_="crd_ttl8")  # NDTV's news items have the class 'crd_ttl8'
        
        for item in news_items_html:
            title = item.text.strip()  # Extract title directly from <a> tag
            link = item.get("href")  # Extract href attribute
            
            if link and not link.startswith("http"):  # If the link is relative, make it absolute
                link = "https://www.ndtv.com" + link

            # Save the scraped news to the database
            news_article = NewsArticle.objects.create(
                title=title,
                link=link,
            )
            
            # Append to news_items for JSON response
            news_items.append({"title": title, "link": link})

    return news_items
