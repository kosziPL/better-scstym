// -- ASSETS
import pfp from "./assets/pfp.png";

import menu from "./assets/menu.svg";
import play from "./assets/play.svg";
import home from "./assets/home.svg";
import discover from "./assets/discover.svg";
import library from "./assets/library.svg";
import settings from "./assets/settings.svg";
import previous from "./assets/previous.svg";
import playArrow from "./assets/play_arrow.svg";
import pause from "./assets/pause.svg";
import next from "./assets/next.svg";
import shuffle from "./assets/shuffle.svg";
import repeat from "./assets/repeat.svg";
import repeatOne from "./assets/repeat_one.svg";
import playbackRate from "./assets/playback_rate.svg";
import volumeUp from "./assets/volume_up.svg";
import volumeOff from "./assets/volume_off.svg";
import more from "./assets/more.svg";


// -- STYLESHEETS
import './App.css';

// -- SOLIDJS
import { createSignal } from "solid-js";

// -- COMPONENTS
import { 
  SideBarOption,
  type SideBarOptionProps
} from "./SideBarOption";

importGoogleFont(
  "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
)

const [sideBarOpen, setSideBarOpen] = createSignal(true);

const toggleSideBar = () => {
  setSideBarOpen(open => !open)
}

function App() {
  return (
    <>
      <nav>
        <div class="left">
          <img src={menu} alt="Show menu" class="menu"/>
          <div class="app-brand">
            <img src={play} alt="App logo" />
            <p class="scstym">Some Cool Stuff To Your Music</p>
          </div>
        </div>
        <div class="right">
          <img src={pfp} alt="Account logo" />
        </div>
      </nav>
      <div class="app">
        <aside>
          <div class="top">
            <SideBarOption name="Home" 
                           icon={home} 
                           onClick={() => console.log("HOME")} />
            <SideBarOption name="Discover" 
                           icon={discover} 
                           onClick={() => console.log("DISCOVER")} />
            <SideBarOption 
                           name="Library" 
                           icon={library} 
                           onClick={() => console.log("LIBRARY")} />
          </div>
          <div class="bottom">
            <SideBarOption 
                           name="Settings" 
                           icon={settings} 
                           onClick={() => console.log("SETTINGS")} />
          </div>
        </aside>
        <main>

        </main>
        <footer class="player">
          <div class="navigation">
            <button class="previous"><img src={previous} alt="Previous" /></button>
            <button class="playpause"><img src={playArrow} alt="Play" /></button>
            <button class="next"><img src={next} alt="Next" /></button>
          </div>
          <div class="song">
            <div class="cover">
              <img src={pfp} alt="Track cover" />
            </div>
            <div class="title-artist">
              <p class="title">Title</p>
              <p class="artist">Jkb & Koszi</p>
            </div>
          </div>
          <div class="prefs">
            <button><img src={volumeUp} alt="Volume" /></button>
            <button><img src={shuffle} alt="Shuffle" /></button>
            <button><img src={repeat} alt="Repeat" /></button>
            <button><img src={playbackRate} alt="Playback rate" /></button>
            <button><img src={more} alt="More" /></button>
          </div>
        </footer>
      </div>
    </>
  )
}

function importGoogleFont(url: string): void {
  const link = document.createElement("link");

  link.rel = "stylesheet";
  link.href = url;

  document.head.appendChild(link);
}

export default App
