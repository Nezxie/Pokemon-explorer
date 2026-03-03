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

What i was able to implement originaly:
- getting pokemon data on init
- load more option with paging set at 25
- fillter pills with correct colors
- fillter pills store selected fillters (just not visually yet)

Now I have also added:
- search bar functionality with debouncing
- filtering data locally
- basic styling to roughly match the design (it's not pixel perfect and I wasn't really aiming for that) + dark mode should not break the design now
- text for empty list
- guards for race conditions

What is still lacking:
- switching between query mode and infinite load mode causes bugs that needs pinpointing
- better styling, animations
- responsiveness, I guess MUI design is not mobile friendly out of the box

See recordings of the solution below:
![dark_theme](https://github.com/user-attachments/assets/5f1228f3-4adc-4655-b389-3ad84800a23b)
![light_theme](https://github.com/user-attachments/assets/01d3f4ab-1d4a-4e75-b3cb-364a048125d6)

