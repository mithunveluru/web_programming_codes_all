document.addEventListener("DOMContentLoaded", function () {
    const memes = [
        "images/1ms577a24vqe1.jpeg",
        "images/2c2ohahakwqe1.png",
        "images/4u4xqfxbpvqe1.png",
        "images/4u4xqfxbpvqe1.png",
        "images/mem1.png",
        "images/mem2.jpg",
        "images/mem3.jpeg",
        "images/mem21.jpeg",
        "images/mem456.jpeg",
        "images/mem45.jpeg",
        "images/meme222.jpeg",
        "images/memem344.jpeg",
        "images/yuki.jpeg"
    ];

    const memeImg = document.getElementById("meme-image");

    function changeMeme() {
        const randomMeme = memes[Math.floor(Math.random() * memes.length)];
        memeImg.src = randomMeme;
    }

    memeImg.addEventListener("click", changeMeme);
});
