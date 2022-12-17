import { LightningElement } from 'lwc';

//Storage of Variables

const INVALID_MESSAGE = 'Please enter a valid value.';
const NO_RESULTS = 'Awaiting Results...';
let questionCount = 60;

export default class SalesforceCertificationCalculator extends LightningElement {

platformDeveloper1 = [
    {
        section : 'Developer Fundamentals', weight : .23, passingScore : 69
    },{
        section : 'Process Automation And Logic', weight : .30
    },{
        section : 'User Interface', weight : .25
    },{
        section: 'Testing Debugging And Deployment', weight : .22
    }];
platformDeveloper2 = [
    {
        section : "Advanced Developer Fundamentals", weight : .15, passingScore : 70
    },{
        section : 'Process, Automation, Logic, And Integration', weight : .27
    },{
        section : 'User Interface', weight : .20
    },{
        section : 'Testing Debugging And Deployment', weight : .20
    },{
        section : 'Performance', weight: .18
    }];
platformAppBuilder = [
    {
        section : 'Salesforce Fundamentals', weight : .23, passingScore : 63
    },{
        section : 'Data Modeling and Management', weight : .22
    },{
        section : 'Business Logic and Process Automation', weight : .28
    },{
        section : 'App Deployment', weight : .10
    }
]

    value = 'Select a value';

    get options() {
        return [
            { label: 'Platform Developer 1', value: 'platformDeveloper1' },
            { label: 'Platform Developer 2', value: 'platformDeveloper2' },
            { label: 'Platform App Builder', value: 'platformAppBuilder' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
        this.exams = this[event.detail.value];
    console.log(this.exams[0].passingScore); //Gets the passing score from the list for calculations later
    console.log(this.exams[0].weight);

    }
}


