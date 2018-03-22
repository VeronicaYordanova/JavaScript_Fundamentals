function treasureLocator(array) {

    let tokelau = [8, 0, 9, 1];
    let tuvalu = [1, 1, 3, 3];
    let samoa = [5, 3, 7, 6];
    let tonga = [0, 6, 2, 8];
    let cook = [4, 7, 9, 8];

    for (let i = 0; i < array.length; i+=2) {
        let x = array[i];
        let y = array[i + 1];

        if(insideIsland(x, y, tokelau)){
            console.log('Tokelau')
        }
        else if(insideIsland(x, y, tuvalu)){
            console.log('Tuvalu')
        }
        else if(insideIsland(x, y, samoa)){
            console.log('Samoa')
        }
        else if(insideIsland(x, y, tonga)){
            console.log('Tonga')
        }
        else if(insideIsland(x, y, cook)){
            console.log('Cook')
        }
        else{
            console.log('On the bottom of the ocean')
        }

    }

    function insideIsland(x, y, island) {
        let x1 = island[0];
        let y1 = island[1];
        let x2 = island[2];
        let y2 = island[3];


        if(x >= x1 && x <= x2){
            if(y >= y1 && y <= y2){
                return true;
            }
        }
        return false;
    }
}
//treasureLocator([4, 2, 1.5, 6.5, 1, 3]);
treasureLocator([6, 4]);
//treasureLocator([8.5, 1]);