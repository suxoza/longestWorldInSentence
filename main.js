const longestWorld = (sentence) => {
    const words = sentence.split(' ')
    let desiredIndex = 0

    for(let i = 1; i <= words.length; i++){
        const word = words[i] || ''
        const oposite = words[desiredIndex]
        const cleaned = word.replace(/[^a-zA-Z]/g, '').toLowerCase()
        const len = cleaned.length
        const opositeLength = oposite.length
        if(len < opositeLength) 
            continue
        if(len === opositeLength){
            const vowels = cleaned.match(/[aeiou]/g)
            const opositeVowels = oposite.match(/[aeiou]/g)
            if(vowels.length < opositeVowels.length)
                continue
        }
        desiredIndex = i
    }
    return words[desiredIndex]
}

const exec = (callback) => {
    const startTime = performance.now();
    const result = callback()
    console.log();
}

const input = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"
exec(() => longestWorld(input.repeat(100)))
