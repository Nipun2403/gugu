from django.shortcuts import render
import datetime
# Create your views here.

def newyear(request):
    now = datetime.datetime.now()
    return render(request, "app1/newyear.html", {"newyear": now.day == 1 and now.month == 1})


tasks = ["foo","baaz","dazzz"]

def task(request):
    return render(request, "app1/task.html", {"task": tasks})