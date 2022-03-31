let names = ['Eli', 'Ehmed', 'Sara', 'Sevda', 'Qurban'];
let surnames = ['Piriyev', 'Memmedov', 'Qurbanova', 'Ezizova', 'Sadiqzade'];
let ages = [23, 34, 40, 58, 60];
let students = [names, surnames, ages]

for (i = 0; i < 5; i++) {
    console.log(`Ad:${students[0][i]}, Soyad:${students[1][i]},Yaş:${students[2][i]}`)
}