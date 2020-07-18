    //1st solution
    function feetToMile(feet){
        if (feet <= 0){
            return feet + "wait Distance can not be negative"
        } else {
            let mile = feet / 5280;
            return mile;
        }
    };
    var resultMile1 = feetToMile(21000).toFixed(2);
    var resultMile2 = feetToMile(0);
    console.log(resultMile1);
    console.log(resultMile2);


    //2nd solution.
    function woodCalculator(numChair, numTable, numBed){
        let woodChair = numChair * 1;
        let woodTable = numTable * 3;
        let woodBed = numBed * 5;
        let total = woodChair + woodTable + woodBed;
        return total;
    };
    let result = woodCalculator(10, 50, 70);
    console.log(result);


    //3rd solution
   function brickCalculator(floorNumber){
    if (floorNumber >=1 && floorNumber <=10){
        let brickNumber = floorNumber * 15000;
        return brickNumber;
    }
    else if (floorNumber >= 11 && floorNumber <= 20) {
        let fristBrickNumber = 10 * 15000;
        let remaining = floorNumber - 10 ;
        let secondBrickNumber = remaining * 12000 ;
        brickNumber = fristBrickNumber + secondBrickNumber ;
        return brickNumber;
    }
    else if (floorNumber > 21){
        let fristBrickNumber = 10 * 15000 ;
        let secondBrickNumber = 10 * 12000 ;
        let remaining = floorNumber - 20 ;
        let thirdBrickNumber = remaining * 10000 ;
        brickNumber = fristBrickNumber + secondBrickNumber + thirdBrickNumber ;
        return brickNumber;
    }
    else {
        if( floorNumber <= -1){
            return "Sorry enter positive number";
        } 
    }
    return brickNumber;
    };
    let oneToTen = brickCalculator(7);
    let elevenToTwenty = brickCalculator(19);
    let twentyUp = brickCalculator(23);
    let nagetive = brickCalculator(-5);
    console.log(oneToTen);
    console.log(elevenToTwenty);
    console.log(twentyUp);
    console.log(nagetive);


    //4th solution
    function tinyFriend(friend){
        let singleFriend =friend[0];
        for(let i = 0; i < friends.length; i++){
            let element = friends[i];
            if (element < singleFriend){
                singleFriend = element ;
            }
        }
        return singleFriend;
    };
    let friends =["Johir", "Shaki", "Abid", "Rashel", "Soriful" , "Manik"];
    let results = tinyFriend(friends);

    console.log(results);
        
