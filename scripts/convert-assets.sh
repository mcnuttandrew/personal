cd assets/
for i in *.png *.jpg; do
    prefix="${i%.*}"
    # if the file already exists, skip it
    if [ ! -f ../converted-images/$prefix.jpg ]; then
        convert -flatten -strip -interlace  Plane -quality 80 $i ../converted-images/$prefix.jpg
    fi
done
