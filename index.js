'use strict';





function shoppingList(){



  // enter items they need to purchase by entering text and 
  // hitting "Return" or clicking the "Add item" button

  $('#js-shopping-list-form').submit(event=>{
    event.preventDefault();

    const listItem=$(event.currentTarget).find('input[name="shopping-list-entry"]').val();
        
    $('.shopping-list').append(`<li>
        <span class="shopping-item">${listItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
  });

  // check and uncheck items on the list by clicking the "Check" button

  $('.shopping-list').on('click','.shopping-item-toggle',(event)=>{
    event.preventDefault();

    // $(event.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    $(event.target).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
  });

  // permanently remove items from the list   

  $('.shopping-list').on('click','.shopping-item-delete',(event)=>{
    event.preventDefault();

    $(event.target).closest('li').remove();
  }); 

}

$(shoppingList);