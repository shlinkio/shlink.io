# shlink.io

[![Build Status](https://img.shields.io/travis/shlinkio/shlink.io.svg?style=flat-square)](https://travis-ci.org/shlinkio/shlink.io)
[![Docker build status](https://img.shields.io/docker/cloud/build/shlinkio/shlink-website.svg?style=flat-square)](https://hub.docker.com/r/shlinkio/shlink-website/)
[![GitHub tag](https://img.shields.io/github/tag/shlinkio/shlink.io.svg?style=flat-square)](https://github.com/shlinkio/shlink.io/releases/latest)
[![GitHub license](https://img.shields.io/github/license/shlinkio/shlink.io.svg?style=flat-square)](https://github.com/shlinkio/shlink.io/blob/master/LICENSE)
[![Paypal Donate](https://img.shields.io/badge/Donate-paypal-blue.svg?style=flat-square&logo=paypal&colorA=cccccc)](https://acel.me/donate)

This is [shlink](https://shlink.io)'s project website. A statically build website created with [next.js](https://nextjs.org/).

## Run it locally

In order to run this project locally, follow these steps:

* Clone the repo: `git clone https://github.com/shlink/sjlink.io`.
* With docker-compose:
    * Copy `docker-compose.override.yml.dist` to `docker-compose.override.yml`.
    * Run project: `docker-compose up`.
* Without docker-compose:
    * Install dependencies: `npm install`.
    * Run project: `npm run dev`.
* Open app [localhost:3000](http://localhost:3000).

Now you can work locally on any change in case you want to provide some improvement.

## Build production site

The project can be exported to a static site fully optimized for production.

Run `npm run export` and you will get an `out` directory with the static files.

Now you can serve it with the web server of your choice.

## Build docker image

As an alternative to building the static site locally, you can also build a docker image which will in turn use the static site internally and serve it using nginx.

Run `docker build . -t shlink-website` (or the name you want to give it) to get the docker image built.

You can also get the image from [Docker hub](https://hub.docker.com/r/shlinkio/shlink-website). It is automatically built there every time the code changes or a new version is tagged.
