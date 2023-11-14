document.addEventListener("mousemove", (e) => {   
    const cursor = document.querySelector(".cursor");
    cursor.style.left = e.pageX - cursor.clientWidth / 1.5 + "px";
    cursor.style.top = e.pageY - cursor.clientHeight / 1.5 + "px";
    
});


// I got this code from ChatGPT as a source

// document.addEventListener("mousemove", => following the mouse (e) => {  => "e" represents the event object and in this case it is inclduing the mouse coordinates
//     const cursor = document.querySelector(".cursor");    => This is letting my HTML to know that my "cursor" that I want to follow 
//     cursor.style.left = e.pageX - cursor.clientWidth / 1.5 + "px";
//     cursor.style.top = e.pageY - cursor.clientHeight / 1.5 + "px";
// => "e.pageX" is mouse coordinate horizontally, and "e.pageY" is mouse coordinate vertically, 
// => "1.5" is dividing the cursor's width and height. This is responsive to the movement of the mouse.