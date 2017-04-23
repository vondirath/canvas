
# Javascript Based Canvas.
What do I need to run it?  
- Any browser!  
- No special dependencies!
- Jquery included but not required or used!

How do I use it?  
 - In the Javascript file scrips.js you will see Settings which you can modify as you see fit.
 - canvas = the declared canvas either use a jQuery selector or vanilla selector
 - canvasHeight = Declared Height.
 - canvasWidth = Declared Width. ( Note: these do not create the canvas element they only 
        declare a variable. Going to fix this in upcoming update)
 - island, moon, clouds = Image file names. See known issues for SVG files.
 - star count, color, radius = Self explanitory. Colors are Hexedecimal but can be 
 modified to any valid html rendered color Example: RGB white etc. just fill array with string for css property
 
 Known Issues:
 - Firefox does not like SVG files to only have viewbox declaration. Please add it if you SVG files are not included. 
 example:
```
 <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
```
 change to
```
 <svg width="500" height="500" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
```
