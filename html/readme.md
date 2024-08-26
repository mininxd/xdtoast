### xdtoast:
A lightweight, gzipped web framework focused on fast performance.


### Install :

npm:
```bash
npm install xdtoast
```

CDN jsdelivr
```bash
<script src="https://cdn.jsdelivr.net/npm/xdtoast/dist/toast.js" type="module"></script>
```

CDN UNPKG
```bash
<script src="https://unpkg.com/xdtoast@1.0.0/dist/toast.js" type="module"></script>
```

### how to use : 
```javascript
// Initialize a new instance
import xdtoast from 'dist/toast.js';
const toast = new xdtoast()

// How to show the toast :
  toast.push({
    icon: '',
    title: 'Toast',
    content: 'light toast',
    style: 'light'
  })
```

#### available options: 
```javascript
const toast = new xdtoast({
  position: 'top-right',    // Position of the toast on the screen
  offsetX: 20,              // Horizontal offset from the edge of the screen
  offsetY: 20,              // Vertical offset from the edge of the screen
  width: 150,               // Width of the toast
  gap: 5,                   // Space between multiple toasts
  duration: '.25s',         // Duration of the animation when the toast appears 
  time: 10,                 // Time (in seconds) before the toast automatically dismisses
  timing: 'ease-out',       // CSS timing function for the animation (e.g., ease, ease-in, ease-out, linear)
  dim: false,               // Whether or not to dim the background to old toast (true/false)
});

// Options for toast.push() method
toast.push({
  icon: '',            // Google Icons. See: https://fonts.google.com/icons
  title: '',           // The header text for the toast
  content: '',         // The main content of the toast
  style: '',           // light, dark, success, warning, danger, info
  onCreate: (toast) => {
    // an script when the toast is created
  },
  onClose: (toast) => {
    // an script when the toast is closed
  }
});
```

#### full example :
```javascript
import xdtoast from 'dist/toast.js';
const toast = new xdtoast()

htmlBtn.addEventListener('click', function() {
  toast.push({
    icon: 'check_circle',
    title: 'Toast',
    content: 'this is light toast!',
    style: 'light'
  })
})
```

