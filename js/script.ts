// location class
// subclasses event/restaurant
// event: date, ticket price, time
// restaurant: telephone number, type(chinese, etc), web address

// bootstrap
// array holds objects
// display method


// Travel-o-matic blog
// You enjoy traveling to different places, visiting events and eating good food in restaurants. You want to create a TypeScript-based system that presents all of your experiences in a web-page.


// What is common to a place, event and restaurant is a location. Since you know about classes, you decided that your base class location should hold information about city, ZIP-code, address (single line like “Kettenbrueckengasse 23”), and a teaser image. That base class has the function display() which is used for displaying the object’s properties on the screen as HTML.


// A restaurant must also display a telephone number, type (“chinese”, “indian”, “viennese”, …)  and a web address. Restaurant objects inherit their basic properties (like ZIP-code) from the Location class. Displaying function must of course be updated.   


// Same goes for the events - they have their additional properties like EventDate (“12.11.2019”) and EventTime (“17:00”) and ticket price (in EUR) that also need to be displayed in addition to the base class’ location properties.   


// For the regular points of this CodeReview, you need to create a structure of TypeScript/JavaScript classes, their respective constructors and their display() function that will display the relevant data of places, events and restaurants that you have visited.

// (20 points) Create a data model of location based on the specification above.

// (20 points) create at least 2 location objects by invoking a constructor call and save them in an array (class constructors usage is mandatory, do not use JSON and parsing).

// (10 points) add the display() function to the Location class that can display Location object as an HTML string. Use Bootstrap to solve design and responsiveness issues in an easy manner.

// (10 points) use looping functionality to display the object saved in the array on the screen.

// (20 points) create the classes Restaurant and Events with their respective properties. Invoke constructors, and save resulting objects in the same array used for location objects. Check the rendering (or how you display it).  

// (10 points) create a display() function for the classes restaurant and event respectively. display() is capable of displaying relevant information of its class as an HTML. Again, use Bootstrap to solve design and responsiveness.

// (10 points) Assure that rendering of the array is done in the following manner: for small screens, you see the teaser of one object (without the image) in a row. On medium screens, you see two objects in a row (with image). On large screens, you see three objects in a row (with image).

// (20 points) Create a form that can add new events/restaurants/locations and display these newly created entries in their respective categories.

