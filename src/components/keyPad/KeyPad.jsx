import React from "react";
//importing the styles
import "../../styles/components/keyPad/KeyPad.css"

const KeyPad = () => {
  return (
    <section class="keyboard" id="keyboard1">
      <section class="row-1">
        <div class="key w2">
          <div class="first-ch">~</div>
          <div class="second-ch">`</div>
        </div>
        <div class="key w2">
          <div class="first-ch">!</div>
          <div class="second-ch">1</div>
        </div>
        <div class="key w2">
          <div class="first-ch">@</div>
          <div class="second-ch">2</div>
        </div>
        <div class="key w2">
          <div class="first-ch">#</div>
          <div class="second-ch">3</div>
        </div>
        <div class="key w2">
          <div class="first-ch">$</div>
          <div class="second-ch">4</div>
        </div>
        <div class="key w2">
          <div class="first-ch">%</div>
          <div class="second-ch">5</div>
        </div>
        <div class="key w2">
          <div class="first-ch">^</div>
          <div class="second-ch">6</div>
        </div>
        <div class="key w2">
          <div class="first-ch">&amp;</div>
          <div class="second-ch">7</div>
        </div>
        <div class="key w2">
          <div class="first-ch">*</div>
          <div class="second-ch">8</div>
        </div>
        <div class="key w2">
          <div class="first-ch">(</div>
          <div class="second-ch">9</div>
        </div>
        <div class="key w2">
          <div class="first-ch">)</div>
          <div class="second-ch">0</div>
        </div>
        <div class="key w2">
          <div class="first-ch">_</div>
          <div class="second-ch">-</div>
        </div>
        <div class="key w2">
          <div class="first-ch">+</div>
          <div class="second-ch">=</div>
        </div>
        <div class="key w4">Backspace</div>
      </section>
      <section class="row-2">
        <div class="key w3">Tab</div>
        <div class="key w2" id="Q">
          q
        </div>
        <div class="key w2">w</div>
        <div class="key w2">e</div>
        <div class="key w2">r</div>
        <div class="key w2">t</div>
        <div class="key w2">y</div>
        <div class="key w2">u</div>
        <div class="key w2">i</div>
        <div class="key w2">o</div>
        <div class="key w2">p</div>
      </section>
      <section class="row-3">
        <div class="key w4">Caps Lock</div>
        <div class="key w2">a</div>
        <div class="key w2">s</div>
        <div class="key w2">d</div>
        <div class="key w2">f</div>
        <div class="key w2">g</div>
        <div class="key w2">h</div>
        <div class="key w2">j</div>
        <div class="key w2">k</div>
        <div class="key w2">l</div>
        <div class="key w2">
          <div class="first-ch">:</div>
          <div class="second-ch">&#59;</div>
        </div>
        <div class="key w2">
          <div class="first-ch">"</div>
          <div class="second-ch">'</div>
        </div>
        <div class="key w4">Enter</div>
      </section>
      <section class="row-4">
        <div class="key w5">Shift</div>
        <div class="key w2">z</div>
        <div class="key w2">x</div>
        <div class="key w2">c</div>
        <div class="key w2">v</div>
        <div class="key w2">b</div>
        <div class="key w2">n</div>
        <div class="key w2">m</div>
        <div class="key w2">
          <div class="first-ch">&lt;</div>
          <div class="second-ch">,</div>
        </div>
        <div class="key w2">
          <div class="first-ch">&gt;</div>
          <div class="second-ch">.</div>
        </div>
        <div class="key w2">
          <div class="first-ch">?</div>
          <div class="second-ch">/</div>
        </div>
        <div class="key w5">Shift</div>
      </section>
      <section class="row-5">
        <div class="key w3">Ctrl</div>
        <div class="key w2">Win</div>
        <div class="key w3">Alt</div>
        <div class="key w12"> </div>
        <div class="key w3">Alt</div>
        <div class="key w2">Win</div>
        <div class="key w2">Spl</div>
        <div class="key w3">Ctrl</div>
      </section>
    </section>
  );
};

export default KeyPad;
