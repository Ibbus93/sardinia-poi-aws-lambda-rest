# Sardinia Point of Interests - A POC using AWS Lambda, Serverless framework and Node.JS

## What is this project
This project is a Proof of Concept about using the Amazon Web Services, mainly focusued on serverless, hence AWS Lambda Functions.  
The idea of the project was to find a dataset served with open data and try to build a simple project where:
- The dataset is uploaded into a AWS Database, in this case DynamoDB;
- Various AWS Lambda offers the opportunity to perfrom CRUD actions (this project)
- A frontend performs the actions offered by the Lambda ecosystem and that makes available these actions to the final users.

The dataset used has been downloaded from [Regione Sardegna Open Data](http://dati.regione.sardegna.it/dataset/punti-di-interesse) in October, 2021.

## The architecture

![image](https://user-images.githubusercontent.com/6943388/183447484-e5a1af17-cf74-4e30-a365-11c0085e4a99.png)
