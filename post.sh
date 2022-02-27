#!/bin/bash

rm -rf posts/*
rsync -a --exclude 'Notes' blog/ tmp/
cp -r tmp/**/*.md posts/
rm -rf tmp/

# rm public/images/*
cp blog/images/* public/images/

git add .
git commit -m "blog post"
git push
