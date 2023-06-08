from rest_framework import serializers

from .models import Author, Tag, Record


class AuthorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Author
        fields = ('id', 'first_name', 'last_name', 'position')


class TagSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tag
        fields = ('id', 'title', 'data_created', 'is_active')


class RecordSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Record
        fields = ('id', 'title', 'description', 'data_created', 'due_date', 'author')
