function roadRadar([speed, area]) {
    speed = Number(speed);

    function getLimit(area) {
        switch (area){
            case 'motorway': return 130;
            case 'interstate': return 90;
            case 'city': return 50;
            case 'residential': return 20;
        }
    }

    let limit = getLimit(area);

    function getInfraction(speed, limit) {
        let overSpeed = speed - limit;

        if (overSpeed <= 0) {
            return false;
        } else if (overSpeed <= 20) {
            console.log('speeding')
        } else if (overSpeed <= 40) {
            console.log('excessive speeding')
        } else {
            console.log('reckless driving')
        }
    }

        let infraction = getInfraction(speed, limit);

        if(infraction){
            console.log(infraction);
        }
}
roadRadar([40, 'city'])
roadRadar([21, 'residential'])
roadRadar([120, 'interstate'])
roadRadar([200, 'motorway'])
    
    
    
    
