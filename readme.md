### xdtoast

![1000282468](https://github.com/user-attachments/assets/cffcb0c0-66a5-47ed-90ca-9faff6804fbb)


### Install :
npm:
```bash
npm install xdtoast
```

CDN jsdelivr
```html
<script type="module">
  import xdtoast from 'https://cdn.jsdelivr.net/npm/xdtoast/dist/xdtoast.js'
<script>
```

CDN UNPKG
```html
<script type="module">
  import xdtoast from 'https://unpkg.com/xdtoast@latest/dist/xdtoast.js'
<script>
```

### how to use : 
```javascript
// Initialize a new instance
import xdtoast from 'https://unpkg.com/xdtoast@latest/dist/xdtoast.js'
const toast = new xdtoast()

// How to show the toast :
  toast.push({
    icon: '',
    title: 'Toast',
    content: 'light toast',
    style: 'light'
  })
```

### Available `xdtoast({})` options:
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
```

### Available `toast.push()` options:
```javascript
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
import xdtoast from 'https://unpkg.com/xdtoast@latest/dist/xdtoast.js'
const toast = new xdtoast()

// Directly show 
toast.push({
    icon: 'check_circle',
    title: 'Toast',
    content: 'this is light toast!',
    style: 'light'
  })

// with HTML element
htmlBtn.addEventListener('click', function() {
  toast.push({
    icon: 'check_circle',
    title: 'Toast',
    content: 'this is light toast!',
    style: 'light'
  })
})
```
