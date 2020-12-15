// Add logo
remark.macros.addlogo = function (percentage) {
  var url = "img/logo.png";
  return '<img src="' + url + '" style="width: ' + percentage + '" />';
};


// Scale image (available on Remarkjs GH page)
remark.macros.scale = function (percentage) {
  var url = this;
  return '<img src="' + url + '" style="width: ' + percentage + '" />';
};

// Academicons
remark.macros.acic = function (size = 2) {
  var name = this;
  return '<i class="ai ai-'+ name + ' ai-'+ size + 'x" aria-hidden="true"></i>';
};


// toupper (see https://github.com/gnab/remark/issues/72)
remark.macros.upper = function () {
  // `this` is the value in the parenthesis, or undefined if left out
  return this.toUpperCase();
};
