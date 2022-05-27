import React , {useState} from 'react'

import Card from '../UI/Card'

import './ProductForm.css'

const ProductForm = React.memo((props) => {
  //مثل کلاس کامپوننت ها متد یوز استیت هم قیبل توابع تعریف میشه
  //استیت ها همیشه در کامپوننتی تعریف میشن که المنتی که استیت برای اونه هم اونجا باشه
  //مثلا الان برای اینپوت ها داریم استیت تعریف میکنیم
  //ورودی متد یوز استیت میتونه هرچیزی باشه عدد یا ارایه یا رشته یا ابجکت
  //اینجا چون دوتا مقدار داریم از ایجکت استفاده میکنیم

  // const inputState = useState({title : '' , amount : ''})
  //خروجی متد یوز استیت یک ارایه با دو عنصره که ما این ارایه رو میریزیم توی یک متغیر
  //الان اینپوت استیت یک ارایه شد
  //بجای اینکه ارایه ی خروجی از یوز استیت رو برزیم توی یک متغیر از اری دیکترکترینگ استفاده میکنیم
  //و مستقیم مقدار ارایه رو میریزیم توی ارایه ی جدیدی ک تعریف میکنیم

  // const [inputState , setInputState] = useState({title : '' , amount : ''})
  //اینپوت استیت میشه همون عنصر اول ارایه که استیت فعلی هست
  //ست اینپوت استیت میشه عنصر دوم ارایه که متد مربوط به اپدیت استیت هاست

  //بهتره که زمانی که مقادیر استیت زیاد میشه استیت ها برای مقادیر جداگونه تعریف شوند
  const [title , setTitle] = useState('')
  const [amount , setAmount] = useState('')


  const submitHandler = (event) => {
    event.preventDefault()
    //در فرم یک ایونت سابمیت داریم که با استفاده از تابع سابمیت هندلر میاد اطلاعات فرم رو ارسال میکنه
    //پس برای نشون دادن اطالاعات محصول یا فرم زیر باکس سرچ از این تابع استفاده میکنیم با استفاده از پراپس آن اددپروداکت
    props.onAddProduct({title : title , amount : amount})
  }

  return (
    <section className="product-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">عنوان</label>
            <input type="text" id="title" 
            // value={inputState.title}
            value={title} 
            //برای اپدیت کردن استیت جدید از ایونت انچبنج در اینپوت استفاده میکنیم
            onChange={(event)=> setTitle(event.target.value)
              // setInputState({
              // title : event.target.value ,
              // //هنگام اپدیت شدن مقدار تایتل این مقدار با مقادیر قبلی استیت ریپلیس شده و مقادیر قبلی از بین میرن 
              // //برای جلوگیری از اینکار هنگام اپدیت شدن مقدار جدید مقدار های قبلی رو هم ذخیره میکنیم
              // amount : inputState.amount
              // })
              }
              />
          </div>
          <div className="form-control">
            <label htmlFor="amount">تعداد</label>
            <input type="number" id="amount" 
            //  value={inputState.amount}
            value={amount}
             onChange={(event)=> setAmount(event.target.value)
              // setInputState({
              //  amount : event.target.value,
              //  title : inputState.title
              //  })
               }
               />
          </div>
          <div className="product-form__actions">
            <button type="submit" >افزودن</button>
          </div>
        </form>
      </Card>
    </section>
  )
})

export default ProductForm
