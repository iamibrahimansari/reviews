"use strict";

const users = [
    {
        id: 1,
        name: "Jenny Lawrence",
        job: "Programmer",
        image: "./img1.jpg",
        desc: "Hello, I'm Jenny. This is my review and I'm so glad to writing this for this website. It is amazing platform to learn and grow in IT field.",
    },
    {
        id: 2,
        name: "John Kate",
        job: "Software Engineer",
        image: "./img2.jpg",
        desc: "Hello, I'm John. This is my review and I'm so glad to writing this for this website. It is amazing platform to learn and grow in IT field.",
    },
    {
        id: 3,
        name: "Jennifer Amenda",
        job: "Competitive Programmer",
        image: "./img3.jpg",
        desc: "Hello, I'm Jennifer. This is my review and I'm so glad to writing this for this website. It is amazing platform to learn and grow in IT field.",
    },
    {
        id: 4,
        name: "Nike Mole",
        job: "Python Developer",
        image: "./img4.jpg",
        desc: "Hello, I'm Nike. This is my review and I'm so glad to writing this for this website. It is amazing platform to learn and grow in IT field.",
    },
    {
        id: 5,
        name: "Kate Johanson",
        job: "Fron-End Developer",
        image: "./img5.jpg",
        desc: "Hello, I'm Kate. This is my review and I'm so glad to writing this for this website. It is amazing platform to learn and grow in IT field.",
    },
];

const userImage = document.getElementById("img");
const userName = document.querySelector(".name");
const userJob = document.querySelector(".post");
const descAboutUser = document.querySelector(".description");

const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const surpriseBtn = document.querySelector(".btn");

let userIndex = 0;

function setValue(user) {
    const key = users[user];
    userImage.src = key.image;
    userName.textContent = key.name;
    userJob.textContent = key.job;
    descAboutUser.textContent = key.desc;
}

window.addEventListener("DOMContentLoaded", function () {
    setValue(userIndex);
});

leftBtn.addEventListener("click", function () {
    if (userIndex > 0) {
        userIndex -= 1;
    }
    setValue(userIndex);
});

rightBtn.addEventListener("click", function () {
    if (userIndex < 4) {
        userIndex += 1;
    }
    setValue(userIndex);
});

surpriseBtn.addEventListener("click", function () {
    userIndex = Math.floor(Math.random() * 5);
    setValue(userIndex);
});
