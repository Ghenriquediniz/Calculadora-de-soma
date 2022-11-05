function soma()
{
  let a = document.getElementById("a");
  let b = document.getElementById("b");
  let resultado = document.getElementById("resultado");
  
  let va = parseInt(a.value);
  let vb = parseInt(b.value);
  let vr = va+vb;
  
  resultado.textContent = vr;
}

alert