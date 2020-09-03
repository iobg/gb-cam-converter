#!/bin/bash
image=$1
scale=$2
width=$3
height=$4
convert -resize $widthx$height -filter box -quality 100 $image $image-gbtmp-resize
convert -modulate 100,0,100 $image-gbtmp-resize $image-gbtmp-desat
convert -contrast-stretch 30% $image-gbtmp-desat $image-gbtmp-contrast
convert -ordered-dither o8x8,4 $image-gbtmp-contrast $image-gbtmp-dithered
convert -scale $scale% -quality 100 $image-gbtmp-dithered $image-gb.png
rm $image-gbtmp-*