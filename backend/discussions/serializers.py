from rest_framework import serializers
from .models import Discussion

class DiscussionSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Discussion
        fields = ['id', 'user', 'article_id', 'article_title',
                   'article_link', 'article_source', 'note', 'created_at']