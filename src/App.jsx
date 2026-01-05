import Header from "./components/Header";
import Entry from "./components/Entry";
import data from './data.js'

export default function App() {
  const entryElements = data.map(entry => {
    return <Entry 
          img={entry.img}
          country={entry.country}
          googleMapsLink={entry.googleMapsLink}
          title={entry.title}
          dates={entry.dates}
          text={entry.text}
    />
  })
  return (
    <>
      <Header />
      <main className="container">
        {entryElements}
      </main>
    </>
  );
}
