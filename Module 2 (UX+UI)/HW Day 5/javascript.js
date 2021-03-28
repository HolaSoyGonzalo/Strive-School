const moveLeft = (e) => {
  console.log(e);
  e.target.closest(".row").scrollLeft -= e.target.closest(".row").offsetWidth;
};
const moveRight = (e) => {
  console.log(e);
  e.target.closest(".row").scrollRight -= e.target.closest(".row").offsetWidth;
};
const fetchData = async () => {
  const rowsContainer = document.querySelector(".container-fluid");
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/movies/`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFkMzM4ZGFkOGMzODAwMTc1YTMwNjUiLCJpYXQiOjE2MDUxODY0NDUsImV4cCI6MTYwNjM5NjA0NX0.aQy-z_AwpGFuSJizNMkXSc3DH0ldpfq6DuiEPFx7hYg",
        },
      }
    );
    if (response.ok) {
      const categories = await response.json();
      console.log(categories);
      categories.forEach(async (element) => {
        let res = await fetch(
          `https://striveschool-api.herokuapp.com/api/movies/` + element,
          {
            method: "GET",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFkMzM4ZGFkOGMzODAwMTc1YTMwNjUiLCJpYXQiOjE2MDUxODY0NDUsImV4cCI6MTYwNjM5NjA0NX0.aQy-z_AwpGFuSJizNMkXSc3DH0ldpfq6DuiEPFx7hYg",
            },
          }
        );
        const films = await res.json();
        const container = `  <div class="row ml-2 ${element} " >
        <button role="button" onclick="moveLeft(event)" class="left-arrow"> <span class="carousel-control-prev-icon" aria-hidden="true"></span></button>
        <div class="carousel-content recommended">
            <h2 class="bold" >${element}</h2>
                <div class="carousel">
                ${films
                  .map(
                    (film) => `
                <div class="film pt-2">
                    <a href="#"><img src="${film.imageUrl}" alt=""></a>
                     <div class="card-img-overlay imageTitle">
                     <h5 class="card-title">${film.name}</h5>
                     <a href="details.html?id=${film._id}" class="btn btn-secondary btn-sm active" role="button" aria-pressed="true">Open</a>
                     
                     </div>
                 </div>
                 `
                  )
                  .join("")}
            </div>
        </div>
         <button role="button" onclick="moveRight(event)" class="right-arrow"><span class="carousel-control-next-icon" aria-hidden="true"></button>
    </div>`;
        rowsContainer.innerHTML += container;
        const row = document.querySelectorAll(".carousel-content");

        const leftArrow = document.querySelectorAll(".left-arrow");
        const rightArrow = document.querySelectorAll(".right-arrow");

        // rightArrow[0].addEventListener("click", () => {
        //   row[0].scrollLeft += row[0].offsetWidth;
        // });

        // leftArrow.addEventListener("click", () => {
        //   row[0].scrollLeft -= row[0].offsetWidth;
        // });
        console.log(films);
      });
    }
  } catch (error) {
    console.error(`API ERROR : ${error.message}`);
  }
};

const pushData = async (event) => {
  event.preventDefault();

  const newProduct = {
    name: document.querySelector("#movie-name").value,
    category: document.querySelector("#movie-category").value,
    description: document.querySelector("#movie-description").value,
    imageUrl: document.querySelector("#movie-img").value,
  };
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/movies/`,
      {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: new Headers({
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFkMzM4ZGFkOGMzODAwMTc1YTMwNjUiLCJpYXQiOjE2MDUxODY0NDUsImV4cCI6MTYwNjM5NjA0NX0.aQy-z_AwpGFuSJizNMkXSc3DH0ldpfq6DuiEPFx7hYg",
          "Content-Type": "application/json",
        }),
      }
    );

    console.log(response);
    if (response.ok === true) {
      location.assign("netflix.html");
    } else {
      alert("something went wrong");
    }
    const data = await response.json();

    console.log(data);
    //return data;
  } catch (error) {
    console.error(`API ERROR : ${error.message}`);
  }
};
