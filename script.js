// JavaScript Document
 if (typeof (localStorage) == 'undefined') {
	 var_dump('Cannot save files');
 }

$form = $('#todo-form');
$newTask = $('#todo-new');
$taskList = $('#show-tasks');
$clear = $('#clear-all');

// Add task
$form.submit(function(e) {
    e.preventDefault();
		$taskList.append(
			"<li id='item'>"
			+ "<input type='checkbox' id='checkbox'>"
			+ $newTask.val()
			+ "</li>"
			);
			
		$newTask.val("");
});


// Clear all checked tasks
$clear.click(function(e) {
    e.preventDefault();
		var $taskListLi = $('#show-tasks li');
		$taskListLi.remove();
});

/*
var i = Number(localStorage.getItem('todo-counter')) + 1,
      $form = $('#todo-form'),
      $itemList = $('#show-items'),
      $newTodo = $('#todo-new'),
      order = [];
 
$form.submit(function(e) {
    e.preventDefault();
    $.publish('/add/', []);
});
 
$.subscribe('/add/', function() {
    if ($newTodo.val() !== "") {
        // Take the value of the input field and save it to localStorage
        localStorage.setItem( 
            "todo-" + i, $newTodo.val() 
        );
         
        // Set the to-do max counter so on page refresh it keeps going up instead of reset
        localStorage.setItem(
            'todo-counter', i
        );
         
        // Append a new list item with the value of the new todo list
        $itemList.append(
            "<li id='todo-" + i + "'>"
            + "<span class='editable'>"
            + localStorage.getItem("todo-" + i)
            + " </span><a href='#'>x</a></li>"
        );
 
        $.publish('/regenerate-list/', []);
 
        // Hide the new list, then fade it in for effects
        $("#todo-" + i).css('display', 'none').fadeIn();
         
        // Empty the input field
        $newTodo.val("");
         
        i++;
    }
});
 
$.subscribe('/regenerate-list/', function() {
    var $newTodoList = $('#show-items li');
    // Empty the order array
    order.length = 0;
     
    // Go through the list item, grab the ID then push into the array
    $newTodoList.each(function() {
        var $this = $(this).attr('id');
        order.push($this);
    });
     
    // Convert the array into string and save to localStorage
    localStorage.setItem(
        'todo-orders', order.join(',')
    );
});*/