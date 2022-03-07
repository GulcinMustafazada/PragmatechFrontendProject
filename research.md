# Javascript
1. * Javascript kodları necə formada yazıla bilər?

       Javascript kodları HTML sənədinə script taqları daxilində yazıla bilər. 
       Və ya ayrı bir fayl daxilində src atributu vasitəsilə import oluna bilər.

  
    * Javascript kodlarının script tagları daxilində yazmaqla ayrı fayl formatında yazıb import etmek arasında nə fərq var?
     
      Script tagları daxilində daha az olan Javascript kodları yazılır.Ayrı bir faylda isə nisbətən çox olan javascript kodları yazılır.
      Ayrı bir faylın üstünlüyü ondan ibarətdir ki, brauzer onu endirəcək və öz yaddaşında saxlayacaqdır.Eyni skriptə istinad edən digər səhifələr onu yükləmək əvəzinə keşdən götürəcək, beləliklə, fayl əslində yalnız bir dəfə endirilir.
     Bu, trafiki azaldır və səhifələri daha sürətli edir.

    * Madem mənim brauzerimdə V8-Engine yüklüdür niyə html kodu daxilində yazılan javascript kodları işləmir.
     Çünki HTML  həmin kodları Javasript kodu olaraq görmür,ona görə də onu oxuya bilmir və ya html kodu olaraq götürür.Bu səbəbdəndə v8 engine Js kodlarını işlədə bilməsi üçün onu import etmək vəya script tagı daxilində yazmaq lazımdır.

2.  * ";" hansı hallarda istifadə edilir?

      Əgər kodda eyni sətirdə  birdən çox ifadə olarsa  bu zaman bu ifadələr bir-birindən nöqtəli vergül ilə ayrılır. Əgər bu ifadələr bir neçə sətirdə yazılarsa onda nöqtəli vergül işlətməyə ehtiyac qalmır. Lakin bəzi hallarda bir neçə sətirdə yazılan kodlarda nöqtəli vergül yazılmadığı hallarda error çıxır.Ona görə də yeni sətirə keçldiyi zaman nöqtəli vergüldən istifadə daha məqsədə uyğundur.
    * Javascript-də comment yazmaq üçün neçə üsul var.
       
       Javascriptdə komment yazmaq üçün 2 üsul  var. 
       Tək sətirdə komment yazmaq üçün // istifadə olunur.
       Birdən çox sətirdə komment yazmaq üçün isə /* .... */ istifadə olunur. 
    
      
