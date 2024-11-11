import { TICKETS_DATA } from "./tickets.js";

document.getElementById("tickets-links-search-input-field").addEventListener
(
    "input",
    function()
    {   
        let ticketLinkNotFoundMessage = document.getElementById("ticket-link-not-found-message");

        if (ticketLinkNotFoundMessage)
            ticketLinkNotFoundMessage.remove();

        let ticketsLinks = document.getElementById("tickets-links");
        let userInput = this.value.toLowerCase();
        let foundTicketsLinks = 0;

        for (let i = 0; i < TICKETS_DATA.length; ++i)
        {
            if (!TICKETS_DATA[i].name.toLowerCase().includes(userInput))
                ticketsLinks.children[i].style.display = "none";
            else
            {
                ticketsLinks.children[i].style.display = "flex";
                ++foundTicketsLinks;
            }
        }

        if (foundTicketsLinks === 0)
        {
            ticketLinkNotFoundMessage = document.createElement("p");
            ticketLinkNotFoundMessage.id = "ticket-link-not-found-message";
            ticketLinkNotFoundMessage.textContent = "Извините, такой билет не существует :(";
            ticketsLinks.appendChild(ticketLinkNotFoundMessage);
        }
    }
);
