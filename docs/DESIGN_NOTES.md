# Design Notes for Toilet Paper Crisis 

A website dedicated to the glorious irony of toilet paper being sold out during the covid-19 crisis

https://tpapercrisis.com

Source code
https://github.com/johnlobster/tpcrisis

**John Webster**

Github : https://github.com/johnlobster

LinkedIn : https://www.linkedin.com/in/johnwwebster/

Portfolio : https://johnlobster.github.io/portfolio/

#### Development philosophy

* use sprint approach (Agile philosophy) to create and release working code all the time
* Kanban planning approach using Trello. Also contains notes for writing content
* Prioritize for each release and create a checklist for release
* Mobile first, reactive UI
* use `react`, `jsx`, `sass`, `css-modules` to create a structured, modular design with good "separation of concerns"
* use existing tools, such as bootstrap to simplify styling and `create-react-app` to handle building,
bundling and development testing 
* Static site, so no content management system (CMS) such as Wordpress

#### Continuous deployment

Deployed using a Netlify server, with a hook into github that updates the site when pushed to branch `release`

I don't use the Netlify build, just copy across static files - see `release:netlify` script detailed in "fast first render" section

#### Favicon generation

#### Deployment optimizations

- remove source maps
- reduce image and gif sizes

#### Loading page

- spinning toilet roll(png) - should inline instead of loading from a file

#### Fast first render

One issue with single page apps, and react in particular is that there is a lot of code to be loaded before first render.
There is data to show that if first render is too slow, then users will not wait and will go somewhere else. So I wanted
something simple to show on screen as soon as possible. I did this by having the complete html and css for a loading spinner
in `index.html`, so that this would render whilst other files were being loaded. This is not supported by `create-react-app`
so I used the following methodology

1. Put all code for first render in `index.html`. Includes html, css and Javascript if required.
1. Use `INLINE_RUNTIME_CHUNK=false` during build to prevent webpack inserting its own Javascript into `index.html`
1. Script (perl) used in build script to change `index.html` to add `defer` to every external `<script>` and `media="printer"` to every stylesheet `<link>`
1. code in `index.tsx` to identify stylesheets with `media="printer"` and change to `media="all"`
1. deploy script in `package.json` to build, run post build script (3,4), push to `github` on `release` branch

from `package.json`
```
"prebuild": "rm -rf build",
"build": "cross-env INLINE_RUNTIME_CHUNK=false react-scripts build && echo 'to run server: yarn serve build'",
"release:netlify": "yarn prebuild && yarn build && yarn postbuildPerl && yarn gh-pages -d build -b release &&  echo 'pushed to Netlify: https://thirsty-newton-960ddf.netlify.app/'",
```

`cross-env` is a cross environment environment variable setter

`gh-pages` is intended for pushing to github pages, but can push to any branch

`postbuildPerl.pl` is a perl script to post-process `index.html`. I chose perl because I have written 
similar scripts many times

#### Testing using github pages

This was tried for initial testing but didn't work. For some reason github pages and `react-router` could
not work together, with inconsistent navigation

#### TpLink component

This started off as a wrapper around `<Link>` to make styling consistent and modular. In the end it was able to 
to scroll to items on a page and create external anchors directly, instead of using `<Link>`

#### Error messages from lambda contributions server

User sees "cute" error messages, which correspond to different types of errors, such as timeout 


