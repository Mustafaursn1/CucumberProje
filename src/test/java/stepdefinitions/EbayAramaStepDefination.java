package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.openqa.selenium.Keys;
import pages.EbayPage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class EbayAramaStepDefination {

EbayPage ebayPage=new EbayPage();
    @Given("kullanici {string} sayfasina gidiyor")
    public void kullanici_sayfasina_gidiyor(String string) {


        Driver.getDriver().get(string);
    }





    @Given("kullanici aramakutusuna {string} yazarak  arar")
    public void kullanici_aramakutusuna_yazarak_arar(String string) {

        ebayPage.aramaKutusu.sendKeys(string+ Keys.ENTER);


    }
    @Then("kullanici sonuc adedini ekrana yazdirir")
    public void kullanici_sonuc_adedini_ekrana_yazdirir() {
        System.out.println(ebayPage.sonucSayisi.getText());
    }
}
