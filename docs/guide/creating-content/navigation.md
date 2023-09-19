---
outline: 'deep'
---
# Navigation
The K-scaffold offers several ways to create navigation elements within your sheet. This functionality does require that you use the [kscript](/reference/pug/kscript.html) mixin in your pug file as the navigation is powered by javascript sheetworkers.
## Tabbed Layouts
Many Roll20 character sheets utilize a tabbed layout to split content into discrete sections (e.g. a Core page, a spells page, and an NPC page). The `tabs` and `tab` mixins allow you to easily create these layouts with a defined `nav` element and content that is displayed when a given tab is active.
```pug
+tabs({name="my tabs"})
  +tab({name:'settings'})
    //- settings content here, or include a _settings.pug file
  +tab({name:'pc'})
    //- pc content here, or include a _pc.pug file
```
The above code will create a tabbed layout with two possible display modes of the settings page or the PC page. This code currently has no tab active when the sheet is first opened, but will have remember which tab is open each time the sheet is opened.
### Setting the default tab
To set the default active tab, you pass the defaultActiveTab argument in the tabs object:
```pug
+tabs({name="my tab",defaultActiveTab:'settings'})
  +tab({name:'settings'})
    //- settings content here, or include a _settings.pug file
  +tab({name:'pc'})
    //- pc content here, or include a _pc.pug file
```
This will set the active tab when a sheet is first opened to the settings tab. After that first opening, the sheet will remember which tab was opened last and will open that tab instead of the `defaultActiveTab`.
### Non Persistent Tab
Occassionally, you need to create a tabbed layout that does not remember the active tab. The tabs mixin can handle this as well. Just pass the `persistent` argument on the tabs object:
```pug
+tabs({name="my tabs",defaultActiveTab:'display',persistent:false})
  +tab({name:'display'})
    //- display content here, or include a _display.pug file
  +tab({name:'character creator'})
    //- character creator content here, or include a _character-creator.pug file
```
This will create a tab layout where the display mode is always what is shown when the sheet is opened. And then the user can navigate to the character creator if needed.
### Custom Tab Containers
You can also customize what container the content of each tab is displayed in by passing the `container` argument on the tab object. This is a string that specifies what html element to wrap the content of that tab in:
```pug
+tabs({name="my tabs"})
  +tab({name:'settings',container:'article'})
    //- settings content here, or include a _settings.pug file
  +tab({name:'pc',container:'section'})
    //- pc content here, or include a _pc.pug file
```
As shown here, you can also use different containers for each tab. Note that while the container argument is just a string, it needs to be the name of a valid html element. It is recommended to use elements that are `display:block;` by default, and using semantic html, the `article` or `section` element should be specified. By default tab content is contained in a basic `div`.
### Custom Tab Buttons
You can also customize the tab buttons themselves using the `button` argument on the tab object. This is the same object that is used by the [`button`](/reference/pug/buttons.html) mixin. However, the name property should **not** be specified here as the tab functionality relies on the button name being related to the tab's container name. You can however add additional classes or `triggeredFuncs` to be run when the tab button is clicked.
```pug
+tabs({name="my tabs"})
  +tab({name:'settings',container:'article',button:{trigger:{triggeredFuncs:['toggleTabButtons']}}})
    //- settings content here, or include a _settings.pug file
  +tab({name:'pc',container:'section',button:{trigger:{triggeredFuncs:['toggleTabButtons']}}})
    //- pc content here, or include a _pc.pug file
```
These tabs will call the normal tab triggered function and then will call our custom function `toggleTabButtons`. This is useful if you want to change which buttons are visible after navigation or if you want to have other side effects of navigating. Most properties of the trigger argument can be used without issue, but the `listenerFunc` trigger property will simply be ignored as the tab mixin will overwrite it.
## Modals
Guide coming soon