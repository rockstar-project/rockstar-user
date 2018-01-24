## S3 Deployment Steps

ng build --environment staging

cd dist

aws s3 sync . s3://rockstar-staging --delete