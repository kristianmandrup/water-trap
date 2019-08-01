module.exports.StateManager = class {
  constructor(arr) {
    arr && init(arr);
  }

  init(arr) {
    this.arr = arr;
    this.result = 0;
    this.water = {
      left: {
        index: 0,
        height: 0
      },
      right: {
        index: arr.length,
        height: 0
      }
    };
  }

  adjustWaterIndex(direction, adjustment) {
    this.water[direction].index += adjustment;
  }

  adjustmentFor(direction) {
    return direction === "left" ? 1 : -1;
  }

  adjustWater(direction) {
    this.adjustWaterIndex(direction, this.adjustmentFor(direction));
  }

  get containerWater() {
    return {
      leftLv: containerWaterFor("left"),
      rightLv: containerWaterFor("right")
    };
  }

  containerWaterFor(direction) {
    const index = this.indexFor(direction);
    return this.waterLvAt(index);
  }

  setHeightFor(direction, height) {
    this.containerFor(direction).height = height;
  }

  setIndexFor(direction, index) {
    this.containerFor(direction).index = index;
  }

  updateResultWith(height, waterLv) {
    if (waterLv >= height) return;
    this.result += height - waterLv;
  }

  containerFor(direction) {
    return this.water[direction];
  }

  heightFor(direction) {
    return this.containerFor(direction).height;
  }

  indexFor(direction) {
    return this.containerFor(direction).index;
  }

  waterLvAt(index) {
    return this.arr[index];
  }
};
