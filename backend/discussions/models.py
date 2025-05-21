from django.db import models
from django.contrib.auth.models import User

class Article(models.Model):
    article_id = models.IntegerField(unique=True)  # You can use the real ID if fetched from your scraper
    title = models.TextField()
    link = models.URLField()
    source = models.CharField(max_length=100)

    def __str__(self):
        return self.title

class Discussion(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    article = models.ForeignKey(Article, on_delete=models.CASCADE, related_name="discussions")
    note = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Note by {self.user.username} on {self.article.title[:30]}"
