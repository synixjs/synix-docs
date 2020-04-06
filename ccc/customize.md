---
sidebar: false
title: Customize
---

# Customize

## edit
   Opens the base config file in the edit mode

```bash

$ sx edit
# opnes config file

```

#### The file looks something like this

```json
{
    "Globals": [{
            "des": "path/to/your/desktop"
        },
        {
            "dow": "path/to/your/downloads"
        },
        {
            "doc": "path/to/your/documents"
        }
    ],
    "Text_editor": [{
            "editor_name": "Name of your text-editor"
        },
        {
            "command": "Text-editor command"
        }
    ],
    "Custom": [
        {}
    ]
}
```

### If you add a path in the globlas array synix will automatically detect it and open the path in file-manager
#### For example
```json
{
    "Globals": [{
            "des": "path/to/your/desktop"
        },
        {
            "dow": "path/to/your/downloads"
        },
        {
            "doc": "path/to/your/documents"
        },
        {
            "project": "path/to/my/project"
        }
    ],
    "Text_editor": [{
            "editor_name": "Name of your text-editor"
        },
        {
            "command": "Text-editor command"
        }
    ],
    "Custom": [
        {}
    ]
}
```

### Now 
```bash
$ sx project
# Open the project in the file manager
```

### The Custom array is for custom commands
#### For example
```json
{
    "Globals": [{
            "des": "path/to/your/desktop"
        },
        {
            "dow": "path/to/your/downloads"
        },
        {
            "doc": "path/to/your/documents"
        }
    ],
    "Text_editor": [{
            "editor_name": "Name of your text-editor"
        },
        {
            "command": "Text-editor command"
        }
    ],
    "Custom": [
        {
            "me": "cd path/to/project && code ."
        }
    ]
}
```
#### Now

```bash
$ sx me
# Open the folder as a project in visual studio code
```

### Find us on [Github](https://github.com/synixjs)

### To contribute see [this](/ccc/contribute.html) section