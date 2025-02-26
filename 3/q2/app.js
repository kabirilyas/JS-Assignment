let visitcount = localStorage.getItem("kabir");

visitcount = visitcount ? parseInt(visitcount) + 1: 1;

localStorage.setItem( "kabir" , visitcount);

alert(`you are visit your website ${visitcount} times`);

console.log(`you are visit your website ${visitcount} times`);


// let visit = localStorage.getItem("visit")

// visit = visit ? parseInt



// // localStorage سے وزٹ کی تعداد حاصل کریں
// let visitCount = localStorage.getItem("visitCount");

// // اگر وزٹ کی گنتی پہلے سے موجود ہو تو اسے بڑھائیں، ورنہ 1 پر سیٹ کریں
// visitCount = visitCount ? parseInt(visitCount) + 1 : 1;

// // اپڈیٹ شدہ ویلیو دوبارہ localStorage میں محفوظ کریں
// localStorage.setItem("visitCount", visitCount);

// console.log(`آپ نے اس ویب سائٹ کو ${visitCount} بار وزٹ کیا ہے۔`);
// alert(`آپ نے اس ویب سائٹ کو ${visitCount} بار وزٹ کیا ہے۔`);
