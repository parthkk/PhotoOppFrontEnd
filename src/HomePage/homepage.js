import React from "react";
import "./homepage.css";
import world from "./world.gif";

// the homepage component
function Homepage() {
  return (
    <div>
      <div className="middle">
        <img src={world} alt="the world" />
      </div>
      <div class="overlay"></div>
      <div class="text">
        <div class="wrapper">
          <div id="L" class="letter">
            S
          </div>
          <div class="shadow">S</div>
        </div>
        <div class="wrapper">
          <div id="I" class="letter">
            H
          </div>
          <div class="shadow">H</div>
        </div>
        <div class="wrapper">
          <div id="G" class="letter">
            A
          </div>
          <div class="shadow">A</div>
        </div>
        <div class="wrapper">
          <div id="H" class="letter">
            R
          </div>
          <div class="shadow">R</div>
        </div>
        <div class="wrapper">
          <div id="T" class="letter">
            E
          </div>
          <div class="shadow">E</div>
        </div>
        <div class="wrapper">
          <div id="S" class="letter"></div>
          <div class="shadow"></div>
        </div>
        <div class="wrapper">
          <div id="N" class="letter">
            Y
          </div>
          <div class="shadow">Y</div>
        </div>
        <div class="wrapper">
          <div id="E" class="letter">
            O
          </div>
          <div class="shadow">O</div>
        </div>
        <div class="wrapper">
          <div id="S" class="letter">
            U
          </div>
          <div class="shadow">U</div>
        </div>
        <div class="wrapper">
          <div id="Stwo" class="letter">
            R
          </div>
          <div class="shadow">R</div>
        </div>
        <div class="wrapper">
          <div id="S" class="letter"></div>
          <div class="shadow"></div>
        </div>
        <div class="wrapper">
          <div id="S" class="letter">
            M
          </div>
          <div class="shadow">M</div>
        </div>
        <div class="wrapper">
          <div id="Stwo" class="letter">
            O
          </div>
          <div class="shadow">O</div>
        </div>
        <div class="wrapper">
          <div id="S" class="letter">
            M
          </div>
          <div class="shadow">M</div>
        </div>
        <div class="wrapper">
          <div id="Stwo" class="letter">
            E
          </div>
          <div class="shadow">E</div>
        </div>
        <div class="wrapper">
          <div id="S" class="letter">
            N
          </div>
          <div class="shadow">N</div>
        </div>
        <div class="wrapper">
          <div id="S" class="letter">
            T
          </div>
          <div class="shadow">T</div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
