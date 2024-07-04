import PokeCard from "./PokeCard";
import "../styles/listPokemons.css";

const ListPokemons = ({ pokemons }) => {
  return (
    <div className="card-flex">
      {pokemons?.map((pokeInfo) => (
        <PokeCard key={pokeInfo.url} pokeInfo={pokeInfo} />
      ))}
    </div>
  );
};

export default ListPokemons;
