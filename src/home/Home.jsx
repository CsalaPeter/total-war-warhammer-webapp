import "../sass/global.scss";
import races from "../data/races.json";
import { Link } from "react-router-dom";

function Home() {
  console.log(races);
  return (
    <div className="mainContainer">
      <HomePageHeader />
      <RacesAndFactions />
    </div>
  );
}

export default Home;

const HomePageHeader = () => {
  return (
    <header className="logos">
      <img src="/img/wh-logo.png" alt="Warhammer 1 Logo" className="wh1-logo" />
      <img
        src="/img/wh2-logo.png"
        alt="Warhammer 2 Logo"
        className="wh2-logo"
      />

      <img
        src="/img/wh3-logo.png"
        alt="Warhammer 3 Logo"
        className="wh3-logo"
      />
    </header>
  );
};

const RacesAndFactions = () => {
  return (
    <div className="contentContainer">
      <header>
        <h2 className="contentHeader">Races And Factions</h2>
      </header>
      <div className="listing">
        {races.map((race) => {
          return (
            <div className="cardHolder" key={race.id}>
              <Link to="/race" state={race.name}>
                <div className="raceName">{race.name}</div>
              </Link>
              <div className="factionImages">
                {race.factions?.map((faction, key) => (
                  <Link to="/faction" state={faction.name}>
                    <img
                      key={key}
                      className="factionIcon"
                      src={faction.image}
                      alt="Faction Icon"
                      title={faction.name}
                    />
                  </Link>
                ))}
              </div>
              <Buttons />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Buttons = () => {
  return (
    <div>
      <Link to="buildings">
        <button className="raceButtons">Buildings</button>
      </Link>
      <Link to="/tech_tree">
        <button className="raceButtons">Tech Tree</button>
      </Link>
      <Link to="/unites">
        <button className="raceButtons">Unites</button>
      </Link>
    </div>
  );
};
