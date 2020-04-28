import daftcodeImgUrl from './assets/daftcode.png'
import 'bootstrap';
import '../node_modules/glider-js/glider.min.js';
import 'jquery';
import 'popper.js';
import menuHide from './scripts/menu.js'
import slider from './scripts/slider.js';
import footerDate from './scripts/footer-date.js';
import loadData from './scripts/load-data';
import scrollingTop from './scripts/scrolling-top'

document.addEventListener('DOMContentLoaded', function() {
  menuHide();
  slider();
  footerDate();
  loadData();
  scrollingTop();
});
