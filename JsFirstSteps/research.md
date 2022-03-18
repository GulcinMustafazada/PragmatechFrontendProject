## Javascript Research

1. **Understanding Syntax and Code Structure in JavaScript**
   -  Dəyişən təyin edərkən ya da dəyər mənimsədərkən boşluqlardan istifadə etsək bu mənə error olaraq qayıdar mı? let a=5; let a= 5; bu iki formada yazılışlardan hansısa error verəcək mi?

      Boşluqlardan istifadə etmək bizə error verməyəcəkdir.Çünki Javascript boşluqları görməzdən gəlir.Ancaq kodun daha oxunaqlı olması üçün boşluqlardan çox istifadə etməmək daha məqsədə uyöundur.Yəni bu iki yazılışın heç biri error verməyəcək.

   - Bütün proqramlaşdırma dillərində olduğu kimi Js-də xüsusi simvollardan istifadə edir. () və {} mötərizələri V8Engine tərəfindən necə analiz olunur? Bu mötərizələr tərcümə prosesində necə başa düşülür?

     Bu simvolların istifadəinin düzgün yerinə yetirilməməsi kodda müəyyən sintaksis xətalarına səbəb ola bilər .Yəni ki v8 engine bu kodu icra edərkən bu ardıcıl olaraq oxuyur və mötərizlərin yanlış yerdə yazılması və ya bağlanmaması xətalara səbəb olacaq və kod işləməyəcək.
     
    - let StudentName; let studentName; let studentname yazılışları arasında Javascript üçün hər hansı fərq varmı? Qısacası Javascript Case Sensitive dildir?
     
      Bunlar arasında fərq var .Çünki Javascript Case Sensitivedir.Yəni hərflərə həssasdır.Bunlar hər biri fərqli dəyişənlərdir.

    - Javascriptdə kod yazarkən indentation hansı hallarda istifadə olunur və mən kod yazarkən indentation istifadə etməyə məcburammı?
     
      İdentation istifadə etmək məcburi deyildir.Ancaq Oxunma qabiliyyətini qorumaq və çaşqınlığı azaltmaq üçün kodumuzun düzgün identationu mütləqdir. İf/else şərtlərində identationu işlədilməsinə daha çox rast gəlinir.

 2. **Primitive and Reference data types?**
   
    - let x=5; kodlarının v8engine tərəfindən tərcümə edilərək maşın dilinə çevrilmə prosesini necə təsəvüür edirsiniz?
     
      v8 engine bu kodu oxuyur və tərcümə edir.Bu prosesdə x dəyişəni üçün stack -də yer ayrılır. 5 dəyəri üçün isə heap -də yer ayrılır. Ancaq nə qədər yer ayrıldığı bəlli olmur ,yəni bu dəyəri istdəyimiz qədər artıra və azalda bilərik.

    - primitive və reference data tipləri deyə iki kategoriyaya ayrılma səbəbi nə ola bilər?
     
      Bunun səbəbi həmin data tiplərin işlənmə yerlərinə və funksiyalarına görədir.Primitiv data tipləri daha sadə və sabitdirlər.Reference data tipləri isə dinamikdilər. 

     - bu iki tip arasında fərqli xüsusiyyətlər nədir?

       Bunlar arasında bir neçə fərqli cəhət vardır. Məsələn primitive data tipləri sabitdirlər və obyekt deyillər ,eyni zamanda metodları yoxdur. Onlar yaddaşın stack hissəsində yerləşirlər.
      Reference data tipləri isə daha dinamikdirlər. Onlar obyektdirlər və metdodları var.Və yaddaşın heap hissəsində yer tuturlar.

      - bu data tiplərin yaddaşdakı yeri ilə əlaqədar senarilərinizi yazın. Yəni kod v8 enginə-nə ötürüldüyü zaman o kodun başına nə iş gəlir?

        Deməli kodlarımız yazıldığı zaman v8 engine onu oxuyur və tərcümə edir.Bu zaman primitiv data tipləri dəyişənlərə əsasən gedib yaddaşın stack hissəsində yer tuturlar. Yəni onlara verilən dəyişən adlarına əsasən onlar yaddaşda yer tuturlar.
       Reference data tipləri isə özləri yaddaşın heap hissəində yer tuturlar. Ancaq onların pointerləri stackdə yerləşir.Yəni stack -dan heap-ə istinad olunur.

       - data tiplərin bu formada iki kategoriyaya ayrılması sadəcə javascript dilinə xas xüsusiyyətdir yoxsa digər dillərdə də eyni yanaşma mövcuddur mu?

         Xeyr bu təkcə Javascriptə xas bir şey deyil. Digər proqramlaşdırma dillərində də data tipləri iki kateqoriyaya ayrılır.

    - Bu mövzunu öyrənmək proqramçı olaraq sizə nə qata bilər? Yəni bu mövzunu qavramağınız sizə nə fayda verəcək?
      
      Bu mövzunun öyrənilməsi məlumat növlərinin hər daim işlətdiyimizə görə onların komputürin yaddaşında necə yer tutmasını müəyyən etmək üçün vacidbdir. Yəni kompüteri  və məlumat növlərinin qarşılıqlı şəkildə işləmə prinsipini müəyyən etməyə imkan verir.

