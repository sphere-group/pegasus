JSON Font
=========

| File extension | Stage       |
|----------------|-------------|
| `.jfn`         | Researching |

#### Example ####
```js
{
	"type"		:	"font",
	"version"	:	1,
	"uri"		:	"data:video/x-mng;base64,<mng data>"
}
````

#### Contents ####

| Property | Type   | Description                               | Value  |
|----------|--------|-------------------------------------------|--------|
| type     | String | Type of the file                          | "font" |
| version  | Number | Version of the format. Only 1 is allowed. | 1      |
| uri      | String | URI to the image data. This can be either a data URI, a web URL or a path URI. Paths are resolved using the standard resolve method for all resources. |        |
