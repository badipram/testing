import data from "../../public/data/DATA.json";

class RestaurantCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    if (!this._restaurant) {
      return;
    }

    this.shadowRoot.innerHTML = `
        <style>
           .card {
            background-color: #3C2A21;
            display: flex;
            flex-direction: column;
            width: 100%
            align-items: stretch;
            margin-top: 40px;
            border-radius: 10px;
            padding: 20px;
           }

           .card:hover {
            background-color: #E5E5CB;
            box-shadow: 0 4px 8px rgba(0, 1, 1, 1);
            }

            .card:hover .name,
            .card:hover .description,
            .card:hover .city,
            .card:hover .rating {
                color: #1A120B; 
            }

           .image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 8px;
           }

           .name {
            font-size: 25px;
            margin: 8px 0;
            flex: 0;
            text-decoration: none;
            color: #E5E5CB;
            }

           .description {
            text-align: justify;
            margin-bottom: 8px;
            flex: 1;
            color: #E5E5CB;
            font-size: 13px
            overflow: hidden;
           }
           
           .details {
            display: flex;
            color: #E5E5CB;  
            font-size: 13px;
           }

            .city {
            margin-right: 20px;
            }

            @media screen and (min-width: 1214px) {
                .image {
                    height: 300px;
                }

                .name {
                    font-size: 30px;
                }

                .details {
                    font-size: 15px;
                }

                .description {
                    font-size: 15px;
                }
            }
        </style>

        <div class="card-container">
            <div class="card">
                <img class="image" src="${this._restaurant.pictureId}" alt="Restaurant Image">
                <a href="#" class="name">${this._restaurant.name}</a>
                <div class="details">
                    <p class="city">City: ${this._restaurant.city}</p>
                    <p class="rating">Rating: ${this._restaurant.rating}</p>
                </div>
                <p class="description">${this._restaurant.description}</p> 
            </div>
        </div>
        `;
  }
}

customElements.define("restaurant-card", RestaurantCard);

const restaurantContainer = document.getElementById("restaurant-container");

data.forEach((restaurant) => {
  const restaurantCard = document.createElement("restaurant-card");
  restaurantCard.restaurant = restaurant;
  restaurantContainer.appendChild(restaurantCard);
});
