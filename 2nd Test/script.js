let json = [["machine_name","machine_id","current,voltage","power_factor","active_power","apparent_power","reactive_power","daily_energy","monthly_energy","yearly_energy","idle_daily","idle_monthly","idle_yearly"], ["Auto Winding Machine", "machine001", 0, 0, 0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0], ["Boiler Machine", "machine004", 0, 0, 0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0]];

for(let i=1; i<json.length; i++){
    var table = document.getElementById("mytable");

    var row = table.insertRow(i+1);

    row.insertCell(0).innerHTML = json[i][0];
    row.insertCell(1).innerHTML = json[i][1];
    row.insertCell(2).innerHTML = json[i][2];
    row.insertCell(3).innerHTML = json[i][3];
    row.insertCell(4).innerHTML = json[i][4];
    row.insertCell(5).innerHTML = json[i][5];
    row.insertCell(6).innerHTML = json[i][6];
    row.insertCell(7).innerHTML = json[i][7];
    row.insertCell(8).innerHTML = json[i][8];
    row.insertCell(9).innerHTML = json[i][9];
    row.insertCell(10).innerHTML = json[i][10];
    row.insertCell(11).innerHTML = json[i][11];
    row.insertCell(12).innerHTML = json[i][12];
    row.insertCell(13).innerHTML = json[i][13];
 
}