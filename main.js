const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function validateSQL(input) {
    let currentState = 'q0';

    for (let i = 0; i < input.length; i++) {
        const char = input[i];

        switch (currentState) {
            case 'q0':
                if (/^[A-Z]$/.test(char)) {
                    currentState = 'q1';
                } else {
                    return 'INVALID';
                }
                break;

            case 'q1':
                if (/^[A-Z ]$/.test(char)) {
                    currentState = 'q1';
                } else if (char === ':') {
                    currentState = 'q2';
                } else {
                    return 'INVALID';
                }
                break;

            case 'q2':
                if (/^[0-9]$/.test(char)) {
                    currentState = 'q3';
                } else {
                    return 'INVALID';
                }
                break;

            case 'q3':
                if (/^[0-9]$/.test(char)) {
                    currentState = 'q3';
                } else {
                    return 'INVALID';
                }
                break;

            default:
                return 'INVALID';
        }
    }

    return currentState === 'q3' ? 'VALID' : 'INVALID';
}

rl.question('Masukkan input SQL: ', (input) => {
    const result = validateSQL(input);
    console.log(`Hasil: ${result}`);
    rl.close();
});
