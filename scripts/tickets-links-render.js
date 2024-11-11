import { TICKETS_DATA } from "./tickets.js"

let ticketsLinksFragment = document.createDocumentFragment();

TICKETS_DATA.forEach(ticketData =>
{
    let ticketLinkImage = document.createElement("img");
    ticketLinkImage.src = `images/tickets/${ticketData.id}.png`
    ticketLinkImage.style.width = "256px";
    ticketLinkImage.alt = "";

    let ticketLinkName = document.createElement("h2");
    ticketLinkName.textContent = ticketData.name;

    let ticketLink = document.createElement("div");
    ticketLink.title = ticketData.description;

    ticketLink.appendChild(ticketLinkImage);
    ticketLink.appendChild(ticketLinkName);

    ticketLink.addEventListener
    (
        "click",
        function()
        {
            window.location.href = `ticket.html?id=${ticketData.id}`;
        }
    );
    ticketLink.classList.add("ticket-link");

    ticketsLinksFragment.appendChild(ticketLink);
});


document.getElementById("tickets-links").appendChild(ticketsLinksFragment);