3. **NaN, null, undefined in Javascript**
    - Bu tiplər başqa hansı dillərdə mövcuddur?
    
      Null digər bir neçə proqramlaşdırma dilində rast gəlinsədə, NaN və undefined ancaq Javascriptdə mövcuddur.
     
     - NaN null və undefined bunlardan hansı data tipdir və növləri nədir? Primitive yoxsa reference tip olub olmadığı haqqında nə deyə bilərsiz?

       Bunlardaan undefined həm data tip həm də dəyər ola bilir.NaN number tpindədir.Null isə object tipidir.Bunlar primitiv data tipdir.

     - Type Casting metodlarından istifadə edərək bu dəyərləri çevirəndə hansı nəticələr əldə edildiyini analiz edin və bunun səbəblərini araşdırın
  
       Number tipinde NaN və undefined NaN olaraq nəticələnəcək.Null isə 0 olacaq.
      String tipinde isə bu ifadələri stringə çevirəcək.
      Boolean tipində isə null,NaN və undefined  false olacaq.

4. **Expressions and operators**
    - expression deyiləndə nə başa düşməyim lazımdır?

      Expressions hər hansı kod vahidir.Javascriptdə kod yazmaq üçün istifadə olunan istifadə olunan ifadələrdir.

    - operator və expression arasında fərqlər nələrdir?

      Expressions hər hansı kod vahidləridir. Operatorlar isə dəyərlər üzərində müəyyən əməliyyatlar yerinə yetirmək üçün istifadə olunur.

5. **Növbəti həftə üçün təyin olunan mövzu - Functions in Javascript**

    - function ümumiyyətlə nə üçün istifadə edilir?

      Funksiya müəyyən bir işi yerinə yetirən kod blokudur.Eyni zamanda kod təkrarının qarşısını almaq üçün də funksiyalardan istifadə olunur. Yəni bir neçə yerdə tərar istifadə edəcəyimiz kodlar üçün bir funksiya yaza bilərik onu həmin bir neçə yerdə istifadə edərik və buda kod təkrarının qarşısını alır.

    - function istifadə etmənin kod yazarkən gətirdiyi faydalar
     
      Funksiyalar proqramı və oxunma sürətini asanlaşdırır.Kod təkrarının qarşısını alır.
      Bir dəfə təyin edib bir neçə yerdə istifadə etmək mümükündür.

    - necə formada function təyin etmək olar?
     
      Funksiyanı təyin  etmək  üçün function açar sözündən istifadə olunur. Onların adlandırılması isə javascriptdə dəyişənlərin adlandırılma qaydasına əsasən aparılır.

    - scope anlayışı nədir? 
     
      scope-lar dəyişənlərin mövcudluğunu müəyyən edir.Lokal və qlobal dəyişənləri müəyyən edir. Bəzi kod ifadələrində if else for ve s scope ler önəm daşıyırlar.