  export function counter(){
    var start = new Date("Jan, 30, 2019");
    var end = new Date();
    return parseInt((end.getTime()-start.getTime())/(24*3600*1000));
  }