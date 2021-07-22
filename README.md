# web-app

## Django Project commands
- First, start your virtual env
Setups to setup virtual env  

**Windows/CMD(Command Prompt)**
```
cd "<project directory>"

py -3.7 -m venv backendEnv

backendEnv\Scripts\activate

pip install wheel

pip install -r requirements.txt
```

**MacOS/Bash Command**
```
cd <project directory>

py -3.7 -m venv backendEnv

source ./backendEnv/Scripts/activate

pip install wheel

pip install -r requirements.txt
```
- CD into /backend
```
Start Django server:      python manage.py runserver
Make migrations:          python manage.py makemigrations
Migrate:                  python manage.py migrate
```

## Vue Project commands
```
Install dependencies:     npm install
Run development server:   npm run serve
Production build:         npm run build
Run unit tests:           npm run test:unit
Run end-to-end tests:     npm run test:e2e
Run linter:               npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
