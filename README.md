# Sardinia Points of Interest - A PoC using AWS Lambda, Serverless framework and Node.JS

## What is this project
This project is a Proof of Concept about using the Amazon Web Services, mainly focusued on serverless, hence AWS Lambda Functions.  
The idea of the project was to find a dataset served with open data and try to build a simple project where:
- The dataset is uploaded into a AWS Database, in this case DynamoDB;
- Various AWS Lambda offers the opportunity to perfrom CRUD actions (this project)
- A frontend performs the actions offered by the Lambda ecosystem and that makes available these actions to the final users.

The dataset used has been downloaded from [Regione Sardegna Open Data](http://dati.regione.sardegna.it/dataset/punti-di-interesse) in October, 2021.

## Architecture
In the image below it can be seen the architecture of this simple PoC. In details:
- The dataset is loaded into DynamoDB
- Various AWS Lambdas implements the CRUD operations using the data in the DB
- The AWS Lambdas are exposed using an API Gateway
- Finally, a Frontend Webapp uses the data across REST requests performed throught the API Gateway.

![image](https://user-images.githubusercontent.com/6943388/183447484-e5a1af17-cf74-4e30-a365-11c0085e4a99.png)

## Lambda available
This project implements 6 different Lambda functions:
1. **GetAll - `GET /points`**: it performs a scan in DynamoDB and returns every record from the DB;
2. **GetOne - `GET /points/:id`**: given in input an ID, it returns a single record
3. **Create - `POST /points`**: it creates a new record in the DB;
4. **Update - `PUT /points/:id`**: given an ID and a body, it updates a record in the DB;
5. **Delete - `DELETE /points/:id`**: given an ID, it removes a record from the DB
6. **Init - `POST /points/init`**: this function is commented in the `serverless.yml` file and it is used for populate the DB. It is recommended to limit the init records in the functions (with a `dataset.slice(0, 100)` for example) in order to avoid requests in timeout.

## How to run

Before everything, serverless framework is required:
```
npm install -g serverless
```

After the installation, it is required to login with a AWS Account in the shell. Follow the [serverless guide](https://www.serverless.com/framework/docs/providers/aws/guide/credentials#using-aws-access-keys) for more informations.
After having performed the login, you just have to execute these commands:

```
# Install project dependencies
npm i

# Run the lambdas in local
serverless offline start -s dev
```

