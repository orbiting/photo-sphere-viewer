## Photo Sphere Viewer

A small wrapper to include it as dynamic component.

### Usage

```js
{
  "autoHtml": false,
  "props": {
    "options": {
      "panorama": "/static/p70.jpg",
      "pano_data": {
        "full_width": 16734,
        "full_height": 8367,
        "cropped_width": 16734,
        "cropped_height": 3000,
        "cropped_x": 0,
        "cropped_y": 2684
      }
    },
    "caption": "Am Strand",
    "byline": "Adelina Gashi"
  },
  "size": "breakout",
  "src": "https://cdn.repub.ch/s3/republik-assets/dynamic-components/photo-sphere-viewer/index.js"
}
```

Read [the offical docs](https://photo-sphere-viewer.js.org) for [options](https://photo-sphere-viewer.js.org/index.html#options) and use the [crop playground](https://photo-sphere-viewer.js.org/crop.html#playground) to get your `pano_data`.

### Develop

```bash
npm i
npm run dev:code
# run in seperate tab/window
npm run dev:server
open http://localhost:3000/
```

### Deploy

```bash
npm run build
npm run deploy
```

### Clear CDN

Goto https://app.keycdn.com/zones/purgeurl/87880 and enter:

```
/s3/republik-assets/dynamic-components/photo-sphere-viewer/index.js
```

If you change asset files be sure to purge those too.
