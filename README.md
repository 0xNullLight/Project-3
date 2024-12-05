# Bootcamp Quiz

A quiz for bootcamp students to help practice understanding terminology and questions you will be asked in the job interview. 
This is a simple beginner application that anyone with almost no coding experiance should be able to pull together.

## Features
- Help JR devolpers study for that job interview
- Brush up on terminology or languages
- User Authentication
- Secure login/signup with email
- Multiple-choice questions
- True/false questions
- Fill-in-the-blank

With endless possibilities of continuation with the application including the following ideas:

Core Features: 
- Secure login/signup with email or social media accounts.
- User Authentication with Profile
- Profiles that track quiz history, scores, and progress.
- Customizable Quiz Options
- Select difficulty levels (e.g., Beginner, Intermediate, Advanced).
- Choose topics or categories to focus on specific areas of interest.
- Question Formats
- Multiple-choice questions.
- True/false questions.
- Fill-in-the-blank.
- Code challenges (for coding bootcamps).
- Drag-and-drop matching exercises.
- Timed and Untimed Modes
- Timed quizzes to simulate test conditions.
- Untimed practice for relaxed learning.
- Progress Tracking
- Dashboard with a summary of completed quizzes, scores, and areas for improvement.
- Detailed reports on performance metrics (e.g., time per question, accuracy by topic).
- Engagement Features
- Gamification Elements
- Badges and achievements for milestones (e.g., "First 10 Quizzes Completed").
- Leaderboards to encourage competition among users.
- Feedback and Explanations
- Instant feedback on answers.
- Detailed explanations for correct/incorrect answers.
- Resources for further study linked to specific questions.
- Adaptive Quizzing
- Adjust difficulty dynamically based on user performance.
- Recommend new quizzes based on weak areas.
- Community Features
- Discussion boards or forums for quiz-related questions.
- Peer challenges to compete with friends or classmates.

Advanced Features:

- Personalized Learning Paths
- Suggest quizzes based on the user’s performance history.
- Pre-built modules to prepare for specific tests or certifications.
- Offline Access
- Download quizzes for offline use.
- Sync scores once back online.
- Real-Time Analytics for Educators
- For bootcamps with instructors, provide a dashboard to monitor student progress.
- Identify trends and areas where students struggle.
- Interactive Learning
- Include hints or clues for challenging questions.
- Incorporate video explanations for complex topics.
- Mock Exams and Certifications
- Full-length mock tests with a grading system.
- Printable or digital certificates upon completing certain milestones.

Admin Features:

- Question Bank Management
- Add, edit, or delete quiz questions.
- Categorize and tag questions for easy retrieval.
- Custom Quiz Creation
- Allow instructors or users to create and share custom quizzes.
- Randomize question order for each attempt.
- Performance Insights
- Analytics to track user engagement, completion rates, and average scores.


## User Story

As a user, I want to be able to pull up a quiz and have it ask me questions I should know for that job interview, 
or allow me to brush up on terminology or language or maybe even OOP in a fun learning application
  


