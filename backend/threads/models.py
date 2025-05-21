from django.contrib.auth.models import User
from django.db import models

class PostNote(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Link to Django user
    title = models.CharField(max_length=500)
    link = models.URLField()
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} - {self.user.username} ({self.created_at.strftime('%Y-%m-%d %H:%M')})"
