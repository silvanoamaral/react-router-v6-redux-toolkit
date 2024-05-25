import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { Link, Route, Routes } from "react-router-dom"
import { HistoryRouter } from "redux-first-history/rr6"

import { store, createReduxHistory } from "./redux"

import "./index.css"
import { ErrorPage, PedidoPage, SobrePage } from "./page"

function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pedidos">pedidos</Link>
          </li>
          <li>
            <Link to="/sobre">sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <HistoryRouter history={createReduxHistory(store)}>
        <Navbar />

        <Provider store={store}>
          <Routes>
            <Route path="/pedidos" element={<PedidoPage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Provider>
      </HistoryRouter>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
