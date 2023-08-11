Function.prototype.bind =
  Function.prototype.bind ||
  function (target) {
    var self = this;
    return function (args) {
      if (!(args instanceof Array)) {
        args = [args];
      }
      self.apply(target, args);
    };
  };//版本兼容，IE无bind方法则自定义bind方法
