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

3.  * let,var,const ifadələri arasında fərqlər nədir?
      
      let-əvvəlcə dəyişən təyin olunur sonra istifadə olunur. let açarsözü ilə eyni bir dəyişənə iki fərqli dəyər vermək olmaz.
      var- açarsözü ilə eyni bir dəyişənə iki fərqli dəyər vermək olur.
      const-sabitdir. Yəni burada dəyişənə verdiyimiz dəyər sabit qalır,dəyişdirilə bilmir.
    * dəyişən təyin edərkən adlandırma qaydaları nələrdir?
      
      Dəyişənə verilən adlar rəqəmlə başlaya biməz. Dəyişən adlarında hərflər rəqəmlər və $,_ işlənə bilər. Əgər dəyişən adında birdən çox söz olarsa,onda camelCase adlandırma istifadə olunur.Yəni ilk sözün baş hərfi kiçik digərlərində isə böyük yazılır.
    * let x=5;x=7 yazıldığı zaman nəticə 7 olur.Belə olan halda 5 dəyərinin aqibəti nə olur? Yaddaşda yer tutur mu 5 dəyəri yoxsa başqa proses mi gedir? 
       
       Burada əvvəlcə 5 üçün yaddaşda yer ayrılır.Sonra isə 7 üçün.Yəni 5 dəyəri dəyişəndən silinsədə yaddaşda ayırdığı yer qalır.
4.  * 5 dəyəri yaddasa yazılarkən 2-li say sisteminə çevrilir və ona görə yaddaşda tutduğu yer hesablanır.Bəs 5.34 dəyərinin yaddaşda tutduğu yeri necə hesablamaq olar?

    * undefined, NaN və null dəyərlərinin yaddaşda nə qədər yer tutduğunu araşdırın

      undefined və null yaddaşda yer tutur ,ancaq tutduqları yer boş olur. 
    Undefined nulldan daha uzun sətir olduğundan təhlil zamanı undefined istifadə olunanda yaddaşda 4 baytdan daha çox yer tutmalıdır.
    Null-Bu, 32-bit sistemlərdə 4 bayt və ya 64-bit sistemlərdə 8 bayt yer tutur .


    * let a; bu formada dəyişən təyin etmişəm.
       - Bu dəyişən yaddaşda stack-da mı yoxsa heap-də mi yerləşir
       - Bu dəyişən yaddaşda yer tuturmu? Tutursa nə qədər yer tutur?
      
