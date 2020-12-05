# bp-exercise

requirements: 
* node version 14 or greater

dependencies: 
* express
* mnemonist
* test: jest

dev-dependencies:
* nodemon
* jest
* @babel/preset-env

running on develop: on terminal run

```
npm run dev
```
running without nodemon

```
npm run start
```

tests
```
npm run test
```

apis:
* get eventsCount: http://localhost:8081/eventsCount
* get wordsCount: http://localhost:8081/wordsCount
* get last60Sec: http://localhost:8081/last60Sec
