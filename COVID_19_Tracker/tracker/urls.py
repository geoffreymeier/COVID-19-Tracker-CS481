from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('us_data/', views.us_data_view),
    path('states_data/', views.states_data_view),
]