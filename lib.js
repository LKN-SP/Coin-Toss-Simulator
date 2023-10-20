const p_heads = [0.4, 0.42, 0.44, 0.46, 0.48, 0.5, 0.52, 0.54, 0.56, 0.58, 0.6]
const p_head = p_heads[Math.floor(Math.random() * p_heads.length)];

var n_trials = 0
var n_heads = 0
var n_tails = 0

var p

initialize()

function initialize() {	
	var table = document.getElementById('table1')
	
	row = table.insertRow()
	row.insertCell().innerHTML = '<b>No. of Trials</b>'
	row.insertCell().innerHTML = '<b>No. of Heads</b>'
	row.insertCell().innerHTML = '<b>No. of Tails</b>'
	
	row = table.insertRow()
	
	cell = row.insertCell()
	cell.innerHTML = '0'
	cell.id = 'tt_trial'
	
	cell = row.insertCell()
	cell.innerHTML = '0'
	cell.id = 'tt_head'
	
	cell = row.insertCell()
	cell.innerHTML = '0'
	cell.id = 'tt_tail'
	
	var table = document.getElementById('table2')
	
	row = table.insertRow()
	row.insertCell().innerHTML = '<b>Trial</b>'
	row.insertCell().innerHTML = '<b>Head</b>'
	row.insertCell().innerHTML = '<b>Tail</b>'
}

function toss1() {
	p = Math.random()
	n_trials += + 1
	
	var table = document.getElementById('table2')
	
	row = table.insertRow()
	row.insertCell().innerHTML = n_trials.toString()
	
	if (p < p_head) {
		n_heads += 1
		row.insertCell().innerHTML = '+1'
		row.insertCell().innerHTML = ''
	} else {
		n_tails += 1
		row.insertCell().innerHTML = ''
		row.insertCell().innerHTML = '+1'
	}
	
	document.getElementById('tt_trial').innerHTML = n_trials.toString()
	document.getElementById('tt_head').innerHTML = n_heads.toString()
	document.getElementById('tt_tail').innerHTML = n_tails.toString()
}

function toss10() {
	for (i = 0; i < 10; i++) {toss1()}
}

function toss100() {
	for (i = 0; i < 100; i++) {toss1()}
}

function reveal() {
	var true_p_head = document.getElementById('true_p_head')
	true_p_head.innerHTML = p_head.toString()
	
	document.getElementById("t1").disabled = true;
	document.getElementById("t10").disabled = true;
	document.getElementById("t100").disabled = true;
}
