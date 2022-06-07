const headQuarters = 42;
function distanceFromHqInBlocks(blocks){
    if(blocks < headQuarters){
        return headQuarters - blocks
    } else{
        return blocks - headQuarters
    }

}
distanceFromHqInBlocks(50);

function distanceFromHqInFeet(blocks){
return distanceFromHqInBlocks(blocks)*264;
}
distanceFromHqInFeet(42);

function distanceTravelledInFeet(start, destination){
    if(start < destination){
        return (destination - start) * 264
    } else{
        return (start - destination) * 264
    }
}
distanceTravelledInFeet(start, destination);

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) < 400){
        return 0
    } else if (distanceTravelledInFeet(start, destination) >= 400 && distanceTravelledInFeet(start, destination) < 2000 ){
        return (distanceTravelledInFeet(start, destination) -400) * 0.02
    } else if (distanceTravelledInFeet(start, destination) > 2000 && (distanceTravelledInFeet(start, destination) < 2500)){
        return 25
    } else {
        return "cannot travel that far"
    }
}
