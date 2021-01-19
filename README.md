# Caesar Cipher Module - NJS
This is a module that allows you to encode, decode and crack strings
using the caesar cipher pattern.

### 3 Functions
- `encode(string, int shift)` - encodes a string by shifting the alphabet by shift
- `decode(string, int shift)` - decodes a string by reversing the encoder with shift
- `crack(string)` - gives an output of all 25 possible shift variations, the right one is surely within these (use if you don't know the shift with decode)

### How to use
- Simply download the `caesar_module.js` and put it into your `/custom_modules/` folder, after that simply put `let caesar = require('./custom_modules/caesar_module.js');` at the top of your file. 

##### This module will not be available on NPM because there is like a thousand of them there already.