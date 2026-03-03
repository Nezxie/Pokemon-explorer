This is a simple pokemon search app based on https://pokeapi.co API.

This project uses MUI component library for React. 

To run this project first clone the repository, ```cd``` to the checked out folder and run ```npm install```.

Then to run in developement use: 
```
npm run dev
```

Or for production release use: 
```
npm run build
```
If you want to see the page live without the hassle of setting it up yourself just head to https://nezxie.github.io/Pokemon-explorer/

This project was done as part of the recruitment process with a 3h mark and is not complete yet.

What i was able to implement:
- getting pokemon data on init
- load more option with paging set at 25
- fillter pills with correct colors
- fillter pills store selected fillters (just not visually yet)

What i didn't have time to implement:
- search bar functionality 
- filtering (got stuck on deciding if I should just filter the list we have or if I should do it properly with calls, because the API does not provide an endpoint for multiple types search, so I would have to implement it by hand)
- proper styling (and sorting out the dark mode)

I might finish it on a separate branch because how it looks right now is genuinely making me angry, so I'm sorry you have to experience that. [^1]
[^1]:I actually did almost finish it, you can check it out here https://github.com/Nezxie/Pokemon-explorer/tree/over-the-3h-mark

