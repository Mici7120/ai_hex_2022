const HexGame = require('../HexGame');
const HextAgent = require('../HexAgentRandom');//require('./HexAgent');
const HextAgent2 = require('../HexAgentMinMax');//require('./HexAgent');


//console.log(HextAgent);

var problemContainer = new HexGame({});

problemContainer.addAgent("1", HextAgent, { play: true });
problemContainer.addAgent("2", HextAgent2, { play: false });

/*let map = [[0, '2', '1'],
[0, '2', '2'],
[0, '1', 0]];*/
let size = 5;
let map = new Array(size);
for (let i = 0; i < size; i++) {
  map[i] = new Array(size);
  for (let j = 0; j < size; j++) {
    map[i][j] = 0;
  }
}

this.state = { squares: map };
let that = this;
this.iterator = problemContainer.interactiveSolve(map, {
  onFinish: (result) => {
    let squares = JSON.parse(JSON.stringify(result.data.world));
    console.log("Winner: " + result.actions[result.actions.length - 1].agentID, result.data.world);
    //console.log(result.data.world);
  },
  onTurn: (result) => {
    let squares = JSON.parse(JSON.stringify(result.data.world));
    console.log(result.actions[result.actions.length - 1]);
  }
});

while (this.iterator.next());
