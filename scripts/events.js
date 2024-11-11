import { togglePreloaderDisplay } from "./preloader.js"
import { toggleMenuDisplay } from "./menu.js";
import { toggleWindowDisplayById } from "./windows.js";

export function initEvents()
{
    const windows =
    [
        "contacts-window",
        "about-window"
    ];

    windows.forEach(window =>
    {
        document.getElementById(`${window}-link`).addEventListener("click", () =>
        {
            togglePreloaderDisplay();
            toggleMenuDisplay();
            toggleWindowDisplayById(`${window}`);
            togglePreloaderDisplay();
        });

        document.getElementById(`hide-${window}-button`).addEventListener("click", () =>
        {
            togglePreloaderDisplay();
            toggleWindowDisplayById(`${window}`);
            togglePreloaderDisplay();
        });
    });

    document.getElementById("from-about-window-to-contacts-window-link").addEventListener("click", () =>
    {
        togglePreloaderDisplay();
        toggleWindowDisplayById("about-window");
        toggleWindowDisplayById("contacts-window");
        togglePreloaderDisplay();
    });

    document.getElementById("menu-display-toggle-button").addEventListener("click", () =>
    {
        togglePreloaderDisplay();
        toggleMenuDisplay();
        togglePreloaderDisplay();
    });
}
