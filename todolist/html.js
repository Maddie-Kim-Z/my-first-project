const add = document.querySelector(".click");

        add.addEventListener("click", () => {
            const INPUT = document.getElementById("userinput").value; // 获取输入框的值
            alert('finished');
            localStorage.setItem("userinput", INPUT); // 存储到本地存储
        });