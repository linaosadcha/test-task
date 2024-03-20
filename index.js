var image = document.getElementById("image");
var lucky = document.getElementById("lucky");
lucky.addEventListener("click", function()
{
  image.src = "./ODD_BIG.png";
  image.style.width = '450px';
  image.style.height = 'auto';
})