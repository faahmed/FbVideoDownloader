# Fb Video Downloader
## Download videos from your Facebook newsfeed.


### Setup
Refer to Google's [guide](https://developer.chrome.com/extensions/getstarted#unpacked) if you need help loading the extension.

#### Usage

Navigate to your Facebook newsfeed. Scroll through until you see a video you're interested in.
*This is important as your browser will only request the video/audio from Fb as you scroll past.*

Click the 'browser action' icon near the url (it should appear as an 'F'). Refresh the list of recovered media
and search the provided links to see if one corresponds with the audio/video you are looking for. Keep in mind that
some links will be faulty, and all will become become stale or expire after a given timeframe.

#### Merging audio and video
As you may have noticed, Facebook currently separates its content delivery into separate mp4 files containing audio
and video data. There is no feasible way to merge the content in-browser, but you can use [FFmpeg](https://ffmpeg.org/) to accomplish that:

<code>ffmpeg -i THE_VIDEO.mp4 -i THE_AUDIO.mp4 -acodec copy -vcodec copy -map 0:v -map 1:a OUTPUT.mp4</code>

**Last updated 12/16/2016**
