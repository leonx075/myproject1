from django.shortcuts import render

def index(request):
    # View code here...
    return render(request, 'base.html')
