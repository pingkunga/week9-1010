# HOW TO RUN

```bash
node server.js
```


# HOW TO TEST

docker pull pingkunga/w91010:latest
docker run -p 3000:3000 -d --name nodejs pingkunga/w91010

```
curl http://localhost:3000/greeting
```

or

```
curl "http://localhost:3000/greeting?name=John"
```
