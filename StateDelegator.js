module.exports.StateDelegator = class {
  constructor(stateManager) {
    this.stateManager = stateManager;
  }

  get containerWater() {
    return this.stateManager.containerWater;
  }

  containerFor(direction) {
    return this.stateManager.containerFor(direction);
  }

  setHeightFor(direction, height) {
    return this.stateManager.setHeightFor(direction, height);
  }

  updateResultWith(height, waterLv) {
    return this.stateManager.updateResultWith(height, waterLv);
  }

  adjustWater() {
    return this.stateManager.adjustWater(direction);
  }

  heightFor(direction) {
    return this.stateManager.heightFor(direction);
  }

  indexFor(direction) {
    return this.stateManager.indexFor(direction);
  }

  waterLvAt(index) {
    return this.stateManager.waterLvAt(index);
  }
};
