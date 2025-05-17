#views.py
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.generics import ListAPIView, DestroyAPIView  
from .models import SavedArticle
from .serializers import SavedArticleSerializer

class SaveArticleView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = SavedArticleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user) 
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SavedArticleListView(ListAPIView):
    serializer_class = SavedArticleSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return SavedArticle.objects.filter(user=self.request.user).order_by('-saved_at')

class SavedArticleDeleteView(DestroyAPIView): 
    serializer_class = SavedArticleSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
       
        return SavedArticle.objects.filter(user=self.request.user)
