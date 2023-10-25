// 1.Verilmis arrayin icerisinde deyeri 45 olan elementin indexini tapan function.
// let num = 0 
// function indexOf45(...params) {
//     for (let i = 0; i < params.length; i++) {
//         if (params[i] == 45) {
//             num=i
//         }
//     }
//     return num

// }
// console.log(indexOf45(1,2,3,4,12,23,123,45));
// 1 end
// ===========================================================================================================================
// 2. Verilmiş elementin bir ölçülü massivdə neçə dəfə təkrarlandığını tapan function tərtib edin.
// function repeat(arr,number) {
//     let num = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == number) {
//             num++;
//         }
//     }
//     return num;
// }

// const numberrepeat = repeat([1,2,31,1,2,34,1,2,1],1)
// console.log(numberrepeat);
// 2 end
// ===================================================================================================================



// 3. arrayin  elementləri arasında minimum və maksimum elementi nəzərə almadan yerde qalan elementlərin cəmini tapan function.
// let min = 1
// let max = 1
// let sumArr = 0
// let sum = 0
// function findSum(...params) {
//     for (let i = 0; i < params.length; i++) {
//         if (min >= params[i]) {
//             min =  params[i]         
//         }
//         if (max <params[i]) {
//             max = params[i]
            
//         }     
//         sumArr += params[i] 
//         sum = sumArr - (min + max)  
//     }
//     return sum 
// }
// console.log(findSum(1,2,3,4,5,6,7,34));
// ------------------------------------------------------------------------------------------