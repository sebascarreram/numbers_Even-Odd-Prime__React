import "./App.scss";

const Info = () => (
  <>
    <p className="header__info--text">
      <span className="header__info--name">Even </span>
      numbers background is <span className="header__info--green">green</span>
    </p>
    <p className="header__info--text">
      <span className="header__info--name">Odd </span>
      numbers background is <span className="header__info--darkYellow">Orange yellow</span>
    </p>

    <p className="header__info--text">
      <span className="header__info--name">Prime </span>
      numbers background is <span className="header__info--red">red</span>
    </p>
  </>
);

const Header = () => (
  <header className="header">
    <h1 className="header__title">Number Generator</h1>
    <div className="header__info">
      <Info />
    </div>
  </header>
);

// Prime numbers
const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const Li = ({ name, nbr }) => {
  return <li className={`card card--${name}`}>{nbr}</li>;
};

const Item = ({ numbers }) => {
  const nbr = numbers.map((i) => {
    // number ZERO
    if (i === 0) return <Li key={i} name="zero" nbr={i} />;
    // Number TWO
    if (i === 2) return <Li key={i} name="evenOdd" nbr={i} />;
    // Number PRIME
    if (isPrime(i)) return <Li key={i} name="prime" nbr={i} />;

    // Number Even or Odd
    if (i % 2 === 0) {
      return <Li key={i} name="even" nbr={i} />;
    } else {
      return <Li key={i} name="odd" nbr={i} />;
    }
  });
  return nbr;
};

const Numbers = () => {
  const numbers = [];
  for (let i = 0; i < 42; i++) {
    numbers.push(+i);
  }
  return <Item numbers={numbers} />;
};

const Main = () => (
  <main>
    <section className="container">
      <ul className="list">
        <Numbers />
      </ul>
    </section>
  </main>
);

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
