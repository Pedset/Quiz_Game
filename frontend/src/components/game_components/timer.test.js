import React from "react";
import Timer from "./timer";
import { GameContext } from "./global/contexts";
import TestRenderer from 'react-test-renderer';


test("Test the output of <Timer/>", () => {
 let timer = 1500;
    const element = new TestRenderer.create(
        <GameContext.Provider value={timer}>
            <Timer />
        </GameContext.Provider>
    );
    expect(element.root.findByType("p").children).toStrictEqual(["Timer : ", "NaN"]);
});