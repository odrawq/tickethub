import { initEvents } from "./events.js"
import { togglePreloaderDisplay } from "./preloader.js"

document.addEventListener("DOMContentLoaded", () => { initEvents(); });

window.addEventListener("load", () =>
{
    document.querySelectorAll("*").forEach(element => { element.style.transition = "300ms"; });
    togglePreloaderDisplay();
});
