# aikatsu scraper

```js
async () => {
  const fetch = require("node-fetch");
  const { scrapeFriends } = require("@furugomu/aikatsu-scraper");
  const html = (await fetch(
    "http://www.aikatsu.com/friends/cardlist/detail.php?id=137233"
  )).text();
  console.log(scrapeFriends(html));
};
```
