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


const script = () => {
document.addEventListener('DOMContentLoaded', function() {
  var someModule = someModule();
  someModule.menuHider();
  someModule.mSlider();
  someModule.mFooterDate();
  someModule.mLoadData();
  someModule.mScrollingTop();

});

var someModule = (() =>{
  return{
    menuHider: menuHide(),
    mSlider: slider(),
    mFooterDate: footerDate(),
    mLoadData: loadData(),
    mScrollingTop: scrollingTop()
  }
})();
}
export default script;