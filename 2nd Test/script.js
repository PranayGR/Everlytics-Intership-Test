// Steps Taken Before Linking JSON Files
// 1. Copy JSON from file and created new JSON file.
// 2. Formatted Data into original JSON format.
// 3. Changed the type of script to 'module' to access JSON file in JS.
// 4. Linked the JSON file to JS.

// Linked JSON File
import JSON from './table.json' assert {type: 'json'};

// Program to run JSON Data and show in the form of table
window.addEventListener('load', function() {
    for (let i = 0; i < JSON.length; i++) {
        let table = document.getElementById('myTable');
        let row = table.insertRow(i + 2);
    
        let tableData = `
                <td>${JSON[i].machine_name}</td>
                <td>${JSON[i].machine_id}</td>
                <td>${JSON[i].daily_energy}</td>
                <td>${JSON[i].monthly_energy}</td>
                <td>${JSON[i].yearly_energy}</td>
                <td>${JSON[i].active_power}</td>
                <td>${JSON[i].apparent_power}</td>
                <td>${JSON[i].reactive_power}</td>
                <td>${JSON[i].current}</td>
                <td>${JSON[i].voltage}</td>
                <td>${JSON[i].power_factor}</td>
                <td>${JSON[i].idle_daily}</td>
                <td>${JSON[i].idle_monthly}</td>
                <td>${JSON[i].idle_yearly}</td>
            `
        row.innerHTML = tableData;
    }
})


