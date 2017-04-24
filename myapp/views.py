from django.shortcuts import render, redirect, render_to_response
from django.template import RequestContext
from django.utils import timezone

# rest_framework
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from myapp.models import Person
from myapp.serializers import PersonSerializer

# Create your views here.

## REST Framework

@csrf_exempt
def person_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        person = Person.objects.all()
        serializer = PersonSerializer(person, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = PersonSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def person_detail(request, pk):
    """
    Retrieve, update or delete a code person.
    """
    try:
        person = Person.objects.get(pk=pk)
    except person.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = PersonSerializer(person)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = PersonSerializer(person, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        person.delete()
        return HttpResponse(status=204)


def test(request):
    return render(request, "wedge_tool/wedge_tool_base.html")
