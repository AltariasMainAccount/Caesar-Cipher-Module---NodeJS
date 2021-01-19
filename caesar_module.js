// Caeser Module - JS
let ascii_big = {
    "A": 65,
    "B": 66,
    "C": 67,
    "D": 68,
    "E": 69,
    "F": 70,
    "G": 71,
    "H": 72,
    "I": 73,
    "J": 74,
    "K": 75,
    "L": 76,
    "M": 77,
    "N": 78,
    "O": 79,
    "P": 80,
    "Q": 81,
    "R": 82,
    "S": 83,
    "T": 84,
    "U": 85,
    "V": 86,
    "W": 87,
    "X": 88,
    "Y": 89,
    "Z": 90,
}

let ascii_small = {
    "a": 97,
    "b": 98,
    "c": 99,
    "d": 100,
    "e": 101,
    "f": 102,
    "g": 103,
    "h": 104,
    "i": 105,
    "j": 106,
    "k": 107,
    "l": 108,
    "m": 109,
    "n": 110,
    "o": 111,
    "p": 112,
    "q": 113,
    "r": 114,
    "s": 115,
    "t": 116,
    "u": 117,
    "v": 118,
    "w": 119,
    "x": 120,
    "y": 121,
    "z": 122
}

/* 

ascii_small = 65 - 90
ascii_big = 97 - 122

*/

