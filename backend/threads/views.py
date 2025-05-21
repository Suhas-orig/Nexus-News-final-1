from rest_framework import viewsets, permissions
from .models import PostNote
from .serializers import PostNoteSerializer

class PostNoteViewSet(viewsets.ModelViewSet):
    queryset = PostNote.objects.all()
    serializer_class = PostNoteSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user) 