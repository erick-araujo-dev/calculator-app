export const addMask = (value: string): string => {
  let maskedValue;
  if (value.includes(",")) {
    maskedValue = value;
  } else if (value.length <= 3) {
    maskedValue = value;
  } else if (value.length <= 4) {
    maskedValue = value.replace(/(\d{1})(\d{0,3})/, "$1.$2");
  } else if (value.length <= 5) {
    maskedValue = value.replace(/(\d{1,2})(\d{0,3})/, "$1.$2");
  } else if (value.length <= 6) {
    maskedValue = value.replace(/(\d{1,3})(\d{0,3})/, "$1.$2");
  } else if (value.length <= 7) {
    maskedValue = value.replace(/(\d{1})(\d{3})(\d{0,2})/, "$1.$2.$3");
  } else if (value.length <= 8) {
    maskedValue = value.replace(/(\d{1,2})(\d{3})(\d{0,2})/, "$1.$2.$3");
  } else if (value.length == 9) {
    maskedValue = value.replace(/(\d{1,3})(\d{3})(\d{0,3})/, "$1.$2.$3");
  } else {
    maskedValue = value;
  }
  return maskedValue;
};
