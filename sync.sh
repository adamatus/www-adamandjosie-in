#!/usr/bin/env sh
aws s3 sync ./build s3://adamandjosie-in/love --delete
