---
title : Hosting
sidebarDepth: 2
---

## init [text-editor]
   Synix needs to be initialized before it's used. It also usses a default text-editor for opening files and folders
#### Text Editors supported:
1) Visual Studio Code (`code`)[recomended]
2) Sublime Text 3 (`subl`)
3) Atom (`atom`)

#### To initialize use `init` command:
``` bash
$ sx init code
# or sx init subl
# or sx init atom
```

## ls
   Synix needs to be initialized before it's used. It also usses a default text-editor for opening files and folders
### Text Editors supported:
1) Visual Studio Code (`code`)[recomended]
2) Sublime Text 3 (`subl`)
3) Atom (`atom`)

### To initialize use `init` command:
``` bash
$ sx init code
# or sx init subl
# or sx init atom
```

------
<vuenet-One/>

After the global installation of vuepress you follow the first 3 steps given in the [official vuepress docs](https://vuepress.vuejs.org/) which are
```bash 
# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
vuepress dev

# build to static files
vuepress build
```
after which your folder structure should be similar to
```
.
|-- README.md
|-- .vuepress
    |-- dist
```
The `dist` folder inside the `.vuepress` folder contains all the static code files required for the site, hence this folder can be hosted to any static-site hoster like [Netlify](https://www.netlify.com/).Now we will see how to deploy the setup where the dist folder is automatically generated and hosted.

## Pre-requisites
### Github repo
### Netlify account
- You can login with your github account or signup at [netlify](https://www.netlify.com/)
### Vuepress as local dependency
- At the root of your project open cmd and type `npm init` and give the git url when it asks then type `npm i vuepress`

## Step 1  
- Push your project to Github ignoring node-modules with a `.gitignore`

## Step 2 
- Go to netlify and click on "New site from Git"
