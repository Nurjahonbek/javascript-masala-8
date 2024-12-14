// foreach ga oid

// 1)Berilgan massivdagi barcha elementlarni ekranga chiqaruvchi dastur yozing.

// let arr = [1,1,32,4,3,56,5]

// arr.forEach(value =>{
//     console.log(value);
    
// })

// 2)Massivdagi har bir elementning kvadratini hisoblang va ekranga chiqaring.

// let arr = [1,2,3,4,5]

// let res = []
// arr.forEach(value =>{
//    res.push(value ** 2)
// })
// console.log(res);

// 3)Massivdagi barcha elementlarni ikkiga ko'paytiring va ularni yangi massivga joylang.

// let arr = [1,2,3,4,5]

// let res = []
// arr.forEach(value =>{
//    res.push(value * 2)
// })
// console.log(res);

// 4)Berilgan massivdan 5 dan katta bo'lgan barcha elementlarni topib, ularni ekranga chiqaruvchi dastur yozing.

// let arr = [12,3,2,13,45,4,6,7,9]

// arr.forEach(value =>{
//     if(value>5){
//         console.log(value);
//     }
// })


// 5)Har bir elementga 10 qo'shib, yangi massivga saqlang.

// let arr = [1,2,3,4,5]
// let res = []
// arr.forEach(value =>{
//     res.push(value + 10)
// })
// console.log(res);

// 6)Massivdagi barcha juft sonlarni ekranga chiqaring.

// let arr = [1,2,3,45,54,32]

// arr.forEach(value =>{
//     if(value % 2 == 0){
//         console.log(value);
        
//     }
// })

// 7)Har bir elementning teskari tartibini chiqaruvchi dastur yozing (reverse bilan).

// let arr = ['olma', 'gilos', 'shaftoli']

// arr.forEach(value =>{
// let res = value.split('').reverse().join('')
// console.log(res);
// })

// 8)Berilgan massivdan "a" harfi mavjud bo'lgan elementlarni ekranga chiqaring (includes bilan).

// let arr = ['olma', 'behi', 'nok']

// arr.forEach(value =>{
//     if(value.includes('a')){
//         console.log(value);
        
//     }
// })

// 10)Har bir elementni vergul orqali birlashtirib, satr ko'rinishida chiqaruvchi dastur yozing (join bilan).

// let arr = ['olma', 'anor', 'gilos']
// let res = arr.join(', ')
// console.log(res);

// 11)Massivdagi har bir elementdan faqat birinchi 3 belgisini chiqaruvchi dastur yozing (slice bilan).

// let arr = ['olma', 'anor', 'behi']

// arr.forEach(value =>{
//     console.log(value.slice(0, 3));
// })

// 12)Har bir elementning oxirgi belgisini chiqaruvchi dastur yozing.

// let arr = ['olma', 'anor', 'behi']

// arr.forEach(value =>{
//     console.log(value[value.length-1]);
    
// })

// 13)Massivdagi har bir elementni uzunligiga qarab tartiblang va natijani ekranga chiqaring (sort bilan).

// let arr = ['olma', 'anor', 'behi', 'shaftoli'];

// arr.sort((a,b) => a.length - b.length)
// console.log(arr);

// 14)Har bir elementga oxiriga ! qo'shing va yangi massivga saqlang.

// let arr = ['olma', 'behi', 'nok']
// let res = []
// arr.forEach(value =>{
//     res.push(value + '!')
// })
// console.log(res);

// 15)Berilgan massivning barcha elementlarini kichik harflarga o'zgartirib ekranga chiqaring.

// let arr = ['OLma', 'Uzum', 'NoK']

// arr.forEach(value =>{
//     console.log(value.toLowerCase());
    
// })

// map ga oid

// 1)Massivdagi har bir elementni 2 barobar kattalashtirib yangi massivga saqlang.

// let arr = [1,23,4,5,54,45]
// let res = arr.map(value =>{
//     return value *2
// })
// console.log(res);

