==================================================================================================================
==================================================================================================================

# Django

==================================================================================================================

### Python queries in Django

[Django queries](https://docs.djangoproject.com/en/5.1/topics/db/queries/)

### Serializers & DJango Rest Framework


Serializers allow complex data such as querysets and model instances to be converted to native Python datatypes that can then be easily rendered into JSON, XML or other content types. Serializers also provide deserialization, allowing parsed data to be converted back into complex types, after first validating the incoming data.

The serializers in REST framework work very similarly to Django's Form and ModelForm classes. We provide a Serializer class which gives you a powerful, generic way to control the output of your responses, as well as a ModelSerializer class which provides a useful shortcut for creating serializers that deal with model instances and querysets.

[Django Rest Framework Serializers](https://www.django-rest-framework.org/api-guide/serializers/)

### DJANGO URL Patterns/Python

In Django, views are Python functions which take a URL request as parameter and return an HTTP response or throw an exception like 404. Each view needs to be mapped to a corresponding URL pattern. This is done via a Python module called URLConf(URL configuration)

Let the project name be myProject. The Python module to be used as URLConf is the value of ROOT_URLCONF in myProject/settings.py. By default this is set to 'myProject.urls'. Every URLConf module must contain a variable urlpatterns which is a set of URL patterns to be matched against the requested URL. These patterns will be checked in sequence, until the first match is found. Then the view corresponding to the first match is invoked. If no URL pattern matches, Django invokes an appropriate error handling view.

Including other URLConf modules
It is a good practice to have a URLConf module for every app in Django. This module needs to be included in the root URLConf module as follows:

[Django URL Patterns in Python](https://www.geeksforgeeks.org/django-url-patterns-python/)


### DJANGO REST FRAMEWORK

[Django Rest Framework](https://www.geeksforgeeks.org/django-rest-framework-installation/)

[Django Rest Framework](https://www.django-rest-framework.org/tutorial/quickstart/)

[Basic API with Rest and Django](https://www.geeksforgeeks.org/how-to-create-a-basic-api-using-django-rest-framework/)

[Python Django REST API In 30 Minutes - Django Tutorial](https://www.youtube.com/watch?v=NoLF7Dlu5mc)

### Render to Django


[How to deploy Django on Render](https://www.youtube.com/watch?v=FJBTwa0R_5g)




====================================================================================================================================================================================================================================

# Python Documentation

==================================================================================================================

[IMPORTANT INFORMATION FOR : Python 3.13 or newer for Mac users](https://docs.brew.sh/Homebrew-and-Python)

## The Python Tutorial
[The Python Tutorial](https://docs.python.org/3/tutorial/index.html)

### Creating a Virtual Environment

[Creating a virtual Environment](https://docs.python.org/3/library/venv.html)


### Basic Query for Python Code
[Query in Python](https://codeql.github.com/docs/codeql-language-guides/basic-query-for-python-code/)

### __pycache__ 

Are folders that are created because When you develop a self-contained Python script, you might not notice anything unusual about your directory structure. However, as soon as your project becomes more complex, you’ll often decide to extract parts of the functionality into additional modules or packages. That’s when you may start to see a __pycache__ folder appearing out of nowhere next to your source files in seemingly random places:

Even though Python is an interpreted programming language, its interpreter doesn’t operate directly on your Python code, which would be very slow. Instead, when you run a Python script or import a Python module, the interpreter compiles your high-level Python source code into bytecode, which is an intermediate binary representation of the code.

This bytecode enables the interpreter to skip recurring steps, such as lexing and parsing the code into an abstract syntax tree and validating its correctness every time you run the same program. As long as the underlying source code hasn’t changed, Python can reuse the intermediate representation, which is immediately ready for execution. This saves time, speeding up your script’s startup time.

Remember that while loading the compiled bytecode from __pycache__ makes Python modules import faster, it doesn’t affect their execution speed!

### URLS in Python

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




====================================================================================================================================================================================================================================

# REACT & VITE

==================================================================================================================

[how to set up react & vite](https://dev.to/mcbarna/setup-react-with-vite-on-vscode-a-step-by-step-tutorial-591g)

### Creating the React Vite project

1. We use npm to install all the packages on our local machine. To create our React Vite project using npm , we use the following command:

`npm create vite@latest`

### Choosing the framework and variant

2. We have to choose our preferred framework and variant we want to work on.

In our case, we choose the framework and variant as:

 `React and Typescript respectively.`

### Navigating to the app directory
3. After running the creation command, we navigate to our newly created Vite project's directory using the following command:

`cd vite-project`

### Installing all required packages
4. Now we install all the packages mentioned in our package.json using the following command:

`npm install`



### Starting the project
5. Once we follow all the necessary steps mentioned above, we run our React Vite project using the following command:

`npm run dev`

### Coding example
6. Now let's execute what we have learned so far. The following commands will help us create our React Vite project with npm.

1. `npm create vite@latest`

2. `cd vite-project`

3. `npm install`

4. `npm run dev`





==================================================================================================================
==================================================================================================================

# BASIC GITHUB PROCESS

==================================================================================================================

Code:

1. `git status`

   This makes sure your local branch is the same as main.

2. `git pull`
   
   Pulls the main branch to your local and makes sure you are in same instance.

3.  `git add .`

   This adds all code from every file you worked on to your github main branch.

4. `git commit -m "your message here" `

   This commits to github with the message of the update.

5. `git push`

   This pushes your latest code on local branch to github.

6. `git pull`
7. `git status`



============================================================================================================================
============================================================================================================================

# Render

============================================================================================================================

### Configure page for Render 

When deploying a Django project on Render, you don't directly upload your database. Instead, you create a new database instance on Render and connect your Django application to it. Here's how:
Steps:

1. Create a PostgreSQL database on Render:
Go to your Render dashboard and create a new PostgreSQL instance.
Copy the internal database URL provided by Render.
Connect your Django project to the database:
In your Django project's settings.py file, import dj_database_url:
Python


     `import dj_database_url`
   
Configure the database settings using the URL from Render:
Python


     DATABASES = {
         'default': dj_database_url.config(default='DATABASE_URL_FROM_RENDER')
     }
     
2. Replace DATABASE_URL_FROM_RENDER with the actual URL you copied from Render.
   
Migrate your database:
Run the following command to create the necessary tables in your Render database:
Code

     `python manage.py migrate`
     
3. Deploy your Django project on Render:
Create a new Web Service on Render and connect it to your Django project's repository.
Set the DATABASE_URL environment variable to the Render database URL you copied earlier.

Key points:
Render provides a managed PostgreSQL database service, which is the recommended option for Django applications.
If you have an existing database, you can migrate the data to your new Render database using tools like pg_dump and pg_restore.
Make sure your Django project is configured to use the Render database in production.
Use environment variables to store sensitive information like database credentials.

===============================================================================================================================================================================================================================================================================================================

### migrate to Render without paying

To migrate a database to Render without paying, you can leverage their free tier by creating a new PostgreSQL database on Render and then manually exporting your existing database data from your current provider and importing it into the newly created Render database, taking advantage of the free trial period for any additional features you might need during the migration process. 

Key steps:

Sign up for Render:

1. Create a free account on Render. 

2. Create a free PostgreSQL database:

3. Go to the Render dashboard and select "New". 

4. Choose "PostgreSQL" as the service type. 

5. Choose the "Free" tier option.

6. Follow the on-screen instructions to create the database. 

7. Export data from your current database:

8. Access your current database provider's management console. 

9. Use the database export functionality to create a backup file (usually in SQL format). 

10. Import data into the Render database:

11. Connect to your new Render PostgreSQL database using a database client (like pgAdmin). 

12. Execute the SQL commands from your exported backup file to populate the Render database. 

13. Test and verify the migration:

14. Ensure your Django application can connect to the Render database.

<em> Important points to consider:
Data size limitations:
Free tiers on Render may have limitations on database storage, so ensure your exported data fits within the allowed size. 
Migration complexity:
If your current database is large or has complex schema, the migration process might be more involved and could require additional steps like data transformation. 
Alternative approaches (with potential costs):
Use Render's free trial:
If your migration requires more advanced features, consider using Render's free trial period to test the migration process before committing to a paid plan. 
Database migration tools:
Some third-party database migration tools can simplify the process, but they might have their own pricing structure. <em>