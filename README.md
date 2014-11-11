agusha-frontend
===============
Компилим sass:
===
gem list -d

... /var/lib/gems/1.8

PATH=$PATH:/var/lib/gems/1.8/bin

sass --watch public/scss:public/css --style compressed -r sass-css-importer --sourcemap=none

Добавляем forever:
===
PATH=$PATH:/root/agusha2/node_modules/forever/bin
