# Toilet Paper Crisis
## Design Notes

A website dedicated to the glorious irony of toilet paper being sold out during the covid-19 crisis

**John Webster**

Github : https://github.com/johnlobster

LinkedIn : https://www.linkedin.com/in/johnwwebster/

Portfolio : https://johnlobster.github.io/portfolio/

#### Favicon generation

Starting with png

#### Loading image

Aim was for user to get first image as fast as possible. Shows spinning toilet roll. All styles, html in index.html

#### Deploy testing with github pages

Alter github settings, allow publishing to gh-pages branch

```
yarn add gh-pages
gh-pages -d build
```

Basic build requires server
yarn build
```
"build": "rm -rf build && react-scripts build",
"predeploy": "yarn build",
"deploy:gh": "gh-pages -d build",
```

