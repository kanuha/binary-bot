// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#xkasg4

Blockly.Blocks.trade_again = {
	init: function() {
		this.appendDummyInput()
			.appendField("Trade Again");
		this.setPreviousStatement(true, 'TradeAgain');
		this.setColour(180);
		this.setTooltip(i18n._('Runs the trade block again'));
		this.setHelpUrl('https://github.com/binary-com/binary-bot/wiki');
	},
	onchange: function(ev) {
		Bot.utils.getRelationChecker().inside_finish(this, ev, 'Trade Again');
	},
};