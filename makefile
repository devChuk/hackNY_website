all:
	sudo rsync -avh --delete ./hackny/ /var/www/html/wp-content/themes/hackny/

zip:
	zip hackny.zip ./hackny/