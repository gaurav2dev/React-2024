import React, { createElement } from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App.jsx'
import First from './First.jsx'


const reactElement = React.createElement('a', { href: 'https://google.com', target: '_blank' }, 'Click me to visit Google')
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />

)
