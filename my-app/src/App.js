import iconBurger from "./compMenu/burger.svg"
import logoReact from "./compMenu/logo.svg"
import './App.css';
import Menu from "./compMenu/Menu";




export default function App() {
  return (
    <div>
      <Menu icon={iconBurger} logo={logoReact} />
    </div>
  )
}


