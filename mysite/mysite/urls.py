from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('vuedemo/', include('vue_demo.urls')),
    path('admin/', admin.site.urls),
]
