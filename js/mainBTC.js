function getXMLHttpRequest() {
	var xhr = null;

	if (window.XMLHttpRequest || window.ActiveXObject) {
		if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject("Msxml2.XMLHTTP");
			} catch(e) {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
		} else {
			xhr = new XMLHttpRequest();
		}
	} else {
		alert ("XMLHttpRequest not supported");
	}
	return xhr;
}

var xhr = getXMLHttpRequest();
xhr.open("GET", "blockcypher.com", true);
xhr.send(null);

$.get('https://api.blockcypher.com/v1/btc/main').then(function(lastBlock) {
	var blockArray = new Array(5);
	var height = lastBlock.height
	var i = 0;

	while(i < 2) {
			console.log(i + 1);
			$.get('https://api.blockcypher.com/v1/btc/main/blocks/' + (height - i) + '?txstart=1&limit=1').then(function(block) {
				console.log(i + 1);
				var tr = document.createElement("tr");
				var height = document.createElement("th");
				var time = document.createElement("th");
				var transactions = document.createElement("th");
				var totalValue = document.createElement("th");
				var relayedBy = document.createElement("th");

				height.textContent = block.height;
				time.textContent = block.time;
				transactions.textContent = block.transactions;
				totalValue.textContent = block.total;
				relayedBy.textContent = block.relayed_by;
				tr.appendChild(height); 
				tr.appendChild(time); 
				tr.appendChild(transactions); 
				tr.appendChild(totalValue); 
				tr.appendChild(relayedBy);
				document.getElementByClassName("table").appendChild(tr);

				console.log(tr);
			});
			i++;
	}
});

/*penser à augmenter la valeur des boucles for i < 2 à i < 5 */
