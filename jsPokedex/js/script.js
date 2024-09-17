let pokemonList = [{name: "Bulbasaur", height: 7 , type: ["grass" ,"poison"]},
{name: "Pikachu", height: 4, type:["electric","flying"]},
{name: "Squirtle", height: 5 , type:["fire","ice"]}];

for (let i=0; i < pokemonList.length; i++) {
        if (pokemonList[i].height <6 && pokemonList[i].height>0){
        document.write(" "+ pokemonList[i].name + " (height: "+ pokemonList[i].height + ")")}
        else if (pokemonList[i].height > 6) {
            document.write(pokemonList[i].name + " (height: " + pokemonList[i].height +")"+ " - Wow, that's big! ");
        }
    }