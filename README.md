1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   answer: basically `getElementById` helps to hold an element who contains that particular name of the id that is passed as argument on the other hand same thing happens for classes if `getElementByClassName` is used. now `querySelector` is used for to get a single item or only the first item(if multiple elements have same class name) that is mention as argument. `querySelectorAll` returns an array like object called Nodelist that holds all the element that contains same class name

 2. How do you create and insert a new element into the DOM?
   
   answer: first an element has to create in memory by writing the `command document.createElement()`. Now pass an element like 'div','p' or any other tag that is needed to create . now it will not show in DOM so to make visible appendChild() is must need. pass the name of the element that is just created by document.createelement()

3. What is Event Bubbling and how does it work?
    answer: Event Bubbling means when an event fires it first took place in that particular element then it starts to move up and started to go up until it reaches the top of the DOM

4. What is Event Delegation in JavaScript? Why is it useful?
   answer: To prevent firing multiple eventlistener as it bubbles to top only single is used to parent element so that multiple propagation can be reduced and DOM works smoothly is known Event Delegation.

5. What is the difference between preventDefault() and stopPropagation() methods?
   answer:
   `preventDefault()`:
   in form when we submit anything it starts to reload or starts navigating which can be very painful for doing future works with the values , so to prevent this painpoint preventDefault is used but it does not stop bubbling.
   `stopPropagation()`:
   is used for prevent event propagation to the parent element in the DOM Tree. In other words in stops bubbling 
