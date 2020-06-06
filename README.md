# mojang
Simple and lightweight Mojang API wrapper.

## Usage
```js
import { status, uuid, history, names, textures, blocked, statistics } from './mod.js' // import the mojang module

console.log(await status()) // returns status of various Mojang services
console.log(await uuid('Notch')) // returns the UUID of the name at the timestamp provided, default is Date.now()
console.log(await history('Notch')) // returns all the usernames this user has used in the past and the one they are using currently
console.log(await names(['Notch'])) // must be an array, will return player UUIDs and some extras
console.log(await textures('Notch')) // will return the player's username plus any additional information about them (e.g. skins)
console.log(await blocked()) // returns a list of SHA1 hashes used to check server addresses against when the client tries to connect

console.log(await statistics(['item_sold_minecraft'])) /* must be an array, gets statistics on the sales of Minecraft

available options are:

item_sold_minecraft
prepaid_card_redeemed_minecraft
item_sold_cobalt
item_sold_scrolls
prepaid_card_redeemed_cobalt
item_sold_dungeons

*/
```

## Full API documentation
https://wiki.vg/Mojang_API

# Note
This is not affiliated with Mojang or Microsoft and the services they provide.
