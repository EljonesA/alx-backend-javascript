export default function getStudentIdsSum(array) {
  const sum_ids = array.reduce((sum, student) => sum + student.id, 0);
  return sum_ids;
}
