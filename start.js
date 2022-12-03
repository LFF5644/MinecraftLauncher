#!/usr/bin/env node
const child_process=require("child_process");
let cmd=`cd "[gameDir]";[java] -Djava.library.path="[versions]/OptiFine 1.7.10/natives" -cp [lib]/net/minecraft/launchwrapper/1.11/launchwrapper-1.11.jar:[lib]/optifine/OptiFine/1.7.10_HD_U_E7/OptiFine-1.7.10_HD_U_E7.jar:[lib]/org/tlauncher/netty/1.8.8/netty-1.8.8.jar:[lib]/com/mojang/realms/1.3.5/realms-1.3.5.jar:[lib]/org/apache/commons/commons-compress/1.8.1/commons-compress-1.8.1.jar:[lib]/org/apache/httpcomponents/httpclient/4.3.3/httpclient-4.3.3.jar:[lib]/commons-logging/commons-logging/1.1.3/commons-logging-1.1.3.jar:[lib]/org/apache/httpcomponents/httpcore/4.3.2/httpcore-4.3.2.jar:[lib]/java3d/vecmath/1.3.1/vecmath-1.3.1.jar:[lib]/net/sf/trove4j/trove4j/3.0.3/trove4j-3.0.3.jar:[lib]/com/ibm/icu/icu4j-core-mojang/51.2/icu4j-core-mojang-51.2.jar:[lib]/net/sf/jopt-simple/jopt-simple/4.5/jopt-simple-4.5.jar:[lib]/com/paulscode/codecjorbis/20101023/codecjorbis-20101023.jar:[lib]/com/paulscode/codecwav/20101023/codecwav-20101023.jar:[lib]/com/paulscode/libraryjavasound/20101123/libraryjavasound-20101123.jar:[lib]/com/paulscode/librarylwjglopenal/20100824/librarylwjglopenal-20100824.jar:[lib]/com/paulscode/soundsystem/20120107/soundsystem-20120107.jar:[lib]/io/netty/netty-all/4.0.10.Final/netty-all-4.0.10.Final.jar:[lib]/com/google/guava/guava/15.0/guava-15.0.jar:[lib]/org/apache/commons/commons-lang3/3.1/commons-lang3-3.1.jar:[lib]/commons-io/commons-io/2.4/commons-io-2.4.jar:[lib]/commons-codec/commons-codec/1.9/commons-codec-1.9.jar:[lib]/net/java/jinput/jinput/2.0.5/jinput-2.0.5.jar:[lib]/net/java/jutils/jutils/1.0.0/jutils-1.0.0.jar:[lib]/com/google/code/gson/gson/2.2.4/gson-2.2.4.jar:[lib]/org/tlauncher/authlib/1.7.211/authlib-1.7.211.jar:[lib]/org/apache/logging/log4j/log4j-api/2.0-beta9/log4j-api-2.0-beta9.jar:[lib]/org/apache/logging/log4j/log4j-core/2.0-beta9/log4j-core-2.0-beta9.jar:[lib]/org/lwjgl/lwjgl/lwjgl/2.9.1/lwjgl-2.9.1.jar:[lib]/org/lwjgl/lwjgl/lwjgl_util/2.9.1/lwjgl_util-2.9.1.jar:[lib]/tv/twitch/twitch/5.16/twitch-5.16.jar:"[versions]/OptiFine 1.7.10/OptiFine 1.7.10.jar" -Xmx[ram] -XX:+UseConcMarkSweepGC -Dminecraft.applet.TargetDirectory=[path] -Dlog4j.configurationFile=[assets]/log_configs/client-1.7.xml net.minecraft.launchwrapper.Launch --username [username] --version OptiFine 1.7.10  --gameDir [gameDir] --assetsDir [assets] --assetIndex 1.7.10 --uuid [uuid] --accessToken [accessToken] --userProperties {} --userType msa --tweakClass optifine.OptiFineTweaker --width 925 --height 530`;

const path="/home/lff/Schreibtisch/startMCHere";
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

let key="";
for(key of Object.keys(options)){
	cmd=cmd
		.split("["+key+"]")
		.join(options[key])
	console.log(key+" => "+options[key])
}
/*
cmd=cmd
	.split("[username]").join(username)
	.split("[path]").join(path)
	.split("[gameDir]").join(path)
	.split("[lib]").join(path+"/libraries")
	.split("[assets]").join(path+"/assets")
	.split("[versions]").join(path+"/versions")
	.split("[ram]").join(ram)
	.split("[uuid]").join(uuid)
	.split("[accessToken]").join(accessToken)
*/
console.log("\nStarte Minecraft...");
child_process.execSync(cmd);
