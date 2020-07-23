export function removeNull(obj) {
    let arr = Object.keys(obj)
    arr.forEach(key => {
      if (obj[key] === "") {
        delete obj[key]
      }
    });
    return obj;
  }