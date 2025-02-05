# Holdings

A game of Stocks and Steel. An adaptation of merger style boardgames like Aquire.

## todo

- [x] setup react + tailwind + vite
    - [x] make it deploy with netlify
    - [ ] sketch out interface
    - [ ] add some basic logic
- [ ] setup pixi js
    - [ ] create tilemap base layer
- [ ] setup discord activity lobby with playroom 
    - [ ] what's the best way to make a test layer that bypasses discord???
        - Maybe make a discord and no discord path?
- [ ] maybe add server functions and extra db for like, highscores?

## ui to consider

* player stats
    * small? expanded?
    player
    cash
    stocks per company
    net worth

    company outlook
    all companies
    share portions
        each player
        bank
    share price
    company "grade"
    chain size
    
* place prompt (including types of placements)
* buy interface
* new chain interface
* merger interface
    allow choice of merger
    keep, trade, sell options
* game update log
    * include extra info like "stock price went up"
    * maybe a toast system?

## tech to use

* https://create.t3.gg/
* https://joinplayroom.com/discord
* https://pixijs.com/

## rule space

grid of 12x9
6 companies in 3 tiers of appeal

## Thanks to

* https://adamatomic.itch.io/gallet-city
