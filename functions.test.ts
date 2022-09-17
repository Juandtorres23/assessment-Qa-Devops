const {shuffleArray} = require('./utils')

let testData = [
    {
        id: 0,
        name: "Juan",
        health: 100
    },

    {
        id: 1,
        name: "Fede",
        health: 50
    },

    {
        id:2,
        name: "Derek",
        health: 75
    }
]

describe('shuffleArray should', () => {
    test("return length of array", () => {
        const shuffledArray = shuffleArray(testData)
        expect(shuffledArray.length).toBe(testData.length)
    });

    test("can assess testData", () => {
        expect(testData[1].name).toBe("Fede")
    });
});