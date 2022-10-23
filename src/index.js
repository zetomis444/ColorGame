import buildWebsite from "./buildWebsite";

document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body')
    body.appendChild(buildWebsite())
})