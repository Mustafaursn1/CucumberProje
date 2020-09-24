Feature:Google Arama
  @google
  Scenario: TC01_kullanici googleda arama yapar

#yorum satriri icin"#" kullaniyoruz
    #When...... Then  ILE BITER
     Given kullanici google sayfasina gider
     And  techproeducation aramasi yapar
     Then sayfa basligini kontrol eder