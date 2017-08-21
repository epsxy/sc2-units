# SC2 Units

This app has been created for educational purpose. I just wanted to learn Ionic 2 / Angular 2 / Typescript. This app may become available on the Google Store and it is the case, it will be 100% free and add-free. 

## Todo

- [ ] Disclaimer page
- [ ] Home page
- [x] Download images for races
- [ ] Handle special units. Include them?
- [ ] Finalize types and unit page (CSS, Infos to display)
- [ ] Clean model files, add constants and ids for buildings?

## Docker 

### Build 

```
    docker build -t android-docker .
```

### Run the container

```
    docker run -it --privileged --volume=$(pwd):/opt/workspace -p 8100:8100 -p 35729:35729 -p 53703:53703 android-docker
```

* `--privileged` Access the Android device    
* `--volume`  Bind the development repository
* `-p 8100:8100` Bind your host port 42000 to your docker port 8100 (where the ionic app will be deployed) 
* `-p 35729:35729 -p 53703:53703` This ports are required for live-reload. 

## Install Libs

```
    npm install
```

## Disclaimer 

*If there is any copyright infringement, any issue of that kind, please contact me. I do not own any right on Starcraft II or whatsoever and I will remove any content which does not respect your rights.*

### Blizzard

Some ressources (images, informations) of this application have been extracted from [official Blizzard StarCraft® II website](http://eu.battle.net/sc2/fr/game/). I do not own any right on any of them. 

You will found the official Blizzard disclaimer on StarCraft® bellow. 

StarCraft®
©1998 Blizzard Entertainment, Inc. All rights reserved. StarCraft and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.

StarCraft®: Brood War®
©1998 Blizzard Entertainment, Inc. All rights reserved. StarCraft, Brood War and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.

StarCraft® II: Wings of Liberty®
©2010 Blizzard Entertainment, Inc. All rights reserved. Wings of Liberty is a trademark, and StarCraft and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.

StarCraft® II: Heart of the Swarm®
©2013 Blizzard Entertainment, Inc. All rights reserved. Heart of the Swarm and StarCraft are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.

### Liquipedia

Some ressources of this application (images, descriptions, informations, ...) came from [Liquipedia Starcraft Encyclopedia](http://wiki.teamliquid.net/starcraft2/).

## License

The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.