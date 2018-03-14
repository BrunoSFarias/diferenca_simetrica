function sym(args) {
 
  args = Array.prototype.slice.call(arguments);
  // filtra os resultado, comparando com todos os elementos do array
  // se houver mais de dois elementos
  // Vai começar comparando do último com o do(s) meio(s) 
  // O(s) meio(s) com o primeiro
  // Se houver mais de dois poderá repetir elementos
  var res = args.reduce(function(a,b){
    return b.filter(function(i) {return a.indexOf(i) < 0;})
    .concat(a.filter(function(i){return b.indexOf(i)<0;}));
  });
  // para corrigir a resposta em caso de houver
  // mais de dois elementos no args
  return res.filter(function(el, position){return res.indexOf(el) == position;});
  
  
}