// 2)Har bir elementning kvadratini hisoblab yangi massivga saqlang.

// let arr = [1,23,4,5,54,45]
// let res = arr.map(value =>{
//     return value ** 2
// })
// console.log(res);

// 3)Massivdagi barcha elementlarni teskari tartibda yangi massivga saqlang (reverse bilan).

// let arr = ['olma', 'gilos', 'nok']
// let res = arr.map(value =>{
//     return value.split('').reverse()
// })
// console.log(res);

// 4)Har bir elementdan oxirgi 3 ta belgisini olib yangi massivga saqlang (slice bilan).

// let arr = ['olma', 'behi', 'gilos']

// let res = arr.map(value =>{
//     return value.slice(-3)
// })
// console.log(res);

// 5)Har bir elementni katta harf bilan yozib yangi massivga saqlang.

// let arr = ['olma', 'behi', 'gilos']
// let res = arr.map(value =>{
//     return value.toUpperCase()
// })
// console.log(res);

// 6)Har bir elementga "Hello, " qo'shib yangi massivga saqlang.

// let arr = ['olma', 'behi', 'gilos']
// let res = arr.map(value =>{
//     return value + 'hello'
// })
// console.log(res);

// 7)Har bir elementni ikki marta takrorlang va yangi massivga saqlang.

// let arr = ['olma', 'behi', 'gilos']
// let res = arr.map(value =>{
//     return value.repeat(2)
// })

// console.log(res);

// 8)Har bir elementning uzunligini aniqlang va yangi massivga saqlang.

// let arr = ['olma', 'behi', 'gilos']
// let res = arr.map(value =>{
//     return value.length
// })
// console.log(res);

// 9)Har bir elementning indeksini element bilan birlashtirib yangi massivga saqlang (indexOf bilan).

// let arr = ['uzum', 'mandarin', 'aplesin']

// let res = arr.map(function (value, index){
//     return arr.indexOf(value) + '  ' + value
// })
// console.log(res);

// 10)Har bir elementning teskari yozilishini hisoblab yangi massivga saqlang (split, reverse, join bilan).

// let arr = ['uzum', 'mandarin', 'aplesin']
// let res = arr.map(value =>{
//     return value.split('').reverse().join(',')
// })
// console.log(res);

// 11)Massivdagi har bir elementdan boshidagi va oxiridagi belgisini olib tashlang (slice bilan).

// let arr = ['uzum', 'mandarin', 'aplesin']
// let res = arr.map(value =>{
//     return value.slice(1, -1)
// })
// console.log(res);

// 12)Massivdagi barcha elementlarni tartiblab yangi massivga saqlang (sort bilan).

// let arr = ['uzum', 'mandarin', 'aplesin']
// let res = arr.map(value =>{
//     return arr.sort()
// })
// console.log(res);

// 13)Har bir elementni katta harfga o‘zgartiring va yangi massivga saqlang.

// let arr = ['olma', 'behi', 'gilos']
// let res = arr.map(value =>{
//     return value.toUpperCase()
// })
// console.log(res);

// 15)Har bir elementdan faqat sonlarni olib yangi massivga saqlang.

// let arr = ['fsn21c', 'dj356m', 'nwj14f2']
// let res = []
// arr.forEach(value =>{
//     let stringarr = value.split('')
//     for(const iterator of stringarr){
//         if(Number(iterator)){
//             res.push(iterator)
//         }
//     }
// })
// console.log(res);

// filter ga oid

// 1)Berilgan massivdan faqat juft sonlarni olib tashlang va yangi massivga saqlang.

// let arr = [1,23,34,54,65,32,12,21]

// let res = arr.filter(value =>{
//     return value % 2 == 1 
// })
// console.log(res);

// 2)Massivdan faqat manfiy sonlarni olib yangi massivga saqlang.

// let arr = [1,23,34,54,-65,-32,12,-21]

// let res = arr.filter(value =>{
//     return value > 0 
// })
// console.log(res);

