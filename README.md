agusha-frontend
===============
Компилим sass:
gem list -d
... /var/lib/gems/1.8
PATH=$PATH:/var/lib/gems/1.8
sass --watch public/scss:public/css --style compressed -r sass-css-importer --sourcemap=none

Добавляем forever:
PATH=$PATH:/root/ahusha2/node_modules/forever/bin
