const arquivos = ['arr.opp', 'afs.jpeg', 'kijh.pdf'];

// console.log(arquivos[0].slice(-4))

const antiVirus = arquivos.some(
    function (extensao) {
        return extensao.slice(-4) === '.bat'
    }
)
console.log(antiVirus)