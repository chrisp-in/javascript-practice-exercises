function dnaStrand(dna){
    const result = dna.replace(/A|T|G|C/g, function(match){
        switch(match){
            case 'A':
                return 'T';
            case 'T': 
                 return 'A';
            case 'G':
                return 'C';
            case 'C':
                return  'G';
        }
    })
    return result;
}
console.log(dnaStrand("GTAT"));