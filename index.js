     


/*
if (process.argv.length!=4)


/*


*/

// Replace with the URL of your own database. Do not store the password on GitLab!
/*
const url = 'mongodb+srv://missismama:missismissis@cluster0-wcm2d.gcp.mongodb.net/test?retryWrites=true&w=majority'


const Current = mongoose.model('currentcolors', {
  colors: [String],
  colorson: [Number]
})



function setting(colors,colorson)
{
mongoose.connect(url)
const phonenumber = new Current({
  colors: colors,
  colorson: colorson
})
phonenumber
  .save()
  .then(response => {
    console.log('number saved!')
    mongoose.connection.close()
  })
}

function getting()
{
Current
  .find({})
  .then(result => {
    result.forEach(telephonenumber => {
      console.log(telephonenumber)
    })
    mongoose.connection.close()
  })
}
setting(["s"],[false])
getting()


*/









canvas = document.getElementById('canvas');
  innerhtml=""
Array.from(Array(64), (_, i) => i+1).forEach(element => {
innerhtml+="<canvas class=module id='canva"+element+
"'' onclick='switching("+element+")'>s</canvas>";
})
canvas.innerHTML = innerhtml;


let colors=JSON.parse(localStorage.getItem("colors"))||["#3b3cae","#e6c478","#8493b6","#10d2c4","#3a3bc9","#96f2db","#d81db4","#f418f9","#83d32d","#114ef6","#7ad755","#b83011","#36b1ed","#558389","#76636a","#37734e","#fbcdcf","#d32b66","#15e498","#1b27e3","#47e832","#7e0dde","#2a6ea1","#861ff5","#13e1f9","#b6f7ea","#7abac7","#748389","#f64c0f","#b70534","#f004c1","#df5b34","#6da023","#1995dd","#d764d3","#8f6b60","#c40b95","#ccc22f","#2a6ad6","#9b7b42","#e8bb80","#c3daab","#fd5d23","#40dbd2","#7e21ed","#63b51c","#9a5a19","#7fa5b9","#21893b","#e3b2c5","#65f0b3","#915324","#6348f1","#f80c7a","#877e2a","#df717d","#1feaf8","#97981","#72b7b4","#29e5e8","#b8d9df","#9ba43e","#7c52ca","#95bb76"]
let colorson=JSON.parse(localStorage.getItem("colorson"))||Array.from(Array(64), (_, i) => false);
let emoji=JSON.parse(localStorage.getItem("emoji"))||[];


function generatecolors()
{let ii=0
colors=[]
while(ii<64){colors.push("#"+((1<<24)*Math.random()|0).toString(16)),ii+=1}
//sometimes color will be 5 digit and therefore black
localStorage.setItem("colors", JSON.stringify(colors));

switchall()
}

function whenloaded()
{switchall()
updateemoji()}



function saveemoji()
{emoji=JSON.parse(localStorage.getItem("emoji"))||[];
	alert(JSON.stringify(emoji))
emoji.push([colors,colorson])
alert(JSON.stringify(emoji))
localStorage.setItem("emoji", JSON.stringify(emoji));
	updateemoji()
}



function updateemoji2()
{
}


function updateemoji()
{
	
let readyhtml=''
emoji.forEach((ledtable,numberofemoji) => {

let innerhtmls=''
ledtable[0].forEach((acanvas,acanvasindex)=>
{innerhtmls+="<canvas class=minimodule id='canva"+numberofemoji+"_"+(acanvasindex+1)
+"'>s</canvas>"})

let innerhtml="<div class='wrapper' id=savedcanvas"+numberofemoji+">"+innerhtmls+"</div>"

readyhtml+=innerhtml

  //if ((outputhtml && element[1]=="HTML")||(outputcss && element[1]=="CSS")||(outputjs && element[1]=="JS"))
  //innerhtml+="<div class='module'>"+element[0]+":"+element[1]+"</div>"});
})
document.getElementById('savedcanvas').innerHTML = readyhtml;




emoji.forEach((ledtable,numberofemoji) => {
ledtable[0].forEach((acanvas,acanvasindex)=>{
{
acanvasindex+=1
let idnum='canva'+numberofemoji+"_"+acanvasindex;
const canvas=document.getElementById(idnum);
const ctx = canvas.getContext('2d');

if(ledtable[1][acanvasindex])
{
ctx.fillStyle = ledtable[0][acanvasindex];
ctx.fillRect(0, 0, 200, 200);
}
else
{
ctx.fillStyle ="#000000";	
ctx.clearRect(0, 0, 200,200)
}
}
})
})
/**/
}

function switchall()
{let i=1
while(i<65){
const canvas=document.getElementById('canva'+i);
const ctx = canvas.getContext('2d');
if (colorson[i])
{
ctx.fillStyle = colors[i];
ctx.fillRect(0, 0, 350, 250);
}
else
{
ctx.fillStyle ="#000000";	
ctx.clearRect(0, 0, 350, 250)
}
i+=1
}
	
}



function switching(number) 
{
colorson[number]=!(colorson[number])
switchall()
localStorage.setItem("colorson", JSON.stringify(colorson));

}

//(function() {const canvas=document.getElementById('canva"+element+
//"');const ctx = canvas.getContext('2d');console.log(ctx.fillStyle);ctx.fillStyle = 'green';ctx.fillRect(10, 10, 150, 100);console.log('d');}())
  


     /* const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);*/
