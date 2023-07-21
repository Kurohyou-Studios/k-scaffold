<div id="top"></div>
<span align="center">

[![Contributors][contributors-shield]][contributors-url] [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url] [![mit License][license-shield]][license-url]

</span>
<span align="center">

[![LinkedIn][linkedin-shield]][linkedin-url] [![Patreon][patreon-shield]][patreon-url]

</span>
<div align=center>
<img src='https://raw.githubusercontent.com/Kurohyou-Studios/k-scaffold/main/K-200.png' align="center">
</div>
<div align="center">
<h3 align="center">K-Scaffold</h3>
<p align="center">

A PUG, JS, and SCSS framework for building custom Roll20 character sheet templates.


<a href="https://kurohyou-studios.github.io/k-scaffold/">View Documentation</a> · <a href="https://github.com/Kurohyou-Studios/k-scaffold/issues">Report Bug</a> · <a href="https://github.com/Kurohyou-Studios/k-scaffold/issues">Request Feature</a>
</p>
</div>
<!-- TABLE OF CONTENTS -->
<details>
<summary>Table of Contents</summary>
<ol>
<li>
<a href="#about-the-project">About The Project</a>
<ul>
<li><a href="#built-with">Built With</a></li>
</ul>
</li>
<li>
<a href="#getting-started">Getting Started</a>
<ul>
    <li><a href="#k-scaffold-pug">K-Scaffold Pug</a></li>
    <li><a href="#k-scaffold-javascript">K-Scaffold Javascript</a></li>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#installation">Installation</a></li>
</ul>
</li>
<li>
  <a href="#usage">Usage</a>
</li>
<li><a href="#roadmap">Roadmap</a></li>
<li><a href="#contributing">Contributing</a></li>
<ul>
<li><a href="#tests">Tests</a></li>
</ul>
<li><a href="#license">License</a></li>
<li><a href="#contact">Contact</a></li>
<li><a href="#acknowledgments">Acknowledgments</a></li>
</ol>
</details>
<!-- ABOUT THE PROJECT -->

## About The Project

This framework simplifies the task of writing code for Roll20 character sheets. It aims to provide an easier interface between the html and sheetworkers with some minor css templates.
<p align="right">(<a href="#top">back to top</a>)</p>

### Built With
- PUG
- JS
- SCSS
<p align="right">(<a href="#top">back to top</a>)</p>
<!-- GETTING STARTED -->

