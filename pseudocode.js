/*Pseudocode for css files
initialize container width(this is possible wih scss bootstrap )
initialize primary color for the application
set html and body display using flex(to be responsive)
App: 
set primary color and width to use variables declared 
body: 
set minimum width and minimum height and again set background color and justify content to use
center values
header/footer: 
set display to use flex, wrap , and set flex direction to use row
set height,width ,background-image and set background image size to container size
style h3 and p elements as nested elements(scss feature) and set their color and font
main:
set size container-size-(header+footer)
set minimum height 
display: grid with auto flow column(used multiple background-colors setting on each element to check if the elements are displaying properly)
sub-main-2:
set display to use flex with flex-direction column, and background-color primaryColor varible
set minimum size, and justify content to use center
declare @mixin element(to reuse defined mixin)

container:
set height by calculating container height - (container height/5=>header +footer height)
set margin
create nested label to style in the container
include mixin element defined
send parameters to the mixin element( that is max width for media  ) and content to 100%

ul/li
set ul li elements to use so-style and set font for li elements

input
set border, padding, font-size, inline-flex display and color for the input boxes

declare achor-tags for different states(hover, active , and none)
set link style to none
set achor tags padding, font-size and color
set different colors for :active ,:hover states
set background-color for :active state

*/
/*
Whole Application pseudocode
 # Stateless components
 1.   BrowserHistory
 2.   School Data
 3.   Header
 4.   Footer
 6.   QuickLinks

 # Stateful components
 1.   SchoolsList 
 2.   Home
 3.   App.js

initialise class component App.js 
    declare state with  city:'', state:'',schools:[],browserHistory:[],isLoaded:false,savedList:
    create methods handleSearch,handleCityChange,handleStateChange,setSavedList
    implement lifecycle method componentDidMount to make async axios call from API
        declare url to use for axios get method,set header parameters for cors 
        make API call asynchrously
        parse results  to sets state elements
    implement lifecycle method render to route child elements

implement child components
 create BrowserHistory as a function component 
    IF location param state is not null && not undefined
        map through props location state and render each element
    export BrowserHistory

create SchoolsList as a class component
    initialize with empty state variables
    implement lifecycle method componentDidMount
        procedure componentDidMount
         IF state from location props is NOT null && NOT undefined
            map through location props state 
            push each element to schoolsList state
            set isLoaded to true
    implement lifecycle method render
        procedure render
            IF the component has state isLoaded true and schoolsList has elements
                get items from schools list
                map through items
                render values using li elements

    export SchoolsList

    create stateful component Home
        initialize state with empty values
        implement lifecycle method componentDidMount
            procedure componentDidMount
                IF props.data is NOT null && NOT unidentified
                    map through props data and add items to schoolsList array state variable
        implement lifecycle method render
            procedure render
                IF schoolsList state is NOT null && NOT unidentified
                    then render child element SchoolData and send setSavedList method as a prop
    export Home
    create SchoolData as a functional component
        create an event handler for button
            get event target value
            call method to handle state
            to get updated state each time use REACT HOOK useEffect
             get data from props
                IF data exists
                    display data on DOM













*/