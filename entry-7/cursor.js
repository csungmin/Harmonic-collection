document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.left = e.pageX - cursor.clientWidth / 1.5 + "px";
    cursor.style.top = e.pageY - cursor.clientHeight / 1.5 + "px";
    
});

// I got this code from ChatGPT as a source