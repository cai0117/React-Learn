document.addEventListener("DOMContentLoaded", function () {
  function createParagraph() {
    let para = document.createElement("p");
    para.textContent = "你点击了这个按钮";
    document.body.appendChild(para);
  }

  const buttons = document.querySelectorAll("button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", createParagraph);
  }
});

const changeBuffer = (file) => {
  return new Promise((resolve) => {
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.onload = (ev) => {
      let buffer = ev.target.result,
        spark = new SparkMD5.ArrayBuffer(),
        HASH,
        suffix;
      spark.append(buffer);
      HASH = spark.end();
      suffix = /.([a-zA-Z0-9]+)$/.exec(file.name)[1];
      resolve({ buffer, HASH, suffix, fileName: `${HASH}.${suffix}` });
    };
  });
};
