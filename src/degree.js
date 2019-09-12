export default function degreeUnit(unit, value) {
  let output = '';
  if (unit === 'celsuis') {
    output = `${Math.round(value - 273.15)}<sup>0</sup>C`;
  } else {
    output = `${Math.round((value * (9 / 5)) - 459.67)}<sup>0</sup>F`;
  }
  return output;
}
