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
    ticketName.style.margin = "0px 0px 20px 0px";

    let ticketDescription = document.createElement("p");
    ticketDescription.textContent = ticketData.description;

    let ticketLocationAndTime = document.createElement("p");
    ticketLocationAndTime.textContent = `${ticketData.location}, ${ticketData.time}`;
    ticketLocationAndTime.style.margin = "20px 0px 20px 0px";

    ticket.appendChild(ticketImage);
    ticket.appendChild(ticketName);
    ticket.appendChild(ticketDescription);
    ticket.appendChild(ticketLocationAndTime);

    const purchasedTicket = JSON.parse(localStorage.getItem(`ticket_${ticketData.id}`));

    if (purchasedTicket)
    {
        let ticketCodeMessage = document.createElement("p");
        ticketCodeMessage.innerHTML = `<h2><span style="color: rgb(0, 255, 0);">Код: </span>${purchasedTicket.code}</h2><p>Предъявите код контроллёру.</p>`;
        ticket.appendChild(ticketCodeMessage);
    }
    else
    {
        let ticketPrice = document.createElement("h2");
        ticketPrice.innerHTML = `<span style="color: rgb(0, 255, 0);">Цена: </span>${ticketData.price} руб.`;

        let ticketBuyButton = document.createElement("button");
        ticketBuyButton.textContent = "Купить";
        ticketBuyButton.classList.add("ticket-buy-button");

        ticketBuyButton.addEventListener("click", () =>
        {
            const ticketCode = Math.floor(100000 + Math.random() * 900000);

            localStorage.setItem(`ticket_${ticketData.id}`, JSON.stringify({
                id: ticketData.id,
                code: ticketCode
            }));

            ticketPrice.remove();
            ticketBuyButton.remove();

            let ticketCodeMessage = document.createElement("p");
            ticketCodeMessage.innerHTML = `<h2><span style="color: rgb(0, 255, 0);">Код: </span>${ticketCode}</h2><p>Предъявите код контроллёру.</p>`;
            ticket.appendChild(ticketCodeMessage);
        });

        ticket.appendChild(ticketPrice);
        ticket.appendChild(ticketBuyButton);
    }
}
