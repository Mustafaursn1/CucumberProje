$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/koalapalace.feature");
formatter.feature({
  "name": "Koala Palace",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@koalapalace"
    }
  ]
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici koalapalace admin sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_koalapalace_admin_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC26_kullanici hotelreservationlist sayfasinda verileri girerek reservation arar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@koalapalace"
    },
    {
      "name": "@hotelreservationsearch"
    }
  ]
});
formatter.step({
  "name": "kullanici hotelroomreservationlist sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_hotelroomreservationlist_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelroomreservationlist hotelroomid bolumunde \"team06\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_hotelroomreservationlist_hotelroomid_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#lkpHotelRooms\"}\n  (Session info: chrome\u003d85.0.4183.121)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MSTFs-MBP\u0027, ip: \u0027192.168.1.17\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.121, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: /var/folders/gk/52xktp41221...}, goog:chromeOptions: {debuggerAddress: localhost:49784}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 540113a3e13d4d5e40f454860c02db1d\n*** Element info: {Using\u003did, value\u003dlkpHotelRooms}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.getTagName(Unknown Source)\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:45)\n\tat stepdefinitions.KoalaPalaceStepDef.kullanici_hotelroomreservationlist_hotelroomid_bolumunde_secer(KoalaPalaceStepDef.java:297)\n\tat ✽.kullanici hotelroomreservationlist hotelroomid bolumunde \"team06\" secer(file:///Users/mstf/IdeaProjects/CucumberProje/src/test/resources/features/koalapalace.feature:273)\n",
  "status": "failed"
});
formatter.step({
  "name": "kullanici hotelroomreservationlist arama kutusuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_hotelroomreservationlist_arama_kutusuna_tiklar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "kullanici hotelroomreservationlist kayitlarini inceler",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_hotelroomreservationlist_kayitlarini_inceler()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});