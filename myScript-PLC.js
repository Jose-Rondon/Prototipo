function changeButton1()    {
	var x = document.getElementById("previous1");
	x.setAttribute("style","color: white;background-color: var(--orange)");
    document.getElementById("table1").setAttribute("style","display: table;");
    document.getElementById("table2").setAttribute("style","display: none;");
    document.getElementById("table3").setAttribute("style","display: none;");
}

function changeButton2() {
	var x = document.getElementById("previous1");
	x.setAttribute("style","color: var(--light-gray);Background-color: var(--mid-gray)");
    document.getElementById("table1").setAttribute("style","display: none;");
    document.getElementById("table2").setAttribute("style","display: table;");
    document.getElementById("table3").setAttribute("style","display: none");
}

function changeButton3() {
	var x = document.getElementById("previous1");
	x.setAttribute("style","color: var(--light-gray);Background-color: var(--mid-gray)");
    document.getElementById("table1").setAttribute("style","display: none;");
    document.getElementById("table2").setAttribute("style","display: none;");
    document.getElementById("table3").setAttribute("style","display: grid;");
}
