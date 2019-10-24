![IceCreamTaster](public/assets/images/backgrounds/icecream_gh.svg)

---
# Welcome to Ice Cream Taster

Ice Cream Taster is data management application that uses MySQL, Node, Express, Handlebars, and a homemade ORM that is deployed through Heroku!

---
### How It Works

* Ice Cream Taster lets users input or select flavors they'd like to try
* Whenever a user submits a flavor, the app will display the new flavor -- waiting to be devoured
* Each flavor in the waiting area also has a Devour it! button
* When the user devours a flavor, the flavor will move back to the menu selection
* The app stores every flavor in a database, whether devoured or not

---

> [Click Me to Start Sampling the different Flavors!](https://arcane-dusk-00261.herokuapp.com/icecream)

---
### Technologies

> Framework: Zurb Foundation 6
> Deployed using Heroku  
    * gulp 
    * bower 
    * mysql
    * express-handlebars 
    * express 
    * path
---

*File Architecture*
```
    - config
        - connection.js
        - orm.js
    - controllers
        - icecream_controller.js
    - db
        - schema.sql
        - seeds.sql
    - models
        - icecream.js
    - node_modules 
    - public 
        - assets
            - css 
                - foundation.css
                - foundation.min.css
                - motion-ui.css
                - normalize.css
                - style.css
            - images 
                - backgrounds 
                    - (5 image files) 
                - flavours 
                    - (9 image files) 
            - js
                - foundation 
                    - (19 files provided by Foundation)
                - vendor 
                    - (7 files provided by Foundation)
                - foundation.min.js
                - icecream.js
                - script.js
        - views
            - layouts
                - main.handlebars
            - partials
                - icecream
                    - flavour-devoured.handlebars
                    - flavour-not-devoured.handlebars
            - index.handlebars
    - node_modules
    - .env
    - .gitignore
    - bower.json
    - config.codekit3
    - gulpfile.js
    - package.json
    - README.md
    - server.js
```