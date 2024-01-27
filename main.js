/* Author Harsh Patel
 * resources: https://www.w3schools.com/jsref/dom_obj_pushbutton.asp
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
 * https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
 */
// This function adds a course to the list
function addCourse() {
    // gets the input from the user
    var courseName = document.getElementById('courseInput').value;
    
    if (courseName) {
        // Creates a list element and then stores its vallue to course name
        var listItem = document.createElement('li');
        listItem.textContent = courseName;
        // adds the element to the list
        document.getElementById('courseList').appendChild(listItem);

        // Clear the input for the the text box
        document.getElementById('courseInput').value = '';
    }
}

// This function deletes a course from the course list
function deleteCourse() {
    // stores the input of the user
    var deleteName = document.getElementById('deleteInput').value;
    var listItems = courseList.getElementsByTagName('li');
    // loops through the course list and 
    // if the list item matchs the delete input then remove it
    for (i in listItems) {
        if (listItems[i].textContent === deleteName) {
            // removes the course
            courseList.removeChild(listItems[i]);
            break;  // exit the loop once the item is found and removed
        }
    }
    // Clear the input for the the text box
    document.getElementById('deleteInput').value = '';
}

// This function makes course 'a' a prereq of course 'b'
function makePrereq() {
    // The variable that stores the input value, 
    var makeP = document.getElementById('makePreqInput').value
    var isP = document.getElementById('isPrereqInput').value

    // if both text boxes have input, then
    if (makeP && isP) {  
        //creates a list element
        var Prereq = document.createElement('li');
        // sets the prereq 
        Prereq.textContent = makeP + " > " + isP;
        // adds the prereq to the list
        courseList.appendChild(Prereq);
    }

    // Clear the input for the the text box
    document.getElementById('makePreqInput').value = '';
    document.getElementById('isPrereqInput').value = '';
}
