export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error("Position outside range");
  }
  
  let buffer = new ArrayBuffer(length);
  let view = new DataView(buffer);
  view.setInt8(position, value);
  return view;
}
