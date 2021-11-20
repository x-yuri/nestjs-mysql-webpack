```
$ docker-compose up -d
$ docker-compose exec app npm i
$ docker-compose exec app ./node_modules/.bin/nest build --webpack
$ docker-compose exec app node dist/main.js
$ curl -sS localhost:3000/users
[]
$ curl -sS localhost:3000/users -d ''
{"isActive":true,"id":1,"updatedAt":"2021-11-20T00:55:44.190Z","createdAt":"2021-11-20T00:55:44.190Z"}
$ curl -sS localhost:3000/users
[{"id":1,"firstName":null,"lastName":null,"isActive":true,"createdAt":"2021-11-20T00:55:44.000Z","updatedAt":"2021-11-20T00:55:44.000Z"}]
```
