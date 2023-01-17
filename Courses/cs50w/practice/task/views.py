from django.shortcuts import render

# Create your views here.

def index(request): 

    tasks = ["t1", "t2", "t3"]

    return render(request, "task/task.html", {"tasks": tasks})

def add(request):
    return render(request, "task/add.html")