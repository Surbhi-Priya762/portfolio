// document.querySelectorAll(".project-card img").forEach(image => {

//     image.onclick = () => {

//         let popup = document.createElement("div");
//         popup.classList.add("popup");

//         popup.innerHTML = `
//             <span class="close-btn">&times;</span>
//             <img src="${image.src}">
//         `;

//         document.body.appendChild(popup);

//         popup.querySelector(".close-btn").onclick = () => {
//             popup.remove();
//         };
//     };

// });

// function openSkill(skill){

//     const modal = document.getElementById("skillModal");
//     const content = document.getElementById("skillContent");

//     if(skill === "powerbi"){

//         content.innerHTML = `
//         <h2>Power BI</h2>

//         <ul>
//             <li>Interactive dashboards</li>
//             <li>KPI reporting</li>
//             <li>Power Query basics</li>
//             <li>DAX basics</li>
//             <li>Sales & inventory analysis</li>
//             <li>Inventory tracking</li>
//             <li>Dashboard storytelling</li>
//         </ul>
//         `;
//     }

//     else if(skill === "excel"){

//         content.innerHTML = `
//         <h2>Excel</h2>

//         <ul>
//             <li>Pivot Tables</li>
//             <li>XLOOKUP</li>
//             <li>VLOOKUP</li>
//             <li>HLOOKUP</li>
//             <li>Sorting & Filtering</li>
//             <li>Conditional Formatting</li>
//             <li>Power Query basics</li>
//         </ul>
//         `;
//     }

//     else if(skill === "sql"){

//         content.innerHTML = `
//         <h2>SQL</h2>

//         <ul>
//             <li>SELECT queries</li>
//             <li>JOINs</li>
//             <li>GROUP BY</li>
//             <li>ORDER BY</li>
//             <li>Aggregate functions</li>
//             <li>Subqueries</li>
//             <li>Return analysis</li>
//         </ul>
//         `;
//     }

//     else if(skill === "python"){

//         content.innerHTML = `
//         <h2>Python</h2>

//         <ul>
//             <li>Pandas basics</li>
//             <li>NumPy basics</li>
//             <li>CSV handling</li>
//             <li>Data cleaning</li>
//             <li>Business analytics projects</li>
//             <li>Streamlit projects</li>
//         </ul>
//         `;
//     }

//     else if(skill === "ai"){

//         content.innerHTML = `
//         <h2>AI Tools</h2>

//         <ul>
//             <li>ChatGPT</li>
//             <li>GitHub Copilot</li>
//             <li>Gemini</li>
//             <li>Claude</li>
//             <li>Midjourney</li>
//         </ul>
//         `;
//     }

//     else if(skill === "crm"){

//         content.innerHTML = `
//         <h2>CRM & Collaboration</h2>

//         <ul>
//             <li>Freshdesk</li>
//             <li>Slack</li>
//             <li>Shopify Admin</li>
//             <li>Amazon Seller Panel</li>
//             <li>Flipkart Seller Hub</li>
//         </ul>
//         `;
//     }

//     modal.style.display = "block";
// }

function closeSkill(){

    document.getElementById("skillModal").style.display = "none";
}

function openSkill(skill){

    const modal = document.getElementById("skillModal");
    const content = document.getElementById("skillContent");

    let html = "";

    if(skill === "powerbi"){

        html = `
        <h2>Power BI</h2>

        <ul>
            <li>Interactive dashboards</li>
            <li>KPI reporting</li>
            <li>Power Query basics</li>
            <li>Excel & SQL integration</li>
            <li>Sales & inventory analysis</li>
            <li>Dashboard storytelling</li>
        </ul>
        `;
    }

    else if(skill === "excel"){

        html = `
        <h2>Excel</h2>

        <ul>
            <li>Pivot Tables</li>
            <li>XLOOKUP</li>
            <li>VLOOKUP</li>
            <li>HLOOKUP</li>
            <li>Sorting & Filtering</li>
            <li>Power Query basics</li>
            <li>Conditional Formatting</li>
            <li>Ecommerce Reporting</li>
        </ul>
        `;
    }

    else if(skill === "sql"){

        html = `
        <h2>SQL</h2>

        <ul>
            <li>SELECT queries</li>
            <li>JOINs</li>
            <li>GROUP BY</li>
            <li>ORDER BY</li>
            <li>Aggregate functions</li>
            <li>Subqueries</li>
        </ul>
        `;
    }

    else if(skill === "python"){

        html = `
        <h2>Python</h2>

        <ul>
            <li>Pandas basics</li>
            <li>NumPy basics</li>
            <li>Data cleaning</li>
            <li>CSV handling</li>
            <li>Business analytics projects</li>
            <li>Streamlit projects</li>
        </ul>
        `;
    }

    else if(skill === "ai"){

        html = `
        <h2>AI Tools</h2>

        <ul>
            <li>ChatGPT</li>
            <li>Gemini</li>
            <li>GitHub Copilot</li>
            <li>Claude</li>
            <li>Midjourney</li>
            <li>AI for business analytics</li>
            <li>AI for content creation</li>
            <li>basic prompt engineering</li>
        </ul>
        `;
    }

    else if(skill === "crm"){

        html = `
        <h2>CRM & Collaboration</h2>

        <ul>
            <li>Freshdesk</li>
            <li>Slack</li>
            <li>Shopify Admin</li>
            <li>Amazon Seller Panel</li>
            <li>Flipkart Seller Hub</li>
            <li>Customer support ticket management</li>
            <li>Myntra seller panel</li>
            <li>Shopify order management</li>
            <li>Shopify Inbox management</li>
        </ul>
        `;
    }

    content.innerHTML = html;

    modal.style.display = "block";
}

function closeSkill(){

    document.getElementById("skillModal").style.display = "none";
}