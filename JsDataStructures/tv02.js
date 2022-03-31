let names = ['Eli', 'Ehmed', 'Sara', 'Sevda', 'Qurban'];
let surnames = ['Piriyev', 'Memmedov', 'Qurbanova', 'Ezizova', 'Sadiqzade'];
let ages = [23, 34, 40, 58, 60];
let students = {
    adlar: names,
    soyadlar: surnames,
    yaslar: ages
}
for (i = 0; i < 5; i++) {
    console.log(`Ad:${students["adlar"][i]}, Soyad:${students["soyadlar"][i]},Yaş:${students["yaslar"][i]}`)
}