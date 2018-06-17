from django.shortcuts import render, HttpResponse

def main(request):
    return render(request, 'index.html')

def maintest(request):
    return render(request, 'main.html')