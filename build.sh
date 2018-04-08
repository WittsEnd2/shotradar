#!/bin/bash
git add .
git commit -m "fix location"
git push heroku master
heroku open
