# The "Conway's Game of Life" Project ***by Dr. Nord***
The famous **Game of Life** is a cellular automaton invented in 1970 by *John Horton Conway* - the British mathematician. It is a zero-player game - the initial state fully determines the game evolution. No further input is required.

Copyright (c) 2021 Dr. Nord

[![Visits][badge_visits]][repo_readme]

## Getting started

### Prerequisites
Make sure to use a modern browser (desktop or mobile) with WebGL support (for now it is used only for visualization, not for GPU computations).

### Running the game
Simply open the [Game-URL][page_game_of_life], the game will run on page load.  
Tap on the game field to restart, tap-and-move pointer around to evolve (try when paused).  
Have fun!

### Game settings
The Game runs on page load automatically. The initial game field size is determined by a browser's tab client area and can be changed along with other game settings, which are consolidated under the Slider menu (located top right ).

The Sliders menu unfolds:
- The Simulation speed slider;
- The Play/Pause button;
- The Restart button;
- The Zoom slider, The Zoom-in and Zoom-out buttons which act on the game field;
- The Fit-field button changes the game field size by fitting it into the free client area and restarts the game;
- The game info button pops-up basic information;
- The Game settings button (described in the next paragraph);
- The Fullscreen and Fullwindow switches (the latter hides header and footer);
- The Dark/Light modes switch.  

The Game settings button pops-up the modal window with additional settings:
- The Game field size (width and height), where the quantity of cells on each axis can be set, though the size is not explicitly limited, please be reasonable when you choose it, since the bigger the size, the more CPU resources will be consumed;
- The Initial spawn probability sets the rate of alive cells on the game start, distributed randomly and uniformly, for best experience choose between 0.2 and 0.3;
- The Simulation speed slider settings section limits fastest and slowest values of the speed slider.

## Author and contacts
Supervisor, chief executive: ***Alexander Nord***, aka ***'Dr. Nord'*** - Doctor of Engineering Sciences, Professor   
:e-mail: <nordexium@gmail.com>  
:octocat: https://github.com/DrNord

## License
Dr. Nord's exclusive copyright.
See the [LICENSE.txt][] file for details.

## Acknowledgments
*Dedicated to my beloved Light.* :love_letter:

[LICENSE.txt]: LICENSE.txt

[badge_visits]: https://badges.pufler.dev/visits/drnord/conway-s-game-of-life/?style=flat&labelColor=002860&color=81E3FF
[repo_readme]: https://github.com/DrNord/conway-s-game-of-life

[page_game_of_life]: https://drnord.github.io/conway-s-game-of-life