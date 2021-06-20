from django.http import HttpResponse
from django.shortcuts import render

def index(request):

    context = {
        'django_message': 'This message is coming from the view'
    }
    return render(request, 'index.html', context)
    