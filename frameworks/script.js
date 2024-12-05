document.addEventListener("DOMContentLoaded", function () {
  // Populate the place name
  document.getElementById("place").textContent = detail.place;

  // Populate the images
  const imagesContainer = document.getElementById("images");
  detail.images.forEach(function (image) {
    const imgElement = `
          <div class="col-xl-3 col-md-4 col-6 container justify-content-center mt-3">
              <img src="${detail.imagePath}/${detail.place}/${image}" class="img-thumbnail img-fluid w-100" data-bs-toggle="modal" data-bs-target="#imageModal" onclick="document.getElementById('modalImage').src='${detail.imagePath}/${detail.place}/${image}'">
          </div>`;
    imagesContainer.innerHTML += imgElement;
  });

  // Populate the description
  document.getElementById("description").textContent = detail.description;

  // Attach event listeners to buttons
  document
    .getElementById("contentButton")
    .addEventListener("click", function () {
      const moreDetailsModalBody = document.getElementById(
        "moreDetailsModalBody"
      );
      moreDetailsModalBody.innerHTML = `
          <p><strong>Address:</strong> ${detail.buttonDirectory.address.location}</p>
          <p><strong>Fee:</strong> ${detail.buttonDirectory.fee}</p>
          <p><strong>Contact Number:</strong> ${detail.buttonDirectory.contact}</p>
          <hr>
          <div class="text-center">
            <iframe src="${detail.buttonDirectory.address.map}" width="90%" height="" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
      `;
    });

  document.getElementById("pinLocation").addEventListener("click", function () {
    window.open(detail.buttonDirectory.address.map, "_blank");
  });

  document.getElementById("callNow").addEventListener("click", function () {
    window.location.href = `tel:${detail.buttonDirectory.contact}`;
  });
});
