const DrawCard = require('../../drawcard.js');
const { CardTypes } = require('../../Constants');

class KakitaYoshi extends DrawCard {
    setupCardAbilities(ability) {
        this.action({
            title: 'Draw 3 cards',
            condition: context => context.source.isParticipating(),
            cost: ability.costs.discardImperialFavor(),
            effect: 'draw 3 cards, and reduce the cost of events this conflict',
            gameAction: [
                ability.actions.draw({ amount: 3 }),
                ability.actions.playerLastingEffect({
                    effect: ability.effects.reduceCost({
                        amount: 2,
                        match: card => card.type === CardTypes.Event
                    })
                })
            ]
        });
    }
}

KakitaYoshi.id = 'kakita-yoshi'; // This is a guess at what the id might be - please check it!!!

module.exports = KakitaYoshi;
