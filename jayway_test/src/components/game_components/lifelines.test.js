import React from "react";
import LifeLines from "./lifelines";
import { GameContext } from "./global/contexts";
import TestRenderer from 'react-test-renderer';


test("Test the output of <lifelines/>", () => {
 let fiftyLifeLineDisable = false;
let fiftyLifeLine = 1;
let addTimeDisable = false;
let timeLifeLine = 1;
let timer = 1500;

    const element = new TestRenderer.create(
        <GameContext.Provider value={timer, fiftyLifeLineDisable,fiftyLifeLine,addTimeDisable,timeLifeLine }>
            <LifeLines />
        </GameContext.Provider>
    );
    const testInstance = element.root;

    expect(testInstance.findByType("p").children).toStrictEqual(["Lifelines"]);
    expect(testInstance.findByProps({className:"5050_btn"}).children).toEqual(["50/50 (", ")"]);
    expect(testInstance.findByProps({className:"addtime_btn"}).children).toEqual(["+10 sec (", ")"]);
    });