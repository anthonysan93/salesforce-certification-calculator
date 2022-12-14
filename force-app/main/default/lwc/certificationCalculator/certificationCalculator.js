//TO-DO make calculate button and calculation for pd2

import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert';
import PlatformDeveloper1 from './PlatformDeveloper1.html';
import SelectorPage from './SelectorPage.html';
import PlatformDeveloper2 from './PlatformDeveloper2.html';

//Storage of Variables

const INVALID_MESSAGE = 'Please enter a valid value.';
const NO_RESULTS = 'Awaiting Results...';

export default class CertificationCalculator extends LightningElement {
    //Calculator Switch
    showTemplate = 'SelectorPage';

    render(){
        if(this.showTemplate == 'PlatformDeveloper1') return PlatformDeveloper1;
        if(this.showTemplate == 'SelectorPage') return SelectorPage;
        if(this.showTemplate == 'PlatformDeveloper2') return PlatformDeveloper2;
    }
    showSelectorPage(){
        this.showTemplate = 'SelectorPage';
        this.scoreMessage = NO_RESULTS;
        this.sectionQuestionCount = NO_RESULTS;
    }
    showPlatformDeveloper1(){
        this.showTemplate = 'PlatformDeveloper1';
    }
    showPlatformDeveloper2(){
        this.showTemplate = 'PlatformDeveloper2';
    }
    
    
    //these are tracked values from the HTML
    //All
    scoreMessage = NO_RESULTS;
    sectionQuestionCount = NO_RESULTS;
    //Platform Developer 1
    developerFundamentals = 0;
    processAutomationAndLogic = 0; 
    userInterface = 0 ;
    testingDebuggingAndDeployment = 0;
    //Platform Developer 2
    advancedDeveloperFundamentals = 0;
    processAutomationLogicAndIntegration = 0;
    userInterface2 = 0;
    testingDebuggingAndDeployment2 = 0;
    performance = 0;





    //Retrieves the number that is inputted for use in the back end
    //Platform Developer 1
    onDeveloperFundamentalsChange(e){
         this.developerFundamentals = e.target.value;
     }
     onProcessAutomationAndLogicChange(e){
         this.processAutomationAndLogic = e.target.value;
     }
     onUserInterfaceChange(e){
         this.userInterface = e.target.value;
     }
     onTestingDebuggingAndDeploymentChange(e){
         this.testingDebuggingAndDeployment = e.target.value;
     }
     //Platform Developer 2
     onAdvancedDeveloperFundamentalsChange(e){
        this.advancedDeveloperFundamentals = e.target.value;
     }
     onProcessAutomationLogicAndIntegrationChange(e){
        this.processAutomationLogicAndIntegration = e.target.value;
     }
     onUserInterfaceChange2(e){
        this.userInterface2 = e.target.value;
     }
     onTestingDebuggingAndDeploymentChange2(e){
        this.testingDebuggingAndDeployment2 = e.target.value;
     }
     onPerformanceChange(e){
        this.performance = e.target.value;
     }