module.exports = {
    encode: function(string, shift) {
        // Prepare the variables
        let buffer;
        let pre_arr = string.split('');
        let ascii_arr = []; 
        let end_arr = [];
        let end_string;
        // Iterate over the array of the string to get the ascii_arr
        for (i = 0; i < pre_arr.length; i++) {
            if (pre_arr[i] in ascii_big) {
                ascii_arr.push(ascii_big[pre_arr[i]]);
            } else if (pre_arr[i] in ascii_small) {
                ascii_arr.push(ascii_small[pre_arr[i]]);
            } else {
                ascii_arr.push(32); // In case of a whitespace
            }
        }
        // Now shift the ascii variables by the shift
        for (i = 0; i < ascii_arr.length; i++) {
            if (ascii_arr[i] === 32) { 
                ascii_arr[i] = ascii_arr[i];
            } else {
                if (ascii_arr[i] >= 65 && ascii_arr[i] <= 90) {
                    if ((ascii_arr[i] + shift) > 90) {
                        buffer = shift;
                        do {
                            ascii_arr[i]++;
                            buffer = buffer - 1;
                        } while (ascii_arr[i] < 90)
                        ascii_arr[i] = (ascii_arr[i] - 25) + buffer;                  
                    } else {
                        ascii_arr[i] = ascii_arr[i] + shift;
                    }
                } else if (ascii_arr[i] >= 97 && ascii_arr[i] <= 122) {
                    if ((ascii_arr[i] + shift) > 122) {
                        buffer = shift
                        do {
                            ascii_arr[i]++;
                            buffer = buffer - 1;
                        } while (ascii_arr[i] < 122)
                        ascii_arr[i] = (ascii_arr[i] - 25) + buffer;
                    } else {
                        ascii_arr[i] = ascii_arr[i] + shift;
                    }
                }
            }
        }
        // At the end, construct the end array and the end string
        for (i = 0; i < ascii_arr.length; i++) {
            if (Object.values(ascii_big).includes(ascii_arr[i])) {
                end_arr.push(Object.keys(ascii_big).find(key => ascii_big[key] === ascii_arr[i]));
            } else if (pre_arr[i] in ascii_small) {
                end_arr.push(Object.keys(ascii_small).find(key => ascii_small[key] === ascii_arr[i]));
            } else {
                end_arr.push(" "); // Again, in case of a whitespace
            }            
        }
        end_string = end_arr.join('');
        console.log(end_string);
    },
    decode: function(string, shift) {
        // Prepare the variables
        let buffer;
        let pre_arr = string.split('');
        let ascii_arr = []; 
        let end_arr = [];
        let end_string;
        // Iterate over the array of the string to get the ascii_arr
        for (i = 0; i < pre_arr.length; i++) {
            if (pre_arr[i] in ascii_big) {
                ascii_arr.push(ascii_big[pre_arr[i]]);
            } else if (pre_arr[i] in ascii_small) {
                ascii_arr.push(ascii_small[pre_arr[i]]);
            } else {
                ascii_arr.push(32); // In case of a whitespace
            }
        }
        // Now shift the ascii variables by the shift
        for (i = 0; i < ascii_arr.length; i++) {
            if (ascii_arr[i] === 32) { 
                ascii_arr[i] = ascii_arr[i];
            } else {
                if (ascii_arr[i] >= 65 && ascii_arr[i] <= 90) {
                    if ((ascii_arr[i] - shift) < 65) {
                        buffer = shift;
                        do {
                            ascii_arr[i] = ascii_arr[i] - 1;
                            buffer = buffer - 1;
                        } while (ascii_arr[i] > 65)
                        ascii_arr[i] = (ascii_arr[i] + 25) - buffer;                  
                    } else {
                        ascii_arr[i] = ascii_arr[i] - shift;
                    }
                } else if (ascii_arr[i] >= 97 && ascii_arr[i] <= 122) {
                    if ((ascii_arr[i] - shift) < 97) {
                        buffer = shift;
                        do {
                            ascii_arr[i] = ascii_arr[i] - 1;
                            buffer = buffer - 1;
                        } while (ascii_arr[i] > 97)
                        ascii_arr[i] = (ascii_arr[i] + 25) - buffer;
                    } else {
                        ascii_arr[i] = ascii_arr[i] - shift;
                    }
                }
            }
        }
        // At the end, construct the end array and the end string
        for (i = 0; i < ascii_arr.length; i++) {
            if (Object.values(ascii_big).includes(ascii_arr[i])) {
                end_arr.push(Object.keys(ascii_big).find(key => ascii_big[key] === ascii_arr[i]));
            } else if (pre_arr[i] in ascii_small) {
                end_arr.push(Object.keys(ascii_small).find(key => ascii_small[key] === ascii_arr[i]));
            } else {
                end_arr.push(" "); // Again, in case of a whitespace
            }            
        }
        end_string = end_arr.join('');
        console.log(end_string);
    },
    crack: function(string) {
        // Prepare the variables
        let buffer;
        let pre_arr = string.split('');
        let ascii_arr = []; 
        let end_arr = [];
        let end_string;
        // Iterate over the array of the string to get the ascii_arr
        for (i = 0; i < pre_arr.length; i++) {
            if (pre_arr[i] in ascii_big) {
                ascii_arr.push(ascii_big[pre_arr[i]]);
            } else if (pre_arr[i] in ascii_small) {
                ascii_arr.push(ascii_small[pre_arr[i]]);
            } else {
                ascii_arr.push(32); // In case of a whitespace
            }
        }
        // Bruteforce all possible keys
        for (x = 0; x < 25; x++) {
            bf_arr = ascii_arr;
            shift = 1;
            for (i = 0; i < bf_arr.length; i++) {
                if (bf_arr[i] === 32) { 
                    bf_arr[i] = bf_arr[i];
                } else {
                    if (bf_arr[i] >= 65 && bf_arr[i] <= 90) {
                        if ((bf_arr[i] - shift) < 65) {
                            buffer = shift;
                            do {
                                bf_arr[i] = bf_arr[i] - 1;
                                buffer = buffer - 1;
                            } while (bf_arr[i] > 65)
                            bf_arr[i] = (bf_arr[i] + 25) - buffer;                  
                        } else {
                            bf_arr[i] = bf_arr[i] - shift;
                        }
                    } else if (bf_arr[i] >= 97 && bf_arr[i] <= 122) {
                        if ((bf_arr[i] - shift) < 97) {
                            buffer = shift;
                            do {
                                bf_arr[i] = bf_arr[i] - 1;
                                buffer = buffer - 1;
                            } while (bf_arr[i] > 97)
                            bf_arr[i] = (bf_arr[i] + 25) - buffer;
                        } else {
                            bf_arr[i] = bf_arr[i] - shift;
                        }
                    }
                }
            }
            for (i = 0; i < bf_arr.length; i++) {
                if (Object.values(ascii_big).includes(bf_arr[i])) {
                    end_arr.push(Object.keys(ascii_big).find(key => ascii_big[key] === bf_arr[i]));
                } else if (pre_arr[i] in ascii_small) {
                    end_arr.push(Object.keys(ascii_small).find(key => ascii_small[key] === bf_arr[i]));
                } else {
                    end_arr.push(" "); // Again, in case of a whitespace
                }            
            }
            // Output the end result
            end_string = end_arr.join('');
            console.log("Alphabet shifted by " + (x + 1) + " - Result - " + end_string);
            // Reset the vars used
            end_arr = [];
            end_string = "";
        }
    }
}