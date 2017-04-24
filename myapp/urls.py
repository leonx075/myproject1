from django.conf.urls import url, include
from rest_framework import routers
from myapp import views


urlpatterns = [
    url(r'^persons/$', views.person_list),
    url(r'^persons/(?P<pk>[0-9]+)/$', views.person_detail),
    url(r'^test/', views.test, name='test')
]
