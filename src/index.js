// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'
// import AuthContextProvider from './context/auth-context'

// //چون کامپوننت اپ زیر مجموعه ی کامپوننت اوت کانتکست پروایدر هست از شرایط موجود در کنتکست تبعیت میکنه
// ReactDOM.render(
//     <AuthContextProvider>
//       <App />
//     </AuthContextProvider>,
//     document.getElementById('root')
//   )


//همان کد بالا تکرار شده

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import AuthContextProvider from './context/auth-context'

ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById('root')
)
