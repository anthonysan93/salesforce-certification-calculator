import { LightningElement } from 'lwc';

//Storage of Variables

const INVALID_MESSAGE = 'Please enter a valid value.';
const NO_RESULTS = 'Awaiting Results...';
let questionCount = 60;

export default class SalesforceCertificationCalculator extends LightningElement {

test = {
    'platformDeveloper1' : {
        section : ['Developer Fundamentals', 'Process Automation And Logic', 'User Interface','Testing Debugging And Deployment'],
        weight : [.23, .30, .25, .22],
        passingScore :69
    },
    'platformDeveloper2' : {
        section : ["Advanced Developer Fundamentals",'Process, Automation, Logic, And Integration','User Interface','Testing Debugging And Deployment','Performance'],
        weight : [.15,.27,.20,.20,.18],
        passingScore :70
    },
    'platformAppBuilder' : {
        section : ['Salesforce Fundamentals','Data Modeling and Management','Business Logic and Process Automation','User Interface','App Deployment'],
        weight : [.23,.22,.28,.17,.10],
        passingScore :63
    }
}
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
        const examData = this.test[event.detail.value];
        this.exams = examData.section.map((section, index) => ({
            section,
            weight: examData.weight[index],
        }));
    console.log(examData.passingScore); //Gets the passing score from the list for calculations later
    console.log(examData.weight);

    }
}


