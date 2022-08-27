
const listaDePaises = [
  { 
    nome: "noruega",
    idh: 0.944
  },
  { 
    nome: "qatar",
    idh: 0.850
  },
  { 
    nome: "canadá",
    idh: 0.913
  },
  { 
    nome: "brasil",
    idh: 0.755
  },
  { 
    nome: "japão",
    idh: 0.891
  },
  { 
    nome: "vietnã",
    idh: 0.666
  },
  { 
    nome: "afeganistão",
    idh: 0.465
  },
  { 
    nome: "camarões",
    idh: 0.512
  }
]


function classificarIdhPaises(lista) {
  let idhPaises = new Object()

  for(let pais of lista) {
    if(pais.idh >=  0 && pais.idh < 0.5) {
      idhPaises[pais.nome] = 'IDH é muito baixo'
    } else if (pais.idh >= 0.5 && pais.idh < 0.6) {
      idhPaises[pais.nome] = 'IDH é baixo'
    } else if (pais.idh >= 0.6 && pais.idh < 0.7) {
      idhPaises[pais.nome] = 'IDH é médio'
    } else if (pais.idh >= 0.7 && pais.idh < 0.8) {
      idhPaises[pais.nome] = 'IDH é alto'
    } else if (pais.idh >= 0.8 && pais.idh <= 1) {
      idhPaises[pais.nome] = 'IDH é muito alto'
    } else {
      idhPaises[pais.nome] = 'IDH inválido'
    }
  }
  console.log(idhPaises)
} 

classificarIdhPaises(listaDePaises)


//saída de dados
/*
const idhPaises = {
  noruega: "classifiaçãp",
  qatar: "classifiaçãp",
  canada: "classifiaçãp",
  brasil: "classifiaçãp",
  japao: "classifiaçãp",
  vietna: "classifiaçãp",
  afeganistao: "classifiaçãp",
  camaroes: "classifiaçãp"
}
*/
