#!/usr/bin/env node
const child_process=require("child_process");
const {readFileSync,mkdirSync}=require("fs");
const path="/home/lff/LFF/nodejs/MinecraftLauncher";
const username="LFF5644";
const ram="2G"
const uuid="none";
const accessToken="none";
const options={
	path: 			path, // wo DIESE datei ligt;
	versions: 		path+"/static/versions",
	assets: 		path+"/static/assets",
	lib: 			path+"/static/libraries",
	gameDir: 		path+"/game",
	username: 		"LFF5644",
	accessToken: 	"none",
	uuid: 			"none",
	java: 			"java",
	ram: 			"2G",
};

// LFF lib //;
function input(text){
	return new Promise((succ,err)=>{
		const readline=require("readline").createInterface({
			"input": process.stdin,
			"output": process.stdout,
		});
		readline.question(text,(res)=>{
			succ(res);
			readline.close();
		});
	})
}
function replaceAir(text){
	let oldText="";
	while(1){
		oldText=text;
		if(text.startsWith(" ")){
			text=text.substr(1);
		}
		if(text.endsWith(" ")){
			const len=text.length-1;
			text=text.substr(0,len);
		}
		if(text===oldText){break}
	}
	return text;
}
function tofsStr(str){
	let allowedChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	allowedChars+="abcdefghijklmnopqrstuvwxyz";
	allowedChars+="01234567890";
	replace_char="_";
	//replace_always=true;
	let result="";

	for(char of str){
		let found=false;
		let c;
		for(c of allowedChars){
			if(char==c){
				found=true;
				break;
			}
		}
		if(found){result+=char}
		else if(!found){result+=replace_char}
	}
	return(result);
}
function CreateDir(dir){
	try{
		mkdirSync(dir)
	}catch(e){
		return false;
	}
	return true;
}
//;
function loadVersionIndex(){
	let versionsSTR="";
	const versions={};
	try{
		versionsSTR=readFileSync(path+"/data/version.index","utf8");
	}catch(e){
		throw new Error("[path]/data/version.index cant open/read!");
	}
	const ignoreChars=[
		"//",
		"#",
	];
	let line="";
	for(line of versionsSTR.split("\n")){
		if(
			!line||
			!line.includes("|")||
			ignoreChars.some(item=>line.startsWith(item))
		){
			continue;
		}
		const [name,cmd]=line.split("|");
		versions[replaceAir(name)]=replaceAir(cmd);
	}
	return versions;
}
async function selectVersion(versions){
	const versionNames=Object.keys(versions);
	console.log("Bitte Version eingeben");
	versionNames.map((item,index)=>console.log(`${index} = ${item}`));
	console.log("bitte nur numern eingeben")
	const versionIndex=Number(await input("$ "));
	if(
		isNaN(versionIndex)||(
			versionIndex>versionNames.length-1||
			versionIndex<0
		)
	){
		console.log("\nNur Zahlen zwischen 0-"+(versionNames.length-1)+" werden angenommen!\nEXIT!");
		process.exit();
	}
	return versionNames[versionIndex];
}
async function main(){
	const versions=loadVersionIndex();
	const versionSelectedIndex=await selectVersion(versions);
	CreateDir(options.gameDir);
	options.gameDir+="/"+tofsStr(versionSelectedIndex);
	CreateDir(options.gameDir);
	let key="";
	let cmd=versions[versionSelectedIndex];
	for(key of Object.keys(options)){
		cmd=cmd
			.split("["+key+"]")
			.join(options[key])
		console.log(key+" => "+options[key])
	}

	console.log("Starte Version: "+versionSelectedIndex);
	console.log("\nStarte Minecraft...");
	child_process.execSync(cmd);

}
main();
