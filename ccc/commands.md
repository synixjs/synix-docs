---
title : Commands
sidebarDepth: 2
---

## init
<b>*Args | </b> text-editor: `String`   

Synix needs to be initialized before it's used. It also uses a default text-editor for opening files and folders   


#### Text Editors supported:
1. Visual Studio Code (`code`)[recomended]
2. Sublime Text 3 (`subl`)
3. Atom (`atom`)

#### To initialize use `init` command:
``` bash
$ sx init code
# or sx init subl
# or sx init atom
```

## ls
   Lists the contents of the present working directory along with the hidden one, only `.` and `..` are not printed cause it's obvious they exists.

```bash
$ sx ls # lists the contents
```

## pwd
   Prints the present working directory path in the terminal/cmd.

```bash
$ sx ls # lists the contents
```

## cat
<b>*Args | </b> filename: `String`   

This command helps to view the file in the terminal/cmd

``` bash
$ sx cat app.js 
# prints the contents of app.js onto terminal

```

## cp
<b>*Args | </b> copy-from-filename: `String` | copy-to-filename: `String`   

This command trnasfers the file contents from one file to another

``` bash
$ sx cp cp-from.js cp-to.js
# copies contents from `cp-from.js` to `cp-to.js`

```

## mv
<b>*Args | </b> copy-from-filename: `String` | copy-to-filename: `String`   

This command moves the file and if the other one dose'nt exits it will create it for you   
This command can also be used to rename a file

``` bash
$ sx mv mv-from.js mv-to.js
# `mv-from.js` would be converted to `mv-to.js`

```
## touch
<b>*Args | </b> name of the file: `String`   

This commands creates the file with the specified name in the current working directory

``` bash
$ sx touch awesome.js
# the file `awesome.js` would be created

```

## mkdir
<b>*Args | </b> name of the folder/directory: `String`   

This commands creates a directory/folder with that specified name

``` bash
$ sx mkdir desk
# creates `desk` folder

```

## mkpro
<b>*Args | </b> name of the folder/directory: `String`   

This commands creates a directory/folder with that specified name and opens it in your text-editor as a project.   
This text-editor is the same text-editor with which you initialized synix running `init` command

``` bash
$ sx mkdir my-project
# creates `my-project` folder and opens in the text-editor as a project

```

## open
<b>*Args | </b> name of the folder/directory: `String`   

This commands opens the specfied folder/directory in your text-editor as a project

``` bash
$ sx open pro1
# opens `pro1` as a project in your text-editor

$ sx open pro1 pro2
# opens `pro2` folder which is inside `pro1` folder as a project in your text-editor

```
## rm
<b>*Args | </b> name of the folder/directory or filename: `String`   

This commands removes the directory or the file specified

``` bash
$ sx ls
.git
a
b
app,js
$ sx rm app.js
# app.js will be deleted
$ sx rm a
# folder a will be deleted

```
## clone

> You need to have [git](https://git-scm.com/) installed to run this command

<b>*Args | </b> url to clone from fork: `String` | url to set the upstream: `String`   
<b>*Optional Args | </b> name of the upstream: `String`   

This command clones the repository and sets the upstream variable for you   
If the name of the upstream is given then it replaces it with that specified name   

``` bash
$ sx clone https://fork/url.git https://upstream/url.git
# clones and sets the `origin` and `upstream` remote variables

$ git remote
origin # set to https://fork/url.git
upstream # set to https://upstream/url.git

$ sx clone https://fork/url.git https://upstream/url.git project 
# if optinal parameter is passed

$ git remote
origin # set to https://fork/url.git
project # set to https://upstream/url.git

```

## sync

> You need to have [git](https://git-scm.com/) installed to run this command

<b>*Args | </b> upstream branch name: `String` | origin branch name: `String`      

This command syncs the upstream repository with local and the local repository with origin and keeps all the three in sync

> The upstream variable must be set as `upstream` to run this command

``` bash
$ sx sync
# This will sync the master of upstream,local,origin repositories

$ sx sync develop
# This will sync the develop branch of upstream with the master of local and origin

$ sx sync up-branch or-branch
# This will sync the `up-branch` branch of upstream
# with the `or-branch` of origin and your local branch

```

## des,doc and dow

These are three handy commands which will help you in opening desktop,documents and downloads from your command-line

```bash
$ sx des
# opens desktop in file-manager

$ sx doc
# opens documents in file-manager

$ sx dow
# opens downloads in file-manager
```

## help

This command helps you :smile:

``` bash
$ sx help
```

---

## Other sections

Also check the [customize](/ccc/customize.html) to get a better understanding of the tool and how to add your own commands and for contributors we have a dedicated section [here](/ccc/contribute.html)
