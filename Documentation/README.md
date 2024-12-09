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

Explanation:
1. Import:
We import the render function from django.shortcuts.
2. View Function:
We define a view function called my_view that takes a request object as its argument.
3. Context:
We create a dictionary called context to hold the data that we want to pass to the template. In this example, we're passing a name and an age.
4. Render:
We use the render function to render the template my_template.html with the given context. This function returns an HttpResponse object containing the rendered HTML.
Template Example (my_template.html):
Code

<!DOCTYPE html>
<html>
<head>
    <title>My Template</title>
</head>
<body>
    <h1>Hello, {{ name }}!</h1>
    <p>You are {{ age }} years old.</p>
</body>
</html>
Key Points:
Template Location:
Make sure your template file (my_template.html) is located in a directory that is configured in your Django project's TEMPLATES settings.
Context Data:
You can pass any type of data in the context dictionary, including lists, dictionaries, and objects.
Template Language:
Django's template language allows you to use variables, tags, and filters to dynamically generate HTML content.