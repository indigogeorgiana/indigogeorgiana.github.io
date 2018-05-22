var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    scrollParent: true
}); 

wavesurfer.load('../audio/song.mp3');

wavesurfer.on('ready', function () {
    wavesurfer.play();
});

wavesurfer.pause(), wavesurfer.skipForward(), wavesurfer.toggleMute();
/**destroy() – Removes events, elements and disconnects Web Audio nodes.
empty() – Clears the waveform as if a zero-length audio is loaded.
getCurrentTime() – Returns current progress in seconds.
getDuration() – Returns the duration of an audio clip in seconds.
getPlaybackRate() – Returns the playback speed of an audio clip.
getVolume() – Returns the volume of the current audio clip.
getMute() – Returns the current mute status.
getFilters() – Returns an array of the current set filters.
exportPCM(length, accuracy, noWindow, start) – Exports PCM data into a JSON array. Optional parameters length [number] - default: 1024, accuracy [number] - default: 10000, noWindow [true|false] - default: false, start [number] - default: 0
isPlaying() – Returns true if currently playing, false otherwise.
load(url, peaks, preload) – Loads audio from URL via XHR. Optional array of peaks. Optional preload parameter [none|metadata|auto], parsed to the Audio element if using backend MediaElement.
loadBlob(url) – Loads audio from a Blob or File object.
on(eventName, callback) – Subscribes to an event. See WaveSurfer Events for the list of all events.
un(eventName, callback) – Unsubscribes from an event.
unAll() – Unsubscribes from all events.
pause() – Stops playback.
play([start[, end]]) – Starts playback from the current position. Optional start and end measured in seconds can be used to set the range of audio to play.
playPause() – Plays if paused, pauses if playing. 
seekAndCenter(progress) – Seeks to a progress and centers view [0..1] (0 = beginning, 1 = end).
seekTo(progress) – Seeks to a progress [0..1] (0 = beginning, 1 = end).
setFilter(filters) - For inserting your own WebAudio nodes into the graph. See Connecting Filters below.
setPlaybackRate(rate) – Sets the speed of playback (0.5 is half speed, 1 is normal speed, 2 is double speed and so on).
setVolume(newVolume) – Sets the playback volume to a new value [0..1] (0 = silent, 1 = maximum).
setMute(mute) – Mute the current sound. Can be a boolean value of true to mute sound or false to unmute
skip(offset) – Skip a number of seconds from the current position (use a negative value to go backwards).
skipBackward() - Rewind skipLength seconds.
skipForward() - Skip ahead skipLength seconds.
stop() – Stops and goes to the beginning.
toggleMute() – Toggles the volume on and off.
toggleInteraction() – Toggle mouse interaction.
toggleScroll() – Toggles scrollParent.
zoom(pxPerSec) – Horizontally zooms the waveform in and out. The parameter is a number of horizontal pixels per second of audio. It also changes the parameter minPxPerSec and enables the scrollParent option.





**/
