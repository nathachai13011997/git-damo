export function encode() {
  let str = "bmltZXNoZGV1amEuY29t";
  let buff = new Buffer(str, "base64");
  let base64ToStringNew = buff.toString("utf8");
  return base64ToStringNew;
}
