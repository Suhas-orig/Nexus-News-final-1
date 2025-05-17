from django.urls import path
from . import views

urlpatterns = [
    path('scrape/', views.scraper_view, name='scrape-thehindu-news'),  # Scrape The Hindu news
    path('summarize/', views.summarize_view, name='summarize-thehindu-news'),  # Summarize The Hindu news
]
