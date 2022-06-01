import { createRoot } from "react-dom/client"

import "./index.css"
import HeroesApp from "./HeroesApp"

const container = document.getElementById("root")
const root = createRoot(container!)
root.render(<HeroesApp />)
