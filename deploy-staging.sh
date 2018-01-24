#!/bin/sh

ng build --environment staging
aws s3 sync dist s3://rockstar-staging --delete
