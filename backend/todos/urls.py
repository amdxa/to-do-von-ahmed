from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TodoViewSet

# create a router and register our viewsets with it.
router = DefaultRouter()

# Reguster the TodoViewSet with the router.
router.register(r'todos', TodoViewSet, basename='todo')

# the API-URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
]