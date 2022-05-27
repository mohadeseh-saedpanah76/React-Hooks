// import React , {useState} from "react";

// //اون متغیری که مقدار کانتکست رو در خودش نگه میداره باید حرف اولش بزرگ باشه
// //مقدار اوت کانتکست رو بصورت نیمد اکسپورت میکنیم تا در هرجای برنامه بتونیم از اون استفاده کنیم
// export const AuthContext = React.createContext({
//     //این ابجکت متناسب با کاری که قراره این کامپوننت بکنه مقادیری رو در خودش نگه میداره

//     //مقدار اول چک میکنه احراز هویت انجام شده یانه
//     isAuth : false,

//     // مقدار دوم یک تابعی که بتونه فرآیند لاگین رو انجام بده
//     login : () =>{},
// })

// //حالا باید یک کامپوننتی تعریف کنیم که هرچیزی که در زیر مجموعه اون قرار گرفت از شرایط داخل کانتکست تبعیت کنه
// // به اصطلاح کامپوننتی که پرووایدر این کانتتکست باشه

// const AuthContextProvider = (props) =>{
//     //استیت ما بحث لاگین بودن یا نبودنه
//     //همیشه مقدار اولیه ی استیت بستگی به نوع استیت داره
//     //الان چون استیت ما میشه لاگین بودن یا نبودن
//     //پس مقدار اولیه ی استیت میشه فالس
//     //یعنی لاگین نبودن
//     const [isLoggedIn , setIsLoggedIn] = useState(false)

//     const loginHandler = () =>{
//         setIsLoggedIn(true)
//     }
//     return (
//         // کامپوننت زیر پروپرتی اصلی قسمت پرووایدر ما است
//     <AuthContext.Provider 
//     value={{
//         isAuth : isLoggedIn,
//         login : loginHandler,
//     }}
//     >
//     {/*حالا باید به تگ اوت کانتکست اتریبیوت ولیو بدیم
//     مقدار ولیو بر اساس مقادیر تعریف شده در اوت کانتکست بالا است
//     یعنی یک مقدار ابجکتیه که کی ها همون کی ها هستن و مقادیر کی ها بر اساس استیت تعیین میشه
//      و ولیو یم ابجکت داینامیکه که مقدار لاگین بودن یا نبودن رو چک میکنه*/}


//     {/* هر کامپوننتی که بین این دو تگ قرار بگیره باید از دستورات کانتکست تبعیت کنه 
//     مقدار زیر یک مقدار داینامیکه*/}
//     {props.children}
    
// </AuthContext.Provider>
//     )

// }

// export default AuthContextProvider


//همان کد بالا دوباره تکرار شده است

import React, { useState } from 'react'

export const AuthContext = React.createContext({
  isAuth: false,
  login: () => {},
})

const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const loginHandler = () => {
    setIsLoggedIn(true)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuth: isLoggedIn,
        login: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
