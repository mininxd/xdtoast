import xdtoast from './xdtoast.js';
// import xdtoast from 'https://unpkg.com/xdtoast@latest/dist/toast.js';
export function randomize(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


function positionToast(pos) {
const postToast = new xdtoast({
  position: pos,
  offsetX: 20,
  offsetY: 20,
  width: 'fit-content',
  gap: 10,
  duration: '.25s',
  time: 1,
  timing: 'ease-out',
  dim: true,
});
postToast.push({
    icon: randomize(icons),
    title: randomize(header),
    content: randomize(content),
    style: randomize(style),
  })
}


let icons = [
  'download','search','close','visibility','star','check_circle', 'radio_button_unchecked','radio_button_checked']
let header = [
  'Welcome',
  'Good Morning',
  'Daily Update',
  'hi',
  'hello',
  'xd',
  'Greetings!',
  'Rise and Shine!',
  'Quick Update'
];

let content = [
  'Here’s your daily toast notification!',
  'Are you prepared for today’s tasks?',
  'Not too shabby, right?',
  'Did you spot the UFO today?',
    'Your morning toast is ready to serve!',
  'Ready to tackle today’s challenges?',
  'Looking good today!',
  'Here’s the latest content update just for you.',
  'This is the content message you’ve received.'
];

let style = [
  'light','dark','success','warning','danger','info'
  ]



dload.addEventListener('click', function() {
  window.location.assign("https://unpkg.com/xdtoast@latest/dist/xdtoast.js")
})

docs.addEventListener('click', function() {
  window.location.assign("https://docs.mininxd.web.id/xdtoast.html")
  })



tryLeft.addEventListener('click', function() {
  positionToast('top-left');
})
tryBLeft.addEventListener('click', function() {
  positionToast('bottom-left');
})
tryRight.addEventListener('click', function() {
  positionToast('top-right');
})
tryBRight.addEventListener('click', function() {
  positionToast('bottom-right');
})
