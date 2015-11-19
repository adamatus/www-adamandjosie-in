#!/usr/bin/env sh
aws s3 sync ./build s3://riggall-info --delete
