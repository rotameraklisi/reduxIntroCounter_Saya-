# reduxIntroCounter_Sayac

Bu uygulamada Redux' a giriş yapılarak bir sayaç geliştirilecektir.

Sayacın 3 butonu olacaktır: +1, -1, +2 şeklinde sayıyı değiştirmesi sağlanacaktır.
3 buton ve mevcut sayıyı gösterecek componentle beraber toplam 4 componentten oluşacaktır ve dışarıda bir Redux için Redux storage tutulacaktır.
Bu componentlerin hepsi Redux storage' a bağlanacaktır. 

<img src="images/redux.png" raw=true/>

Önce yeni bir proje oluşurulur ve Terminal' den redux indirme: npm install redux; react için redux: npm install react-redux komutları yazılır.

*Magic String' ten kurtulmak için actionTypes.js oluşturuldu. İçine birden fazla yerde kullanılacak olan variablelar const olarak tutulmuştur.

*Redux ile ilk iletişimi kurduğumuz nokta: actionlardır. Bu yüzden counterAction.js oluşturuldu.

