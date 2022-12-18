import { LightningElement } from 'lwc';

//Storage of Variables

const INVALID_MESSAGE = 'Please enter a valid value.';
const NO_RESULTS = 'Awaiting Results...';
let examData;

export default class SalesforceCertificationCalculator extends LightningElement {

    scoreMessage = NO_RESULTS;
    sectionQuestionCount = NO_RESULTS;
    showExams = false;
    showQuestions = false;

test = {
    'platformDeveloper1' : {
        section :   ['Developer Fundamentals', 'Process Automation And Logic', 'User Interface','Testing Debugging And Deployment'],
        weight :    [.23, .30, .25, .22],
        score : [0,0,0,0],
        passingScore :69,
        questionCount : 60
    },
    'platformDeveloper2' : {
        section :   ["Advanced Developer Fundamentals",'Process, Automation, Logic, And Integration','User Interface',
                    'Testing Debugging And Deployment','Performance'],
        weight :    [.15,.27,.20,.20,.18],
        score : [0,0,0,0,0],
        passingScore :70,
        questionCount : 60
    },
    'platformAppBuilder' : {
        section :   ['Salesforce Fundamentals','Data Modeling and Management','Business Logic and Process Automation',
                    'User Interface','App Deployment'],
        weight :    [.23,.22,.28,.17,.10],
        score : [0,0,0,0,0],
        passingScore :63,
        questionCount : 60
    },
    'administrator' : {
        section :   ['Configuration and Setup','Object Manager and Lightning App Builder', 'Sales and Marketing Applications', 
                    'Service and Support Applications','Productivity and Collaboration','Data and Analytics Management','Workflow/Process Automation'],
        weight :    [.20,.20,.12,.11,.07,.14,.16],
        score : [0,0,0,0,0,0,0],
        passingScore :65,
        questionCount : 60
    },
    'advancedAdministrator' : {
        section :   ['Security and Access','Objects and Applications','Auditing and Monitoring','Cloud Applications',
                    'Data and Analytics Management','Environment Management and Deployment','Process Automation'],
        weight :    [.20,.19,.10,.11,.13,.07,.20],
        score : [0,0,0,0,0,0,0],
        passingScore : 65,
        questionCount : 60
    },
    'businessAnalyst' : {
        section :   ['Customer Discovery','Collaboration with Stakeholders','Business Process Mapping','Requirements',
                    'User Stories','User Acceptance'],
        weight :    [.17,.24,.16,.17,.18,.08],
        score : [0,0,0,0,0,0],
        passingScore : 72,
        questionCount : 60
    },
    'dataArchitect' : {
        section:    ['Data modeling/Database Design','Master Data Management','Salesforce Data Management',
                    'Data Governance','Large Data Volume considerations','Data Migration'],
        weight:     [.25,.05,.25,.10,.20,.15],
        score : [0,0,0,0,0,0],
        passingScore: 58,
        questionCount : 60 
    },
    'associate' : {
        section:    ['Salesforce Ecosystem','Navigation','Data Model','Reports & Dashboards'],
        weight:     [.32,.28,.25,.15],
        score : [0,0,0,0],
        passingScore: 62,
        questionCount : 40
    },
    'marketingCloudAdministrator' : {
        section:    ['Digital Marketing Proficiency','Subscriber Data Management','Setup',
                    'Channel Management','Maintenance'],
        weight:     [.13,.18,.38,.16,.15],
        score : [0,0,0,0,0],
        passingScore: 67,
        questionCount: 60
    },
    'strategyDesigner' : {
        section:    ['Value Design','Tools and Artifacts','Intangible Deliverables','Leveraging Adjacent Roles/Skills'],
        weight:     [.32,.23,.26,.19],
        score : [0,0,0,0],
        passingScore: 70,
        questionCount: 60
    }
}
    get roleOptions (){
        return [
            {label: 'Administrator', value: 'administrator'},
            {label: 'Architect', value: 'architect'},
            {label: 'Developer', value: 'developer'},
            {label: 'Marketer', value: 'marketer'},
            {label: 'Consultant', value:'consultant'},
            {label: 'Designer', value:'designer'},
        ]
    }
    handleRoleChange(event){
        //Get the value of the selected option
        let selectedValue = event.detail.value;
        this.showQuestions = false;
        this.showExams = false;
        //update the options of the dependent combobox based on the selection
        if(selectedValue ==='administrator'){
            this.examOptions = [
                {label: 'Associate', value: 'associate'},
                {label: 'Administrator', value : 'administrator'},
                {label: 'Advanced Administrator', value: 'advancedAdministrator'},
                {label: 'Business Analyst', value: 'businessAnalyst'},
                {label: 'Platform App Builder', value: 'platformAppBuilder' },
            ];
        }else if(selectedValue === 'architect'){
            this.examOptions = [
                {label:'Data Architect', value: 'dataArchitect'},
            ];
        }else if(selectedValue === 'developer'){
            this.examOptions = [
                {label: 'Platform App Builder', value: 'platformAppBuilder' },
                { label: 'Platform Developer 1', value: 'platformDeveloper1' },
                { label: 'Platform Developer 2', value: 'platformDeveloper2' },
            ];
        }else if(selectedValue === 'marketer'){
            this.examOptions = [
                {label: 'Marketing Cloud Administrator', value: 'marketingCloudAdministrator'},
            ]
        }else if(selectedValue === 'consultant'){
            this.examOptions = [
                {label: 'Business Analyst', value: 'businessAnalyst'},
            ]
        }else if(selectedValue === 'designer'){
            this.examOptions = [
                {label: 'Strategy Designer', value: 'strategyDesigner'},
            ]
        }
        this.showExams = true;
        console.log(this.value);	
    }

    handleChange(event) {
        this.showQuestions = false;
        this.showExams = false;
        this.value = event.detail.value;
        examData = this.test[event.detail.value];
        this.exams = examData.section.map((section, index) => ({
            section,
            weight: examData.weight[index],
        }));
        this.showQuestions = true;
        this.showExams = true;
        this.scoreMessage = NO_RESULTS;

    console.log(`The passing score for this exam is ${examData.passingScore}`); //Gets the passing score from the list for calculations later
    console.log(`The section weights for this exam are ${examData.weight}`);
    }
//-----------------------------------------------------------------------------------------------
    handleScoreChange(event) {
        const index = this.exams.findIndex(exa => exa.section === event.target.label);
        examData.score[index] = event.target.value;
        // Now you can use this.exams to access the values of the input fields
        console.log(examData.score); 
    }
    calculateScore(){
        let totalScore = 0;
        for(let i = 0; i < examData.score.length; i++){
            let sectionScore = 
            Math.round(examData.score[i] * examData.weight[i]);
            totalScore += sectionScore;
        }
        console.log(`The total score is ${totalScore}`);
        if(totalScore > 100 || totalScore < 0){
            this.scoreMessage = INVALID_MESSAGE;
        }else if(totalScore >= examData.passingScore){
            this.scoreMessage = `Pass! Your overall score is ${totalScore}%`;
        }else{
            this.scoreMessage = `Unfortunately, you failed, your score is ${totalScore}%`;
        }
    }
}