class DropdownManager {
  _defaultDropdown = null;
  _defaultDropdownLongTime = null;

  register(_ref, _refLongTime) {
    if (!this._defaultDropdown) {
      this._defaultDropdown = _ref;
    }
    if (!this._defaultDropdownLongTime) {
      this._defaultDropdownLongTime = _refLongTime;
    }
  }

  unregister(_ref, _refLongTime) {
    if (!!this._defaultDropdown && this._defaultDropdown._id === _ref._id) {
      this._defaultDropdown = null;
    }

    if (
      !!this._defaultDropdownLongTime &&
      this._defaultDropdownLongTime._id === _refLongTime._id
    ) {
      this._defaultDropdownLongTime = null;
    }
  }

  getDefault(isLongMessage = false) {
    return isLongMessage
      ? this._defaultDropdownLongTime
      : this._defaultDropdown;
  }
}

export default new DropdownManager();
