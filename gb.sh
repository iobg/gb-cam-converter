#!/bin/bash
image=$1
convert -resize 128x112 -filter box -quality 100 $image $image-gbtmp-resize
convert -modulate 100,0,100 $image-gbtmp-resize $image-gbtmp-desat
convert -contrast-stretch 30% $image-gbtmp-desat $image-gbtmp-contrast
convert -ordered-dither o8x8,4 $image-gbtmp-contrast $image-gbtmp-dithered
convert -scale 500% -quality 100 $image-gbtmp-dithered $image-gb.png
rm $image-gbtmp-*