// 3)Berilgan massivdan "a" harfi mavjud bo'lgan elementlarni olib yangi massivga saqlang (includes bilan).

// let arr = ['olma', 'behi', 'gilos']

// let res = arr.filter(value =>{
//     return value.includes('a')
    
// })
// console.log(res);

// 4)Faqat uzunligi 5 dan katta bo'lgan elementlarni olib yangi massivga saqlang.

// let arr = ['mandarin', 'apelsin', 'nok', 'behi']

// let res = arr.filter(value =>{
//     return value.length > 5
// })
// console.log(res);

// 5)Berilgan massivdan faqat "test" so‘zini o‘z ichiga olgan elementlarni olib yangi massivga saqlang.

// let arr = ['test', 'savollar', 'testjavoblar' ]

// let res = arr.filter(value =>{
//     return value.includes('test')
// })
// console.log(res);

// 6)Massivdan faqat teskari tartibda joylashtirilgan elementlarni olib yangi massivga saqlang (reverse bilan).

// let arr = ['olma','kok', 'behi', 'lol', 'gilos']
// let res = arr.filter(value =>{
//     return value == value.split('').reverse().join('')
// })
// console.log(res);

// 7)Massivdan faqat 0 dan katta bo'lgan sonlarni olib yangi massivga saqlang.

// let arr = [-1, -4,2, 32, -21,45, 6]
// let res = arr.filter(value =>{
//     return value > 0
// })
// console.log(res);

// 8)Faqat sonlar mavjud bo'lgan elementlarni olib yangi massivga saqlang.

// let arr = ['banan', 12, 'uzum', 132, 42]
// let res = arr.filter(value =>{
//     return Number(value)
// })
// console.log(res);

// 9)Faqat uzunligi 3 dan kichik bo‘lgan elementlarni olib yangi massivga saqlang.

// let arr = ['olma', 'la', 'li', 'lo']
// let res = arr.filter(value =>{
//     return value.length < 3
// })
// console.log(res);

// 10)Berilgan massivdan faqat unli harflardan iborat elementlarni olib yangi massivga saqlang.

// let arr = ['a', 'e', 'c', 'd','i']
// let res = arr.filter(value =>{
//     return value.includes('a', 'i', 'e')
// })
// console.log(res);

// 11)Faqat boshida "abc" bo‘lgan elementlarni olib yangi massivga saqlang (slice bilan).

// let arr = ['abssf', 'avcand', 'abcsjd', 'abcsd']

// let res = arr.filter(value =>{
//     return value.includes('abc')
// })
// console.log(res);

// 12)Faqat oxirida "xyz" mavjud bo‘lgan elementlarni olib yangi massivga saqlang (slice bilan).

// let arr = ['hadxyz', 'asdxyz', 'aff', 'sffs']
// let res = arr.filter(value =>{
//     return value.slice(-3) == 'xyz'
// })
// console.log(res);

// 13)Berilgan massivdan faqat qiymati 10 dan kichik bo‘lgan sonlarni olib yangi massivga saqlang.

// let arr = ['afhafh', 'aFGSAGRWQWGQG', 'WFQWFE', 'QWFQWFWQQwrg']
// let res = arr.filter(value =>{
//     return value.length < 10
// })
// console.log(res);

// 14)Faqat "test" so‘zini o‘z ichiga olmagan elementlarni olib yangi massivga saqlang (includes bilan).

// let arr = ['test', 'savollar', 'testjavoblar' ]

// let res = arr.filter(value =>{
//     return !value.includes('test')
// })
// console.log(res);

// 15)Faqat uzunligi eng uzun bo‘lgan elementlarni olib yangi massivga saqlang.

// let arr = ['faefjnea', 'WFEBJBWlH', 'jsnsusr', 'fshb']
// let max = Math.max(...arr.map(value => value.length))
// let res = arr.filter(value =>{
//     return value.length == max
// })
// console.log(res);






















