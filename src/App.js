import React , {useContext} from 'react'
//اینجا برای استفاده  از اوت کانتکست به یوز کانتکست هم نیازه
//چون اوت کانتکست باید به عنوان ورودی این یوز استفاده بشه


import Products from './components/Products/Products'
import Auth from './components/Auth'

//چون اوت کانتکست بصورت نیمد اکسپورت شد بصورت نیمد هم ایمپورت میشه
import {AuthContext} from './context/auth-context'
import useDarkMode from './hooks/dark-mode'

const App = (props) => {
  //میتونیم هوک هارو بعد از ایمپورت کردن برای فراخوانی بعد از تعریف کامپوننت یعنی همون خطوط اول داخل کامپوننت تعریف کنیم
 const [theme , toogleTheme] = useDarkMode()
 const authContext = useContext(AuthContext)
  //می خواهیم یک شرطی بنویسیم که بر اساس اون شرط یا کامپوننت اوت نشون داده بشه یا کامپوننت پروداکت

  let content = <Auth />

  if(authContext.isAuth){
    content = (
      <div 
      className='app'
      style={{
        background : theme === 'dark' ? '#212121' : '#ffffff',
        color : theme === 'dark' ? '#ffffff' : '#212121',
        transition : 'all .2s',
        textAlign : 'center'
      }}
      >
        < Products />
        <button
        type='button'
        onClick={toogleTheme}
        >
          تغییر تم
        </button>
      </div>
    )
  }
  return content
}

export default App
