class Tennis {

    constructor() {
        this.A = 0;
        this.B = 0;
        this.SCORE_DICT = {
            0: 'Love',
            1: 'Fifteen',
            2: 'Thirty',
            3: 'Forty'
        }
    }

    setPLayerAScore(score) {
        this.A = score;
    }

    setPLayerBScore(score) {
        this.B = score;
    }

    getScore() {
        if (this.A === this.B) {
            if (this.A >= 3) {
                return 'Deuce';
            }
            return `${this.SCORE_DICT[this.A]} All`;
        }
        if(this.A > 0 || this.B > 0) {
            if (this.A >= 3 && this.B >= 3){
                const advPlayer = this.A > this.B ? 'A' : 'B';
                if (Math.abs(this.A - this.B) === 1) {
                    return `Adv ${advPlayer}`;
                }
                return `Game ${advPlayer}`;
            }
            return `${this.SCORE_DICT[this.A]} ${this.SCORE_DICT[this.B]}`;
        }
    }
}

module.exports = { Tennis };
