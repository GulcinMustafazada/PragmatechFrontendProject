## Javascript research
 1. Imperative and Declarative Approach in programming

  - Proqramlaşdırma dillərinin dizayn olunması deyiləndə ağlınıza nə gəlir? Yəni bir proqramlaşdırma dili necə dizayn edilə bilər?
 
    Proqramlaşdırma dillərinin dizaynı dedikdə onalrın başa düşülən bir dildə yazılmasıdır.Yəni bu əslində nə deməkdir? İstifadəçilər hər hansı proqrama girərkən və ya onu istifadə edərkən müəyyən səhvlərə xətalara yol verə bilərlər.Ona görə də proqramlar proqramlaşdırma dilləri vasitəsilə elə dizayn olunmalıdır ki, bu səhvləri həll etmək mümkün olsun. Yəni proqramlaşdırma dilinin dizaynı müəyyən problemi həll edə bilmək məqsədilə dizayn olunmalıdır.
 2. Function in Javascript

  - Function necə formada təyin olunur?

    Funksiaynı təyin etmək üçün function açar sözündən istifadə olunur. Bundan sonra isə funksiyanın adı yazılır. Mötərizələr açılır və bu mötərizələrin içərisində funkiyaya verilən parametrlər yazılır.Daha sonra isə bəzəkli mötərizələr açılır və onun içərisində funksiyanın əsas gövdəsi yəni yerinə yetirəcəyi iş, kod  bloku yazılır.

  - Fərqli formada function təyin etmə sizcə hansı hallarda lazım ola bilər?
   
    Funksiya decleration və expression formasında təyin oluna bilər ki,bunlar eyni işi yerinə yetirsələrdə onların hansı hallarda yerinə yetirilməyində fərqlər vardır.
  Function  declaration -əsas kod blokunda ayrıca bir ifadə kimi təyin olunur. Təyin olunduğundan daha tez çağırıla bilər.
  Function Expression-funksiya bir ifadə şəklində = operatoru vasitəsilə hər hansı bir dəyişənə mənimsədilir. Function expressions kod işləyən zaman ona gəlib çatılanda istifadə olunur.
    Ümumilikdə götürüldükdə isə bir qayda olaraq function declaration sintaksisi daha çox nəzərə alınır və istifadə olunur.Bunun səbəbi isə onun daha sərbəst şəkildə işlədilə bilməsi və təyin olunmamışdan əvvəl çağırıla bilməsidir. Eyni zamanda function declaration oxunaqlıq baxımından daha yaxşıdır.
    Ancaq bu declaration bizim yazdığımız koda uyğun deyilsə bu zaman biz function expressionsdan da istifadə edə bilərik.
  - function scope və global scope arasında fərqlər nədir?

    Javascriptdə function scope lar və global scopelar vardır.
    Function scope-Burada funksiya daxilində müəyyən edilmiş dəyişənlər ancaq bu funksiya daxilində əlçatandır.Hər bir funksiya özünə yeni bir function scope yaradır.Local dəyişənlərin də function scopeları var və onlara ancaq bu funksiya daxilində daxil olmaq olur.

    Global scope-Global dəyişənlərin də qlobal scopeları vardır. Onlara hər yerdən daxil olmaq olar.Yəni qlobal dəyişənlərə javascript proqramında istənilən yerdən daxil olmaq olar.Onlar funksiya xaricində də işliyəcək.
  - function ramdə necə yer tutur?

    Funksiyalar dinamik olduğu üçün yəni müəyyən işi yerinə yetirdiklərinə görə ramda heap hissədə  yer tutur.
     