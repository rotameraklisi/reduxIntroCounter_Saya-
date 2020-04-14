 Bu uygulamada **redux**' a giriş amacı ile sayaç uygulaması geliştirilmiştir.
 Uygulamada ekranda bir sayaç bulunmakta ve +1,-1,+2 işlemlerini gerçekleştiren 3 buton bulunmaktadır.
 
**React** componentlerden oluşmaktadır. Componentlerde state tarafından yönetilmektedir. **Redux**, state yönetimi için kullanılmaktadır. Herhangi bir teknolojiye bağımlı değildir.**State**, App'te tutulmak yerine dışarıda tutulur ve isteyen component istediği zaman erişmektedir.

Bu uygulamada resimdeki gibi her bir eleman componentten oluşturulmuştur ve dışarıda da **Reduct Storage** bulunmaktadır. Bu storage sayesinde, react' ın tek yönlü özelliğinin dezavantajını kaldırıp componentler arası veri taşımak gerektiği zaman storage ile iletişim halinde olup ilgili componente veri taşınır.

<img src = "images/redux.png">

Öncelikle yeni bir proje oluşturmak için **Terminal**de **npx create-react-app redux-intro** komutu çalıştırılır. Projenin oluşturulduğu yerde redux indirmek için **npm install redux** , react için redux paketlerini indirmek için de **npm install react-redux** komutları çalıştırılır.

Redux ile ilk iletişimi kurduğumuz nokta: action **Action:** componentimizden çağırdığımız aksiyondur.Bu action, Reducer yapısı ile kontrol altına alınmaktadır. **Reducer**, ilgili action' ı içerip içermediğine bakmaktadır.

Bu Reducer , aksiyona göre state belirlemektedir., state' mizi kontrol ettiğimiz yer
Componentler sadece reducer içindeki stateden yararlanacaktır. Reducerdaki state' e göre artırıp , azaltma işlemi uygulanacaktır.

"reducers" folderının içinde genelde index.js dosyası bulunur ve Reducerları bir araya getirir. Reducer' ın amacı state bilgisini döndürmektir.
Redux->  reducerlarına gidiyo bakıyor ve ilgili action'ı kullanan biri var mı diye bakıyor.

**configureStore->** veritabanı gibi düşünülebilir, Store denilen yapıyı tanımlıyor

*Uygulamanın index.js'sine  (src\index.js) react-redux kullanacağı belirtiliyor ve Provider, App' ye tanımlanmış oluyor. Yani, bizim App artık bir store' a bağlı, redux hazır hale geldikten sonra

**Redux**, son olarak componentlere bağlanır.
**Dispatch:** bizim aksiyonumuz

 **Uygulamanın izlediği yol:** App.js -> reducers/index.js -> reducers/configureStore -> src/index.js   ->  tekrar App.js ilgili Componete gider ve ekran açılır.
 
* +1 butonuna tıklayınca IncreaseCounter.js componentine gider. Button onClick methodu çalışır. Actions/counterActions.js' e gidip ilgili method çalışıtırılır. Reducers/counterReducer.js ilgili methoda ait işlem return edilir. Counter.js' e gidilir ve ekrana yazılır.

**KOD DEBUG İÇİN**
**WebStorm**' da Debug İçin **Edit Configuration**->**JavaScript Debug**->**Name**: Debug-> URL: http://localhost:3000/

Açılan sayfaya sağ Click yaparak "Inspect" seçeneğine tıklandığında sol üst köşedeki "Select an element in the page to inspect it"(Ctrl+ Shift + C) ile ilgili componentin koddaki takibini yapabilirsiniz.