    //This calculates the score based on const and inputted variables
    //This calculates the score for Platform Developer 1
    calculateScorePlatformDeveloper1 () {
    


        //Storage of Variables
        const questionCount = 60;
        const passingScore = 68;
        const developerFundamentalsWeight = .23;
        const processAutomationAndLogicWeight = .30;
        const userInterfaceWeight = .25;
        const testingDebuggingAndDeploymentWeight = .22;
        const developerFunadmentalsQuestionsCount =
            Math.round(questionCount * developerFundamentalsWeight);
        const processAutomationAndLogicQuestionCount = 
            Math.round(questionCount * processAutomationAndLogicWeight);
        const userInterfaceQuestionCount = 
            Math.round(questionCount * userInterfaceWeight);
        const testingDebuggingAndDeploymentQuestionCount = 
            Math.round(questionCount * testingDebuggingAndDeploymentWeight);

        let developerFundamentalsScore = 
            Math.round(this.developerFundamentals  * developerFundamentalsWeight);
        let processAutomationAndLogicScore = 
            Math.round(this.processAutomationAndLogic * processAutomationAndLogicWeight);
        let userInterfaceScore = 
            Math.round(this.userInterface * userInterfaceWeight);
        let testingDebuggingAndDeploymentScore =
            Math.round(this.testingDebuggingAndDeployment * testingDebuggingAndDeploymentWeight);
        
        let developerFundamentalsQuestionsCorrectCount = 
            Math.round(this.developerFundamentals / 100 * developerFunadmentalsQuestionsCount);
        let processAutomationAndLogicCorrectCount = 
            Math.round(this.processAutomationAndLogic / 100 * processAutomationAndLogicQuestionCount);
        let userInterfaceCorrectCount = 
            Math.round(this.userInterface / 100 * userInterfaceQuestionCount);
        let testingDebuggingAndDeploymentCorrectCount = 
            Math.round(this.testingDebuggingAndDeployment / 100 * testingDebuggingAndDeploymentQuestionCount);
        let sectionBreakdown = 
            `For Developer Fundamentals you got ${developerFundamentalsQuestionsCorrectCount} out of ${developerFunadmentalsQuestionsCount} correct.` + '\n' + 
            `For Process Automation and Logic you got ${processAutomationAndLogicCorrectCount} out of ${processAutomationAndLogicQuestionCount} correct.` + '\n' +
            `For User Interface you got ${userInterfaceCorrectCount} out of ${userInterfaceQuestionCount} correct.` + '\n' +
            `For Testing Debugging and Deployment you got ${testingDebuggingAndDeploymentCorrectCount} out of ${testingDebuggingAndDeploymentQuestionCount} correct.`;

        let score = developerFundamentalsScore + processAutomationAndLogicScore + userInterfaceScore + testingDebuggingAndDeploymentScore;

        //This checks the score retrieved with the passing score and outputs a sentence. 
        //This if statement checks for invalid values
        if(this.developerFundamentals > 100 ||
            this.developerFundamentals < 0 ||
            this.processAutomationAndLogic > 100 ||
            this.processAutomationAndLogic < 0 ||
            this.userInterface > 100 ||
            this.userInterface < 0 ||
            this.testingDebuggingAndDeployment > 100 ||
            this.testingDebuggingAndDeployment < 0){
                this.scoreMessage = INVALID_MESSAGE;
                this.sectionQuestionCount = INVALID_MESSAGE;
            }else{
                //This one checks if it is passing or failing and displays the appropriate score.
                if (score >= passingScore) {
                    this.scoreMessage = `Pass! Your overall score is ${score}`;
                    this.sectionQuestionCount = sectionBreakdown; 
                }else{
                    this.scoreMessage = `Fail your overall score was ${score}`;
                    this.sectionQuestionCount = sectionBreakdown;
            }
        }
    }
    //This calculates the score for Platform Developer 2
    calculateScorePlatformDeveloper2 () {

        //Storage of Variables
        const questionCount = 60;
        const passingScore = 70;
        const advancedDeveloperFundamentalsWeight = .15;
        const processAutomationLogicAndIntegrationWeight = .27;
        const userInterface2Weight = .20;
        const testingDebuggingAndDeployment2Weight = .20;
        const performanceWeight = .18;
        const advancedDeveloperFundamentalsQuestionsCount =
            Math.round(questionCount * advancedDeveloperFundamentalsWeight);
        const processAutomationLogicAndIntegrationQuestionCount = 
            Math.round(questionCount * processAutomationLogicAndIntegrationWeight);
        const userInterface2QuestionCount = 
            Math.round(questionCount * userInterface2Weight);
        const testingDebuggingAndDeployment2QuestionCount = 
            Math.round(questionCount * testingDebuggingAndDeployment2Weight);
        const performanceQuestionCount =
            Math.round(questionCount * performanceWeight);

        let advancedDeveloperFundamentalsScore = 
            Math.round(this.advancedDeveloperFundamentals  * advancedDeveloperFundamentalsWeight);
        let processAutomationLogicAndIntegrationScore = 
            Math.round(this.processAutomationLogicAndIntegration * processAutomationLogicAndIntegrationWeight);
        let userInterface2Score = 
            Math.round(this.userInterface2 * userInterface2Weight);
        let testingDebuggingAndDeployment2Score =
            Math.round(this.testingDebuggingAndDeployment2 * testingDebuggingAndDeployment2Weight);
        let performanceScore =
            Math.round(this.performance * performanceWeight);

        let advancedDeveloperFundamentalsQuestionsCorrectCount = 
            Math.round(this.advancedDeveloperFundamentals / 100 * advancedDeveloperFundamentalsQuestionsCount);
        let processAutomationLogicAndIntegrationCorrectCount = 
            Math.round(this.processAutomationLogicAndIntegration / 100 * processAutomationLogicAndIntegrationQuestionCount);
        let userInterface2CorrectCount = 
            Math.round(this.user2Interface / 100 * userInterface2QuestionCount);
        let testingDebuggingAndDeployment2CorrectCount = 
            Math.round(this.testingDebuggingAndDeployment2 / 100 * testingDebuggingAndDeployment2QuestionCount);
        let performanceCorrectCount = 
            Math.round(this.performance / 100 * performanceQuestionCount);
        let sectionBreakdown = 
            `For Developer Fundamentals you got ${advancedDeveloperFundamentalsQuestionsCorrectCount} out of ${advancedDeveloperFundamentalsQuestionsCount} correct.` + '\n' + 
            `For Process Automation and Logic you got ${processAutomationLogicAndIntegrationCorrectCount} out of ${processAutomationLogicAndIntegrationQuestionCount} correct.` + '\n' +
            `For User Interface you got ${userInterface2CorrectCount} out of ${userInterface2QuestionCount} correct.` + '\n' +
            `For Testing Debugging and Deployment you got ${testingDebuggingAndDeployment2CorrectCount} out of ${testingDebuggingAndDeployment2QuestionCount} correct.` + '\n' +
            `For Performance you got ${performanceCorrectCount} out of ${performanceQuestionCount} correct.`;

        let score = advancedDeveloperFundamentalsScore + processAutomationLogicAndIntegrationScore + userInterface2Score + testingDebuggingAndDeployment2Score + performanceScore;
        
        //This checks the score retrieved with the passing score and outputs a sentence. 
        //This if statement checks for invalid values
        if(this.advancedDeveloperFundamentals > 100 ||
            this.advancedDeveloperFundamentals < 0 ||
            this.processAutomationLogicAndIntegration > 100 ||
            this.processAutomationLogicAndIntegration < 0 ||
            this.userInterface2 > 100 ||
            this.userInterface2 < 0 ||
            this.testingDebuggingAndDeployment2 > 100 ||
            this.testingDebuggingAndDeployment2 < 0 ||
            this.performance > 100 ||
            this.performance < 0){
                this.scoreMessage = INVALID_MESSAGE;
                this.sectionQuestionCount = INVALID_MESSAGE;
            }else{
                //This one checks if it is passing or failing and displays the appropriate score.
                if (score >= passingScore) {
                    this.scoreMessage = `Pass! Your overall score is ${score}`;
                    this.sectionQuestionCount = sectionBreakdown; 
                }else{
                    this.scoreMessage = `Fail your overall score was ${score}`;
                    this.sectionQuestionCount = sectionBreakdown;
            }
        }
    }
}