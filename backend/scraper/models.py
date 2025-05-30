# scraper/models.py
from django.db import models
from django.contrib.auth.models import User

class NewsArticle(models.Model):
    title = models.CharField(max_length=500)
    link = models.URLField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(
        User, 
        on_delete=models.CASCADE, 
        related_name="toi_news_articles",  # 🔥 changed from 'news_articles'
        null=True, 
        blank=True
    )

    def __str__(self):
        return self.title
