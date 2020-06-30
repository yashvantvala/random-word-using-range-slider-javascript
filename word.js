var words = [
	'hello',
	'india',
	'yashvant',
	'sagar',
	'ironman',
	'captain',
	'mumbai',
	'rajkot',
	'engineering',
	'college',
	'javascript',
	'java',
	'dhaval',
	'pranav',
	'dubai',
	'instance',
	'softwere',
	'developer',
	'website',
	'application',
	'computers',
	'aliens',
	'space',
	'scientist',
	'science',
	'universe',
	'time-travel',
	'new-york',
	'random',
	'generate'
];

var setLimit = document.querySelector('.limit');
var word = document.querySelector('div #word');
var input = document.querySelector('#ranger');
var limit = 10;
setLimit.innerHTML = limit
ranger.value = limit

function onSliderChange(e){
limit = e.target.value;
setLimit.innerHTML = limit
}

function GenerateWords(){
	//alert("hi")
	words = words.slice(0,limit)
	//console.log(words.join(' '))
	word.innerHTML = words.join(' ')

}