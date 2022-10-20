"""URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from applications.flow.urls import flow_router, node_router
from applications.home.urls import home_router
from applications.task.urls import task_router
from applications.home import views
from dj_flow.views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
    path("process/", include(flow_router.urls)),
    path("node/", include(node_router.urls)),
    path("task/", include(task_router.urls)),
    path("home/", include(home_router.urls)),
    path('stream/', views.stream, name='stream')

]
