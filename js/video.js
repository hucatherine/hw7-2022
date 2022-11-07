var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is set to " + video.autoplay);
	console.log("Loop is set to " + video.autoplay);
});

// play video and update the volume information
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
});

// pause the video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slow video speed by 10% each time button is clicked and log new speed to console
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 9/10;
	console.log("Speed is " + video.playbackRate);
});

// Increase video speed by 10% each time button is clicked and log the new speed to the console
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate *= 10/9;
	console.log("Speed is " + video.playbackRate);
});

// Advance ideo by 10 seconds. If video length is exceeded, go back to start of video - no farther. Log current location of video
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	var newTime = video.currentTime + 10;
	if(newTime < video.duration) {
		video.currentTime = newTime;
	}
	else {
		video.currentTime = 0;
	}
	console.log("Video current time is " + video.currentTime);
});

// mute/unmute video and update button text
document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted) {
		video.muted = false;
		document.querySelector("#mute").textContent = "Mute";
		console.log("Unmute");
	}
	else {
		video.muted = true;
		document.querySelector("#mute").textContent = "Unmute";
		console.log("Mute");
	}
});

// Change volume based on slider and update the volume information
document.querySelector("#slider").addEventListener("change", function() {
	var newVolume = document.querySelector("#slider").value;
	document.querySelector("#volume").innerHTML = newVolume + "%";
	video.volume = newVolume/100;
	console.log("The current value is " + newVolume/100);
});

// Utilize existing oldSchool class on video element
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School");
	document.querySelector(".video").classList.add("oldSchool");
});

// Remove oldSchool class from the video
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	document.querySelector(".oldSchool").classList.remove("oldSchool");
});
