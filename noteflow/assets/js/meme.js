document.addEventListener("DOMContentLoaded", function () {
    const memes = [
        "images/1ms577a24vqe1.jpeg",
        "images/2c2ohahakwqe1.png",
        "images/4u4xqfxbpvqe1.png",
        "images/b3pmjb0rfxqe1.png"
    ];

    const memeImg = document.getElementById("meme-image");

    function changeMeme() {
        const randomMeme = memes[Math.floor(Math.random() * memes.length)];
        memeImg.src = randomMeme;
    }

    memeImg.addEventListener("click", changeMeme);
});
