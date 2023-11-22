  let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/qingwa.jpg") {
    myImage.setAttribute("src", "images/qingwa2.jpg");
  } else {
    myImage.setAttribute("src", "images/qingwa2.jpg");
  }
};

document.querySelector("html").addEventListener("click", function () {
    alert("男同？");
  });

  let myButton = document.querySelector("button");
  let myHeading = document.querySelector("h1");

  function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName){
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "男同就是" + myName;  
    }
    }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "男同就是" + storedName;
  }

  myButton.onclick = function () {
    setUserName();
  };
  
  

  