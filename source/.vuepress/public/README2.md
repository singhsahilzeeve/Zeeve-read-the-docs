# Zeeve Documentation

`Read the docs` build for Zeeve. Creating HTML pages for the Zeeve application explaining Zeeve usability and technical details. 


## Creating build

Pre-requistes Python 3.7 & pip.

Installing virtualenv:-

```
$ pip install virtualenv
$ virtualenv -p /usr/bin/python3.7 venv
$ source venv/bin/activate
```

Making sure that pyhton's virtual environement is being used,

Install all build dependencies:-

```
$ pip install -r requirements.txt
```

To create build, simply go onto root directory of project,

```
$ make html
```

This will create all HTML files under build directory, starting with index page. 



