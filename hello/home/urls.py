from django.contrib import admin
from django.urls import path
from home import views
urlpatterns = [
   path("feedmain", views.feedmain, name='home')
]