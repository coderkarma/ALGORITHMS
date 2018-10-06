
function DNAStrand(dna){
    let newObj = {
        'A' : 'T',
        'T' : 'A',
         'C' : 'G',
         'G' :  'C'
    }
     return dna.split('').map(char => newObj[char]).join('');

     }
     DNAStrand("ATTGC")//# return "TAACG"