import Card from "./Card";

const CardList = ({ pokemons }) => {
  if (!pokemons || pokemons.length === 0) {
    return (
      <p className="text-center text-slate-500 text-sm">
        No hay Pokémon para mostrar.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {pokemons.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default CardList;
