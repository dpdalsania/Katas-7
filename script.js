//forEach()
let employees=[
    {name: 'Jon', salary: '10,000'},
    {name: 'Bob', salary: '20,000'},
    {name: 'Kevin', salary: '15,000'},
    {name: 'Mike', salary: '30,000'}
];
function newCallbackForEach(item){
    console.log(item);
}
function myForEach(array, callback){
    for(let i=0; i< array.length; i++){
        callback(array[i])
    }
}
 //employees.forEach(newForEach);
myForEach(employees,newCallbackForEach)
console.log('---------')

// map()
let num=[1,4,9,16,25,36]
console.log(num)
function newCallbackMap(number){
    return Math.sqrt(number)
}
function myMap(num,callback){
    let resultarray = []
    for(let i=0; i< num.length; i++){
    resultarray.push(callback(num[i]))
    
}
 return resultarray
}
console.log(myMap(num,newCallbackMap))
console.log('---------')

//some()
 let number = [10,50,20,100,130,150]
 console.log(number)
 function newCallbackSome(number){
     return number>100;
 };
function mySome(number,callback){
    let array = []
    for(let i=0; i< number.length; i++){
        array.push(callback(number[i]))
}
return array
}
console.log(mySome(number,newCallbackSome))
 console.log('---------')

//find()
let array1 = [5,15,80,100,8,7,200,230]
console.log(array1)
function newCallbackFind(array1){
    return array1 > 15;
};
function myFind(array1,callback){
    
    for(let i=0; i< array1.length; i++){
        if(callback(array1[i])){
            return array1[i]
        }
}
 return
}
console.log(myFind(array1,newCallbackFind))
 console.log('---------')

//findIndex()
let array2 = [55,20,16,15,14,70,80,20]
console.log(array2)
function newCallbackFindIndex(array2){
    return array2 < 16;
};
function myFindIndex(array2,callback){
   
    for(let i=0; i< array2.length; i++){
       if(callback(array2[i])){
        return i
       }
    }

return 
}
console.log(myFindIndex(array2,newCallbackFindIndex))
console.log('---------')


//every()
let array3 = [1, 30, 39, 29, 10, 13];
console.log(array3)
function newCallbackEvery(array3){
    return array3 < 29;
};
function myEvery(array3,callback){
for(let i=0; i< array3.length; i++){
   if(!callback(array3[i])){
       return false;
   }
}
return true;
}
console.log(myEvery(array3,newCallbackEvery))
console.log('---------')



// //filter()
let words = ['apple','lime','graphes','bananan','mango','potato','eggplants','kiwi'];
console.log(words)
function newCallbackFilter(words){
    return words.length > 6;
};
function myFilter(words,callback){
    let word = []
    for(let i=0; i< words.length; i++){
        if(callback(words[i])){
             word.push(words[i])
           }
        }
    
    return word
    }
   
    console.log(myFilter(words,newCallbackFilter))
    console.log('---------')








