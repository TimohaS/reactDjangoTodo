from django.urls import include, path
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r'Authors', views.AuthorViewSet)
router.register(r'Tags', views.TagViewSet)
router.register(r'Records', views.RecordViewSet)


from rest_framework.authtoken import views


urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api-token-auth/', views.obtain_auth_token),
]