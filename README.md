# simple-counter

Ekranda bulunan butona tıklanarak artan sayının text'te gösterildiği temel counter projesi.

# projeyi çalıştırırken
Projeyi lokalinize klonlayıp yarn install ve cd ios && pod install dedikten sonra react-native run-android diyerek android platformda, react-native run-ios diyerek iOS platformda çalıştırabilirsiniz.

Projeyi javascript kullanarak react-native’de derledim.

# proje dosya yapısı hakkında
Dosyalar içerisine src altına ‘components’ isminde klasör eklenerek MyButton ve MyText component’leri bu dosya altında tanımlanmıştır. App.js dosyasında oluşturmak yerine ayrı klasörde tanımlamak daha düzenli geldiği için bu şekilde ekleme yaptım.

src/modules klasörü altında interfaces.ts ve abstraction.ts dosyalarını javascript’te interface ve abstraction gibi yapılar kullanmadığım için tanımlamadım. Yerine reducer.js ve store.js dosyaları ekledim. reducer.js dosyası component state güncellemesi için gereken fonksiyonları içermektedir. store.js dosyası component’ler arasında state paylaşımını sağlayan fonksiyonları içermektedir.

# örnekler
Ekranda farklı counter’ların ortak state’i paylaştığını görebilmek adına App.js dosyası içerisinde yorum satırlarında örnekler bulunmaktadır. Farklı veri yapısındaki yeni component’ler için component’e ait reducer ve store fonksiyonları tanımlanarak projede kullanılabilir.

React hook'larından useContext ve useReducer kullanarak state yönetimi oluşturmaya çalıştım. 
