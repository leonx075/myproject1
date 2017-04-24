from rest_framework import serializers
from myapp.models import Person
#from django.contrib.auth.models import User

class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ('id', 'first_name', 'last_name',)
