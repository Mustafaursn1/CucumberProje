$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/amazonexamples.feature");
formatter.feature({
  "name": "Amazonda Urun Arama",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@birdenfazlaexample"
    },
    {
      "name": "@amazon"
    }
  ]
});
formatter.scenarioOutline({
  "name": "TC07_kullanici amazonda dropdown ve aramakutusu kullanarak arama yapar",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "kullanici \"http://amazon.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.step({
  "name": "kullanici dropdownda \"\u003ckategori\u003e\" secer",
  "keyword": "And "
});
formatter.step({
  "name": "kullanici aramakutusuna \"\u003curunismi\u003e\" yazar ve arar",
  "keyword": "And "
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test Verileri",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "kategori",
        "urunismi"
      ]
    },
    {
      "cells": [
        "Automotive",
        "phone holder"
      ]
    },
    {
      "cells": [
        "Baby",
        "stroller"
      ]
    },
    {
      "cells": [
        "Books",
        "Miserables"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC07_kullanici amazonda dropdown ve aramakutusu kullanarak arama yapar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@birdenfazlaexample"
    },
    {
      "name": "@amazon"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://amazon.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class stepdefinitions.AmazonStepDefinitions\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:405)\n\tat org.apache.maven.surefire.junitcore.pc.InvokerStrategy.schedule(InvokerStrategy.java:54)\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler.schedule(Scheduler.java:362)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:405)\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1130)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:630)\n\tat java.base/java.lang.Thread.run(Thread.java:832)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\n\t... 39 more\nCaused by: org.openqa.selenium.WebDriverException: chrome not reachable\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MSTFs-MBP\u0027, ip: \u0027192.168.1.39\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u002714.0.1\u0027\nDriver info: driver.version: Driver\nremote stacktrace: 0   chromedriver                        0x000000010f3b61b9 chromedriver + 4911545\n1   chromedriver                        0x000000010f355e03 chromedriver + 4517379\n2   chromedriver                        0x000000010efc3c36 chromedriver + 773174\n3   chromedriver                        0x000000010efb3519 chromedriver + 705817\n4   chromedriver                        0x000000010ef1f349 chromedriver + 99145\n5   chromedriver                        0x000000010ef1bd6f chromedriver + 85359\n6   chromedriver                        0x000000010ef4a716 chromedriver + 276246\n7   chromedriver                        0x000000010ef47723 chromedriver + 263971\n8   chromedriver                        0x000000010ef21720 chromedriver + 108320\n9   chromedriver                        0x000000010ef22693 chromedriver + 112275\n10  chromedriver                        0x000000010f37ef72 chromedriver + 4685682\n11  chromedriver                        0x000000010f38cb3a chromedriver + 4741946\n12  chromedriver                        0x000000010f38c801 chromedriver + 4741121\n13  chromedriver                        0x000000010f36225e chromedriver + 4567646\n14  chromedriver                        0x000000010f38d061 chromedriver + 4743265\n15  chromedriver                        0x000000010f373d0a chromedriver + 4640010\n16  chromedriver                        0x000000010f3a60ba chromedriver + 4845754\n17  chromedriver                        0x000000010f3bc387 chromedriver + 4936583\n18  libsystem_pthread.dylib             0x00007fff70fde109 _pthread_start + 148\n19  libsystem_pthread.dylib             0x00007fff70fd9b8b thread_start + 15\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat utilities.Driver.getDriver(Driver.java:29)\n\tat pages.AmazonPage.\u003cinit\u003e(AmazonPage.java:8)\n\tat stepdefinitions.AmazonStepDefinitions.\u003cinit\u003e(AmazonStepDefinitions.java:9)\n\t... 45 more\n",
  "status": "failed"
});
formatter.step({
  "name": "kullanici dropdownda \"Automotive\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_dropdownda_secer(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "kullanici aramakutusuna \"phone holder\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramakutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MSTFs-MBP\u0027, ip: \u0027192.168.1.39\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u002714.0.1\u0027\nDriver info: driver.version: Driver\nremote stacktrace: 0   chromedriver                        0x00000001040d21b9 chromedriver + 4911545\n1   chromedriver                        0x0000000104071e03 chromedriver + 4517379\n2   chromedriver                        0x0000000103cdfc36 chromedriver + 773174\n3   chromedriver                        0x0000000103ccf519 chromedriver + 705817\n4   chromedriver                        0x0000000103c3b349 chromedriver + 99145\n5   chromedriver                        0x0000000103c37d6f chromedriver + 85359\n6   chromedriver                        0x0000000103c66716 chromedriver + 276246\n7   chromedriver                        0x0000000103c63723 chromedriver + 263971\n8   chromedriver                        0x0000000103c3d720 chromedriver + 108320\n9   chromedriver                        0x0000000103c3e693 chromedriver + 112275\n10  chromedriver                        0x000000010409af72 chromedriver + 4685682\n11  chromedriver                        0x00000001040a8b3a chromedriver + 4741946\n12  chromedriver                        0x00000001040a8801 chromedriver + 4741121\n13  chromedriver                        0x000000010407e25e chromedriver + 4567646\n14  chromedriver                        0x00000001040a9061 chromedriver + 4743265\n15  chromedriver                        0x000000010408fd0a chromedriver + 4640010\n16  chromedriver                        0x00000001040c20ba chromedriver + 4845754\n17  chromedriver                        0x00000001040d8387 chromedriver + 4936583\n18  libsystem_pthread.dylib             0x00007fff70fde109 _pthread_start + 148\n19  libsystem_pthread.dylib             0x00007fff70fd9b8b thread_start + 15\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat utilities.Driver.getDriver(Driver.java:29)\n\tat stepdefinitions.Hooks.tearDown(Hooks.java:21)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "TC07_kullanici amazonda dropdown ve aramakutusu kullanarak arama yapar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@birdenfazlaexample"
    },
    {
      "name": "@amazon"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://amazon.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici dropdownda \"Baby\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_dropdownda_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici aramakutusuna \"stroller\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramakutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC07_kullanici amazonda dropdown ve aramakutusu kullanarak arama yapar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@birdenfazlaexample"
    },
    {
      "name": "@amazon"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://amazon.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici dropdownda \"Books\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_dropdownda_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici aramakutusuna \"Miserables\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramakutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/amazonsearch.feature");
formatter.feature({
  "name": "Amazon Arama",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@urunarama"
    },
    {
      "name": "@amazon"
    }
  ]
});
formatter.background({
  "name": "oncesinde caliacak methodlar",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici amazon sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_amazon_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC02_kullanici amazonda arama yapar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@urunarama"
    },
    {
      "name": "@amazon"
    },
    {
      "name": "@amazon"
    }
  ]
});
formatter.step({
  "name": "kullanici aramakutusuna headphones yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramakutusuna_headphones_yazar_ve_arar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "oncesinde caliacak methodlar",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici amazon sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_amazon_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC03_kullanici amazonda arama yapar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@urunarama"
    },
    {
      "name": "@amazon"
    },
    {
      "name": "@amazoncamera"
    }
  ]
});
formatter.step({
  "name": "kullanici aramakutusuna camera yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramakutusuna_camera_yazar_ve_arar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/examples.feature");
formatter.feature({
  "name": "Amazon Birden Fazla Arama",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@teknolojikarama"
    },
    {
      "name": "@amazon"
    }
  ]
});
formatter.scenarioOutline({
  "name": "TC05_kullanici amazonda urun arar",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "kullanici amazon sayfasina gider",
  "keyword": "Given "
});
formatter.step({
  "name": "kullanici aramakutusuna \"\u003curunler\u003e\" yazar ve arar",
  "keyword": "And "
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.examples({
  "name": "Urun Isimleri",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "urunler"
      ]
    },
    {
      "cells": [
        "headphones"
      ]
    },
    {
      "cells": [
        "camera"
      ]
    },
    {
      "cells": [
        "drone"
      ]
    },
    {
      "cells": [
        "pencil"
      ]
    },
    {
      "cells": [
        "tv"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC05_kullanici amazonda urun arar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teknolojikarama"
    },
    {
      "name": "@amazon"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici amazon sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_amazon_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici aramakutusuna \"headphones\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramakutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC05_kullanici amazonda urun arar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teknolojikarama"
    },
    {
      "name": "@amazon"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici amazon sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_amazon_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici aramakutusuna \"camera\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramakutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC05_kullanici amazonda urun arar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teknolojikarama"
    },
    {
      "name": "@amazon"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici amazon sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_amazon_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici aramakutusuna \"drone\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramakutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC05_kullanici amazonda urun arar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teknolojikarama"
    },
    {
      "name": "@amazon"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici amazon sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_amazon_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici aramakutusuna \"pencil\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramakutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC05_kullanici amazonda urun arar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teknolojikarama"
    },
    {
      "name": "@amazon"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici amazon sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_amazon_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici aramakutusuna \"tv\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramakutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/parametre.feature");
formatter.feature({
  "name": "Amazon Urun Arama",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@urunarama1"
    },
    {
      "name": "@amazon"
    }
  ]
});
formatter.scenario({
  "name": "TC04_kullanici amazonda urun aramasi yapar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@urunarama1"
    },
    {
      "name": "@amazon"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici amazon sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_amazon_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici aramakutusuna \"drone\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramakutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});enqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat utilities.Driver.getDriver(Driver.java:29)\n\tat stepdefinitions.Hooks.tearDown(Hooks.java:21)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "TC08_kullanici walmartta urun arar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@walmart"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"https://walmart.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class stepdefinitions.AmazonStepDefinitions\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:405)\n\tat org.apache.maven.surefire.junitcore.pc.InvokerStrategy.schedule(InvokerStrategy.java:54)\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler.schedule(Scheduler.java:362)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:405)\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1130)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:630)\n\tat java.base/java.lang.Thread.run(Thread.java:832)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\n\t... 39 more\nCaused by: org.openqa.selenium.WebDriverException: unknown error: DevToolsActivePort file doesn\u0027t exist\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MSTFs-MBP\u0027, ip: \u0027192.168.1.39\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u002714.0.1\u0027\nDriver info: driver.version: Driver\nremote stacktrace: 0   chromedriver                        0x00000001103ef1b9 chromedriver + 4911545\n1   chromedriver                        0x000000011038ee03 chromedriver + 4517379\n2   chromedriver                        0x000000010fffcdc6 chromedriver + 773574\n3   chromedriver                        0x000000010ff57a66 chromedriver + 96870\n4   chromedriver                        0x000000010ff54cd6 chromedriver + 85206\n5   chromedriver                        0x000000010ff83716 chromedriver + 276246\n6   chromedriver                        0x000000010ff80723 chromedriver + 263971\n7   chromedriver                        0x000000010ff5a720 chromedriver + 108320\n8   chromedriver                        0x000000010ff5b693 chromedriver + 112275\n9   chromedriver                        0x00000001103b7f72 chromedriver + 4685682\n10  chromedriver                        0x00000001103c5b3a chromedriver + 4741946\n11  chromedriver                        0x00000001103c5801 chromedriver + 4741121\n12  chromedriver                        0x000000011039b25e chromedriver + 4567646\n13  chromedriver                        0x00000001103c6061 chromedriver + 4743265\n14  chromedriver                        0x00000001103acd0a chromedriver + 4640010\n15  chromedriver                        0x00000001103df0ba chromedriver + 4845754\n16  chromedriver                        0x00000001103f5387 chromedriver + 4936583\n17  libsystem_pthread.dylib             0x00007fff70fde109 _pthread_start + 148\n18  libsystem_pthread.dylib             0x00007fff70fd9b8b thread_start + 15\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat utilities.Driver.getDriver(Driver.java:29)\n\tat pages.AmazonPage.\u003cinit\u003e(AmazonPage.java:8)\n\tat stepdefinitions.AmazonStepDefinitions.\u003cinit\u003e(AmazonStepDefinitions.java:9)\n\t... 45 more\n",
  "status": "failed"
});
formatter.step({
  "name": "kullanici walmart aramakutusuna \"flower\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.WallmartStepDefinitions.kullanici_walmart_aramakutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "kullanici walmart sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.WallmartStepDefinitions.kullanici_walmart_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MSTFs-MBP\u0027, ip: \u0027192.168.1.39\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u002714.0.1\u0027\nDriver info: driver.version: Driver\nremote stacktrace: 0   chromedriver                        0x00000001069ca1b9 chromedriver + 4911545\n1   chromedriver                        0x0000000106969e03 chromedriver + 4517379\n2   chromedriver                        0x00000001065d7c36 chromedriver + 773174\n3   chromedriver                        0x00000001065c7519 chromedriver + 705817\n4   chromedriver                        0x0000000106533349 chromedriver + 99145\n5   chromedriver                        0x000000010652fd6f chromedriver + 85359\n6   chromedriver                        0x000000010655e716 chromedriver + 276246\n7   chromedriver                        0x000000010655b723 chromedriver + 263971\n8   chromedriver                        0x0000000106535720 chromedriver + 108320\n9   chromedriver                        0x0000000106536693 chromedriver + 112275\n10  chromedriver                        0x0000000106992f72 chromedriver + 4685682\n11  chromedriver                        0x00000001069a0b3a chromedriver + 4741946\n12  chromedriver                        0x00000001069a0801 chromedriver + 4741121\n13  chromedriver                        0x000000010697625e chromedriver + 4567646\n14  chromedriver                        0x00000001069a1061 chromedriver + 4743265\n15  chromedriver                        0x0000000106987d0a chromedriver + 4640010\n16  chromedriver                        0x00000001069ba0ba chromedriver + 4845754\n17  chromedriver                        0x00000001069d0387 chromedriver + 4936583\n18  libsystem_pthread.dylib             0x00007fff70fde109 _pthread_start + 148\n19  libsystem_pthread.dylib             0x00007fff70fd9b8b thread_start + 15\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat utilities.Driver.getDriver(Driver.java:29)\n\tat stepdefinitions.Hooks.tearDown(Hooks.java:21)\n",
  "status": "failed"
});
});