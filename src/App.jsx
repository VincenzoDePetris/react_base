import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./card/Card";
import Nav from "./Components/Nav.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <>
      <Nav></Nav>
      <div className="cards grid grid-cols-4 gap-5">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>

        <Card></Card>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
