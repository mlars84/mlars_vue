# Mlars Vue.js Hello World test
- This is my first app built using Vue.js

## Getting started
- $npm install

## Built With
- Vue.js, HTML5, Node.js, Express.js, Babel, karma

## What I Learned
- Sourcing Vue.js with a CDN
- basic  setup of a div:
```<div id="app">
  <h1>{{ message }}</h1>

  <textarea v-model="message"></textarea>

  <pre>
    {{ $data | json }}
  </pre>
</div>
```

- Event Handling:
    - Function that increments a counter:
```<div id="app-5">
  <button type="submit" @click="updateCount">
    Increment Counter: {{ count }}
  </button>
</div>

<script>
    new Vue({
      el: '#app-5',
      data: {
        count: 0
      },
      methods: {
        updateCount: function() {
          this.count += 1;
        }
      }
    })
</script>
```
