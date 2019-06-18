
## A spring webapp with a couple pages that generate random data
This application uses Spring REST controllers to deliver content to a
React frontend. There are 3 pages that each generate random data:
1. /api/random/emails : _Generates random emails (using javafaker)._
	* **Required URL parameters**: count _int_, domain _String_
2. /api/random/ints : _Generates random ints_
	* **Required URL parameters**: count _int_
3. /api/random/doubles : _Generates random doubles_
	* **Required URL parameters**: count _int_

## Build
To build this application:

`mvn package`

## Deployment
To deploy this application:

Backend:

`mvn spring-boot:run`

or

`java -jar spring-webapp-sample.jar`

Frontend:

```bash
cd app
npm start
```
