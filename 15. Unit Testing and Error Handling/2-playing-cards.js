// factory function
function solve(face, suit) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {
        S: '♠',
        H: '♥',
        D: '♦',
        C: '♣'
    };

    if (!faces.includes(face)) {
        throw new Error("Invalid input!");
    }

    if(face != face.toUpperCase() || suit != suit.toUpperCase()) {
        throw new Error("Invalid input!");
    }

    return {
        face: face,
        suit: suits[suit],
        toString() {
            return `${this.face}${this.suit}`;
        }
    };
}

let result = solve('A', 'S');
console.log(result.toString());
