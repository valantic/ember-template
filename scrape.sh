#!/bin/sh
# Source: https://medium.com/developers-writing/generating-static-websites-with-ember-cli-and-fastboot-88f0d2db13cb#.462fju17z
rm -rf ./scrape-dist
mkdir scrape-dist
cd scrape-dist
cp -R ../fastboot-dist/assets ./assets
cp -R ../fastboot-dist/images ./images
base_url="http://localhost:3000/"
app_name="app"
scrape(){
  if test -n "$1"; then
  mkdir $1
  fi
  url=$base_url$1
  wget $url -O ./$1/index.html
  grep -v "assets/vendor" ./$1/index.html > ./$1/temp_index.html
  mv ./$1/temp_index.html ./$1/index.html

  echo ./$1/index.html

  grep -v "assets/$app_name" ./$1/index.html > ./$1/temp_index.html
  mv ./$1/temp_index.html ./$1/index.html
}
# List of pages needs to be manually maintained for now
scrape ""
scrape "readme"
scrape "views"
scrape "views/product-page"
scrape "views/order-list"
