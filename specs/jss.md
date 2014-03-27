JSON Spriteset
==============

| File extension | Stage       |
|----------------|-------------|
| `.jss`         | Researching |

#### Example ####
```js
{
  "type" : "spriteset",
  "version" : 1,
  "uri" : "data:image/x-mng;base64,<mng data>",
  "directions" : {
    "east" : [
      { "image" : 0, "delay" : 8 },
      { "image" : 1 }
    ],
    "west" : [
      { "image" : 0 },
      { "image" : 1 }
    ]
  ]
}
````

#### Contents ####

| Property | Type   | Description                               | Value       |
|----------|--------|-------------------------------------------|-------------|
| type     | String | Type of the file                          | "spriteset" |
| version  | Number | Version of the format. Only 1 is allowed. | 1      |
| uri      | String | URI to the image data. This can be either a data URI, a web URL or a path URI. Paths are resolved using the standard resolve method for all resources. |        |
| directions | Object | Object of directions with a String as key, being the name of the direction. The value is an array of frames. | |
| directions.frame | Object | Meta-data for a frame in the animation of a direction | |
| directions.frame.image | Number | Index of the image, in the image-data, assigned to this frame. | |
| directions.frame.delay | Number | Number of render-frames delay before showing the next image. If not supplied, the default value is used. | 8 |
