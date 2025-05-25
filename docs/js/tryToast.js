import xdtoast from './xdtoast.js';
export function randomize(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function showToast(pos) {
const postToast = new xdtoast({
  position: pos,
  offsetX: 20,
  offsetY: 20,
  width: 'fit-content',
  gap: 10,
  duration: '.25s',
  time: 1.5,
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
  'info',
  'notifications',
  'warning',
  'celebration',
  'bug_report',
  'rocket_launch',
  'bolt',
  'thumb_up',
  'lightbulb',
  'send',
  'download',
  'search',
  'close',
  'visibility',
  'star',
  'check_circle',
  'radio_button_unchecked',
  'radio_button_checked'
  ]

let header = [
  'Welcome',
  'Good Morning',
  'Daily Update',
  'hi',
  'hello',
  'xd',
  'Greetings!',
  'Rise and Shine!',
  'Quick Update',
  'Heads Up!',
  'Notice',
  'New Notification',
  'Just So You Know',
  'Quick Tip',
  'FYI',
  'Happening Now',
  'Hey There!',
  'Ping!',
  'Something Cool'
];

let content = [
  'Here’s something you might like.',
  'You’ve got this!',
  'Just testing the toast system.',
  'This is your moment to shine.',
  'Guess what? This works!',
  'Don’t forget to smile today!',
  'System running smoothly!',
  'New features are live!',
  'A toast a day keeps the bugs away.',
  'Surprise! You clicked it!',
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

let position = [
  "top-left", "top-right", "bottom-left", "bottom-right"
  ]




dload.addEventListener('click', function() {
  window.location.assign("https://unpkg.com/xdtoast@latest/dist/xdtoast.js")
})

docs.addEventListener('click', function() {
  window.location.assign("https://docs.mininxd.web.id/xdtoast.html")
  })



tryLeft.addEventListener('click', function() {
  showToast('top-left');
})
tryBLeft.addEventListener('click', function() {
  showToast('bottom-left');
})
tryRight.addEventListener('click', function() {
  showToast('top-right');
})
tryBRight.addEventListener('click', function() {
  showToast('bottom-right');
})
