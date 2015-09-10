# hackNY_website
A Wordpress theme built just for the [hackNY website](http://hackny.org).

I'll add the hackny theme to the official hackNY group repo once I'm done with it.
Instead of using some devironment like VVV, I'm just using my own setup so just excuse these notes for myself:

`sudo apache2ctl -k start`: spins up the Apache server

`sudo apache2ctl -k graceful-stop`: does the opposite

`http://127.0.1.1/`: domain name of server

`make`: rsync's the theme in the git repo to the server dir

`make zip`: turns the theme into a .zip format

`testenv/`: just some folder where I test out animations & designs

`hackny/`: the actual source folder of the theme
