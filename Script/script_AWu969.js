/**DomContent loaded makes it so the scrip load before the style sheet. (notes to myself) */
document.addEventListener("DOMContentLoaded", () => {
    const cards = [
      {
        name: "Arcana Force XIX - The Sun",
        img: "Images/arcana-force-sun.jpg"
      },
      {
        name: "Baronne De fleur",
        img: "Images/baronne.jpg"
      },
      {
        name: "Outer-Entity Azathoth",
        img: "Images/Azathoth.jpg"
      },
      {
        name: "Exodia the Forbidden One",
        img: "Images/exodia.jpg"
      },{
        name: "AccessCode Talker",
        img: "images/accesscode.jpg"
      }
];
  
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    const container = document.getElementById("randomCard");
    
    const cardDiv = document.createElement("div");
    cardDiv.className = "card-of-day";
  
    const img = document.createElement("img");
    img.src = randomCard.img;
    img.alt = randomCard.name;
    img.classList.add("card-thumb");
  
    const nameText = document.createElement("p");
    nameText.textContent = randomCard.name;
    nameText.style.textAlign = "center";
    nameText.style.marginTop = "8px";
    nameText.style.fontWeight = "bold";
  
    const zoomImg = document.createElement("img");
    zoomImg.src = randomCard.img;
    zoomImg.style.width = '340px';
    zoomImg.style.height = '500px';
    zoomImg.alt = randomCard.name + " Full View";
    zoomImg.classList.add("zoom-preview");
  
    // Add both images and text
    cardDiv.appendChild(img);
    cardDiv.appendChild(nameText);
    cardDiv.appendChild(zoomImg);
    container.appendChild(cardDiv);
  });
  
/*Validation for feedback form */
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    const name = document.getElementById("fname").value.trim();
    const email = document.getElementById("femail").value.trim();
    const message = document.getElementById("fmessage").value.trim();
  
    // Check if at least one rating checkbox is checked
    const ratingChecked = document.querySelectorAll("input[name='rating']:checked").length;
    if (!name || !email || !message || ratingChecked === 0) {
      event.preventDefault();
      document.getElementById("formStatus").style.color = "red";
      document.getElementById("formStatus").textContent = "Please fill in all fields and select a rating before submitting.";
    } else {
      document.getElementById("formStatus").style.color = "green";
      document.getElementById("formStatus").textContent = "Sending your message...";
    }
});


  