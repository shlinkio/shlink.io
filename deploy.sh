#!/usr/bin/env bash
######################
## LOCAL OPERATIONS ##
######################

deploycontent=$(readlink -f '../shlink.io_website_deploy')
projectdir=$(pwd)

# Copy everything to parent directory
rm -rf "$deploycontent"
cp -R . "$deploycontent"
cd "$deploycontent"

# Install dependencies
rm -rf vendor
rm -rf composer.lock
composer self-update
composer install --no-dev --optimize-autoloader --prefer-dist --no-interaction

# Run Grunt tasks
# rm -rf node_modules
# npm install
# grunt

# Remove everything that shouldn't be deployed
rm -rf node_modules
rm -rf .git*
rm -rf .idea
rm -rf composer.*
rm -rf package.json
rm -rf README.md
rm -rf LICENSE
rm -rf Gruntfile.js
rm -rf config/autoload/*.local.php
rm -rf config/autoload/*.local.php.dist
rm -rf build
rm -rf phpunit.xml.dist
rm -rf phpcs.xml


#######################
## REMOTE OPERATIONS ##
#######################

# Deploy application
remotepath='/home/alejandro/apps/shlink.io/website'
temp="$remotepath-temp"
now=`date +'%Y-%m-%d_%T'`
ssh root@shlink.io "mkdir $temp"
rsync -avz --no-owner --no-group ./ root@shlink.io:${temp}
ssh root@shlink.io "mv $remotepath $remotepath-$now"
ssh root@shlink.io "mv $temp $remotepath"

# Set write access
ssh root@shlink.io "chown www-data:www-data $remotepath/data/cache"

# Delete deploy artifacts
ssh root@shlink.io "rm $remotepath/data/cache/.gitignore"
ssh root@shlink.io "rm $remotepath/deploy.sh"
