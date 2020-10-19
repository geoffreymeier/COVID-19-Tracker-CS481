from django.http import HttpResponse, JsonResponse


def index(request):
    return HttpResponse("Hello, world. You're at the TRACKER index.")

def us_data_view(request, *args, **kwargs):
    data = {
        # TODO - Return data
    }
    return JsonResponse(data, status=200)

def states_data_view(request, *args, **kwargs):
    data = {
        # TODO - Return data
    }
    return JsonResponse(data, status=200)