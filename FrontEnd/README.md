# Snail-Problem

 H: height of the well in feet
 U: distance in feet that the snail can climb during the day
 D: distance in feet that the snail slides down during the night
 F: fatigue factor expressed as a percentage

## Directions

  A snail is at the bottom of a 6-foot well and wants to climb to the top. The snail can climb 3 feet while the sun is up, but slides down 1 foot at night while sleeping. The snail has a fatigue factor of 10%, which means that on each successive day the snail climbs 10% * 3 = 0.3 feet less than it did the previous day. (The distance lost to fatigue is always 10% of the first day's climbing distance.) On what day does the snail leave the well, i.e., what is the first day during which the snail's height exceeds 6 feet? (A day consists of a period of sunlight followed by a period of darkness.) As you can see from the following table, the snail leaves the well during the third day.

  Your job is to solve this problem in general. Depending on the parameters of the problem, the snail will eventually either leave the well or slide back to the bottom of the well. (In other words, the snail's height will exceed the height of the well or become negative.) You must find out which happens first and on what day.

  ### Front end:
    - Develop a form that accepts 4 parameters: H, U, D, F. The parameters should be integers.
    - Submitting the form should use PHP to solve and snail problem and javascript to render the results.

  ### PHP Input:
    - Your PHP method should accept four integers H, U, D, and F.  All four numbers will be between 1 and 100, inclusive.
    - The snail never climbs a negative distance. If the fatigue factor drops the snail's climbing distance below zero, the snail does not climb at all that day. Regardless of how far the snail climbed, it always slides D feet at night.

  ### PHP Output:
    - For each call, the webservice should return a result. The result should be a JSON encoded string indicating whether the snail succeeded (left the well) or failed (slid back to the bottom) and on what day. Format the output exactly as shown in the example.

  ### Output Rendered In Javascript:
    - Make a table that has columns H, U, D, F, and Result. The result should say whether or not the snail succeeded and on what day.

## Evaluating

  Since this is a test you are doing at home, you are allowed to consult any resource on the internet, and also review past projects. Basically there are no limits in what are you able to use to solve this test.
  But we will evaluate the program based on the following criteria:
    -	The snail problem must be solved correctly according to test cases we provided.
    -	Using PHP for the application logic and javascript for presentation.
    -	Clean source code and use of any CODE STYLE format.
    -	Maintainable source code. (comments, good separation of presentation layer from business logic layer)
    -	Speed. If you sent your project before the deadline, you will gain additional points.


## Versions
  ### 1.0
    - [ ] Create the html, css, and js files
    - [ ] Create form and add all inputs needed
    - [ ] Link the css and js files to the html
    - [ ] Add labels to the form inputs
    - [ ] Start php with form