import "../sass/global.scss";
import races from "../data/races.json";

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
        {races.map((race, key) => {
          return (
            <div className="cardHolder" key={key}>
              <RaceCard
                name={race.name}
                factions={race.factions}
                image={race.img}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const RaceCard = ({ name, factions }) => {
  return (
    <div className="wrapper">
      <div className="cardName">{name}</div>
      <div className="factions">{factions}</div>
    </div>
  );
};
