In deze repo wordt de huisstijl van data.amsterdam.nl bewaard en bewaakt.

# How to use in a project
npm install amsterdam-stijl

## Ams-stijl.css ans ams-ma.css
Include 
`amsterdam-stijl/dist/css/ams-stijl.css` or
`amsterdam-stijl/dist/css/ams-map.css`
in the project 

### Amsterdam-components and layout
See on https://patternlab-amsterdam.infoprojects.nl/?p=all the available classes and patterns for the components.

### Grid layout 
The layout is done with bootstrap 4. See https://getbootstrap.com/docs/4.1/layout/grid/ for reference.

### How to use sass variables in the project 
Import one of more files form `node_modules/stijl/dist/scss/` 

## Fonts
The fonts are defined in `node_modules/stijl/dist/fonts`. 
In the css is the path to the fonts relative `../fonts/`. Take this into acount when using this package.

# Contribute
* run `npm install`
* run `npm build`

**De `/raw-source` folder is deprecated, refereer hier niet meer naar in nieuwe projecten en update de bestaande projecten zsm zodat deze verwijzen naar de `/dist` folder**