const getCategory = async () => {
  const response = await fetch(
    'https://openapi.programming-hero.com/api/videos/categories'
  );
  const categoryData = await response.json();
  // console.log(categoryData.data);
  categoryData.data.forEach((title) => {
    // console.log(title.category);
    const category = document.getElementById('category');
    const categoryDiv = document.createElement('div');
    categoryDiv.innerHTML = `
    <button class='btn'>${title.category}</button>
    `;
    category.appendChild(categoryDiv);
  });
};
getCategory();

const cardLoad = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const idData = await res.json();
  idData.data.forEach((item) => {
    // console.log(item);
    // console.log(item.others.views);
    // console.log(item.thumbnail);
    // console.log(item.title);
    // console.log(item.authors[0].profile_name);
    // console.log(item.authors[0].profile_picture);

    const cardContainer = document.getElementById('card-container');
    const div = document.createElement('div');
    div.innerHTML = `
    <!--card -->
    <div class="card bg-base-100 shadow-xl ">
          <figure class="rounded-lg">
            <img
              class="blur-2xl h-[200px]"
              src=${item.thumbnail}
              alt=${item.title}
            />
          </figure>
          <div class="card-body flex flex-row px-0 pt-5 pb-2">
            <div>
              <img
                class="w-[40px] h-[40px] rounded-full blur-[6px]"
                src=${item.authors[0].profile_picture}
                alt=""
              />
            </div>
            <div>
              <h2 class="card-title text-[#171717]">
                ${item.title}
              </h2>
              <p class="text-[#171717B2] pt-[8px] pb-[9px]">${item.authors[0].profile_name}</p>
              <p class="text-[#171717B2]">${item.others.views}</p>
            </div>
          </div>
        </div>
    `;
    cardContainer.appendChild(div);
  });
  // console.log(idData.data);
};
cardLoad(1000);
