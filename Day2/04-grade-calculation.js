/* Assignment Details:
Write a JavaScript function that evaluates a student's score and returns their grade using a switch statement
to assess score ranges. */

function Studentscrore(score)
{
    switch(true)
    {
        case(score>80):console.log("The student grade is A");
        break;

        case(score>60 && score<80):console.log("The student grade is B");
        break;

        case (score<60):console.log("The student grade is C");
        break;

        default: console.log("The student is fail");
        
    }

}
let score=59
Studentscrore(score)