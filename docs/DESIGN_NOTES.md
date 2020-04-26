# Toilet Paper Crisis
## Design Notes

A website dedicated to the glorious irony of toilet paper being sold out during the covid-19 crisis

**John Webster**

Github : https://github.com/johnlobster

LinkedIn : https://www.linkedin.com/in/johnwwebster/

Portfolio : https://johnlobster.github.io/portfolio/

#### Favicon generation

Starting with png

#### Deployment optimizations

- remove source maps

#### Loading page

- spinning toilet roll(png) - should inline instead of loading from a file
- background color (linen)

#### Fast first render

1. Put all code for first render in `index.html`. Includes html, css and Javascript if required.
2. Use `INLINE_RUNTIME_CHUNK=false` during build to prevent webpack inserting its own Javascript into `index.html`

Issues
- build has unique names confused, can't then load js, css files. Not a consistent problem


#### Testing using github pages

This was useful for initial testing and developing the flow to make the first render fast.

Added following to `package.json`
```
"prebuild": "rm -rf build",
"build": "cross-env INLINE_RUNTIME_CHUNK=false react-scripts build",
"deploy:gh": "yarn prebuild && yarn build && gh-pages -d build",
```
Requires `gh-pages` and `cross-env`. `cross-env` is a cross environment environment variable setter

Access at
```
https://johnlobster.github.io/tpcrisis/
```
Use github settings to enable github pages and set to gh-pages branch

Issues

1 github pages doesn't quite work right for routing, it starts at
```
/tpcrisis
```
so the first thing the user sees is the 404 page. After that it routes ok as it is going through `react-router`, not the browser

2 `index.html` loads files from `/static`, would need to change to `/tpcrisis/static` 
Don't seem to have this problem on mobile ...

