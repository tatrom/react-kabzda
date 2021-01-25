import {reducer, StateType} from "./reducer";


test("reduced should change value to opposite", () => {
    //data
    const state: StateType = {
        collapsed: false
    }
    //action
    const newState = reducer(state, {type: "TOGGLE-COLLAPSED"})
    //expect
    expect(newState.collapsed).toBe(true)
})

test("collapsed should be false", () => {
    //data
    const state: StateType = {
        collapsed: true
    }
    //action
    const newState = reducer(state, {type: "TOGGLE-COLLAPSED"})
    //expect
    expect(newState.collapsed).toBe(false)
})

test("reducer should throw error because action type is incorrect", () => {
    //data
    const state: StateType = {
        collapsed: true
    }
    //action
    //expect
    expect(() => {
        reducer(state, {type: "FAKETYPE"})
    }).toThrowError();
})

test("reducer should return correct value", () => {
    let state: StateType= {
        collapsed: true
    }
    state = reducer(state, {type: "TOGGLE-COLLAPSED"})
    expect(state.collapsed).toBe(false);
})