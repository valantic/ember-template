#!/bin/sh
# Inspired by: https://medium.com/developers-writing/generating-static-websites-with-ember-cli-and-fastboot-88f0d2db13cb#.462fju17z
# Note: make sure to have the Ember Fastboot server running!
#     $ember fastboot --environment=production --serve-assets

# Set configuration options for Ember Fastboot and Ember
base_url="http://localhost:3000/"
app_name="app"
output_dir="static-dist"
dist_dir="../dist"
delivery_dir="deliver"
# Routes to scrape
# The first "" is the index page
declare -a routes=("" "readme" "views" "views/product-page" "views/order-list")

# Scrape output will be stored here
rm -rf ./$output_dir
mkdir $output_dir
cd $output_dir

# Copying the assets previously generated by ember-fastboot
cp -R $dist_dir/assets ./assets
#cp -R $dist_dir/images ./images

# Scrape function which uses wget to go through the routes defined below
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

# Creates zip files based upon Git commit and current date and timestamp
zipIt(){
  # Get only the current directory name, not the full path
  current_dir=$(basename "$PWD")
  current_time=$(date +"%Y%m%d-%H%M%S")
  # Get the hash key for the current commit
  current_commit=$(git rev-parse --short HEAD)
  # Pass arguments to local vars
  delivery_dir=$1
  output_dir=$2
  excludes="*DS_Store"

  # Check if the delivery_dir exist, if not create it
  if [ ! -d "$delivery_dir" ]; then
    mkdir $delivery_dir
  fi

  # Excluding OSX files
  zip -r $delivery_dir/$current_dir-$current_commit-$current_time.zip ./$output_dir -x $excludes
}

# Scrape the routes
for i in "${routes[@]}"
do
  scrape "$i"
done

# Zip it
cd ../
zipIt $delivery_dir $output_dir
