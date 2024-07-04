import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { useEffect } from "react";
import "../components/styles/pokeDetailPage.css";

const PokeDetailPages = () => {
  const { name } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const [pokemon, getPokemon] = useFetch(url);

  useEffect(() => {
    getPokemon();
  }, [name]);

  // Barra de progreso
  const hp = `${(pokemon?.stats[0].base_stat * 100) / 255}`;
  const attack = `${(pokemon?.stats[1].base_stat * 100) / 255}`;
  const defense = `${(pokemon?.stats[2].base_stat * 100) / 255}`;
  const specialAttack = `${(pokemon?.stats[3].base_stat * 100) / 255}`;
  const specialDefense = `${(pokemon?.stats[4].base_stat * 100) / 255}`;
  const speed = `${(pokemon?.stats[5].base_stat * 100) / 255}`;
  //

  return (
    <div>
      <header className="header">
        <div className="header--red">
          <div className="header--black"></div>
        </div>
        <div className="header-img">
          <img src="logo.png" alt="" />
        </div>
      </header>

      <article className="card-article">
        <div className="card-container">
          <article className={`header-card bg-${pokemon?.types[0].type.name}`}>
            <img
              className="header-image"
              src={pokemon?.sprites.other["official-artwork"].front_default}
              alt=""
            />
          </article>

          <div className="container-name">
            <p className="id-container">
              <span className="card-id"> ID - {pokemon?.id} </span>
            </p>
            <h2 className="header-name">{pokemon?.name}</h2>
            <ul className="card-weight-height">
              <li className="weight-height">
                <span className="weight-height-span">weight</span>{" "}
                {pokemon?.weight}
              </li>
              <li className="weight-height">
                <span className="weight-height-span">height</span>{" "}
                {pokemon?.height}
              </li>
            </ul>
          </div>
          <hr className="hr" />

          <ul className="body-card">
            <li className="type-ability">
              <span className="type-span">type</span>
              <div
                className={`type-ability-fill bg-${pokemon?.types[0].type.name}`}
              >
                <div className="type-ability-result">
                  {" "}
                  {pokemon?.types[0].type.name}
                </div>
              </div>
            </li>

            <li className="type-ability">
              <span className="type-span">Abilitys</span>
              <div className="type-ability-fill">
                <div className="type-result-ability">
                  {pokemon?.abilities[0].ability.name}
                </div>
                <div className="type-result-ability">
                  {pokemon?.abilities[1].ability.name}
                </div>
              </div>
            </li>
          </ul>

          <section className="stats-container">
            <h3 className="stats-title">Stats</h3>
            <hr className="hr" />

            <article className="stats-info">
              <li className="stats-info">
                <header className="stats-header">
                  <h3 className="stats-name">{pokemon?.stats[0].stat.name}:</h3>
                  <span className="stats-value">
                    {pokemon?.stats[0].base_stat}/255
                  </span>
                </header>

                <div className="progress-bar-container">
                  <div
                    className={`progress-stat bg-${pokemon?.types[0].type.name}`}
                    style={{ width: `${hp}%` }}
                  ></div>
                </div>
              </li>

              <li className="stats-info">
                <header className="stats-header">
                  <h3 className="stats-name">{pokemon?.stats[1].stat.name}:</h3>
                  <span>{pokemon?.stats[1].base_stat}/255</span>
                </header>
                <div className="progress-bar-container">
                  <div
                    className={`progress-stat bg-${pokemon?.types[0].type.name}`}
                    style={{ width: `${attack}%` }}
                  ></div>
                </div>
              </li>

              <li className="stats-info">
                <header className="stats-header">
                  <h3 className="stats-name">{pokemon?.stats[2].stat.name}:</h3>
                  <span>{pokemon?.stats[2].base_stat}/255</span>
                </header>
                <div className="progress-bar-container">
                  <div
                    className={`progress-stat bg-${pokemon?.types[0].type.name}`}
                    style={{ width: `${defense}%` }}
                  ></div>
                </div>
              </li>

              <li className="stats-info">
                <header className="stats-header">
                  <h3 className="stats-name">{pokemon?.stats[3].stat.name}:</h3>
                  <span>{pokemon?.stats[3].base_stat}/255</span>
                </header>
                <div className="progress-bar-container">
                  <div
                    className={`progress-stat bg-${pokemon?.types[0].type.name}`}
                    style={{ width: `${specialAttack}%` }}
                  ></div>
                </div>
              </li>

              <li className="stats-info">
                <header className="stats-header">
                  <h3 className="stats-name">{pokemon?.stats[4].stat.name}:</h3>
                  <span>{pokemon?.stats[4].base_stat}/255</span>
                </header>
                <div className="progress-bar-container">
                  <div
                    className={`progress-stat bg-${pokemon?.types[0].type.name}`}
                    style={{ width: `${specialDefense}%` }}
                  ></div>
                </div>
              </li>

              <li className="stats-info">
                <header className="stats-header">
                  <h3 className="stats-name">{pokemon?.stats[5].stat.name}:</h3>
                  <span>{pokemon?.stats[5].base_stat}/255</span>
                </header>
                <div className="progress-bar-container">
                  <div
                    className={`progress-stat bg-${pokemon?.types[0].type.name}`}
                    style={{ width: `${speed}%` }}
                  ></div>
                </div>
              </li>
            </article>
          </section>
        </div>

        <footer className="movements">
          <h3 className="movements-title">Movements</h3>
          <hr className="hr" />
          <div className="movements-container">
            {pokemon?.moves.map((tagInfo) => (
              <li className="movements-tags" key={tagInfo.moves}>
                {tagInfo.move.name}
              </li>
            ))}
          </div>
        </footer>
      </article>
    </div>
  );
};

export default PokeDetailPages;
