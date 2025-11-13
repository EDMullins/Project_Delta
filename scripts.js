// app.js (ES module)
const badRoot = document.getElementById('bad-ad-root');
const goodRoot = document.getElementById('good-ad-root');
const startBad = document.getElementById('start-bad');
const startGood = document.getElementById('start-good');
const resetBad = document.getElementById('reset-bad');
const resetGood = document.getElementById('reset-good');

//-----------------------------------------------------------------------------
// helper to create elements
// Input: tag (string), props (object), children (array of elements or strings)
// Output: DOM element
function element(tag, props = {}, ...children){
  const e = document.createElement(tag);
  Object.entries(props).forEach(([k,v]) => {
    if(k === 'class') e.className = v;
    else if(k === 'html') e.innerHTML = v;
    else e.setAttribute(k,v);
  });
  children.forEach(c => { if(typeof c === 'string') e.appendChild(document.createTextNode(c)); else if(c) e.appendChild(c); });
  return e;
}

//-----------------------------------------------------------------------------
// FlowRunner: manages ad flow for a given variant (bad/good)
// Methods: start(), reset(), recordClick(), end(), and show screen methods
class FlowRunner {
  constructor(root, variant){
    this.root = root;
    this.variant = variant; // 'bad' | 'good'
    this.reset();
    this.clicks = 0;
    this.startTime = null;
    this.ended = false;
  }
  reset(){
    this.clicks = 0;
    this.startTime = null;
    this.ended = false;
    this.root.innerHTML = '';
  }
  start(){
    this.reset();
    this.startTime = performance.now();
    if(this.variant === 'bad') {
        this.showBadScreen1();
    }
    else {
        this.showGoodScreen();
    }
  }
  recordClick(){
    this.clicks++;
  }
  end(){
    if(this.ended) return;
    this.ended = true;
    const time = performance.now() - this.startTime;
    console.log(`[${this.variant}] exit: clicks=${this.clicks}, timeMs=${Math.round(time)}`);
  }

  // --- BAD screens ---
  // bad flow: deceptive hidden close, opens app store first
  showBadScreen1(){
    const screen = element('div',{class:'ad-screen'}, element('div',{html:'<h3>Sponsored</h3><p>Play now</p>'}));
    const store = element('button',{class:'store-button'}, '');
    screen.appendChild(store);
    this.root.appendChild(screen);

    let t = 3;
    const interval = setInterval(() => {
      t--;
      if(t <= 0){
        clearInterval(interval);
        store.textContent = '>> Open Store';
        store.style.backgroundColor = 'rgba(60, 60, 60, 0.6)';
        store.addEventListener('click', () => {
          this.recordClick();
          this.showBadStore();
        });
      } else {
        store.textContent = null;
      }
    }, 1000);
  }
  // bad flow continued: app store screen with unintuitive done button to return
  showBadStore(){
    this.root.innerHTML = '';
    const screen = element('div',{class:'ad-screen dark'}, element('div',{html:'<h3>Welcome to App Store</h3><p>Download game here!</p>'}));
    const downloadBtn = element('button',{}, 'Get');
    const doneBtn = element('button',{class:'done-button'}, 'Done');
    doneBtn.addEventListener('click', () => {
      this.recordClick();
      // finally a second-level close
      this.showBadScreen2();
    });
    downloadBtn.addEventListener('click', () => {
      this.recordClick();
      // pretend this would do something; finish flow
      this.end();
      //print final screen and show clicks and time
      this.root.innerHTML = `<div class="ad-screen"><div>Simulated install path — flow ended</div><div>Clicks: ${this.clicks}</div><div>Time: ${Math.round(performance.now() - this.startTime)} ms</div></div>`;
    });
    screen.appendChild(element('div', {}, downloadBtn, doneBtn));
    this.root.appendChild(screen);
  }
  // bad flow continued: back to ad with another timed hidden close.
  showBadScreen2(){
    this.root.innerHTML = '';
    const screen = element('div',{class:'ad-screen'}, element('div',{html:'<h3>Sponsored</h3><p>Play now</p>'}));
    const exit = element('button',{class:'close-ghost'}, '');
    screen.appendChild(exit);
    this.root.appendChild(screen);

    let t = 3;
    const interval = setInterval(() => {
      t--;
      if(t <= 0){
        clearInterval(interval);
        exit.innerHTML = '<i class="bi bi-x"></i>';
        exit.style.backgroundColor = 'rgba(36, 36, 36, 0.6)';
        exit.style.border = '1px solid #000';
        exit.addEventListener('click', () => {
            this.recordClick();
            this.end();
            this.root.innerHTML = `<div class="ad-screen"><div>Returned to the app</div><div>Clicks: ${this.clicks}</div><div>Time: ${Math.round(performance.now() - this.startTime)} ms</div></div>`;
        });
      } else {
        exit.textContent = null;
      }
    }, 1000);
  }

  // GOOD flow: one clear close and one visible skip timer
  showGoodScreen(){
    const screen = element('div',{class:'ad-screen'}, element('div',{html:'<h3>Sponsored</h3><p>Play now</p>'}));
    // prominent close button
    const skip = element('button',{class: 'skip-button'}, 'Skip in 3');
    screen.appendChild(skip);
    this.root.appendChild(screen);

    // countdown then enable skip
    let t = 3;
    const interval = setInterval(() => {
      t--;
      if(t <= 0){
        clearInterval(interval);
        skip.textContent = 'Skip >>';
        skip.addEventListener('click', () => {
          this.recordClick();
          this.end();
          this.root.innerHTML = `<div class="ad-screen"><div>Returned to the app</div><div>Clicks: ${this.clicks}</div><div>Time: ${Math.round(performance.now() - this.startTime)} ms</div></div>`;
        });
      } else {
        skip.textContent = `Skip in ${t}`;
      }
    }, 1000);
  }
}

// instantiate
const badRunner = new FlowRunner(badRoot, 'bad');
const goodRunner = new FlowRunner(goodRoot, 'good');

startBad.addEventListener('click', () => badRunner.start());
startGood.addEventListener('click', () => goodRunner.start());
resetBad.addEventListener('click', () => badRunner.reset());
resetGood.addEventListener('click', () => goodRunner.reset());