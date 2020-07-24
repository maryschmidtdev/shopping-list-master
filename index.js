$("#js-shopping-list-form").submit(event => {
    
event.preventDefault();

const userTextElement = $(event.currentTarget).find('#shopping-list-entry');
const listItem = 
`<li>
<span class="shopping-item">${userTextElement.val()}</span>
<div class="shopping-item-controls">
  <button class="shopping-item-toggle">
    <span class="button-label">check</span>
  </button>
  <button class="shopping-item-delete">
    <span class="button-label">delete</span>
  </button>
</div>
</li>`

$(".shopping-list").append(listItem); 

});


$(".shopping-list").on("click", ".shopping-item-delete", function(event) {
    $(this).closest("li").remove();
});

$(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
    const listItem = this.closest('li')
    $(listItem).find(".shopping-item").toggleClass("shopping-item__checked")

});