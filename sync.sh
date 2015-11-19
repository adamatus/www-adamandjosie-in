#!/usr/bin/env sh
aws s3 sync ./build s3://www.adamandjosie.in/love/ --delete
#aws s3 cp index.html s3://www.adamandjosie.in/
