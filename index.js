var requireSDK = require("require-sdk");

/**
 * This module give you access to youtube iframe player api.
 * @type {Object}
 */
module.exports = {
  //Direct reference to the original player (https://developers.google.com/youtube/iframe_api_reference)
  player: null,

  init: function(onComplete) {
    var requireYoutube = requireSDK('https://www.youtube.com/iframe_api', 'YT');
    /**
     * @todo We need try to avoid the use of window.
     * YouTube API call onYouTubeIframeAPIReady() when is loaded,
     * it is the only way to know when is ready to be used.
     */
    global.onYouTubeIframeAPIReady = requireYoutube.trigger();

    //Load youtube api
    requireYoutube(function () {
      onComplete();
    }.bind(this));
  },
  /**
   * Call YT.player(), this will create a player inside the container element.
   * @param  {[type]} containerID Container element id
   * @param  {[type]} params      See https://developers.google.com/youtube/iframe_api_reference
   * @return player             A reference of the player.
   */
  createPlayer: function(containerID, params) {
    return this.player = new YT.Player(containerID, params); 
  },
  /**
   * Load a video (youtube video ID) in the player. 
   * @param  {[type]} videoID [description]
   * @return {[type]}         [description]
   */
  loadVideo: function(videoID) {
    if(this.player) {
        this.player.loadVideoById(videoID);    
    } else {
        console.log('You should create.');
    }
  },
  /**
   * Play video.
   * https://developers.google.com/youtube/iframe_api_reference#playVideo
   * @return void
   */
  play: function() {
    this.player.playVideo();
  },
  /**
   * Stops and cancels loading of the current video. 
   * This function should be reserved for rare situations when you know that the user will not be
   * watching additional video in the player.
   * https://developers.google.com/youtube/iframe_api_reference#stopVideo
   * @return void
   */
  stop: function() {
    this.player.stopVideo();
  },
  /**
   * Pauses the currently playing video.
   * https://developers.google.com/youtube/iframe_api_reference#pauseVideo
   * @return void
   */
  pause: function() {
    this.player.pauseVideo();
  },
  /**
   * Seeks to a specified time in the video. If the player is paused when the function is called, it will remain paused. 
   * https://developers.google.com/youtube/iframe_api_reference#seekTo
   * @param  {Number} seconds         time to which the player should advance.
   * @param  {[type]} allowSeekAhead parameter determines whether the player will make a new request to the server if the seconds parameter specifies a time outside of the currently buffered video data. (https://developers.google.com/youtube/iframe_api_reference#seekTo)
   * @return {void}                void
   */
  seekTo: function(seconds, allowSeekAhead) {
    this.player.seekTo(seconds, allowSeekAhead);
  },
  /**
   * Seeks to a specified time in the video. If the player is paused when the function is called, it will remain paused.
   * @return {[type]} [description]
   */
  clear: function() {
    this.player.clearVideo();
  },
  /**
   * Removes the <iframe> containing the player.
   * @return void
   */
  destroy: function() {
    this.player.getDuration();
  }
};
