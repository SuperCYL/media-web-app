export function removeNull(obj) {
    let arr = Object.keys(obj)
    arr.forEach(key => {
      if (obj[key] === "") {
        delete obj[key]
      }
    });
    return obj;
  }
  export function timestampToTime(timestamp) {
    var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear();
    var M =
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1;
    var D = date.getDate();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getUTCSeconds();
    if (s < 10) {
      s = "0" + s;
    }
    if (h < 10) {
      h = "0" + h;
    }
    if (m < 10) {
      m = "0" + m;
    }
    return Y + "-" + M + "-" + D + " " + h + ":" + m + ":" + s; //时分秒可以根据自己的需求加上
  }