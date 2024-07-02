export default function getStudentsByLocation(array, city) {
  const locale = array.filter(student => student.location === city);
  return locale;
}
