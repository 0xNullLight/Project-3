#this is the main configuration file for the application

from django.apps import AppConfig

# TO DO: Must create a Class that inherits from the Config class
# # This class will hold the configuration for the application
class Project3QuizConfig(AppConfig):
    name = 'Project3Quiz'
    default_auto_field = 'django.db.models.BigAutoField'



#In summary this code defines the configuration for the quiz application, specifying that
# the default type of auto field to use is the BigAutoField and that they are setting name of 
# the app to quizapp.  This configuration class is used by Django to set up the app correctly