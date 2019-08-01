module.exports.trappingWater = arr => {
  return new TrapCal(arr).calc();
};

const { StateManager } = require("./StateManager");
const { StateDelegator } = require("./StateDelegator");

module.exports.TrapCal = class extends StateDelegator {
  constructor(arr, stateManager, { trap, iterate, shouldContinue } = {}) {
    super(stateManager || new StateManager());
    this.stateManager.init(arr);
    this.trap = trap || this.trap;
    this.iterate = iterate || this.iterate;
    this.shouldContinue = shouldContinue || this.shouldContinue;
  }

  calc() {
    while (this.shouldContinue) {
      this.iterate();
    }
    return this.result;
  }

  get shouldContinue() {
    const { leftLv, rightLv } = this.containerWater;
    return leftLv <= rightLv;
  }

  iterate() {
    const { leftLv, rightLv } = this.containerWater;
    // determine which side to start working forward or back from
    leftLv <= rightLv ? this.trap("left") : this.trap("right");
    return this;
  }

  trap(direction) {
    // if left is greater than the heightLeft we will make left = heightLeft
    const { index, height } = this.containerFor(direction);
    const waterLv = this.waterLvAt(index);
    this.setHeightFor(direction, waterLv);
    this.updateResultWith(height, waterLv);
    this.adjustWater(direction);
  }
};
