## 起動

```bash
$ docker-compose up -d
$ docker-compose exec api npm run start:dev --prefix ./nest-project-day1
```

http://localhost:3000/tasks/
に接続するとDBのデータがあれば `[{"id":1,"title":"Test","description":"testDesc","status":"OPEN"}]` のようなデータが見れる


以下のAPIがある。

```bash
// get (登録なし)
$ curl -X GET http://localhost:3000/tasks
[]
// create (1)
$ curl -X POST http://localhost:3000/tasks -d 'title=Test' -d 'description=testDesc'
{"title":"Test","description":"testDesc","status":"OPEN","id":1}
// get (登録あり)
$ curl -X GET http://localhost:3000/tasks
[{"id":1,"title":"Test","description":"testDesc","status":"OPEN"}]
// create (2)
$ curl -X POST http://localhost:3000/tasks -d 'title=Nest' -d 'description=nestjs'
{"title":"Nest","description":"nestjs","status":"OPEN","id":2}
// get (id指定)
$ curl -X GET http://localhost:3000/tasks/2
{"id":2,"title":"Nest","description":"nestjs","status":"OPEN"}
// get (複数登録あり)
$ curl -X GET http://localhost:3000/tasks
[{"id":1,"title":"Test","description":"testDesc","status":"OPEN"},{"id":2,"title":"Nest","description":"nestjs","status":"OPEN"}]
// update
$ curl -X PATCH http://localhost:3000/tasks/2 -d 'status=DONE'
{"id":2,"title":"Nest","description":"nestjs","status":"DONE"}
// get (update確認)
$ curl -X GET http://localhost:3000/tasks/2
{"id":2,"title":"Nest","description":"nestjs","status":"DONE"}
// delete
$ curl -X DELETE http://localhost:3000/tasks/2
// get (delete確認)
$ curl -X GET http://localhost:3000/tasks
[{"id":1,"title":"Test","description":"testDesc","status":"OPEN"}]
// 不正な値の確認
$ curl -X POST http://localhost:3000/tasks -d 'title=Nest' -d 'description='
{"statusCode":400,"message":["description should not be empty"],"error":"Bad Request"}
$ curl -X PATCH http://localhost:3000/tasks/2 -d 'status=aaa'
{"statusCode":400,"message":"Bad Request"}
```

## 参考
https://zenn.dev/kobayashiyabako/articles/nestjs-first#nestjs%E3%81%A8%E3%81%AF