---
sidebar: false
title: Contribute
---

# Contribute

Make a new issue to contribute and we will look into it and will assign you   
Always send your pull request targeting the `default` branch unless specified   


Organisation : [https://github.com/synixjs](https://github.com/synixjs)   
Github : [https://github.com/synixjs/synix](https://github.com/synixjs/synix)   
Documentation Repository : [https://github.com/synixjs/synix-docs](https://github.com/synixjs/synix-docs)   

## File structure

```bash
.
├── commands
│   ├── cat.js
│   ├── cp.js
│   ├── edit.js
│   ├── exportFile.js
│   ├── help.js
│   ├── init
│   │   ├── atom.json
│   │   ├── code.json
│   │   ├── init.js
│   │   └── subl.json
│   ├── ls.js
│   ├── misc
│   │   ├── clone.js
│   │   └── sync.js
│   ├── mkdir.js
│   ├── mkpro.js
│   ├── mv.js
│   ├── open.js
│   ├── pwd.js
│   ├── rm.js
│   ├── sxcustom.js
│   ├── sxglobal.js
│   ├── touch.js
│   └── version.js
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
├── sxconfig.json
└── sx.js
```
 - Every command is present as a `.js` file with the same name as the command   
 - The `sx.js` is the main file that runs globally   
 - The `init` command has it's own directory called `init` which has the json files of the text-editor configs   
 - The `sxconfig.json` is the base config file of the synix-cli   
 - The `misc` folder contains all the miscellaneous commands   
 - The `exportFile.js` is used to collect the commands from the directory and export them which will be then imported in the `sx.js`   

### Local build

There is a develop branch of synix (the `default` branch) which is used to test the commands before implementing it in the master branch

```bash
$ npm link
# in the root
# will link synix-develop globally
# this gives sxd command not sx

$ npm unlink
# in thr root
# will remove it globally

```
Once you get the `sxd` command everything else is same.

>Linux users please don't allow `sudo` to run without password
