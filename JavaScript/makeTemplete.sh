#!/bin/bash
shellpath="$(dirname "$0")"

if [ $# -ne 1 ]; then
    echo "Usage: $0 <project name>" && exit
fi

if [ ! -d "$1" ]; then
    mkdir "$1" || exit
else 
    echo "The directory $1 is already exist." && exit
fi

cp "$shellpath"/templete/* "./$1/"

echo "SMILE!"