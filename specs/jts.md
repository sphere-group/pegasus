JSON Tileset
============

| File extension | Stage       |
|----------------|-------------|
| `.jts`         | Researching |

#### Example ####
```js
{
  "type" : "tileset",
  "version" : 1,
  "uri" : "data:image/png;base64,<png data>",
  "tile_size" : { "width" : 16, "height" : 16 },
  "animated_tiles" : [
    {
      "tile" : 5,
      "delay" : 8,
      "next" : 6
    }
  ]
}
````

#### Contents ####

| Property | Type   | Description                               | Value       |
|----------|--------|-------------------------------------------|-------------|
| type     | String | Type of the file                          | "spriteset" |
| version  | Number | Version of the format. Only 1 is allowed. | 1      |
| uri      | String | URI to the image data. This can be either a data URI, a web URL or a path URI. Paths are resolved using the standard resolve method for all resources. |        |
| tile_size | Object | Width and height of a tile. | |
| animated_tiles | Array | An array of animation information for animated tiles. | |
| animated_tiles.tile | Object | An animated tile. | |
| animated_tiles.tile.tile | Number | The tile index in the image. | |
| animated_tiles.tile.delay | Number | The number of frames the image must be shown before the next image is. | |
| animated_tiles.tile.next | Number | The index of the next tile. | |

#### Usage ####
The PNG image is searched left-to-right, top-to-bottom for a tile. That means the x and y coordinates within the image can be easily calculated given the size of the image.
The width of the image must be a multiple of `tile_size.width`, and its height must be a multiple of `tile_size.height`.
