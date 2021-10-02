window.onload = function () {
    document.querySelectorAll(".s-code-block").forEach(e => {
        const code = e.innerText;
        
        const button = document.createElement("button");
        button.addEventListener("click", () => navigator.clipboard.writeText(code));
        button.innerText = "Copy to clipboard";
        
        e.parentNode.insertBefore(button, e);
    })
};

