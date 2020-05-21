# Python Flask API with client Javascript React

The code in this repository is base on the
[Flask Movie API Example](https://www.youtube.com/watch?v=Urx8Kj00zsI)
video for the server and the
[How to Call a Flask API in React](https://www.youtube.com/watch?v=06pWsB_hoD4)
video for the client.

## Setup Python Flask

The instruction below are for when openCV is installed in outside of the
virtual environment.
If openCV is going to be used in the virtual environment then:

- Don't use the `--system-site-package` option
- Use `requirements.txt` ins

```bash
# clone or get repo
# cd to ./server/python-flask-api
python3 -m venv venv --system-site-packages # or with the --system-site-package
source venv/bin/activate
pip install -r requirements-local.txt # created via - pip freeze > requirements.txt
source setup.sh
flask run
```

### DB Setup

Start `python` then

```python
from api.models import Movie
from api import db, create_app

db.create_all(app=create_app())
```
