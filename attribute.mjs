export default class Attribute {
  constructor(
      id, nodeID, instance, min, max, currentValue, targetValue, lastValue, unit, stepValue, editable, type, data) {
    this.id = id;
    this.node_id = nodeID;
    this.instance = instance;
    this.minimum = min;
    this.maximum = max;
    this.current_value = currentValue;
    this.target_value = targetValue;
    this.last_value = lastValue;
    this.unit = unit;
    this.step_value = stepValue;
    this.editable = editable;
    this.type = type;
    this.state = 1;
    this.last_changed = 12345555;
    this.changed_by = 1;
    this.changed_by_id = 0;
    this.based_on = 1;
    this.data = data;
  }

  setTargetValue(targetValue) {
    if ( targetValue === true) {
      targetValue = 1;
    } else if ( targetValue === false) {
      targetValue = 0;
    }
    this.target_value = parseFloat(targetValue);
  }
  setCurrentValue(currentValue) {
    if ( currentValue === true) {
      currentValue = 1;
    } else if ( currentValue === false) {
      currentValue = 0;
    }
    this.current_value = parseFloat(currentValue);
  }
}
