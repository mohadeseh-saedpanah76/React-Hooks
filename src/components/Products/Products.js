import React , { useCallback , useReducer} from 'react'

import ProductForm from './ProductForm'
import ProductList from './ProductList'
import Search from './Search'


// تابع مربوط به یوز ردیوسر خارج از کامپوننت باید تعریف بشه
//ارگومان اول همان استیت ماست
//ارگومان دوم یک ابجکت جاوا اسکریپتی که بر اساس مقادیری که داره میاد استیت رو اپدیت میکنه
const productReducer = (state , action)=>{
  //باید از سوئیچ کیس استفاده کنیم
  // باید براساس کیس های خاص نوع اپدیت استیت هم فرق کنه
  //مثلا در این سوئیچ براساس پروپرتی نوع در اکشن نوع اپدیت متفاوته
  switch (action.type) {
    //باید ببینیم تابع ست پروداکت که مربوط به اپدیت کردن استیته چندبار و در کجاها استفاده میشه
    //یبار در تابع سرچ پروداکت 
    // اینکه ست و ادد رو داحل رشته با حروف بزرگ بنویسی یک قانونه
    case 'SET':
      //این کیس مربوط به تابع سرچ پروداکت هندلره چون یبار ست پروداکت اونجا اجرا میشه

      //اکشنی که اعمال میشه روی پروداکتس
      //اکشم پروداکتس باید بعدا تعریف بشه
      return action.products
      //یبار در تابع ادد پروداکت
    case 'ADD':
      //این کیس مربوط به تابع ادد پروداکت هندلره چون یبار تابع ست پروداکت اونجا اجرا شده

      // در این ریترن استیت های قبلی سیو بشه و اکشن اعمال بشه روی پروداکت
      //اکشن پروداکت باید جای دیگر تعریف بشه
      return [...state, action.product]
    default:
      //در حالت پیشفرض میگیم اگه خطایی بود بگه
      throw new Error('Error')
  }
}

