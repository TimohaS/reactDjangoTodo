from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets

from .serializers import AuthorSerializer, TagSerializer, RecordSerializer
from .models import Author, Tag, Record
# Create your views here.


class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all().order_by('last_name')
    serializer_class = AuthorSerializer


class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all().order_by('title')
    serializer_class = TagSerializer


class RecordViewSet(viewsets.ModelViewSet):
    queryset = Record.objects.all().order_by('author')
    serializer_class = RecordSerializer
