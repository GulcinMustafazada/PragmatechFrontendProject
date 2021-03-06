## Javascript research
 1. Imperative and Declarative Approach in programming

  - Proqramlaşdırma dillərinin dizayn olunması deyiləndə ağlınıza nə gəlir? Yəni bir proqramlaşdırma dili necə dizayn edilə bilər?
 
    Proqramlaşdırma dillərinin dizaynı dedikdə onalrın başa düşülən bir dildə yazılmasıdır.Yəni bu əslində nə deməkdir? İstifadəçilər hər hansı proqrama girərkən və ya onu istifadə edərkən müəyyən səhvlərə xətalara yol verə bilərlər.Ona görə də proqramlar proqramlaşdırma dilləri vasitəsilə elə dizayn olunmalıdır ki, bu səhvləri həll etmək mümkün olsun. Yəni proqramlaşdırma dilinin dizaynı müəyyən problemi həll edə bilmək məqsədilə dizayn olunmalıdır.

  - Öz həyatınızda imperativ və deklarativ yanaşmaya aid nümunələr tapın

    İmperativ və deklerativ yanaşma arasında müəyyən fərqlər vardır. Məsələn real həyatda buna bir nümunə olaraq hər hənsı bir yeməyin hazırlanması ardıcıllığını nümunə göstərə bilərik. İmperativ yanşma bunu tələb edirki bu ardıcıllıq pozulmasın və bu yeməyin hansı ardıcıllıqla və necə hazırlanıb nəticəyə gəlinməsi göstərilsin. Yəni yeməyin reseptini düzgün şəkildə icra olunsun.Deklarativ yanaşmada isə bu yeməyin əsas nəticə olaraq alınması üstün tutulur. Yəni məqsəd həmin yeməyin hazırlanmasıdır. Onun necə edilməsi yox nə edilməsidir.
    Və ya gündəlik həyatda yerinə yetirdiyimiz işlər ,məsələn Maşına mindim, bazara getdim, yeməkləri arabama qoyub kassirə pul verdim. Burada imperativ yanaşma var yəni bu işin  necə ediləcəyi təsvir olunur. 
    Bazara getdim ərzaq aldım. Bu isə deklarativ yanaşmadır.Yəni necə edildiyini izah etmədən nə edildiyini deyr.

  - Deklarativ yanaşma və funksiyalar arasında əlaqəni necə qura bilərsiniz?

    Deklarativ kodda biz bir sıra kiçik funksiyaları götürən və onları birləşdirən funksiya kompozisiyasının qurulmasına diqqət yetiririk ki, bir funksiya ardıcıl olaraq öz çıxışını sətirdəki növbəti funksiyaya giriş kimi ötürsün.

  - imperative və deklarative yanaşmaya aid kod nümunələri yazın özünüz üçün .Düzgün olub olmadığını yoldaşlarınızla analiz edin

    Məsələn verilən 3 ədədi kiçikdən böyüyə yığmaq.
   İmperative yanaşmada:
  <code> let a = 4;
   let b = 7;
   let c = 2;
if (a <= b && b <= c) {
    console.log(a, b, c);
} else if (a <= c && c <= b) {
    console.log(a, c, b);
} else if (b <= a && a <= c) {
    console.log(b, a, c);
} else if (b <= c && c <= a) {
    console.log(b, c, a);
} else if (c <= a && a <= b) {
    console.log(c, a, b);
} else if (c <= b && b <= a) {
    console.log(c, b, a);
} </code>

    Declarativ yanaşmada:
    const nums = [4, 2, 7];
    console.log(nums.sort());

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

3. Növbəti dərsin mövzuları üçün araşdırma sualları
  - Javascript kodlarının arxa planda işləmə prinsipi necədir?

    Biz javascriptdə kod yazdığımız zaman onun icrasından öncə v8 engine bu kodlar üçün yaddaşda müəyyən bir yer ayırır. Yən ramda yer ayrılır ki, hansı ki ramda 2 hissədən ibarət olur heap və stack hissəsindən.
    Məsələn dəyişənlər stackdə onlara verilən dəyərlər isə heapdə saxlanılır. Ümumilikdə isə deyilə bilər ki sabit və metod olmayan və obyekt olmayan ifadələr stackdə,dinamik olan metodu olanlar isə heapdə saxlanılır.
  - Allocate memory-use memory- release memory ifadələri nə deməkdir?

    Yaddaş  3 mərhələdən ibarət olur.
    Allocate memory-dəyərlər ilkin elan edildiyi zaman avtomatik olaraq Javascript yaddaşda yer ayıracaq.
    Use memory- Yaddaşın istifadəsi dəyərlərin həmin ayrılmış yaddaşda oxunması yazılması kimi başa düşülür.
    Release memory-Bu mərhələ ayrılmış yaddaşın artıq lazım olmadıqda buraxılması anlamına gəlir.Artıq onlar zibil qutusuna yəni garbage collectora yığılır. 
  - Static allocation vs dynamic allocation
    
    Stack -static memory allocation.Stack Javascriptin statik məlumatları saxlamaq üçün istifadə etdiyi məlumat struktrudur.Bunlara əsasən primitiv dəyərlər,sətrlər rəqəmlər vəs eyni zamanda obyektlərə və funksiyalara edilən istinadlar aiddir.
    Heap-dynamic memory allocation. Heap- Jsdə obyektlərin və funksiyaların məlumatlarının saxlandığı bir yerdir. Burada sabit yaddaş yeri ayrılmır,yəni lazım olduqda artırıla bilir.
  - garbage collection nədir?

    javascriptdə müəyyən obyektlər yaradıldığı zaman onlar üçün avtomatik olaraq yaddaşda yer ayrılır. Garbage collector isə burda o işi görür ki, həmin obyektlər istifadə olunduqdan sonra  boşaldılsın yəni artıq lazım olmadığı müddətdə. Bu obyektlər zibil qutusuna yəni garbage collectora boşaldılır.
    Bu proses isə garbage collection prosesi adlanır.
  - hoisting nədir?

    Hoisting yazdığımız kodun icrasından əvvəl funksiyaların classların elanının onların skoplarından yuxarı hissədə elan edilməsi anlamına gəlir.Hoisting edilməsi kodda müəyyən ciddi səhvlərə gətirib çıxara bilər ona görə də edilməməsi daha üstündür.
  - scope və hoisting ifadələri arasında fərq nədir?
  
     scopelar local və global ola bilirlər və yerləri və onlara daxil olma yerləri fərqli ola bilir. Ancaq hoisting local və qlobal dəyişənlərdən scopelardan asılı olmayaraq həmişə kodu icra edəcək scopedan yuxarı hissədə yerləşirlər.

