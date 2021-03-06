const DrawCard = require('../../drawcard.js');
const { Locations, Players, CardTypes } = require('../../Constants');

class IuchiWayfinder extends DrawCard {
    setupCardAbilities(ability) {
        this.reaction({
            title: 'Look at a province',
            when: {
                onCharacterEntersPlay: (event, context) => event.card === context.source
            },
            effect: 'look at a province',
            gameAction: ability.actions.lookAt({
                chatMessage: true,
                promptForSelect: {
                    activePromptTitle: 'Choose a province to look at',
                    cardType: CardTypes.Province,
                    location: Locations.Provinces,
                    controller: Players.Opponent
                }
            })
        });
    }
}

IuchiWayfinder.id = 'iuchi-wayfinder';

module.exports = IuchiWayfinder;
