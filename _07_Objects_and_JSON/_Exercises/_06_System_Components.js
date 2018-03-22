function systemComponents(stringArray) {

    let finalResultMap = new Map();

    for (let line of stringArray) {
        let tokens = line.split('|').filter(w => w != '').map(w => w.trim());
        let systemName = tokens[0];
        let componentName = tokens[1];
        let subcomponentName = tokens[2];

        if (!finalResultMap.has(systemName)){
            let fullComponentMap = new Map();
            fullComponentMap.set(componentName, []);

            finalResultMap.set(systemName, fullComponentMap);
            finalResultMap.get(systemName).get(componentName).push(subcomponentName);
        }
        else{
            if(finalResultMap.get(systemName).get(componentName)){
                finalResultMap.get(systemName).get(componentName).push(subcomponentName);
            }
            else{
                finalResultMap.get(systemName).set(componentName, []);
                finalResultMap.get(systemName).get(componentName).push(subcomponentName);
            }
        }
    }

    let systemsSorted = Array.from(finalResultMap.keys()).sort((s1, s2) => sortSystems(s1, s2));

    for(let system of systemsSorted) {
        console.log(system);
        let componentsSorted = Array.from(finalResultMap.get(system).keys()).sort((c1, c2) => sortComponents(system, c1, c2));

        for(let component of componentsSorted) {
            console.log(`|||${component}`);
            finalResultMap.get(system).get(component).forEach(sc => console.log(`||||||${sc}`))
        }
    }

    function sortSystems(s1, s2) {
        if(finalResultMap.get(s1).size != finalResultMap.get(s2).size) {
            return finalResultMap.get(s2).size - finalResultMap.get(s1).size;
        } else {
            return s1.toLowerCase().localeCompare(s2.toLowerCase());
        }
    }

    function sortComponents(system, c1, c2) {
        return finalResultMap.get(system).get(c2).length - finalResultMap.get(system).get(c1).length;
    }
}
systemComponents(
['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']);