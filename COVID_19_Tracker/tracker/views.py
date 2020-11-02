from tracker.models import CovidData
from django.http import HttpResponse, JsonResponse
from django.core import serializers


def index(request):
    return HttpResponse("Hello, world. You're at the TRACKER index.")

def us_data_view(request, *args, **kwargs):
    data = {
        # TODO - Return data
    }
    return JsonResponse(data, status=200)

def states_data_view(request, *args, **kwargs):
    CovidData_json = serializers.serialize("json",CovidData.objects.all())
    data = {"CovidData": CovidData_json}
    return JsonResponse(data, status=200)