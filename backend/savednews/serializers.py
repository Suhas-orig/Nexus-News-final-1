from rest_framework import serializers
from .models import SavedArticle

class SavedArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = SavedArticle
        fields = ['id', 'title', 'link', 'source', 'saved_at']
