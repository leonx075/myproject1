from django.conf.urls import url, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'person', views.PersonViewSet)

urlpatterns = [
    url(r'^form/$', views.person),
    url(r'person$', views.index),
    url(r'^api/', include(router.urls))
]
