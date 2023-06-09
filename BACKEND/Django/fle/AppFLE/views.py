from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from rest_framework import status, generics, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, ServiciosSerializer
from .models import Servicios



# Create your views here.

class LoginView(APIView):
    def post(self, request):

        email = request.data.get('email', None)
        password = request.data.get('password', None)
        user = authenticate(email=email, password=password)

        if user:
            login(request, user)
            return Response(
                UserSerializer(user).data,
                status=status.HTTP_200_OK)
        

        return Response(status=status.HTTP_404_NOT_FOUND)
    
class LogoutView(APIView):
    def post(self, request):

        logout(request)

        return Response(status=status.HTTP_200_OK)
    
class SignupView(generics.CreateAPIView):
    serializer_class = UserSerializer


class ServiciosViewSet(viewsets.ModelViewSet):
    queryset = Servicios.objects.all()
    serializer_class = ServiciosSerializer