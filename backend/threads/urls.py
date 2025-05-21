from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostNoteViewSet

router = DefaultRouter()
router.register(r'posts', PostNoteViewSet, basename='postnote')

urlpatterns = [
    path('api/', include(router.urls)),
]
