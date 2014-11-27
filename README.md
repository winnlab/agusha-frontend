agusha-frontend
===============
Компилим sass:
===
```
gem list -d
```

... /var/lib/gems/1.8

```
PATH=$PATH:/var/lib/gems/1.8/bin
```

Watcher:
```
sass --watch public/scss:public/css -t compressed -r sass-css-importer --sourcemap=none
```

Single time scss compilation:
```
sass --update public/scss:public/css -t compressed -r sass-css-importer --sourcemap=none
```



Добавляем forever:
===
```
PATH=$PATH:/root/agusha2/node_modules/forever/bin
```
