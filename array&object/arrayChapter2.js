// * * * * ARRAY METHODS * * * * //

// basic method of array


// 1 => push();

    // *** array ke end(last) me ek naya element add krta hai
    //  ** * ** Syntax ** * ** //

    const fruit = ["Mango","Apple","Orange"]; 
    console.log(fruit);// before push
    fruit.push("litchi");
    console.log(fruit);// after push

    // multiple value push krna 
    const arr = [1,2];
    arr.push(3,4,5);
    console.log(arr);

   
// 2 => pop();

    // * * * Array ke last element ko remove kar deta hai * * * * //

    const popTest = ["Deepanshu","Rohit","Aman","chetan"];
    console.log(popTest); // before pop
    popTest.pop(); 
    console.log(popTest); // after pop

// 3 => unshift();

    // * * array ke starting me element add kr deta hai * * *//

    const uSTest = ["Hello","World","Welcome"];
    console.log(uSTest); // before unshift
    uSTest.unshift("Dorina");
    console.log(uSTest); // after unshift


// 4 => shift();

    // * * * Array ke first element ko remove kr deta hai * * * //

    const shiftTest = ["Hello","World","How","Are","You"];
    console.log(shiftTest);//before shift
    shiftTest.shift();
    console.log(shiftTest); //after shift

// 5 => slice();

    // * * * Array ki ek copy nikaalta hai original array ko change nhi krta * * * //

    // Syntax

    // Array.slice(start,end)  //
    // start => start index (include)
    // end => end index (exculded)

    const arr1 = [12,34,56,78,90];
    console.log(arr1);
    const newArr = arr1.slice(0,4);
    console.log(newArr);

// 6 => splice

    // * * * array me add ,Delete aur replace kar skta hai original array ko chnage krta hai * * * //

    // syntax
    // Array.splice(start,deleteCount,item1,item2) 

    //  * * * DELETE * * * //
    const spliceTest = [10,20,30,40,50];
    console.log(spliceTest); // before splice
    spliceTest.splice(1,2);
    console.log(spliceTest); // after splice

    // * * * ADD * * * //

    const arr4 = [1,2,3];
    arr4.splice(2,0,12);
    console.log(arr4);

    // * * * Replace * * * //

    const fru = ["Apple","Orange"];
    console.log(fru);
    fru.splice(1,1, 'banana');
    console.log(fru)

// 7 => concat(); // do array ko usse jaada ko aaps me jodta hai

    const a = [1,2,3];
    const b = [4,5,6];
    const result = a.concat(b);

    console.log(result);

// 8 => join() array ko string me convert krta hai

    const joinTest = ["Hello","java","Script"];
    console.log(joinTest) // without join
    const re = joinTest.join("-");
    console.log(re); // with join 

//  9 => reverse(); array ko ulta kar deta hai

    const rev = [12,34,56];
    console.log(rev) // without reverse
    rev.reverse();
    console.log(rev); //with reverse


// 10 => Sort() array ko sort krta hai

    const sortTest = [19,10,34,11];
    console.log(sortTest);
    sortTest.sort();
    console.log(sortTest);

