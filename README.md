# bp-exercise

Requirements: 
* node version 14 or greater

Dependencies: 
* express
* mnemonist
* test: jest

Dev-dependencies:
* nodemon
* jest
* @babel/preset-env

Running on develop: 

```
npm run dev
```
Running without nodemon

```
npm run start
```

Tests
```
npm run test
```
Home Page: http://localhost:8081

apis:
* get eventsCount: http://localhost:8081/events-count
* get wordsCount: http://localhost:8081/words-count
* get last60Sec: http://localhost:8081/last-60-sec
