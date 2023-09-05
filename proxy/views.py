import requests

from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse


def index(request):
    url = "https://service-api-0nnq.onrender.com/api/v2/services"
    response = requests.get(url)
    if response.status_code == 200:
        text = response.json()
        print(text)
        response["Access-Control-Allow-Origin"] = "https://roman-frontend.vercel.app/"
        return HttpResponse(text)
    else:
        return HttpResponse("Cors proxy!!!")
