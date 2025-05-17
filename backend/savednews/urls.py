#urls.py
from django.urls import path
from .views import *

urlpatterns = [
    path('api/save/', SaveArticleView.as_view(), name='save-article'),
    path('api/saved/', SavedArticleListView.as_view(), name='saved-articles-list'),
    path('api/saved/<int:pk>/', SavedArticleDeleteView.as_view(), name='saved-article-delete'),
]
