npm i -D pagecrypt

import { encryptHTML } from 'pagecrypt/core'

const inputHTML = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
        </head>
        <body>
            Secret
        </body>
    </html>
`

// Encrypt a HTML string and return an encrypted HTML string.
// Write it to a file or send as an HTTPS response.
const encryptedHTML = await encryptHTML(inputHTML, 'password')

// Optional: You can customize the number of password iterations if you want increased security.
const iterations = 3e6 // Same as 3_000_000
const customIterations = await encryptHTML(inputHTML, 'password', iterations)

import { generatePassword, encryptHTML } from 'pagecrypt/core'

// Generate a random password without any external dependencies
const password = generatePassword(64)
const encryptedHTML = await encryptHTML(inputHTML, password)