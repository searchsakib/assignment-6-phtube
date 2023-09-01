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
