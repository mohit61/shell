import { ERRORS } from "./types";
import { DATA } from "./types";

export const error = () => {
  return {
    type: ERRORS,
    payload: "Content not found"
  };
};

export const search = () => {
  return {
    type: DATA,
    payload: [
      {
        id: "asdfadf-asdfaf-asdfadf",
        type: "image",
        url: "https://www.stockvault.net/data/2012/08/03/133422/thumb16.jpg",
        tags: ["sky", "blue", "image", "pollution"]
      },
      {
        id: "234234-adadf-asdfadf",
        type: "video",
        url: "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4",
        tags: ["animation", "video", "bird", "nature"]
      },
      {
        id: "56-234234-xdcvxcv",
        type: "text",
        data:
          "भारत की लुंगी को अमेरिका में किस तरह बेचा जा रहा है... ज़रा देखिये..😳",
        tags: ["india", "news", "lungi", "joke"]
      }
    ]
  };
};
