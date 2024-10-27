   let pokemonList = [
        { name: "Bulbasaur", height: 7, type: ["grass", "poison"] },
        { name: "Pikachu", height: 4, type: ["electric", "flying"] },
        { name: "Squirtle", height: 5, type: ["fire", "ice"] }
    ];
    
    
    const pokemonRepository = (function() {
        const list = pokemonList; 
    
        function getAll() {
            return list; 
        }
    
        function add(item) {
            if (item && typeof item === 'object') {
                list.push(item); 
            } else {
                console.error('Invalid item: must be an object');
            }
        }
    
        return {
            getAll: getAll,
            add: add
        };
    })();
    
     for (let i=0; i < pokemonList.length; i++) {
       if (pokemonList[i].height <6 && pokemonList[i].height>0){
       document.write(" "+ pokemonList[i].name + " (height: "+ pokemonList[i].height + ")")}
        else if (pokemonList[i].height > 6) {
            document.write(pokemonList[i].name + " (height: " + pokemonList[i].height +")"+ " - Wow, that's big! ");
       }
   } 