const Products = ()=> {
  // const [products , setProducts] = useState([])
  //پروداکتس استیت فعلی محصولا ماست که بصورت ارایه هست چو مقدار اولیه ی یوز استیت رو بصورت ارایه در نظر گرفتیم

  //بعد از تعریف تابع خارج از کامپوننت باید یوز ردیوسر تعریف بشه و ورودی اون همون تابع باشه
  //یعنی هرموقع یوز ردیوسر فراخوانی بشه تابع پروداکت ردیوسر میاد استیت هارو مدیریت میکنه
 const [products , dispath]  = useReducer(productReducer , [])
 //مقدار اول ینی پروداکتس استیت ما هست
 // مقدار دوم تابعی است که قراره مقادیر اکشن بر اساس این تابع ست بشن


  //متد های هوک باید در مسیر اصلی تعریف بشن نه داخل متدهای دیگر به عبارتی روت لول کامپوننت هستند
// ارگومان اول میگه بعد از رندر سایکل چه اتفاقی بیوفته
//ارگومان دوم میگه تابع ارگومان اول بر چه اساسی هربار اجرا بشه 

  // useEffect(()=>{
  //   //همه ی کارهایی که در یوز افکت انجام میشه در نهایت باعث میشه اطلاعات محصولات در صفحه باشه و از بین نره


  //   //اینجا با یوز افکت میخوایم یک داده ای رو از بک اند بگیریم
  //   //پس متد ما گت میشه
  //   //زمانی که متد ما گت باشه دیگه لازم نیست به فچ ارگومان دوم که یک ابجکت بود رو بدیم
  //   //و مستقیم میریم سراغ دن
  //   fetch('https://project-react-hook-9d8f7-default-rtdb.firebaseio.com/products.json')
  //   .then((response)=>{
  //     //زمانی ک میگیم ریسپانس دات جیسون یعنی داریم ریسپانس رو بصورت جیسون اکسترکت میکنیم
  //     return response.json()
  //   })
  //   .then((responseData)=>{
  //     //می خواهیم دیتاها رو بگیریم و داخل یک لوپ بذاریم
  //     //یعنی داخل ریسپانس دیتا یک حلقه میزنیم و داده های اونو داخل یک ارایه میذاریم
  //     //پس اول باید یک ارایه تعریف کنیم
  //     const loadedProduct = []

  //     for( const item in responseData){
  //       loadedProduct.push({
  //         id : item,
  //         title : responseData[item].title,
  //         amount : responseData[item].amount
  //       })
  //     }

  //     //حالا باید این مقادیر جدیدی که از بک اند گرفتیم رو داخل استیت بیاریم تا در برنامه نمایش داده بشه
  //     setProducts(loadedProduct)
  //   })

  // } , [])
// چون یبار از یوز افکت در سرچ استفاده کردیم دیگه یوز افکت اینجارو پاک میکنیم


  //ارایه ی خالی به عنوان ارگومان دوم ینی تابع ارگومان اول فقط یکبار اجرا بشه

  // مقادیری که سرچ میشن یعنی ایتمس رو میگیره و براساس آیتمس میاد استیت رو اپدیت میکنه
  //چون انلودد پروداکت باعث اجرای این تابع میشه با ارسال هر درخواست به بک اند هی این تابع از اول هی ساخته میشه و ریکوئست های زیادی درست میشه
  //برای جلوگیری از ساخته شدن هرباره ی این تابع از هوک یوز کال بک استفاده میکنیم
  const searchProductHandler = useCallback((items) =>{
    // setProducts(items)
    //چون مدیریت استیت توسط یوز ردیوسر داره انجام میشه پس دیگه از ست پروداکت استفاده  نمیکنیم
    //بجاش از تابع دیسپچ مربوط به یوز ردیوسر استفاده میکنیم
    //ور.دی دیسپچ باید براساس اکشن باشه و چون اکشن یک ابجکته پس ورودی اون هم ابجکته
    dispath({
      //نوع اکشن ست هست چون سوییچ بر اساس نوع اکشن بود پس اینجا باید نوع اکشن مشخص بشه
      type : 'SET',
      products : items
    })
  } , [])
  //دیپندنسیه یوز کال هم میتونه یک ارایه ی خالی باشه تا یکبار اجرا بشه
  
  //یک تابع تعریف میکنیم که در اون با استفاده از ست پروداکت مشخصات جدید محصولات در کنار مشخصات قبلی اورده بشه
  // و همچنین این تابع مقدار وارد شده برای مشخصات رو زیر باکس سرچ نمایش میده
  //حالا از این تابع ادد پروداکت در کامپوننت پروداکت فرم هنگام کلیک کردن دکمه ی افزودن استفاده میشه
  const addProductHandler = ((item)=>{
     //ارگومان ایتم مشخصات جدید وارد شده برای محصوله

    //نحوه ی استفاده از فچ ای پی آی
    fetch('https://project-react-hooks-c7a39-default-rtdb.firebaseio.com/products.json' , {
      //مقدار متد بطور پیشفرض گت هستش
      method : 'POST',
      // اطلاعاتی که قراره در پایگاه داده سیو بشه در بادی میاد وچون ایتم ابجکته و اطلاعات در پایگاه داده باید رشته باشه ایتم رو بصورت رشته در میاریم
      body : JSON.stringify(item),
      //نوع هدری که داریم ارسال میکنیم برای ما جیسونه
      //چیزی که برای هدر نوشتیم ثابته
      headers: { 'Content-Type': 'application/json' },
    }).then((response)=>{
      //ریسپانس هایی که از سرور میگیریم باید به جیسون تبدیل شن
        response.json()
        //دن دوم بحث اضافه کردن یک محصول رو مدیریت میکنه
        .then((responseData)=>{
        //   setProducts((prevState)=>{
        //     //اینجا ست پروداکت باید مقادیر قبلی که پریو استت هست رو سیو کنه و در کنارش یه ابجکت جدید بیاره برای سیو کردن مشخصات چدید در کنار قبلیا
        //     return [
        //       //اول مشخصات قبلی سیو میشه
        //       // و بعد ابجکت جدید اورده میشه
        //       ...prevState ,{
        //         id : responseData.name,
        //         //با اسپرید اوپریتور همون مشخصات جدید که وارد شدن هم سیو میشه کرد
        //         ...item
        //       }
        //     ]
        //     //چون همه ی محصولات در قالب ارایه هستن پس ریترن باید بصورت ارایه باشع
        //  })
        dispath({
          type : "ADD" ,
          product : {
            id : responseData.name ,
            ...item
          }
        })
      })
    })    
  })

  return (
    <div className="App">
      <ProductForm onAddProduct = {addProductHandler}/>

      <section>
        {/* وقتی تابع سرچ پروداکت هندلر فراخوانی میشه
        بر اساس پراپ انلودپروداکتس درخواست ها ارسال میشن و در نهایت استیت ما اینجا مجدد س میشه */}
        <Search onLoadProducts = {searchProductHandler}/>
        <ProductList products={products} onRemoveItem = {()=>{}} />
      </section>
    </div>
  )
}

export default Products
