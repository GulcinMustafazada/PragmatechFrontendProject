## Javascript Research

1. **Understanding Syntax and Code Structure in JavaScript**
   -  Dəyişən təyin edərkən ya da dəyər mənimsədərkən boşluqlardan istifadə etsək bu mənə error olaraq qayıdar mı? let a=5; let a= 5; bu iki formada yazılışlardan hansısa error verəcək mi?

      Boşluqlardan istifadə etmək bizə error verməyəcəkdir.Çünki Javascript boşluqları görməzdən gəlir.Ancaq kodun daha oxunaqlı olması üçün boşluqlardan çox istifadə etməmək daha məqsədə uyöundur.Yəni bu iki yazılışın heç biri error verməyəcək.

   - Bütün proqramlaşdırma dillərində olduğu kimi Js-də xüsusi simvollardan istifadə edir. () və {} mötərizələri V8Engine tərəfindən necə analiz olunur? Bu mötərizələr tərcümə prosesində necə başa düşülür?

     Bu simvolların istifadəinin düzgün yerinə yetirilməməsi kodda müəyyən sintaksis xətalarına səbəb ola bilər .Yəni ki v8 engine bu kodu icra edərkən bu ardıcıl olaraq oxuyur və mötərizlərin yanlış yerdə yazılması və ya bağlanmaması xətalara səbəb olacaq və kod işləməyəcək.