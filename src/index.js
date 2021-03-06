import './sass/styles.sass';
import { $, $$ } from './modules/bling';

const on = $('.speakerOn');
const off = $('.speakerOff');
const video = $('video');

const bottomOne = $('.bottom__one');
const bottomOneInner = $('.bottom__one-inner');
const bottomTwo = $('.bottom__two');
const bottomNone = $('.bottom__none');

on.on('click', () => {
  on.classList.toggle('speakerNone');
  off.classList.toggle('speakerNone');
  video.muted = false;
  setTimeout(() => {
    off.classList.add('fadeOut');
  }, 1200);
});

off.on('click', () => {
  on.classList.toggle('speakerNone');
  off.classList.toggle('speakerNone');
  video.muted = true;
  // setTimeout(() => {
  //   on.classList.add('fadeOut');
  // }, 1200);
});

bottomOneInner.on('click', () => {
  bottomOne.classList.toggle('bottom__none');
  bottomTwo.classList.toggle('bottom__none');
  $('body').classList.toggle('noScroll');
});

bottomTwo.on('click', () => {
  bottomOne.classList.toggle('bottom__none');
  bottomTwo.classList.toggle('bottom__none');
  $('body').classList.toggle('noScroll');
});
