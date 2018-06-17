from django.shortcuts import render, HttpResponse
from originapp.SQLighter import *

import json

def main(request):
    json_markers = json.dumps(get_markers())
    return render(request, 'index.html', context={'json_markers_string': json_markers})

def places(request):
    markers = get_markers()
    return render(request, 'places.html', context={'markers': markers})

def maintest(request):
    return render(request, 'main.html')