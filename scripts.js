// List of entries
const entries = [
    { id: 1, institute: "Delhi", stipend: 120000, bondYears: 1, bondAmount: "20,00,000" },
    { id: 2, institute: "AMU", stipend: 95000, bondYears: 0, bondAmount: "0" },
    { id: 3, institute: "IGIMS", stipend: 110000, bondYears: 0, bondAmount: "0" },
    { id: 4, institute: "Chandigarh", stipend: 64000, bondYears: 0, bondAmount: "0" },
    { id: 5, institute: "Bihar", stipend: 82000, bondYears: 3, bondAmount: "25,00,000" },
    { id: 6, institute: "RIMS Jharkhand", stipend: 87000, bondYears: 3, bondAmount: "30,00,000" },
    { id: 7, institute: "ESIC FBD", stipend: 112000, bondYears: 2, bondAmount: "10,00,000" },
    { id: 8, institute: "Punjab", stipend: 67000, bondYears: 1, bondAmount: "10,00,000" },
    { id: 9, institute: "UP", stipend: 95000, bondYears: 2, bondAmount: "40,00,000" },
    { id: 10, institute: "SKIMS J&K", stipend: 79000, bondYears: 0, bondAmount: "0" },
    { id: 11, institute: "Pgi Rohtak", stipend: 100000, bondYears: "NA", bondAmount: "NA" },
    { id: 12, institute: "Maharashtra", stipend: 76000, bondYears: 1, bondAmount: "50,00,000" },
    { id: 13, institute: "Rajasthan", stipend: 77000, bondYears: 2, bondAmount: "25,00,000" },
    { id: 14, institute: "Uttarakhand", stipend: 76000, bondYears: 2, bondAmount: "2,50,00,000" },
    { id: 15, institute: "Odhisha", stipend: 65000, bondYears: 2, bondAmount: "46,00,000" },
    { id: 16, institute: "MP", stipend: 69000, bondYears: 1, bondAmount: "10,00,000" },
    { id: 17, institute: "Gujarat", stipend: 84000, bondYears: 1, bondAmount: "40,00,000" },
    { id: 18, institute: "Goa", stipend: 60000, bondYears: 1, bondAmount: "50,00,000" },
    { id: 19, institute: "RIMS Manipur", stipend: 90000, bondYears: 1, bondAmount: "20,00,000" },
    { id: 20, institute: "Meghalaya", stipend: 95000, bondYears: 3, bondAmount: "30,00,000" },
    { id: 21, institute: "Jamshedpur", stipend: 54000, bondYears: 3, bondAmount: "30,00,000" },
    { id: 22, institute: "GMC Jammu & Srinagar", stipend: 54000, bondYears: 0, bondAmount: "0" },
    { id: 23, institute: "Chhattisgarh", stipend: 53000, bondYears: 2, bondAmount: "50,00,000" },
    { id: 24, institute: "Pondicherry", stipend: 45000, bondYears: 3, bondAmount: "10,00,000" },
    { id: 25, institute: "JNIMS Manipur", stipend: 50000, bondYears: 1, bondAmount: "20,00,000" },
    { id: 26, institute: "HP", stipend: 40000, bondYears: 2, bondAmount: "40,00,000" },
    { id: 27, institute: "Andhra", stipend: 60000, bondYears: 1, bondAmount: "20,00,000" },
    { id: 28, institute: "Telangana", stipend: 58000, bondYears: 1, bondAmount: "50,00,000" },
    { id: 29, institute: "Kerala", stipend: 58000, bondYears: 1, bondAmount: "50,00,000" },
    { id: 30, institute: "TN", stipend: 50000, bondYears: 1, bondAmount: "40,00,000" },
    { id: 31, institute: "Karnataka", stipend: 56000, bondYears: 3, bondAmount: "50,00,000" },
    { id: 32, institute: "Tripura", stipend: 48000, bondYears: 3, bondAmount: "50,00,000" },
    { id: 33, institute: "WB", stipend: 46000, bondYears: 3, bondAmount: "30,00,000" },
    { id: 34, institute: "Assam", stipend: 48000, bondYears: 10, bondAmount: "25,00,000" }
];

// Get the entry list element from the HTML
const entryList = document.getElementById("entry-list");

// Function to render the list with dynamic serial numbers
function renderList() {
    entryList.innerHTML = ""; // Clear the existing list

    entries.forEach((entry, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span style="font-weight: bold;">${entry.id}.</span> <!-- Unchangeable serial number -->
            ${entry.institute} - ₹${entry.stipend}, Bond: ${entry.bondYears} years, Bond Amount: ${entry.bondAmount}
            <div style="display: inline-block; margin-left: 10px;">
                <button onclick="moveUp(${index})" style="font-size: 16px; padding: 5px 10px; cursor: pointer; background-color: #4CAF50; color: white; border: none; border-radius: 5px;">▲</button>
                <button onclick="moveDown(${index})" style="font-size: 16px; padding: 5px 10px; cursor: pointer; background-color: #f44336; color: white; border: none; border-radius: 5px;">▼</button>
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

// Save list to a file
document.getElementById("save-btn").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(entries, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "institute_list.json";
    link.click();
});

// Download list as a Word document
document.getElementById("download-word-btn").addEventListener("click", () => {
    let wordContent = "<h1>Institute List</h1><ul>";
    entries.forEach(entry => {
        wordContent += `<li>${entry.id}. ${entry.institute} -
