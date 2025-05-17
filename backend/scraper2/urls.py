# scraper2/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('scrape/', views.scraper_view, name='scrape-ndtv-news'),  # Scrape NDTV news
    path('summarize/', views.summarize_view, name='summarize-ndtv-news'),  # Summarize NDTV news
]
