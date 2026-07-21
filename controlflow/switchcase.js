// switch case ka use tab hota hai jab ek hi variable koo bahut saari fixed value se compare krna ho

// socho restaurant me manu hai 
// 1 -> pizza
// 2 -> burger
// 3 -> pasta

// ab js ko dekhna pdega user ne konsa number choose kiya 

// ======================== syntax ======================


//  switch(expression){
//     case 1:
//         code
//         break

//     case 2:
//         code
//         break

//     case 3:
//         code
//         break

//     case 4:
//         code
//         break
//  }

let day = 2;

switch(day){

    case 1:
        console.log("mon");
        break
    case 2:
        console.log("tue");
        break
    case 3:
        console.log("wed");
        break
    case 4:
        console.log("thu");
        break
    case 5:
        console.log("fri");
        break
    case 6:
        console.log("sat");
        break
    case 7:
        console.log("sun");
        break
    default:
        console.log("invalid day")
}

// BREAK KA USE ISLIYE HOTA HAI KI JHAA PE CASE MIL JAAYE VHI PE CODE RUK JAAYE AAGE NA BADE
// DEFAULT KA USE TBH HOTA HAI KI AGAR KOI BHI CASE MATCH NA KRE TBH YE CODE CHLE


