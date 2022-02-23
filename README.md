# browser-scripts

A collection of helper scripts to remove unwanted parts of websites

Use this chrome extension to inject scripts into webpages [Custom JavaScript for Websites 2](https://chrome.google.com/webstore/detail/custom-javascript-for-web/ddbjnfjiigjmcpcpkmhogomapikjbjdk)

## Importing scripts

To import a script do `import("https://browser-scripts.rdfriedl.com/<script>");`

Dont forget the `https://` and the `.js` at the end

## Script not working?

If the scripts are not loading due to CORS policy on the website (like facebook.com) then your going to have to copy/paste the scripts into the browser extension instead of importing it.

## List of all scripts

[https://browser-scripts.rdfriedl.com/](https://browser-scripts.rdfriedl.com/)

## Examples

### Use Everything

```js
import("https://browser-scripts.rdfriedl.com/index.js");
```

### Facebook

```js
import("https://browser-scripts.rdfriedl.com/facebook.com/grayscale.js");
import("https://browser-scripts.rdfriedl.com/facebook.com/remove-ads.js");
```

### Reddit

```js
import("https://browser-scripts.rdfriedl.com/reddit.com/remove-livestream.js");
import("https://browser-scripts.rdfriedl.com/reddit.com/remove-promoted.js");
```

### Youtube

```js
import("https://browser-scripts.rdfriedl.com/youtube.com/speed-keys.js");
```

## Source

[Github](https://github.com/rdfriedl/browser-scripts)