---
 ### Funksiyalar
  
   1.  void və return function nədir?

        return funksiyalar hər hansı bir dəyər qaytaran funksiyalara deyilir. Yəni return funksiyalar funksiyanın bitdiyini təyin edir və qaytarılacaq dəyəri göstərir.
        Void funksiyaları isə heç bir dəyər qaytaran funksiyalar deyillər.

  2. return keyword-unun var olma məqsədi nədir?
       
        return açar sözü funksiyanın bitdiyini elan edir və eyni zamanda qaytarılacaq dəyəri göstərir.
  
  3. block scope vs function scope vs global scope fərqlər nədir?

     global scopeda yaradılan dəyişənləri hər yerdə çağırmaq olur. Onlar həm funksiyanın xaricində həm də daxilində işləyirlər.
    Function scopde isə ancaq funksiyanın daxilində çağırılır və funksiyanın xaricində işləmirlər.
    Block scope-da təyin olunan dəyişənlər isə ancaq həmin blok daxilində təyin oluna və çağırıla bilər.
    

---

## HTML / CSS / JS Araşdırma Sualları

  


     
  - Sual 01 -JavaScript nədir və necə işləyir?

     Javascript web üçün bir skript dildir və brauzerdə işləyir. Javascript HTML və CSS ilə yaratdığımız səhifələri daha dinamik hala gətirmək üçün istifadə olunan  bir proqramlşadırma dilidir.
      İlk oncə brauzer veb səhifəni yükləyir və onun HTML hissəini təhlil edir və daha sonra    onu DOM a çevirir. HTML CSS kodları yüklənib tamamlandıqdan sonra V8 engine yəni javascript mühərikki javascript kodlarını sırayla oxuyub təhlil edir  və icra edir. Bu, DOM-un JavaScript kodu ilə yenilənməsi və brauzer tərəfindən göstərilməsi ilə nəticələnir.
    
  
  - Sual 02 -DOM Traversing nədir? Nümunələr ilə izah edin.
     
    DOM traversing -html statik olur və biz bəzən onu interaktiv hala gətirmək istəyirik.Yəni bəzi HTML elemntlərini hərəkətli hala gətirmək istiyirik. Bu isə sadəcə HTML ilə mümükün deyildir. Bunu yerinə yetirmək üçün DOM-dan istifadə olunur.Yəni DOM Html sənədini Javascriptə keçirmək üçün bir interfeysdir. DOM traversing isə HTML elemntlərinə keçmək və ya bir elementdən digərinə keçid elemek mənasını verir.Məsələn HTML dəki yuxarıda olan yəni parent elementdə child elementə keçidi buna nümunə göstərmək olar.Eyni zamanda əksi də mümkündür.

     
     <img src="/Users/Aze/OneDrive/İş masası/img1.png">
     <img src="/Users/Aze/OneDrive/İş masası/img2.png">
  - Sual 03 -DOM Element və DOM Node arasındakı fərq nədir?

  - Sual 04-
HTML daxilində var olan hər hansı elementi silmək üçün nə etmək lazımdır?

     HTML sənədində olan hər hansı bir elementi silmək üçün .removeChoild() metodundan istifadə etmək olar.

- Sual 05 -
HTML daxilində olan bir elementi kopyalayaraq başqa bir elementin daxilinə yerləşdirmək üçün nə etmək lazımdır?

  HTML sənədində mövcud elemnetin kopyasını yaratmaq üçün .cloneNode() metodundan istifadə etmək lazımdır.Əgər metodun içərisinə boolean dəyəri olaraq true yazsaq yəni element.cloneNode(true) həmin elementin daxilində olan bütün elemtləri də kopyalayacaq ,ancaq təkcə həmin elemnti copy etmək istiyiriksə onda false yazırıq,yəni element.cloneNode(false).

 - Sual 06 -HTML daxilində olan elementləri seçərkən hansı DOM metodlarından istifadə olunur?
     
     HTML daxilində olan elementləri seçmək üçün element.querySelector() və ya document.querySelectorAll(), getElementById(),
     getElementsByClassName(),
     getElementsByTagName() methodlarından istifadə olunur.