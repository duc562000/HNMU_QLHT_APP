import DropdownManager from "./DropdownManager";
// Type display dropdown
export const TYPE = {
  SUCCESS: "success",
  INFO: "info",
  WARN: "warn",
  ERROR: "error",
};
/**
 * To display dropdown Alert in top screen
 * @param type type of Alert (check it in TYPE above)
 * @param title title of Alert
 * @param description description of Alert
 */
export function showAlert(type, title, description) {
  const ref = DropdownManager.getDefault(description.length > 60);
  if (!!ref) {
    ref.alertWithType(type, title, description);
  }
}
/**
 * To hide dropdown Alert in top screen
 */
export function hideAlert() {
  const ref = DropdownManager.getDefault();

  if (!!ref) {
    ref.closeAction();
  }
}
