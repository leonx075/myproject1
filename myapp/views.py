from django.shortcuts import render, redirect, render_to_response
from django import forms
from django.template import RequestContext
from django.utils import timezone
from .forms import PersonForm
from .serializers import PersonSerializer
#from permissions import IsOwnerOrReadOnly
from rest_framework import viewsets
from .models import Person

# Create your views here.

## Simple form

def person(request):
    if request.method == "POST":
        form = PersonForm(request.POST)
        if form.is_valid():
            model_instance = form.save(commit=False)
            model_instance.timestamp = timezone.now()
            model_instance.save()
            return redirect('/')
    else:
        form = PersonForm()
    return render(request, 'forms/person_form.html', {'PersonForm': PersonForm})



## Angular JS

def index(request):
    return_to_response('person2/person.html', RequestContext(request))

class PersonViewSet(viewsets.ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
    #permission_classes = (IsOwnerOrReadOnly,)

    def pre_save(self, obj):
        obj.owner = self.request.user
