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

kubectl run --rm -it --tty pingkungcurl1 -n group-1 --image=curlimages/curl --restart=Never -- pingw91010-svc.group-1/greeting

kubectl create configmap pingconfig --from-literal=message=test -n group-1 --dry-run=client -o yaml > pingconfig.yaml

kubectl create secret generic pingsecret --from-literal=secretmessage=mysecret -n group-1 --dry-run=client -o yaml > pingsecret.yaml

kubectl run --rm -it --tty pingkungcurl1 -n group-1 --image=curlimages/curl --restart=Never -- pingw91010-svc.group-1/greeting
kubectl run --rm -it --tty pingkungcurl1 -n group-1 --image=curlimages/curl --restart=Never -- pingw91010-svc.group-1/pmessage
kubectl run --rm -it --tty pingkungcurl1 -n group-1 --image=curlimages/curl --restart=Never -- pingw91010-svc.group-1/psecretmessage



//https://stackoverflow.com/questions/76354596/using-yq-to-replace-name-of-docker-image
yq '.spec.template.spec.containers.[0].image = "STRING"' pingw91010.yaml

#create new file
yq '.spec.template.spec.containers.[0].image = "STRING"' pingw91010.yaml > yping.yaml

Update a yaml file, in place
yq -i '.spec.template.spec.containers.[0].image = "STRING"' pingw91010.yaml
