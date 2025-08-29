<!-- 1 -->
getElemntById(): this function is used get the spacific element that has an unique ID,

getElementsByClassName(): this function is used to get all the elements that have same class names,

querySelector(): this function is used to get the fist element that matches by the ClassName Or ID,

querySelectorAll(): this function is used to get all the elements that matches by the ClassName Or ID,
<!-- 2 -->
to Create and Insert anew element into the dom, at First i use createElement() function to create a new element, then i customize as i need to.
after compleating new element creation
i insert the created element into dom by using append() or appendChild() this two function is used for specific need.
<!-- 3 -->
event bubble is like a event, when a click handler that occurs it propagates from child element to parent element in the DOM tree structure. to stop the bubbling propaagation js has a function that called stopPropagation(),
<!-- 4 -->
event delegation a method that used to handle event bubblig. Instead of attaching a handler to every child element, event delegation gives us a method to attach one handler to the parent element to handle the child element.
<!-- 5 -->
preventDefault(): is used to prevent some specific action like form for auto reloading, checkbox for being checked automatically.
stopPropagation is used to stop the propagation event of event bubbling, this fnction is only used to stop the propagation. function does not stop the default actions of an element.