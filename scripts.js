// List of entries
const entries = [
    { id: 1, institute: "Delhi", stipend: 120000, bondYears: 1, bondAmount: "20,00,000" },
    { id: 2, institute: "AMU", stipend: 81000, bondYears: 0, bondAmount: "0" },
    { id: 3, institute: "IGIMS", stipend: 82000, bondYears: 0, bondAmount: "0" },
    { id: 4, institute: "Chandigarh", stipend: 63000, bondYears: 0, bondAmount: "0" },
    { id: 5, institute: "Bihar", stipend: 82000, bondYears: 3, bondAmount: "25,00,000" },
    { id: 6, institute: "RIMS Jharkhand", stipend: 87000, bondYears: 3, bondAmount: "30,00,000" },
    { id: 7, institute: "All ESIC", stipend: 112000, bondYears: 2, bondAmount: "10,00,000" },
    { id: 8, institute: "Punjab", stipend: 67000, bondYears: 1, bondAmount: "10,00,000" },
    { id: 9, institute: "Uttar Pradesh", stipend: "81000-110000", bondYears: 2, bondAmount: "40,00,000" },
    { id: 10, institute: "SKIMS J&K", stipend: 56000, bondYears: 0, bondAmount: "0" },
    { id: 11, institute: "Pgi Rohtak", stipend: 100000, bondYears: 0, bondAmount: "0" },
    { id: 12, institute: "Maharashtra", stipend: 91000, bondYears: 1, bondAmount: "50,00,000" },
    { id: 13, institute: "Rajasthan", stipend: 55000, bondYears: 2, bondAmount: "25,00,000" },
    { id: 14, institute: "Uttarakhand", stipend: 69000, bondYears: 2, bondAmount: "2,50,00,000" },
    { id: 15, institute: "Odisha", stipend: 70000, bondYears: 2, bondAmount: "46,00,000" },
    { id: 16, institute: "MP", stipend: 75000, bondYears: 1, bondAmount: "10,00,000" },
    { id: 17, institute: "Gujarat", stipend: 84000, bondYears: 1, bondAmount: "30,00,000" },
    { id: 18, institute: "Goa", stipend: 60000, bondYears: 1, bondAmount: "10,00,000" },
    { id: 19, institute: "RIMS Manipur", stipend: 106000, bondYears: 1, bondAmount: "20,00,000" },
    { id: 20, institute: "Meghalaya", stipend: 75000, bondYears: "0-3", bondAmount: "0-30,00,000" },
    { id: 21, institute: "Jamshedpur", stipend: 54000, bondYears: 3, bondAmount: "30,00,000" },
    { id: 22, institute: "GMC Jammu", stipend: 79000, bondYears: 0, bondAmount: "0" },
    { id: 23, institute: "GMC Srinagar", stipend: 59000, bondYears: 0, bondAmount: "0" },
    { id: 24, institute: "Chhattisgarh", stipend: 53000, bondYears: 2, bondAmount: "50,00,000" },
    { id: 25, institute: "Pondicherry", stipend: 43000, bondYears: 3, bondAmount: "10,00,000" },
    { id: 26, institute: "JNIMS Manipur", stipend: 50000, bondYears: 1, bondAmount: "20,00,000" },
    { id: 27, institute: "HP", stipend: 40000, bondYears: 2, bondAmount: "40,00,000" },
    { id: 28, institute: "Andhra", stipend: 60000, bondYears: 1, bondAmount: "20,00,000" },
    { id: 29, institute: "Telangana", stipend: 58000, bondYears: 1, bondAmount: "20,00,000" },
    { id: 30, institute: "Kerala", stipend: 57000, bondYears: 1, bondAmount: "50,00,000" },
    { id: 31, institute: "TN", stipend: 52000, bondYears: 1, bondAmount: "20,00,000" },
    { id: 32, institute: "Karnataka", stipend: 56000, bondYears: 3, bondAmount: "50,00,000" },
    { id: 33, institute: "Tripura", stipend: 48000, bondYears: 3, bondAmount: "35,00,000" },
    { id: 34, institute: "WB", stipend: 49000, bondYears: 3, bondAmount: "30,00,000" },
    { id: 35, institute: "Assam", stipend: 55000, bondYears: 10, bondAmount: "25,00,000" }
];

// Get the entry list element from the HTML
const entryList = document.getElementById("entry-list");

// Function to render the list with dynamic serial numbers
function renderList() {
    entryList.innerHTML = ""; // Clear the existing list

    entries.forEach((entry, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span style="font-weight: bold;">${index + 1}.</span> <!-- Dynamic serial number based on index -->
            ${entry.institute} - ₹${entry.stipend}, Bond: ${entry.bondYears} years, Bond Amount: ${entry.bondAmount}
            <div style="display: inline-block; margin-left: 10px;">
                <button onclick="moveUp(${index})" class="move-up">▲</button>
                <button onclick="moveDown(${index})" class="move-down">▼</button>
            </div>
        `;
        li.style.margin = "10px 0";  // Add spacing between list items
        entryList.appendChild(li);
    });
}

// Move entry up
function moveUp(index) {
    if (index > 0) {
        const temp = entries[index];
        entries[index] = entries[index - 1];
        entries[index - 1] = temp;
        renderList();
    }
}

// Move entry down
function moveDown(index) {
    if (index < entries.length - 1) {
        const temp = entries[index];
        entries[index] = entries[index + 1];
        entries[index + 1] = temp;
        renderList();
    }
}

// Download as Word file
document.getElementById("download-btn").addEventListener("click", () => {
    let content = "<h2>Institute List</h2><table><tr><th>Serial No</th><th>Institute</th><th>Stipend</th><th>Bond Years</th><th>Bond Amount</th></tr>";

    entries.forEach((entry, index) => {
        content += `<tr><td>${index + 1}</td><td>${entry.institute}</td><td>₹${entry.stipend}</td><td>${entry.bondYears}</td><td>${entry.bondAmount}</td></tr>`;
    });
    content += "</table>";

    const blob = new Blob([content], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "institute_list.doc";
    link.click();
});

// Initialize the list when the page loads
renderList();

