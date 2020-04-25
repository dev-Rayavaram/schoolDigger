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

initialise class component App.js 
    declare state with  city:'', state:'',schools:[],browserHistory:[],isLoaded:false,savedList:
    create methods handleSearch,handleCityChange,handleStateChange,setSavedList
    implement lifecycle method componentDidMount to make async axios call from API
    implement lifecycle method render to route child elements











*/