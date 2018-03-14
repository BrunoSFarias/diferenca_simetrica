function sym(args) {
 
  args = Array.prototype.slice.call(arguments);
  var res = args.reduce(function(a,b){
    return b.filter(function(i) {return a.indexOf(i) < 0;})
    .concat(a.filter(function(i){return b.indexOf(i)<0;}));
  });
  return res.filter(function(el, pos){return res.indexOf(el) == pos;});
  
  
}
