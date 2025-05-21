from rest_framework import serializers
from .models import PostNote

class PostNoteSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')  # Show username but don't let frontend set it

    class Meta:
        model = PostNote
        fields = ['id', 'user', 'title', 'link', 'content', 'created_at']
