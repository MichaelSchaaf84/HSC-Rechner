let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let hc = document.getElementById("hc");
let spiel1 = document.getElementById("spiel1");
let spiel2 = document.getElementById("spiel2");
let spiel3 = document.getElementById("spiel3");
let spiel4 = document.getElementById("spiel4");

function btnPress() {
  document.querySelector(".calculate").addEventListener("click", () => {
    let gesamtHc = 0;
    let hcSpiel1,
      hcSpiel2,
      hcSpiel3,
      hcSpiel4 = 0;
    if (spiel1.value < 200) {
      hcSpiel1 = parseInt(spiel1.value) + parseInt(hc.value);
    } else {
      hcSpiel1 = parseInt(spiel1.value);
    }

    if (spiel2.value < 200) {
      hcSpiel2 = parseInt(spiel2.value) + parseInt(hc.value);
    } else {
      hcSpiel2 = parseInt(spiel2.value);
    }

    if (spiel3.value < 200) {
      hcSpiel3 = parseInt(spiel3.value) + parseInt(hc.value);
    } else {
      hcSpiel3 = parseInt(spiel3.value);
    }

    if (spiel4.value < 200) {
      hcSpiel4 = parseInt(spiel4.value) + parseInt(hc.value);
    } else {
      hcSpiel4 = parseInt(spiel4.value);
    }
    console.log(hcSpiel1);
    gesamtHc = hcSpiel1 + hcSpiel2 + hcSpiel3 + hcSpiel4;

    console.log(gesamtHc);

    const gesamt =
      parseInt(spiel1.value) +
      parseInt(spiel2.value) +
      parseInt(spiel3.value) +
      parseInt(spiel4.value);

    const realSchnitt =
      (parseInt(spiel1.value) +
        parseInt(spiel2.value) +
        parseInt(spiel3.value) +
        parseInt(spiel4.value)) /
      4;
    const hcSchnitt = (hcSpiel1 + hcSpiel2 + hcSpiel3 + hcSpiel4) / 4;

    gesamtHc = gesamtHc;
    console.log(gesamtHc);
    let player = {
      a_vorname: firstName.value,
      b_nachname: lastName.value,
      c_hc: hc.value,
      d_spiele: [spiel1.value, spiel2.value, spiel3.value, spiel4.value],
      e_gesamt: gesamt,
      f_gesamtHc: gesamtHc,
      g_realSchnitt: realSchnitt,
      h_hcSchnitt: hcSchnitt,
    };
    console.log(player);
  });
  saveFile();
}
btnPress();

function saveFile() {
  // Get the data from each element on the form.
  // const name = document.getElementById("txtName");
  // const age = document.getElementById("txtAge");
  // const email = document.getElementById("txtEmail");
  // const country = document.getElementById("selCountry");
  // const msg = document.getElementById("msg");

  // This variable stores all the data.
  let data =
    "\r Vorname: " +
    firstName.value +
    " \r\n " +
    "\r Nachnamen: " +
    lastName.value +
    " \r\n " +
    "Spiel1: " +
    spiel1.value +
    " \r\n " +
    "Spiel2: " +
    spiel2.value +
    " \r\n " +
    "Spiel3: " +
    spiel3.value +
    " \r\n " +
    "Spiel4: " +
    spiel4.value +
    " \r\n ";
  // "Email: " +
  // email.value +
  // " \r\n " +
  // "Country: " +
  // country.value +
  // " \r\n " +
  // "Message: " +
  // msg.value;

  // Convert the text to BLOB.
  const textToBLOB = new Blob([data], { type: "text/plain" });
  const sFileName = "formData.txt"; // The file to save the data.

  let newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  } else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }

  newLink.click();
}

/*
w3school
My Min / Max JavaScript Methods

The fastest solution is to use a "home made" method.

This function loops through an array comparing each value with the highest value found: 


function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
} 


Example (Find Min)
function myArrayMin(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
} 
*/
