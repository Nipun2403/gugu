from django.urls import URLPattern, path
from . import views
urlpatterns = [
    path("newyear/", views.newyear, name = "New Year"),
    path("tasks/", views.task, name = "task")
]
