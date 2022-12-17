//TO-DO make calculate button and calculation for pd2

import { LightningElement } from 'lwc';
import PlatformDeveloper1 from './PlatformDeveloper1.html';
import SelectorPage from './SelectorPage.html';
import PlatformDeveloper2 from './PlatformDeveloper2.html';
import JavascriptDeveloper1 from './JavascriptDeveloper1.html';
import PlatformAppBuilder from './PlatformAppBuilder.html';

//Storage of Variables

const INVALID_MESSAGE = 'Please enter a valid value.';
const NO_RESULTS = 'Awaiting Results...';

export default class CertificationCalculator extends LightningElement {
    //Calculator Switch
    showTemplate = 'SelectorPage';

    // how can we do this without multiple html pages?? Use Child LWC to generate different inputs? 
    // PD1Weight {
        // processAutomation : .23,
        // After creating objects, need to figure out a way to iterate over object: for loop 
    

    
    render(){
        if(this.showTemplate == 'PlatformDeveloper1') return PlatformDeveloper1;
        if(this.showTemplate == 'SelectorPage') return SelectorPage;
        if(this.showTemplate == 'PlatformDeveloper2') return PlatformDeveloper2;
        if(this.showTemplate == 'JavascriptDeveloper1') return JavascriptDeveloper1;
        if(this.showTemplate == 'PlatformAppBuilder') return PlatformAppBuilder;
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
    showJavascriptDeveloper1(){
        this.showTemplate = 'JavascriptDeveloper1';
    }
    showPlatformAppBuilder(){
        this.showTemplate = 'PlatformAppBuilder';
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
    // advancedDeveloperFundamentals = 0;
    // processAutomationLogicAndIntegration = 0;
    // userInterface2 = 0;
    // testingDebuggingAndDeployment2 = 0;
    // performance = 0;

    // Javascript Developer 1 Variables
    variablesTypesAndCollections = 0;
    objectsFunctionsAndClasses = 0;
    browsersAndEvents = 0;
    debuggingAndErrorHandling = 0;
    asynchronousProgramming = 0;
    serverSideJavascript = 0;
    testing = 0;

    // PD1
    salesforceFundamentals = 0;
    dataModelingAndManagement = 0;
    businessLogicAndProcessAutomation = 0;
    userInterfacePab = 0;
    appDeployment = 0;







    //Retrieves the number that is inputted for use in the back end
    //Platform Developer 1
    onDeveloperFundamentalsChange(event){
         this.developerFundamentals = event.target.value;
     }
     onProcessAutomationAndLogicChange(event){
         this.processAutomationAndLogic = event.target.value;
     }
     onUserInterfaceChange(event){
         this.userInterface = event.target.value;
     }
     onTestingDebuggingAndDeploymentChange(event){
         this.testingDebuggingAndDeployment = event.target.value;
     }
     //Platform Developer 2
    //  onadvancedDeveloperFundamentalsChange(event){
    //     this.advancedDeveloperFundamentals = event.target.value;
    //  }

    //JS 1
    onVariablesTypesAndCollectionsChange(event){
        this.variablesTypesAndCollections = event.target.value;
    }
    onObjectsFunctionsAndClassesChange(event){
        this.objectsFunctionsAndClasses = event.target.value;
    }
    onBrowsersAndEventsChange(event){
        this.browsersAndEvents = event.target.value;
    }
    onDebuggingAndErrorHandlingChange(event){
        this.debuggingAndErrorHandling = event.target.value;
    }
    
    onAsynchronousProgrammingChange(event){
       this.asynchronousProgramming = event.target.value;
    }
    onServerSideJavascriptChange(event){
        this.serverSideJavascript = event.target.value;
     }
     onTestingChange(event){
        this.testing = event.target.value;
     }

     //PAB

     onSalesforceFundamentalsChange(event){
        this.salesforceFundamentals = event.target.value;
    }
    onDataModelingAndManagementChange(event){
        this.dataModelingAndManagement = event.target.value;
    }
    onBusinessLogicAndProcessAutomationChange(event){
        this.businessLogicAndProcessAutomation = event.target.value;
    }
    onUserInterfacePabChange(event){
        this.userInterfacePab = event.target.value;
    }
    
    onAppDeploymentChange(event){
       this.appDeployment = event.target.value;
    }

    //This calculates the score based on const and inputted variables
    calculateScorePlatformDeveloper1 () {
    


        //Storage of Variables
        const questionCount = 60;
        const passingScore = 68;
        const developerFundamentalsWeight = .23
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

    calculateScoreJavaScriptDeveloper1 () {
    


        //Storage of Variables
        const questionCount = 60;
        const passingScore = 65;
        const variablesTypesAndCollectionsWeight = .23
        const objectsFunctionsAndClassesWeight = .25;
        const browsersAndEventsWeight = .17;
        const debuggingAndErrorHandlingWeight = .07;
        const asynchronousProgrammingWeight = .13;
        const serverSideJavascriptWeight = .08;
        const testingWeight = .07;
        
        
        const variablesTypesAndCollectionsQuestionsCount =
        Math.round(questionCount * variablesTypesAndCollectionsWeight);
        const objectsFunctionsAndClassesQuestionCount = 
        Math.round(questionCount * objectsFunctionsAndClassesWeight);
        const browsersAndEventsQuestionCount = 
        Math.round(questionCount *  browsersAndEventsWeight);
        const debuggingAndErrorHandlingQuestionCount = 
        Math.round(questionCount * debuggingAndErrorHandlingWeight);
        const asynchronousProgrammingQuestionCount = 
        Math.round(questionCount * asynchronousProgrammingWeight);
        const serverSideJavascriptQuestionCount = 
        Math.round(questionCount * serverSideJavascriptWeight);
        const testingQuestionCount = 
        Math.round(questionCount * testingWeight);

        let variablesTypesAndCollectionsScore = 
            Math.round(this.variablesTypesAndCollections  * variablesTypesAndCollectionsWeight);
        let objectsFunctionsAndClassesScore = 
            Math.round(this.objectsFunctionsAndClasses * objectsFunctionsAndClassesWeight);
        let browsersAndEventsScore = 
            Math.round(this.browsersAndEvents * browsersAndEventsWeight);
        let debuggingAndErrorHandlingScore =
            Math.round(this.debuggingAndErrorHandling * debuggingAndErrorHandlingWeight);
        let asynchronousProgrammingScore =
             Math.round(this.asynchronousProgramming * asynchronousProgrammingWeight);
        let serverSideJavascriptScore =
             Math.round(this.serverSideJavascript * serverSideJavascriptWeight);
        let testingScore =
            Math.round(this.testing * testingWeight);
    
    
   
        let variablesTypesAndCollectionsCorrectCount = 
            Math.round(this.variablesTypesAndCollections / 100 * variablesTypesAndCollectionsQuestionsCount);
        let objectsFunctionsAndClassesCorrectCount = 
            Math.round(this.objectsFunctionsAndClasses / 100 * objectsFunctionsAndClassesQuestionCount);
        let browsersAndEventsCorrectCount = 
            Math.round(this.browsersAndEvents / 100 * browsersAndEventsQuestionCount);
        let debuggingAndErrorHandlingCorrectCount = 
            Math.round(this.debuggingAndErrorHandling / 100 * debuggingAndErrorHandlingQuestionCount);
        let  asynchronousProgrammingCorrectCount = 
            Math.round(this. asynchronousProgramming / 100 * asynchronousProgrammingQuestionCount);
        let serverSideJavascriptCorrectCount = 
            Math.round(this.serverSideJavascript / 100 * serverSideJavascriptQuestionCount);  
        let testingCorrectCount = 
            Math.round(this.testing / 100 * testingQuestionCount); 
            
        let sectionBreakdown = 
        `For Variables,Types and Collections you got ${variablesTypesAndCollectionsCorrectCount} out of ${variablesTypesAndCollectionsQuestionsCount} correct.` + '\n' + 
        `For Objects,Functions and Classes you got ${objectsFunctionsAndClassesCorrectCount} out of ${objectsFunctionsAndClassesQuestionCount} correct.` + '\n' +
        `For Browsers and Events you got ${browsersAndEventsCorrectCount} out of ${browsersAndEventsWeightQuestionCount} correct.` + '\n' +
        `For Debugging and Error Handling you got ${debuggingAndErrorHandlingCorrectCount} out of ${debuggingAndErrorHandlingQuestionCount} correct.` + '\n' +
        `For Asyncrhonous Programming you got ${asynchronousProgrammingCorrectCount} out of ${asynchronousProgrammingQuestionCount} correct.` + '\n' +
        `For Server Side Javascript you got ${serverSideJavascriptCorrectCount} out of ${serverSideJavascriptQuestionCount} correct.` + '\n' +
        `For Testing you got ${testingCorrectCount} out of ${testingQuestionCount} correct.`;

        let score = variablesTypesAndCollectionsScore + objectsFunctionsAndClassesScore + browsersAndEventsScore + debuggingAndErrorHandlingScore + asynchronousProgrammingScore + serverSideJavascriptScore + testingScore
        console.log(score);

        //This checks the score retrieved with the passing score and outputs a sentence. 
        //This if statement checks for invalid values
        if(this.variablesTypesAndCollections > 100 ||
            this.variablesTypesAndCollections < 0 ||
            this.objectsFunctionsAndClasses > 100 ||
            this.objectsFunctionsAndClasses < 0 ||
            this.browsersAndEvents > 100 ||
            this.browsersAndEvents < 0 ||
            this.debuggingAndErrorHandling > 100 ||
            this.debuggingAndErrorHandling < 0 ||
            this.asynchronousProgramming > 100 ||
            this.asynchronousProgramming < 0 ||
            this.serverSideJavascript > 100 ||
            this.serverSideJavascript < 0 ||
            this.testing > 100 ||
            this.testing < 0){
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


calculateScorePlatformAppBuilder () {
    


    //Storage of Variables
    const questionCount = 60;
    const passingScore = 65;
    const salesforceFundamentalsWeight = .23
    const dataModelingAndManagementWeight = .22;
    const businessLogicAndProcessAutomationWeight = .28;
    const userInterfacePabWeight = .17;
    const appDeploymentWeight = .10;
   
    
    const salesforceFundamentalsQuestionsCount =
    Math.round(questionCount * salesforceFundamentalsWeight);

    const dataModelingAndManagementQuestionCount = 
    Math.round(questionCount * dataModelingAndManagementWeight);

    const businessLogicAndProcessAutomationQuestionCount = 
    Math.round(questionCount *  businessLogicAndProcessAutomationWeight);

    const userInterfacePabQuestionCount = 
    Math.round(questionCount * userInterfacePabWeight);

    const appDeploymentQuestionCount = 
    Math.round(questionCount * appDeploymentWeight);
    

    let salesforceFundamentalsScore = 
        Math.round(this.salesforceFundamentals  * salesforceFundamentalsWeight);

    let dataModelingAndManagementScore = 
        Math.round(this.dataModelingAndManagement * dataModelingAndManagementWeight);

    let businessLogicAndProcessAutomationScore = 
        Math.round(this. businessLogicAndProcessAutomation * businessLogicAndProcessAutomationWeight);

    let userInterfacePabScore =
        Math.round(this.userInterfacePab * userInterfacePabWeight);

    let appDeploymentScore =
         Math.round(this.appDeployment * appDeploymentWeight);

    


    let salesforceFundamentalsCorrectCount = 
        Math.round(this.salesforceFundamentals / 100 * salesforceFundamentalsQuestionsCount);

    let dataModelingAndManagementCorrectCount = 
        Math.round(this.dataModelingAndManagement / 100 * dataModelingAndManagementQuestionCount);

    let  businessLogicAndProcessAutomationCorrectCount = 
        Math.round(this. businessLogicAndProcessAutomation / 100 * businessLogicAndProcessAutomationQuestionCount);

    let userInterfacePabCorrectCount = 
        Math.round(this.userInterfacePab / 100 * userInterfacePabQuestionCount);

    let  appDeploymentCorrectCount = 
        Math.round(this. appDeployment / 100 * appDeploymentQuestionCount);

   
        
    let sectionBreakdown = 
    `For Salesforce Fundamentals you got ${salesforceFundamentalsCorrectCount} out of ${salesforceFundamentalsQuestionsCount} correct.` + '\n' + 
    `For Data Modeling and Management you got ${dataModelingAndManagementCorrectCount} out of ${dataModelingAndManagementQuestionCount} correct.` + '\n' +
    `For Business Logic and Process Automation you got ${businessLogicAndProcessAutomationCorrectCount} out of ${businessLogicAndProcessAutomationQuestionCount} correct.` + '\n' +
    `For User Interface you got ${userInterfacePabCorrectCount} out of ${userInterfacePabQuestionCount} correct.` + '\n' +
    `For App Deployment you got ${appDeploymentCorrectCount} out of ${appDeploymentQuestionCount} correct.` 
    

    let score = salesforceFundamentalsScore + dataModelingAndManagementScore + businessLogicAndProcessAutomationScore + userInterfacePabScore + appDeploymentScore

    console.log(score);

    //This checks the score retrieved with the passing score and outputs a sentence. 
    //This if statement checks for invalid values
    if(this.salesforceFundamentals > 100 ||
        this.salesforceFundamentals < 0 ||
        this.dataModelingAndManagement > 100 ||
        this.dataModelingAndManagement < 0 ||
        this.businessLogicAndProcessAutomation > 100 ||
        this.businessLogicAndProcessAutomation < 0 ||
        this.userInterfacePab > 100 ||
        this.userInterfacePab < 0 ||
        this.appDeployment > 100 ||
        this.appDeployment < 0)
        {

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