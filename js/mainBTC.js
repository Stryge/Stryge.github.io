$.get('https://api.blockcypher.com/v1/btc/main').then(function(json) {

var name = document.createElement("p");
name.textContent = json.height;

var starter = document.getElementsByClassName("starter template");
console.log(starter[0]);
starter[0].insertBefore(name, null);
});
