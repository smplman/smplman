#!/usr/bin/env bash

git fetch --all
git checkout --force "origin/master"

docker-compose build smplman-node
docker-compose restart smplman-node