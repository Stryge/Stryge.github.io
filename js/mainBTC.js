$.get('https://api.blockcypher.com/v1/btc/main').then(function(lastBlock) {
	var blockArray = new Array(5);

	blockArray[0] = lastBlock;
	for (var i = 1; i < 5; i++) {
			blockArray[i] = $.get('https://api.blockcypher.com/v1/main/blocks/' + (lastBlock.height - i));
	}
	for (var i = 0; i < 5; i++) {
		console.log(blockArray[i].responseJSON);
//		var hauteur = blockArray[i].height;
	}
});