## Table of Contents
 - [Project Name](https://github.com/0xNullLight/Project-3/blob/main/README.md#bootcamp-quiz)
 - [Features](https://github.com/0xNullLight/Project-3/blob/main/README.md#bootcamp-quiz)
 - [User Story](https://github.com/0xNullLight/Project-3/blob/main/README.md#bootcamp-quiz)
 - [Project Setup]()
 - [Project Description]()
 - [Project Requirements](https://github.com/0xNullLight/Project-3?tab=readme-ov-file#project-requirements)
 - [Required Modules]()
 - [Installation]()
 - [Usage]()
 - [Testing]()
 - [Contributors](https://github.com/0xNullLight/Project-3?tab=readme-ov-file#contributors)
 - [Questions]()

## Project Description
- a simple application that quizzes the user
- log in page with email 
- Quiz page
- Front End React
- Back End Python

## Project Requirements

- Must use React for Front end
- Python as your back-end language
- Must use queries and mutations for retrieving, adding, updating, & deleting data
- Must be interactive (i.e., accept and respond to user input)
- Must have a polished UI
- Must use at least one GitHub Action in the project repository
- Must include authentication using JWT
- Must protect API keys and sensitive information with environment variables
- Must be deployed using Render (with data)

CSS STYLING (Optional) 

Instead of using a CSS library like Bootstrap, consider one of the following suggestions:
- Try using a component library, such as Semantic UI, Chakra UI, or Ant Design.
- Create all the CSS for your application just using CSS.
- Regardless of which of these options you choose—it must look professional and be mobile-friendly.

PRESENTATION REQUIREMENTS 

Your formal, 10-minute presentation must include the following: 
- Your Applications overall concept
- The motivation of your applications development
- Your Design Process
- Technologies used (and a brief description of how they work)
- A demonstartion of the appplications functionality
- Directions for future development
- Sometimes, talking intelligently about tech > doing tech.


### Schematics

Building a quiz app with React, Django, and Python involves several steps. Here's a schematic to get you started:

Backend (Django):
- Set up Django project:
- Create a new Django project.
- Create a Django app for your quiz functionality.

Models:
Define models for:
- Quiz (title, description, etc.)
- Question (question text, quiz it belongs to)
- Answer (answer text, whether it's correct, question it belongs to)
- API endpoints (Django Rest Framework):
- Create API endpoints for:
- Retrieving quizzes
- Retrieving questions for a specific quiz
- Submitting user answers
- Calculating and returning scores

Frontend (React):
- Set up React project:
- Create a new React app.

Components:
Create components for:
- Quiz list
- Quiz taking interface (displaying questions and answer choices)
- Result display

API integration:
- Use fetch or a library like axios to make requests to the Django API endpoints.

State management:
Use React's built-in state management or a library like Redux to manage:
- Selected quiz
- Current question
- User answers
- Score

Integration:
Serve React app from Django:
- Configure Django to serve your built React app (usually in the static folder).
- CORS configuration:
- Set up Cross-Origin Resource Sharing (CORS) in Django to allow your React app to make requests to the API.

Schematic:
Code

#### Django (Backend)
├── models.py (Quiz, Question, Answer)
├── serializers.py 
├── views.py (API endpoints)
├── urls.py


#### React (Frontend)
├── components/
│   ├── QuizList.js
│   ├── Quiz.js
│   ├── Question.js
│   └── Results.js
├── App.js 

Workflow:
- User selects a quiz from the list (React).
- React app fetches quiz questions from Django API.
- User answers questions (React).
- React app submits answers to Django API.
- Django API calculates score and returns results.
- React app displays results.

## Project Setup

### Outline

Building a quiz app with React, Django, and Python to learn full-stack development. Here's a high-level overview of the steps involved:

1. Backend (Django):
Set up Django: Create a new Django project and app.
Create Models: Define models for Quizzes, Questions, Answers, and potentially User responses.
Create API Endpoints: Use Django REST Framework (DRF) or a similar library to create API endpoints for:
Fetching quizzes and their questions
Submitting user responses
Calculating scores
Retrieving results

2. Frontend (React):
- Set up React: Create a new React project using Create React App or a similar tool.

- Design Components: Create components for:
Quiz display
Question display
Answer options
Progress bar(if applicable)
Timer (if applicable)
Results display(if applicable)

- Fetch Data: Use fetch or a library like axios to fetch quiz data from the Django API.

- Handle User Input: Manage user responses, track progress, and handle timer logic (if applicable).

- Submit Responses: Send user responses to the Django API for scoring and storage.

- Display Results: Fetch and display quiz results from the Django API.

3. Integration:
Configure CORS:
- Ensure your Django backend allows requests from your React frontend (likely running on different ports during development).

Deploy:
- Deploy both your Django backend and React frontend to appropriate hosting services.

Here's a more detailed breakdown of the steps:

### Backend Details

The backend language will be created using Python and Django.

#### Backend (Django):
Python

# models.py
from django.db import models

class Quiz(models.Model):
    title = models.CharField(max_length=200)

class Question(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    text = models.TextField()

class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    text = models.CharField(max_length=200)
    is_correct = models.BooleanField(default=False)

### Frontend Details

The front end will provide the user interface for quiz questions and answers and be created by using React.

#### Frontend (React):
JavaScript

// Quiz.js
import React, { useState, useEffect } from 'react';

function Quiz() {
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    fetch('/api/quizzes/1/') // Fetch quiz data
      .then(response => response.json())
      .then(data => setQuiz(data));
  }, []);

  return (
    // Render quiz component based on fetched data
  );
}

#### Important Considerations for future development:

Authentication: Implement user authentication if you want to track user-specific data.

Error Handling: Handle errors gracefully on both the frontend and backend.

Testing: Write tests to ensure the functionality of your app.

Scalability: Consider how your app will handle large amounts of data and traffic.



### Required Modules and languages

- Python
- React
- Django
- CSS
- Javascript



## Installation

1. Clone the repository:  
   `git clone https://github.com/0xNullLight/Project-3
2. Install dependencies:  
   ``
3. Set up the database using the provided schema.
4. Run the application:  
   ``

  

## Video Demonstration

_A video demonstration link will be added here once the project is fully implemented._

## Usage

After installation, launch the app and take the quiz.

How to launch the application:
* 
* 
* 

## Testing

Testing functionality is not currently implemented. Future updates will include testing configurations.

## Contributors

Bee Vang

Amanda Forrester

Brandi Rasmussen

Claree Ratliff



### Resources

- [Django Project Complete Step by Step](https://www.youtube.com/watch?v=s0aCEXg3ct4)
- [Quiz App using Django](https://www.geeksforgeeks.org/quiz-application-using-django/)
- [DJango and React How to build a Quiz App for Beginners](https://www.youtube.com/watch?v=-nd6JFw52j0)
- [How to Create a Quiz App in Django with Javascript](https://www.youtube.com/watch?v=vXXfXRf2S4M)
- [Quiz Application using Django](https://www.geeksforgeeks.org/quiz-application-using-django/)
- [How to Create a Quiz Web Application with Python Django](https://data-flair.training/blogs/create-quiz-application-python-django/)
- [Python Django Projects with Source Code (Beginners to Advanced)](https://www.geeksforgeeks.org/django-projects/)
- [Django Quiz App Code](https://github.com/pamelafox/django-quiz-app)
- [Python Django 7 hour course](https://youtu.be/PtQiiknWUcI)
- [Mongo and Crud Relationships](https://www.youtube.com/watch?v=UpsZDGutpZc)
- [React Quiz App Code](https://github.com/CodeWithClinton/react_quiz_app)
- [Django Documentation Organization](https://docs.djangoproject.com/en/5.0/)
