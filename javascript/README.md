# HOW TO RUN

```bash
node server.js
```


# HOW TO TEST

docker pull pingkunga/w91010:latest
docker run -p 3000:3000 -d --name w91010 pingkunga/w91010

```
curl http://localhost:3000/greeting
```

or

```
curl "http://localhost:3000/greeting?name=John"
```


# Deploy

kubectl create deployment pingw91010 --image=pingkunga/w91010 -n group-1 --dry-run=client -o yaml > pingw91010.yaml
