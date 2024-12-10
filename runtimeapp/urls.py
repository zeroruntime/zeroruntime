from django.urls import include, path

from runtimeapp import views

urlpatterns = [
    path('', views.index, name='home'),
    path('about', views.about, name='about'),
    path('contact', views.contact, name='contact'),
    path('works', views.works, name='works'),
]
