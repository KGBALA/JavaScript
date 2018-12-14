





var DenverPost=[
	{title:"post one", body:"body one"},
	{title:"post two", body:"body two"},
];

function displayTitles (){
	setTimeout(x=>{
		for( let i of DenverPost){
			console.log (i.title)
		}
	},1000)
}
displayTitles();

function createNewPost (newPost){
	setTimeout(x=>{
		DenverPost.push(NewPost);
		console.log(DenverPost);
	},2000)
}

create NewPost();
displayTitles();