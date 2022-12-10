import { LightningElement } from 'lwc';

//Storage of Variables
let passFail = ''

export default class CertificationCalculator extends LightningElement {
    scoreMessage (){
        if(passFail === 'Pass'){
            return "Congrats you passed!";
        }else if(passFail === 'Fail'){
            return 'You will get it next time!';
        }else{
            return 'Awaiting results...';
        }
    }   
}

// Storage of Variables

const questionCount = 60;
const passingScore = 68;
const developerFundamentalsWeight = .23
const processAutomationAndLogicWeight = .30;
const userInterfaceWeight = .25;
const testingDebuggingAndDeploymentWeight = .22;

let developerFundamentals;
let processAutomationAndLogic;
let userInterface;
let testingDebuggingAndDeployment;

//Integer * Weight for each section - want to round each section
//Add each together to compare to passing score


//Footer Change
//If total > passingScore Green  class="slds-text-color_success"
//else if total < passingScore Red  class="slds-text-color_error"
//else no formatting


//inputing the entire if else if statement into 
//the bind variable instead of caculating?
