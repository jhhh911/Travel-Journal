import Header from "./components/Header";
import Entry from "./components/Entry";
import data from './data.js'

export default function App() {
  const entryElements = data.map(entry => {
    return <Entry 
          img={{
            src: entry.img.src,
            alt: entry.img.alt
          }}
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

