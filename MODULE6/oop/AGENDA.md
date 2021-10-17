# Object Oriented Programming
  - What the heck is that even!??
      - Object Oriented Programming is the basic idea that we use objects to model real world things that we want to represent inside our programs.
      - In OOP, Objects can contain related data and code, which represent information about the thing you are trying to model, and functionality or behavior that you want it to have.
      - **Encapsulation** refers to the bundling of data, along with the methods that operate on that data, into a single unit, frequently in the form of classes. 

# Classes
  - We're all at least a little bit familiar with classes in Javascript at this point but what are they and why do we need them?
     - What are they?
        - Not objects!
        - Classes are blueprints for creating objects.
        - Classes encapsulate data with code to work with our data - let's think back to our React class components.
     - Why do we need them?
            - More controlled
            - Less repetitive - keeps code DRY
    - Whoo hoo! Classes sound amazing! How do we make 'em?
        - Slow down young padawan... there are some rules.
            - use the `class` keyword to declare a class
            - class names start with capital letters by convention
            - use the `new` keyword to instantiate a new class instance
    - Cool! We made a class... we should maybe put something in it, huh?
        - We can add class methods
            - Just like other functions we can pass arguments to our class methods
        - We can also add properties to our classes using the constructor
            - constructor enables us to provide any custom initialization for an instance of our class that must be done before any other methods can be called on a class instance.
            - inside of our constructor we can declare properties using `this`

# This
  - WHAT ARE THOOOOOSEEEEEEE?!?!?!? Couldn't tell you fam. But I can tell you: 
     - What is `this`?
         - `this` is a special keyword in JS that refers to the object executing the code
         - `this` is a property which is stored on all functions(which are essentially objects) that point to a value that is the current execution context
         - when used inside of a class' constructor function ensures we are referencing the properties inside `this` class (the one we've created and are currently inside)

# Taking our classes from #basic to #baddies
  - How do we customize our class instances so that they have a little more finesse?
      - We can pass arguements to our constructor function
      - We can then use these passed in arguments to dynamically set properties on an instance of our class

# Default values can be useful
  - You're all mixed up! You don't know what to do! Initalize your classes with a default value.
      - Sometimes we want to be able to ensure that properties on an instance of our class have a value whether or not one is passed in at the time of instantiation.

# Switching it up on the fly
  - Just like your toxic ex, not everything was meant to be forever. Thank god we never got that tattoo! Sometimes after we initialize an instance of a class we may want to alter it's properties. JavaScript allows us to do this! Thanks JavaScript!
  - But hey! Wait a second! What if I dont want to be able to change?
      - We can prepend and underscore (_) to property names we dont want to change so that other developers know these values shouldn't be overwritten
      - We can write functions that to deal with changes to our properties

# Social Butterflies
  - Functions are more fun with friends.
    - We can pass class instances to other class instances and make them interact.

# Static Shock
  - We're already familiar with JS built in classes like Math and Date
     - Why when we use the Date class do we have to instantiate with the new keyword but we don't have to do that when we use the Math class?
        - We can use the key word static to declare methods and properties directly to a class as opposed to an instance of the class.
