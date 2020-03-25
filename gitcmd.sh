repo=$1
process=$2
echo $repo

if [ $repo = "all" ]
then
	git $process origin master
	git $process coding master
elif [ $repo = "gh" ]
then
	git $process origin master
elif [ $repo = "coding" ]
then
	git $process coding master
fi
