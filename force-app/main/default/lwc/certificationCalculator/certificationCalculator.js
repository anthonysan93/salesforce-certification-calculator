import { LightningElement } from 'lwc';

export default class CertificationCalculator extends LightningElement {}

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
//If total > passingScore Green
//else if total < passingScore Red
//else no formatting

