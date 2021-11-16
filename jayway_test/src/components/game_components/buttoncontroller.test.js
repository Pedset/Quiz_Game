import React from "react";
import Buttons from "./buttoncontroller";
import { GameContext } from "./global/contexts";
import TestRenderer from 'react-test-renderer';


test("Test the output of <Buttons/>", () => {

let timer = 1500;

    const element = new TestRenderer.create(
        <GameContext.Provider value={timer}>
            <Buttons />
        </GameContext.Provider>
    );
    const testInstance = element.root;

    expect(testInstance.findByProps({className:"quit_btn"}).children).toEqual(["Quit game"]);
    expect(testInstance.findByProps({className:"submit_btn"}).children).toEqual(["Next Question"]);
    });