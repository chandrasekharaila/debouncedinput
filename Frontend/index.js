let timeout;

function calInt2() {
  clearTimeout(timeout);
  timeout = setTimeout(calInt, 1000);
}

async function calInt() {
  const p = parseFloat(document.getElementById("p").value);
  const r = parseFloat(document.getElementById("r").value);
  const t = parseFloat(document.getElementById("t").value);

  if (isNaN(p) || isNaN(r) || isNaN(t)) {
    document.getElementById("result").innerHTML = "<b>Enter Valid inputs </b>";
    return;
  }

  try {
    const res = await fetch(
      `http://127.0.0.1:3000/interest/?p=${p}&r=${r}&t=${t}`
    );
    if (!res.ok) throw new Error("Network response was not ok");

    const data = await res.json();

    const div = document.getElementById("result");
    div.innerHTML = "";
    const resultString = `<b>Interest</b> = ${data.interest} <br> <b>Total Amount</b> = ${data.total}`;
    const para = document.createElement("p");
    para.innerHTML = resultString;
    div.appendChild(para);
  } catch (err) {
    document.getElementById(
      "result"
    ).innerHTML = `<b>Error:</b> ${err.message}`;
  }
}
