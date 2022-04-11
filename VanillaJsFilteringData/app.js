let students = [{
    ad: 'Eli',
    soyad: 'Piriyev',
    yas: 23
}, {
    ad: 'Ehmed',
    soyad: 'Memmedov',
    yas: 34
}, {
    ad: 'Sara',
    soyad: 'Qurbanova',
    yas: 40
}, {
    ad: 'Sevda',
    soyad: 'Ezizova',
    yas: 58
}, {
    ad: 'Qurban',
    soyad: 'Sadiqzade',
    yas: 60
}]

function ShowNames() {
    for (i = 0; i < students.length; i++) {

        console.log(`Ad:${students[i]["ad"]}, Soyad:${students[i]["soyad"]},Yaş:${students[i]["yas"]}`)
    }
}
ShowNames();