## Getting Started
### K-scaffold PUG
To use the K-scaffold to write the html of your sheet, you will write normal PUG, but using a comprehensive library of components that are frequently used on character sheets. These range from simple mixin versions of standard html elements inputs, textareas, and selects to more complex constructions that generate Roll20 elements or workarounds for limitations of Roll20 character sheets. For full information on the scaffold, read the [pug library documentation](https://kurohyou-studios.github.io/k-scaffold/pug).
<p align="right">(<a href="#top">back to top</a>)</p>

### K-scaffold Javascript
To use the K-scaffold to write your sheetworkers, you will write normal sheetworkers, but using a library of utility functions and sheetworker aliases to supercharge the standard sheetworkers. For full information on the scaffold, read the [sheetworker library documentation](https://kurohyou-studios.github.io/k-scaffold/sheetworkers).
<p align="right">(<a href="#top">back to top</a>)</p>

### Prerequisites
Creating and using a custom character sheet requires a Roll20 pro subscription. If you want to utilize the included testing framework, you will also need to install [vitest](https://vitest.dev/);
### Installation
Install the scaffold via NPM:
```
npm i @kurohyou/k-scaffold
```
<!-- Or use the K-scaffold initializer to create a project structure from scratch:
```
npx @kurohyou/k-init
``` -->
<p align="right">(<a href="#top">back to top</a>)</p>
<!-- USAGE EXAMPLES -->

## Usage

The scaffold simplifies many of the common tasks of creating a Roll20 character sheet and provides constructs to easily create everything from fill to left radio groups to textareas that grow based on the content of their associated Roll20 attribute. To generate a K-scaffold sheet, you will need a pug file, and an scss file.

### Pug

Your main pug file should start with:
```jade
include k-scaffold
//- Your code starts here
```
This will give your pug file(s) access to the K-scaffold mixins and local variables.

### SCSS

Any scss file that you want to use the K-scaffold's mixins in needs to start with:
```scss
@use "k-scaffold" as k;
```

### Build your sheet

To build your sheet, simply run the following command:
```shell
> k-build
```
Alternatively, you can build in watch mode so that the sheet is updated as you make code changes.
```shell
> k-build --watch
OR
> k-build --w
```
This is useful when using the [Roll20 Autocode chrome extension](https://chrome.google.com/webstore/detail/roll20-api-and-sheet-auto/hboggmcfmaakkifgifjbccnpfmnegick) to automatically update the Roll20 sandbox.
<p align="right">(<a href="#top">back to top</a>)</p>
<!-- ROADMAP -->

## Roadmap
See the [open issues](https://github.com/Kurohyou-Studios/k-scaffold/issues) for a full list of proposed features (and known issues).
<p align="right">(<a href="#top">back to top</a>)</p>
<!-- CONTRIBUTING -->

## Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.
If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
<p align="right">(<a href="#top">back to top</a>)</p>

### Tests
The K-scaffold and sheets written with it use the [Vitest testing framework](https://vitest.dev/).

Unit tests are currently written for the following:
- The html, testFramework, and translation generation code
- Parts of the CSS generation generation code
- The K-scaffold's pug helper functions
- All sheetworker utility functions except for the repeating section ordering functions.

Tests for the uncovered sections of code will be written as work progresses. If you wish to contribute, please ensure that no changes break these tests.
<p align="right">(<a href="#top">back to top</a>)</p>
<!-- LICENSE -->

## License
Distributed under the mit License. See [LICENSE.txt](https://github.com/Kurohyou-Studios/k-scaffold/LICENSE.txt) for more information.
<p align="right">(<a href="#top">back to top</a>)</p>
<!-- CONTACT -->

## Changelog
v1.7.2
- Fix readme encoding for sheet.json templating

v1.7.1
- Fix handling of prefixes in action buttons and rollers

v1.7.0
- Added ability to template sheet.json, and instructions property of sheet.json.
  - Instructions can be templated by adding a `readme.md` file to your source directory. This will be converted to sheet.json format and added as the instructions format. If no readme is provided, instructions property will not be set/will use what was in the sheet.json template file.
  - The html and css properties will use the generated html and css file names as their values
  - Works with dynamic directory setting
  - the preview property will use either the value set in the template file or will default to .jpg file named the same as the generated html file.
v1.6.1
- Fixed a crash in watch from the translation template changes.

v1.6.0
- Added the ability to define a translation template file instead of relying on the scaffold to not overwrite manual changes to the generated translation file.

v1.5.7
- Expose setActionCalls function

v1.5.6
- fixes an error where defining a triggeredFunc for a tab would overwrite the default of kSwitchTab

v1.5.5
- Miscellaneous blocks in the tabs mixin are now added to nav instead of at the top of the tabs container.

v1.5.4
- Updated rolltemplate mixin `characterLink` to accept a level argument to customize what level of h1-h6 it uses.
- Updated `characterLink` to use the attributes passed to it via pug.
- Fixed an error in the `select` mixin that prevented `option`s from using custom content.

v1.5.2
- Fixed an error that prevented the scaffold from responding to removal of repeating section rows.
- Fixed an error that caused an empty string to be the first "id" stored for each section.

v1.5.1
- Fixed an error in `orderSection`/`orderSections` that caused rowIDs to be improperly ordered when IDs were a mix of user ordered and unordered IDS. **NOTE** This changes how `orderSection` works. It now returns the ordered array instead of mutating the ID array in place.

v1.4.2
- Fixed an issue that prevented translation automation from handling complex i18n entities like `data-i18n-placeholder`.

v1.4.1
- Add ul element wrapper around nav buttons
- Add ability to specify source url for scripts

v1.3.0
- Fixed an issue that caused the existing key/value pairs of the translation file to be overwritten every time.
- Fixed an issue that prevented some mixins from using passed attributes (e.g. `+text({name:'my-text'}).quick-class`).
- Fixed an issue that prevented attribute backed spans from using the attribute prefix that the user has defined.
- Added a modal mixin

v1.2.3
- Fixed an issue that caused the build to fail on some linux systems.

v1.2.2
- Fixed an issue that caused the watch build mode to ignore dynamic destinations

v1.2.1
- Fixed a dependency issue with node-watch
- Updated readme.

v1.2.0
- Added the ability for dynamic destination directories

v1.1.0
- Added module mixin to Pug Library

v1.0.0
- Soft Launch

## Contact

[Scott Casey](https://kurohyou.github.io/) - [@Kurohyoustudios](https://twitter.com/Kurohyoustudios)

Project Link: [https://github.com/Kurohyou-Studios/k-scaffold](https://github.com/Kurohyou-Studios/k-scaffold)
<p align="right">(<a href="#top">back to top</a>)</p>
<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Riernar](https://github.com/Riernar) has supercharged the efforts to properly organize and pacakage the K-scaffold.
- Thank you to [Keith Curtis](http://www.kacurtis.com/index.html) for the excellent logo assets.

This readme template adapted from the [Best-README-Template](https://github.com/othneildrew/Best-README-Template/blob/master/BLANK_README.md) by [Othneil Drew](https://github.com/othneildrew). Readme generated by [Genme! by Scott Casey](https://github.com/Kurohyou/genme-SC).

<p align="right">(<a href="#top">back to top</a>)</p>
<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Kurohyou-Studios/k-scaffold.svg?style=flat
[contributors-url]: https://github.com/Kurohyou-Studios/k-scaffold/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Kurohyou-Studios/k-scaffold.svg?style=flat
[forks-url]: https://github.com/Kurohyou-Studios/k-scaffold/network/members
[stars-shield]: https://img.shields.io/github/stars/Kurohyou-Studios/k-scaffold.svg?style=flat
[stars-url]: https://github.com/Kurohyou-Studios/k-scaffold/stargazers
[issues-shield]: https://img.shields.io/github/issues/Kurohyou-Studios/k-scaffold.svg?style=flat
[issues-url]: https://github.com/Kurohyou-Studios/k-scaffold/issues
[license-shield]: https://img.shields.io/github/license/Kurohyou-Studios/k-scaffold.svg?style=flat
[license-url]: https://github.com/Kurohyou-Studios/k-scaffold/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/scott-casey-20210398
[patreon-shield]: https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dkurohyoustudios%26type%3Dpatrons&style=flat
[patreon-url]: https://patreon.com/Kurohyoustudios
[product-screenshot]: assets/images/screenshot.png
