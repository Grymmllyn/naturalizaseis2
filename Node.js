npm i -D pagecrypt

import { encrypt } from 'pagecrypt'

// Encrypt a HTML file and write to the filesystem
await encrypt('index.html', 'encrypted.html', 'password')

// You can optionally customize the number of password iterations
const iterations = 3e6 // Same as 3_000_000
await encrypt('index.html', 'encrypted.html', 'password', iterations)

import { generatePassword, encryptHTML } from 'pagecrypt'

const password = generatePassword(48)
const iterations = 3e6 // Same as 3_000_000

const encrypted = await encryptHTML(inputHTML, password, iterations)
