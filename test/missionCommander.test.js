const MissionCommander = require('./../app/missionCommander');
describe("Unit Tests for Mission Commander Class", () => {
  test('1) Create a mission commander objet', () => {

    const myMissionCommander = new MissionCommander("Woopa");
    expect(myMissionCommander.name).toBe("Monica");

    //const result = 1 + 2
    //expect(result).toBe(10);
    //expect(result).toBe(3);
  });
})

