#!/bin/bash
shellpath="$(dirname "$0")"
dirpath="webpack-templete"

if [ $# -ne 1 ]; then
	echo "Usage: $0 <project name>" && exit
fi

if [ ! -d "$1" ]; then
	mkdir "$1" || exit
else
	echo "The directory $1 is already exist." && exit
fi

cd "$1" || exit

rsync -a --exclude={"docs/","node_modules/",".gitignore",".github/","README.md","LICENSE"} "../$dirpath/" ./

echo "SMILE!"
