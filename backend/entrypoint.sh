#!/usr/bin/env sh
python manage.py makemigrations
python manage.py migrate
# python manage.py compilemessages
python manage.py collectstatic --noinput

exec "$@"
# python manage.py runserver