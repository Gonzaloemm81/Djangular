from django.urls import path, include
from .views import LoginView, LogoutView, SignupView
from rest_framework import routers
from AppFLE import views

router= routers.DefaultRouter()
router.register(r'servicios',views.ServiciosViewSet)


urlpatterns = [
    #Servicios view set

    path('',include(router.urls)),

    #Auth views
    path('auth/login/',
         LoginView.as_view(),name='auth.login'),

    path('auth/logout/',
         LogoutView.as_view(),name='auth.logout'),
    path('auth/signup/',
        SignupView.as_view(),name='auth.signup'),
]