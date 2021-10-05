# Portfolio-Django
## The best option for create your portfolio

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

The best option for portfolio creation and management. It contains the following links:
- About
- Resume 
- Blog
- Contact 


## Features

- Register your information in about page
- Add yours social networks
- Create un mini blog
- Contact form functional with recaptcha V3
- Add your CV

Portfolio-Django is an application for managing your resume, blog 
and you can also talk about your skills.


## Tech

Portfolio-Django uses a number of open source apps and porjects to work properly:

- [Django] - Develop your apps!
- [SQLITE] - awesome database manager.
- [Python] - One of the best programming languages.
- [Pip] - For managing the pakages


## Requeriments 

Portfolio-Django has some requirements to get started, 
the following packages are required:

| Package | README |
| ------ | ------ |
| Recaptcha | [https://github.com/google/recaptcha/blob/master/README.md] |
| Pillow | [https://github.com/python-pillow/Pillow/blob/master/README.md] |
| Django | [https://github.com/django/django#django] |


## Requeriments Installation

It is recommended that you use a virtual environment, 
you can learn how to install and activate it at this [link](https://docs.python.org/es/3/tutorial/venv.html).

Activate the virtual environment:

```sh
source ./path-venv/activate
```

Install dependencies.

```sh
cd portfolio
pip install -r requeriments.txt
```

## Development

Very well!
Now to start the project, you need to create migrations and start the server. 

Remember change **path-project** for your local path.

Open your favorite Terminal and run these commands.


```sh
cd /path-project/portfolio/
python manage.py makemigrations
python manage.py migrate
```

Start the server:

```sh
python manage.py runserver
```

(optional) If you want to start the server with another port, 
run the following command:

```sh
python manage.py runserver 9000
```

You can change '9000' as you prefer.

**Free for all.**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [Django]: <https://www.djangoproject.com/>
   [SQLITE]: <https://www.sqlite.org/index.html>
   [Python]: <https://www.python.org/>
   [Pip]: <https://pypi.org/project/pip/>
   [https://github.com/google/recaptcha/blob/master/README.md]: <https://github.com/google/recaptcha/blob/master/README.md>
   [https://github.com/python-pillow/Pillow/blob/master/README.md]: <https://github.com/python-pillow/Pillow/blob/master/README.md>
   [https://github.com/django/django#django]: <https://github.com/django/django#django>
   
   
   
