import { TICKETS_DATA } from "./tickets.js";

let ticket = document.getElementById("ticket");
let ticketData = TICKETS_DATA.find(ticketData => ticketData.id === Number(new URLSearchParams(window.location.search).get("id")));

if (!ticketData)
{
    let ticketNotFoundMessage = document.createElement("p");
    ticketNotFoundMessage.textContent = "Извините, такой билет не существует :(";
    ticket.appendChild(ticketNotFoundMessage);
}
else
{
    document.getElementById("title").textContent = ticketData.name;

    let ticketImage = document.createElement("img");
    ticketImage.src = `images/tickets/${ticketData.id}.png`;
    ticketImage.alt = "";

    let ticketName = document.createElement("h1");
    ticketName.textContent = ticketData.name;

    let ticketDescription = document.createElement("p");
    ticketDescription.textContent = ticketData.description;

    ticket.appendChild(ticketImage);
    ticket.appendChild(ticketName);
    ticket.appendChild(ticketDescription);

    const purchasedTicket = JSON.parse(localStorage.getItem(`ticket_${ticketData.id}`));

    if (purchasedTicket)
    {
        let ticketCodeMessage = document.createElement("p");
        ticketCodeMessage.innerHTML = `<br><h2><span style="color: rgb(0, 255, 0);">Код: </span>${purchasedTicket.code}</h2><p>Предъявите код контроллёру.</p>`;
        ticket.appendChild(ticketCodeMessage);
    }
    else
    {
        let ticketBuyButton = document.createElement("button");
        ticketBuyButton.textContent = `${ticketData.price} руб.`;
        ticketBuyButton.classList.add("ticket-buy-button");

        ticketBuyButton.addEventListener("click", () =>
        {
            const ticketCode = Math.floor(100000 + Math.random() * 900000);

            localStorage.setItem(`ticket_${ticketData.id}`, JSON.stringify({
                id: ticketData.id,
                code: ticketCode
            }));
            
            ticketBuyButton.remove();

            let ticketCodeMessage = document.createElement("p");
            ticketCodeMessage.innerHTML = `<br><h2><span style="color: rgb(0, 255, 0);">Код: </span>${ticketCode}</h2><p>Предъявите код контроллёру.</p>`;
            ticket.appendChild(ticketCodeMessage);
        });

        ticket.appendChild(ticketBuyButton);
    }
}
