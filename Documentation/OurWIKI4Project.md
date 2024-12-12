# DJANGO REST FRAMEWORK

[Django Rest Framework](https://www.geeksforgeeks.org/django-rest-framework-installation/)

[Django Rest Framework](https://www.django-rest-framework.org/tutorial/quickstart/)

[Basic API with Rest and Django](https://www.geeksforgeeks.org/how-to-create-a-basic-api-using-django-rest-framework/)

[Python Django REST API In 30 Minutes - Django Tutorial](https://www.youtube.com/watch?v=NoLF7Dlu5mc)

# Python Documentation

[IMPORTANT INFORMATION FOR : Python 3.13 or newer for Mac users](https://docs.brew.sh/Homebrew-and-Python)

# Serializers & DJango Rest Framework


Serializers allow complex data such as querysets and model instances to be converted to native Python datatypes that can then be easily rendered into JSON, XML or other content types. Serializers also provide deserialization, allowing parsed data to be converted back into complex types, after first validating the incoming data.

The serializers in REST framework work very similarly to Django's Form and ModelForm classes. We provide a Serializer class which gives you a powerful, generic way to control the output of your responses, as well as a ModelSerializer class which provides a useful shortcut for creating serializers that deal with model instances and querysets.

[Django Rest Framework Serializers](https://www.django-rest-framework.org/api-guide/serializers/)

# DJANGO URL Patterns/Python

In Django, views are Python functions which take a URL request as parameter and return an HTTP response or throw an exception like 404. Each view needs to be mapped to a corresponding URL pattern. This is done via a Python module called URLConf(URL configuration)

Let the project name be myProject. The Python module to be used as URLConf is the value of ROOT_URLCONF in myProject/settings.py. By default this is set to 'myProject.urls'. Every URLConf module must contain a variable urlpatterns which is a set of URL patterns to be matched against the requested URL. These patterns will be checked in sequence, until the first match is found. Then the view corresponding to the first match is invoked. If no URL pattern matches, Django invokes an appropriate error handling view.

Including other URLConf modules
It is a good practice to have a URLConf module for every app in Django. This module needs to be included in the root URLConf module as follows:

[Django URL Patterns in Python](https://www.geeksforgeeks.org/django-url-patterns-python/)


# REACT & VITE

[how to set up react & vite](https://dev.to/mcbarna/setup-react-with-vite-on-vscode-a-step-by-step-tutorial-591g)



# Render to Django


[How to deploy Django on Render](https://www.youtube.com/watch?v=FJBTwa0R_5g)


# __pycache__ 

Are folders that are created because When you develop a self-contained Python script, you might not notice anything unusual about your directory structure. However, as soon as your project becomes more complex, you’ll often decide to extract parts of the functionality into additional modules or packages. That’s when you may start to see a __pycache__ folder appearing out of nowhere next to your source files in seemingly random places:

Even though Python is an interpreted programming language, its interpreter doesn’t operate directly on your Python code, which would be very slow. Instead, when you run a Python script or import a Python module, the interpreter compiles your high-level Python source code into bytecode, which is an intermediate binary representation of the code.

This bytecode enables the interpreter to skip recurring steps, such as lexing and parsing the code into an abstract syntax tree and validating its correctness every time you run the same program. As long as the underlying source code hasn’t changed, Python can reuse the intermediate representation, which is immediately ready for execution. This saves time, speeding up your script’s startup time.

Remember that while loading the compiled bytecode from __pycache__ makes Python modules import faster, it doesn’t affect their execution speed!

# URLS in Python

[link](https://www.geeksforgeeks.org/django-url-patterns-python/)

In Django, views are Python functions which take a URL request as parameter and return an HTTP response or throw an exception like 404. Each view needs to be mapped to a corresponding URL pattern. This is done via a Python module called URLConf(URL configuration)

Let the project name be myProject. The Python module to be used as URLConf is the value of ROOT_URLCONF in myProject/settings.py. By default this is set to 'myProject.urls'. Every URLConf module must contain a variable urlpatterns which is a set of URL patterns to be matched against the requested URL. These patterns will be checked in sequence, until the first match is found. Then the view corresponding to the first match is invoked. If no URL pattern matches, Django invokes an appropriate error handling view.

Including other URLConf modules
It is a good practice to have a URLConf module for every app in Django. This module needs to be included in the root URLConf module as follows:

from django.contrib import admin 
from django.urls import path, include 
  
urlpatterns = [ 
    path('admin/', admin.site.urls), 
    path('', include('books.urls')), 
] 

This tells Django to search for URL patterns in the file books/urls.py.

URL patterns

Here’s a sample code for books/urls.py:

from django.urls import path 

from . import views 
  
urlpatterns = [ 
    path('books/<int:pk>/', views.book_detail), 

    path('books/<str:genre>/', views.books_by_genre), 
    
    path('books/', views.book_index),  
] 
For example,

A URL request to /books/crime/ will match with the second URL pattern. As a result, Django will call the function views.books_by_genre(request, genre = "crime").

Similarly a URL request /books/25/ will match the first URL pattern and Django will call the function views.book_detail(request, pk =25).

Here, int and str are path convertors and capture an integer and string value respectively.

Path convertors:
(The following path convertor types are available in Django)
- int – Matches zero or any positive integer.
- str – Matches any non-empty string, excluding the path separator(‘/’).
- slug – Matches any slug string, i.e. a string consisting of alphabets, digits, hyphen and under score.
- path – Matches any non-empty string including the path separator(‘/’)
- uuid – Matches a UUID(universal unique identifier).
