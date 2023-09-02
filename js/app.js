const getCategory = async () => {
  const response = await fetch(
    'https://openapi.programming-hero.com/api/videos/categories'
  );
  const categoryData = await response.json();
  // console.log(categoryData.data);
  categoryData.data.forEach((title) => {
    // console.log(title.category);
    const cardContainer = document.getElementById('card-container');
    const category = document.getElementById('category');
    const drawingPage = document.getElementById('drawing-page');
    const categoryDiv = document.createElement('div');
    categoryDiv.innerHTML = `
    <button class='btn w-[102px] bg-[#25252526]'>${title.category}</button>
    `;
    category.appendChild(categoryDiv);
    categoryDiv.addEventListener('click', () => {
      console.log(title.category);
      if (title.category === 'All') {
        cardContainer.innerHTML = '';
        drawingPage.innerHTML = '';
        cardLoad(1000);
      } else if (title.category === 'Music') {
        cardContainer.innerHTML = '';
        drawingPage.innerHTML = '';
        cardLoad(1001);
      } else if (title.category === 'Comedy') {
        cardContainer.innerHTML = '';
        drawingPage.innerHTML = '';
        cardLoad(1003);
      } else if (title.category === 'Drawing') {
        cardContainer.innerHTML = '';
        drawingPage.innerHTML = '';
        // cardLoad(1005);
        drawingLoad();
      }
    });
  });
  // categoryData.data[0].category;
};
getCategory();

const cardLoad = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const idData = await res.json();

  idData.data.forEach((item) => {
    // console.log(item);
    // console.log(item.authors[0]?.verified);

    // console.log(item.others.posted_date);
    // console.log(item.others.views.split('K')[0]);
    // console.log(item.others.views);
    // console.log(item.thumbnail);
    // console.log(item.title);
    // console.log(item.authors[0].profile_name);
    // console.log(item.authors[0].profile_picture);

    const cardContainer = document.getElementById('card-container');
    const div = document.createElement('div');
    console.log(div);

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
          <div class='text-white text-right mt-[-35px] mr-3 time-div'>
          <p class='text-[10px] bg-[#171717] inline p-1 rounded-sm'>${parseInt(
            item.others?.posted_date / 3600
          )}hrs ${parseInt((item.others?.posted_date % 3600) / 60)}min ago</p>
          </div>
          <div class="card-body flex flex-row px-0 pt-5 pb-2">
            <div class='h-[40px] overflow-hidden rounded-full'>
              <img
                class="w-[40px] h-[40px] rounded-full blur-[6px] "
                src=${item.authors[0].profile_picture}
                alt=""
              />
            </div>
            <div>
              <h2 class="card-title text-[#171717] mb-2">
                ${item.title}
              </h2>
              <p class="text-[#171717B2]  inline mr-2">${
                item.authors[0].profile_name
              }</p>
              
              <span  class='verify'> 
              <svg class='inline' id='verify-svg' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clip-path="url(#clip0_11_215)">
                <path d="M19.375 10.0001C19.375 10.8001 18.3922 11.4595 18.1953 12.197C17.9922 12.9595 18.5063 14.022 18.1203 14.6892C17.7281 15.3673 16.5484 15.4486 15.9984 15.9986C15.4484 16.5486 15.3672 17.7282 14.6891 18.1204C14.0219 18.5064 12.9594 17.9923 12.1969 18.1954C11.4594 18.3923 10.8 19.3751 10 19.3751C9.2 19.3751 8.54062 18.3923 7.80312 18.1954C7.04062 17.9923 5.97813 18.5064 5.31094 18.1204C4.63281 17.7282 4.55156 16.5486 4.00156 15.9986C3.45156 15.4486 2.27187 15.3673 1.87969 14.6892C1.49375 14.022 2.00781 12.9595 1.80469 12.197C1.60781 11.4595 0.625 10.8001 0.625 10.0001C0.625 9.20012 1.60781 8.54075 1.80469 7.80325C2.00781 7.04075 1.49375 5.97825 1.87969 5.31106C2.27187 4.63293 3.45156 4.55168 4.00156 4.00168C4.55156 3.45168 4.63281 2.272 5.31094 1.87981C5.97813 1.49387 7.04062 2.00793 7.80312 1.80481C8.54062 1.60793 9.2 0.625122 10 0.625122C10.8 0.625122 11.4594 1.60793 12.1969 1.80481C12.9594 2.00793 14.0219 1.49387 14.6891 1.87981C15.3672 2.272 15.4484 3.45168 15.9984 4.00168C16.5484 4.55168 17.7281 4.63293 18.1203 5.31106C18.5063 5.97825 17.9922 7.04075 18.1953 7.80325C18.3922 8.54075 19.375 9.20012 19.375 10.0001Z" fill="#2568EF"/>
                <path d="M12.7094 7.20637L9.14062 10.7751L7.29062 8.92669C6.88906 8.52512 6.23749 8.52512 5.83593 8.92669C5.43437 9.32825 5.43437 9.97981 5.83593 10.3814L8.43124 12.9767C8.82187 13.3673 9.45624 13.3673 9.84687 12.9767L14.1625 8.66106C14.5641 8.2595 14.5641 7.60794 14.1625 7.20637C13.7609 6.80481 13.1109 6.80481 12.7094 7.20637Z" fill="#FFFCEE"/>
              </g>
              <defs>
                <clipPath id="clip0_11_215">
                  <rect width="20" height="20" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            </span>

              <p class="text-[#171717B2] mt-[10px]">${item.others.views}</p>
            </div>
          </div>
        </div>
    `;

    // for blue tick
    const verifySpan = div.querySelector('.verify');
    if (!item.authors[0]?.verified) {
      verifySpan.classList.add('hidden');
    }

    // for time div
    const timeDiv = div.querySelector('.time-div');
    if (item.others.posted_date.length === 0) {
      timeDiv.classList.add('hidden');
    }

    cardContainer.appendChild(div);
  });

  // console.log(idData.data);
};
cardLoad(1000);

//! sort card failed
// const sortMethod = async (forId) => {
//   const res = await fetch(
//     `https://openapi.programming-hero.com/api/videos/category/${forId}`
//   );
//   const myData = await res.json();
//   const theData = myData.data.toSorted(
//     (a, b) =>
//       parseFloat(b.others.views.split('K')[0]) -
//       parseFloat(a.others.views.split('K')[0])
//   );
//   console.log(theData);
// };
// sortMethod(1000);

const drawingLoad = () => {
  const drawingPage = document.getElementById('drawing-page');
  const drawingDiv = document.createElement('div');
  drawingDiv.innerHTML = `
        <img class="mx-auto mb-6" src="./images/Icon.png" alt="icon" />
          <h3 class="text-[32px] font-bold text-[#171717] text-center mb-10">
            Oops!! Sorry, There is no <br />
            content here
          </h3>
        `;
  drawingPage.appendChild(drawingDiv);
};

const blogBtn = document.getElementById('blog-btn');
blogBtn.addEventListener('click', function () {
  window.location.href = 'blog.html';
});
