export default function getListStudentIds(array) {
  if (Array.isArray(array)) {
    const ids = array.map(student => student.id);
    return ids;
  } else {
    return [];
  }
}
