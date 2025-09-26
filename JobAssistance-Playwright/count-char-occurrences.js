const countCharOccurrences = () => 
{
    let input = "javascript"
    let splitinput = input.split("");
    let countoccurance = {}
    
    for (let i = splitinput.length - 1; i >= 0; i--) {
        let char = splitinput[i]; //If i = 0 → splitinput[0] = "J" → char = "J"
        if(countoccurance[char]) //countoccurance[char] checks if the key already exists in the object and returns its value.
        {
            countoccurance[char]++;
        }else{
            countoccurance[char]=1;   //If the key doesn’t exist yet, countoccurance[char] is undefined.
                                    // undefined is considered false → goes to the else block.
        }
    }
    console.log(countoccurance);
}

countCharOccurrences();


