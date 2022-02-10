function closeMenu() {
    let width = document.getElementById("side-menu")!.clientWidth;
    let position = 0;

    let movement = setInterval(function () {
        position -= 1;
        document.getElementById("side-menu")!.style.left = position+"px";
        if (position === (width *-1))
        {
            document.getElementById("side-menu")!.style.display = "none";
            clearInterval(movement);
        }

    }, 25);

}

function openMenu() {
    document.getElementById("side-menu")!.style.display = "flex";
    let position = -200;

    let movement = setInterval(function () {
        position += 1;
        document.getElementById("side-menu")!.style.left = position+"px";
        if (position === 0)
        {
            clearInterval(movement);
        }

    }, 25);

}

export default closeMenu();