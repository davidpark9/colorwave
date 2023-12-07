const submitButton = document.getElementById("submitBtn");
const result = document.getElementById("result");

submitButton.addEventListener("click", async () => {
  console.log("click");
  const color = document.getElementById("colorPicker").value;
  const response = await fetch(
    "https://colour-web-service.onrender.com/generate-palette",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ color }),
    }
  );
  const jsonData = await response.json();
  const data = jsonData.primary;
  console.log(data,Object.keys(data),Object.entries(data));
  Object.entries(data).forEach((item)=>{
    const div = document.createElement("div");
    div.classList.add("circle")
    div.style.backgroundColor = item[1];
    result.append(div)
  })
  // })
  // .then((data) => {
  //   console.log(data);
  // })
  // .then((res) => {
  //   const submitButton = document.getElementById("submitBtn");
  //   console.log(submitButton);
  //   submitButton.addEventListener("click", () => {
  //     console.log("click");
  //   });
  // })
  // .catch((error) => {
  //   console.error("Error fetching render file:", error);
  // });
});

function manipulateData(data) {
  console.log(data);
  return `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}
