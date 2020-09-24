
  @ebayarama
  Feature: Ebayda  Arama
    Scenario Outline: TC06_kullanici ebayde urun arar
      Given kullanici "https://www.ebay.com" sayfasina gidiyor
      And kullanici aramakutusuna "<kelimeler>" yazarak  arar
      Then kullanici sonuc adedini ekrana yazdirir
      Examples: Urun Isimleri
        |kelimeler   |
        |araba|
        |bebek arabasi   |
        |bisiklet     |
