import './App.css'
import { useReducer, useEffect } from "react";
import chef from "./images/chef.jpg"

function Header({ name }: { name: string }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
    </header>
  )
}

function Footer({ year }: { year: number }) {
  return (
    <footer>      
      <p>Copyright {year}</p>
    </footer>
  )
}

const dishes = [
  "Macaroni and Cheese",
  "Salmon with Potatoes",
  "Tofu with Vegetables",
  "Ministroni Soup",
  "Cowboy Ribeye"
]

const dishObjects = dishes.map((dish, i) => ({
  id: i,
  title: dish
}));

function Main({ dishes, openStatus, onStatus } : { dishes: { id: number, title: string }[], openStatus: boolean, onStatus: (status: boolean) => void }) {
  return (
    <>
      <div>
        <button onClick={() => onStatus(!openStatus)}>I want to be {openStatus ? "closed" : "open"}</button>
        <h2>Welcome to this beautiful restaurant! {openStatus ? "Open" : "Closed"}</h2>
      </div>
      <main>
        <img src={chef} height={200} alt="A photo of chef Eve, smiling and posed with arms crossed." />
        <ul>
          {dishes.map((dish) => <li key={dish.id} style={{ listStyleType: "none" }}>{dish.title}</li>)}
        </ul>
      </main>
    </>
  )
}

export default function App() {
  // const [status, setStatus] = useState(true);
  const [status, toggleStatus] = useReducer((status) => !status, true);

  useEffect(() => {
    console.log(`The restaurant is currently ${status ? "open" : "closed"}.`)
  }, [status])

  return (
    <>
      <h1>The restaurant is currently {status ? "open" : "closed"}.</h1>
      <button onClick={toggleStatus}>
        {status ? "Close" : "Open"} Restaurant
      </button>
      <Header name="Eve" />
      <Main dishes={dishObjects} openStatus={status} onStatus={toggleStatus} />
      <Footer year={new Date().getFullYear()} />
    </>
  )
}
