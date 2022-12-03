#!/usr/bin/env node
const child_process =require("child_process");
let cmd=`java -Djava.library.path="[MC_PATH]/versions/OptiFine 1.7.10/natives" -cp [MC_PATH]/libraries/net/minecraft/launchwrapper/1.11/launchwrapper-1.11.jar:[MC_PATH]/libraries/optifine/OptiFine/1.7.10_HD_U_E7/OptiFine-1.7.10_HD_U_E7.jar:[MC_PATH]/libraries/org/tlauncher/netty/1.8.8/netty-1.8.8.jar:[MC_PATH]/libraries/com/mojang/realms/1.3.5/realms-1.3.5.jar:[MC_PATH]/libraries/org/apache/commons/commons-compress/1.8.1/commons-compress-1.8.1.jar:[MC_PATH]/libraries/org/apache/httpcomponents/httpclient/4.3.3/httpclient-4.3.3.jar:[MC_PATH]/libraries/commons-logging/commons-logging/1.1.3/commons-logging-1.1.3.jar:[MC_PATH]/libraries/org/apache/httpcomponents/httpcore/4.3.2/httpcore-4.3.2.jar:[MC_PATH]/libraries/java3d/vecmath/1.3.1/vecmath-1.3.1.jar:[MC_PATH]/libraries/net/sf/trove4j/trove4j/3.0.3/trove4j-3.0.3.jar:[MC_PATH]/libraries/com/ibm/icu/icu4j-core-mojang/51.2/icu4j-core-mojang-51.2.jar:[MC_PATH]/libraries/net/sf/jopt-simple/jopt-simple/4.5/jopt-simple-4.5.jar:[MC_PATH]/libraries/com/paulscode/codecjorbis/20101023/codecjorbis-20101023.jar:[MC_PATH]/libraries/com/paulscode/codecwav/20101023/codecwav-20101023.jar:[MC_PATH]/libraries/com/paulscode/libraryjavasound/20101123/libraryjavasound-20101123.jar:[MC_PATH]/libraries/com/paulscode/librarylwjglopenal/20100824/librarylwjglopenal-20100824.jar:[MC_PATH]/libraries/com/paulscode/soundsystem/20120107/soundsystem-20120107.jar:[MC_PATH]/libraries/io/netty/netty-all/4.0.10.Final/netty-all-4.0.10.Final.jar:[MC_PATH]/libraries/com/google/guava/guava/15.0/guava-15.0.jar:[MC_PATH]/libraries/org/apache/commons/commons-lang3/3.1/commons-lang3-3.1.jar:[MC_PATH]/libraries/commons-io/commons-io/2.4/commons-io-2.4.jar:[MC_PATH]/libraries/commons-codec/commons-codec/1.9/commons-codec-1.9.jar:[MC_PATH]/libraries/net/java/jinput/jinput/2.0.5/jinput-2.0.5.jar:[MC_PATH]/libraries/net/java/jutils/jutils/1.0.0/jutils-1.0.0.jar:[MC_PATH]/libraries/com/google/code/gson/gson/2.2.4/gson-2.2.4.jar:[MC_PATH]/libraries/org/tlauncher/authlib/1.7.211/authlib-1.7.211.jar:[MC_PATH]/libraries/org/apache/logging/log4j/log4j-api/2.0-beta9/log4j-api-2.0-beta9.jar:[MC_PATH]/libraries/org/apache/logging/log4j/log4j-core/2.0-beta9/log4j-core-2.0-beta9.jar:[MC_PATH]/libraries/org/lwjgl/lwjgl/lwjgl/2.9.1/lwjgl-2.9.1.jar:[MC_PATH]/libraries/org/lwjgl/lwjgl/lwjgl_util/2.9.1/lwjgl_util-2.9.1.jar:[MC_PATH]/libraries/tv/twitch/twitch/5.16/twitch-5.16.jar:"[MC_PATH]/versions/OptiFine 1.7.10/OptiFine 1.7.10.jar" -Xmx[RAM] -XX:+UseConcMarkSweepGC -Dminecraft.applet.TargetDirectory=[MC_PATH] -Dlog4j.configurationFile=[MC_PATH]/assets/log_configs/client-1.7.xml net.minecraft.launchwrapper.Launch --username [username] --version OptiFine 1.7.10 --gameDir [MC_PATH] --assetsDir [MC_PATH]/assets --assetIndex 1.7.10 --uuid [uuid] --accessToken [accessToken] --userProperties {} --userType msa --tweakClass optifine.OptiFineTweaker --width 925 --height 530`;

const path="/home/lff/Schreibtisch/startMCHere";
const username="LFF5644";
const ram="2G"
const uuid="none";
const accessToken="none";

cmd=cmd
	.split("[username]").join(username)
	.split("[MC_PATH]").join(path)
	.split("[RAM]").join(ram)
	.split("[uuid]").join(uuid)
	.split("[accessToken]").join(accessToken)

child_process.execSync(cmd);