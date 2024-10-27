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

   pokemonRepository.getAll().forEach(function(pokemon) {
    if (pokemon.height < 6 && pokemon.height > 0) {
        document.write(" " + pokemon.name + " (height: " + pokemon.height + ")");
    } else if (pokemon.height > 6) {
        document.write(pokemon.name + " (height: " + pokemon.height + ") - Wow, that's big! ");
    }
});