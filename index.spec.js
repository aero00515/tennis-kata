const { Tennis } = require('./index');

describe('Tennis Kata', () => {
    it('Love All', () => {
        const tennis = new Tennis();
        expect(tennis.getScore()).toBe('Love All');
    });

    it('Fifteen Love', () => {
        const tennis = new Tennis();
        tennis.setPLayerAScore(1);
        tennis.setPLayerBScore(0);
        expect(tennis.getScore()).toBe('Fifteen Love');
    });

    it('Thirty Love', () => {
        const tennis = new Tennis();
        tennis.setPLayerAScore(2);
        tennis.setPLayerBScore(0);
        expect(tennis.getScore()).toBe('Thirty Love');
    });

    it('Forty Love', () => {
        const tennis = new Tennis();
        tennis.setPLayerAScore(3);
        tennis.setPLayerBScore(0);
        expect(tennis.getScore()).toBe('Forty Love');
    });

    it('Love Fifteen', () => {
        const tennis = new Tennis();
        tennis.setPLayerAScore(0);
        tennis.setPLayerBScore(1);
        expect(tennis.getScore()).toBe('Love Fifteen');
    });

    it('Love Thirty', () => {
        const tennis = new Tennis();
        tennis.setPLayerAScore(0);
        tennis.setPLayerBScore(2);
        expect(tennis.getScore()).toBe('Love Thirty');
    });

    it('Love Forty', () => {
        const tennis = new Tennis();
        tennis.setPLayerAScore(0);
        tennis.setPLayerBScore(3);
        expect(tennis.getScore()).toBe('Love Forty');
    });

    it('Fifteen All', () => {
        const tennis = new Tennis();
        tennis.setPLayerAScore(1);
        tennis.setPLayerBScore(1);
        expect(tennis.getScore()).toBe('Fifteen All');
    });

    it('Thirty All', () => {
        const tennis = new Tennis();
        tennis.setPLayerAScore(2);
        tennis.setPLayerBScore(2);
        expect(tennis.getScore()).toBe('Thirty All');
    });

    it('Deuce', () => {
        const tennis = new Tennis();
        tennis.setPLayerAScore(3);
        tennis.setPLayerBScore(3);
        expect(tennis.getScore()).toBe('Deuce');
    });

    it('4_4_Deuce', () => {
        const tennis = new Tennis();
        tennis.setPLayerAScore(4);
        tennis.setPLayerBScore(4);
        expect(tennis.getScore()).toBe('Deuce');
    });

    it('Adv A', () => {
        const tennis = new Tennis();
        tennis.setPLayerAScore(4);
        tennis.setPLayerBScore(3);
        expect(tennis.getScore()).toBe('Adv A');
    });

    it('Adv B', () => {
        const tennis = new Tennis();
        tennis.setPLayerAScore(3);
        tennis.setPLayerBScore(4);
        expect(tennis.getScore()).toBe('Adv B');
    });

    it('Game A', () => {
        const tennis = new Tennis();
        tennis.setPLayerAScore(5);
        tennis.setPLayerBScore(3);
        expect(tennis.getScore()).toBe('Game A');
    });

    it('Game B', () => {
        const tennis = new Tennis();
        tennis.setPLayerAScore(3);
        tennis.setPLayerBScore(5);
        expect(tennis.getScore()).toBe('Game B');
    });
});
