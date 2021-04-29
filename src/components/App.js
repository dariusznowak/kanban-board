import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BoardsContainer from "./BoardsContainer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <Header />
        <BoardsContainer />
        <Footer />
      </div>
    </DndProvider>
  );
};

export default App;
