$(document).ready(() => {
    $("#sidebar").fadeIn(1000);
    $(".main-page").fadeIn(1000);
});

//
var currentId = 5;
function addItem() {
    const addingItem = $("[name=adding-item]")[0];

    const currentItem = document.getElementById("sidebar");

    currentId += 1;

    // This is needed for new created items to be able to react with event
    // Try to remove this 2 line to see the result
    const newItem = document.createElement("a");
    const newCurrentId = currentId;
    newItem.href = "#";
    newItem.ondblclick = () => deleteItem(newCurrentId);
    newItem.id = newCurrentId;
    newItem.classList = "list-group-item list-group-item-action";
    newItem.innerText = addingItem.value;
    newItem.style.display = "none";
    // In bigger project, doing this for every events may costing time. So people
    // often use other libraries to deal with this problem

    currentItem.appendChild(newItem);
    $(`#${newCurrentId}`).fadeIn(1000);
    addingItem.value = "";
}

function deleteItem(id) {
    const sidebar = $(".sidebar");
    const currentItem = $(`#${id}`);
    if (currentItem) {
        currentItem.fadeOut();
    }
}
function changColor(color, id) {
    $(`#item-${id} .card-body`).removeClass(`black white gold`);
    $(`#item-${id} .card-body`).addClass(`${color}`);

}
const  Showapi = () => {
$.ajax ({
    url: "https://619a50a39022ea0017a7b100.mockapi.io/api/usserr",
    method:"GET",
    contentType: "application/x-www-form-urlencoded; charset=UTF-8",

    success: data => {
         // hide page content
         $("#mainpage .card-row").fadeOut(1000);

         // show new content
         for (let item of data) {
             $("#mainpage").append(`
                 <p style="color:red; font-size: 17px ">- Name: ${item.name}<br> - Id: ${item.id}<br> - createdAt: ${item.createdAt}<br> - avatar: ${item.avatar}<br></p><br>
             `);
         }
     },
     error: (xhr, textStatus, errorThrown) => {
         console.log(textStatus);
     }
})}