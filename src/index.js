// import {VideoTitles, ChannelNames} from './elements';
// chrome.runtime.onInstalled.addListener(function() {
//     // chrome.contextMenus.create({
//     //   "id": "sampleContextMenu",
//     //   "title": "Sample Context Menu",
//     //   "contexts": ["selection"]
//     // });

//     console.log('works xD')
//   });


   // "background": {
    //   "scripts": ["src/index.js"],
    //   "persistent": false
    // }

    console.log('works xD')

    var VideoTitles = document.querySelectorAll('yt-formatted-string[id="video-title"]')
    var ChannelNames = document.querySelectorAll('yt-formatted-string[id="text"]')
    console.log(VideoTitles);
    console.log(ChannelNames);

    function removeElement(element) {
        // Removes an element from the document
        // var element = document.getElementById(elementId);
        element.parentNode.removeChild(element);
    }

    VideoTitles.forEach(el => {
        removeElement(el);
    })
