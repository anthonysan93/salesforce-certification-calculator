//TO-DO make calculate button and calculation for pd2

import { LightningElement } from 'lwc';
import PlatformDeveloper1 from './PlatformDeveloper1.html';
import SelectorPage from './SelectorPage.html';
import PlatformDeveloper2 from './PlatformDeveloper2.html';
import Administrator from './Administrator.html';
import Associate from './Associate.html';
import AdvancedAdministrator from './AdvancedAdministrator.html';

//Storage of Variables

const INVALID_MESSAGE = 'Please enter a valid value.';
const NO_RESULTS = 'Awaiting Results...';
let questionCount = 60;

export default class CertificationCalculator extends LightningElement {
    //Calculator Switch
    showTemplate = 'SelectorPage';

    render(){
        if(this.showTemplate == 'PlatformDeveloper1') return PlatformDeveloper1;
        if(this.showTemplate == 'SelectorPage') return SelectorPage;
        if(this.showTemplate == 'PlatformDeveloper2') return PlatformDeveloper2;
        if(this.showTemplate == 'Administrator') return Administrator;
        if(this.showTemplate == 'Associate') return Associate;
        if(this.showTemplate == 'AdvancedAdministrator') return AdvancedAdministrator;
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
    showAdministrator(){
        this.showTemplate = 'Administrator';
    }
    showAssociate (){
        this.showTemplate = 'Associate'
    }
    showAdvancedAdministrator(){
        this.showTemplate = 'AdvancedAdministrator';
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
    //Administrator
    configurationAndSetup = 0;
    objectManagerAndLightningAppBuilder = 0;
    salesAndMarketingApplications = 0;
    serviceAndSupportApplications = 0;
    productivityAndCollaboration = 0;
    dataAndAnalyticsManagement = 0;
    workflowProcessAutomation = 0;
    //Associate
    salesforceEcosystem = 0;
    navigation = 0;
    dataModel = 0;
    reportsAndDashboards = 0;
    //Advanced Administrator
    securityAndAccess = 0;
    objectsAndApplications = 0;
    auditingAndMonitoring = 0;
    cloudApplications = 0;
    dataAndAnalyticsManagementAdvanced = 0;
    environmentManagementAndDeployment = 0;
    processAutomation = 0;




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
    //Administrator
    onConfigurationAndSetupChange(e){
        this.configurationAndSetup = e.target.value;
    }
    onObjectManagerAndLightningAppBuilderChange(e){
        this.objectManagerAndLightningAppBuilder = e.target.value;
    }
    onSalesAndMarketingApplicationsChange(e){
        this.salesAndMarketingApplications = e.target.value;
    }
    onServiceAndSupportApplicationsChange(e){
        this.serviceAndSupportApplications = e.target.value;
    }
    onproductivityAndCollaborationChange(e){
        this.productivityAndCollaboration = e.target.value;
    }
    onDataAndAnalyticsManagementChange(e){
        this.dataAndAnalyticsManagement = e.target.value;
    }
    onWorkflowProcessAutomationChange(e){
        this.workflowProcessAutomation = e.target.value;
    }
    //Associate
    onSalesforceEcosystemChange(e){
        this.salesforceEcosystem = e.target.value;
    }
    onNavigationChange(e){
        this.navigation = e.target.value;
    }
    onDataModelChange(e){
        this.dataModel = e.target.value;
    }
    onReportsAndDashboardsChange (e){
        this.reportsAndDashboards = e.target.value;
    }
    //Advanced Administrator
    onSecurityAndAccessChange (e){
        this.securityAndAccess = e.target.value;
    }
    onObjectsAndApplicationsChange(e){
        this.objectsAndApplications = e.target.value;
    }
    onAuditingAndMonitoringChange(e){
        this.auditingAndMonitoring = e.target.value;
    }
    onCloudApplicationsChange(e){
        this.cloudApplications = e.target.value;
    }
    onDataAndAnalyticsManagementAdvancedChange(e){
        this.dataAndAnalyticsManagementAdvanced = e.target.value;
    }
    onEnvironmentManagementAndDeploymentChange(e){
        this.environmentManagementAndDeployment = e.target.value;
    }
    onProcessAutomationChange(e){
        this.processAutomation = e.target.value;
    }




    //This calculates the score based on const and inputted variables
    //This calculates the score for Platform Developer 1
    calculateScorePlatformDeveloper1 () {
    


        //Storage of Variables
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
            `For Developer Fundamentals, you got ${developerFundamentalsQuestionsCorrectCount} out of ${developerFunadmentalsQuestionsCount} correct.` + '\n' + 
            `For Process Automation and Logic, you got ${processAutomationAndLogicCorrectCount} out of ${processAutomationAndLogicQuestionCount} correct.` + '\n' +
            `For User Interface, you got ${userInterfaceCorrectCount} out of ${userInterfaceQuestionCount} correct.` + '\n' +
            `For Testing Debugging and Deployment, you got ${testingDebuggingAndDeploymentCorrectCount} out of ${testingDebuggingAndDeploymentQuestionCount} correct.`;

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
        const passingScore = 70;
        const advancedDeveloperFundamentalsWeight = .15;
        const processAutomationLogicAndIntegrationWeight = .27;
        const userInterface2Weight = .20;
        const testingDebuggingAndDeployment2Weight = .20;
        const performanceWeight = .18;
        const advancedDeveloperFundamentalsQuestionCount =
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

        let advancedDeveloperFundamentalsCorrectCount = 
            Math.round(this.advancedDeveloperFundamentals / 100 * advancedDeveloperFundamentalsQuestionCount);
        let processAutomationLogicAndIntegrationCorrectCount = 
            Math.round(this.processAutomationLogicAndIntegration / 100 * processAutomationLogicAndIntegrationQuestionCount);
        let userInterface2CorrectCount = 
            Math.round(this.user2Interface / 100 * userInterface2QuestionCount);
        let testingDebuggingAndDeployment2CorrectCount = 
            Math.round(this.testingDebuggingAndDeployment2 / 100 * testingDebuggingAndDeployment2QuestionCount);
        let performanceCorrectCount = 
            Math.round(this.performance / 100 * performanceQuestionCount);
        let sectionBreakdown = 
            `For Advanced Developer Fundamentals, you got ${advancedDeveloperFundamentalsCorrectCount} out of ${advancedDeveloperFundamentalsQuestionCount} correct.` + '\n' + 
            `For Process Automation, Logic and Integration, you got ${processAutomationLogicAndIntegrationCorrectCount} out of ${processAutomationLogicAndIntegrationQuestionCount} correct.` + '\n' +
            `For User Interface, you got ${userInterface2CorrectCount} out of ${userInterface2QuestionCount} correct.` + '\n' +
            `For Testing Debugging and Deployment, you got ${testingDebuggingAndDeployment2CorrectCount} out of ${testingDebuggingAndDeployment2QuestionCount} correct.` + '\n' +
            `For Performance, you got ${performanceCorrectCount} out of ${performanceQuestionCount} correct.`;

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
                    this.scoreMessage = `Fail, your overall score was ${score}`;
                    this.sectionQuestionCount = sectionBreakdown;
            }
        }
    }
    //This calculates the score for the administratore exam
    calculateScoreAdministrator(){
        //variable storage
        const passingScore = 65;
        const configurationAndSetupWeight = .2;
        const objectManagerAndLightningAppBuilderWeight = .2;
        const salesAndMarketingApplicationsWeight  = .12;
        const serviceAndSupportApplicationsWeight  = .11;
        const productivityAndCollaborationWeight  = .07;
        const dataAndAnalyticsManagementWeight  = .14;
        const workflowProcessAutomationWeight =.16;
        const configurationAndSetupQuestionCount = 
            Math.round(questionCount * configurationAndSetupWeight);
        const objectManagerAndLightningAppBuilderQuestionCount = 
            Math.round(questionCount * objectManagerAndLightningAppBuilderWeight);
        const salesAndMarketingApplicationsQuestionCount  = 
            Math.round(questionCount * salesAndMarketingApplicationsWeight);
        const serviceAndSupportApplicationsQuestionCount  = 
            Math.round(questionCount * serviceAndSupportApplicationsWeight);
        const productivityAndCollaborationQuestionCount  = 
            Math.round(questionCount * productivityAndCollaborationWeight);
        const dataAndAnalyticsManagementQuestionCount  = 
            Math.round(questionCount * dataAndAnalyticsManagementWeight);
        const workflowProcessAutomationQuestionCount =
            Math.round(questionCount * workflowProcessAutomationWeight);

        let configurationAndSetupScore = 
            Math.round(this.configurationAndSetup * configurationAndSetupWeight);
        let objectManagerAndLightningAppBuilderScore = 
            Math.round(this.objectManagerAndLightningAppBuilder * objectManagerAndLightningAppBuilderWeight);
        let salesAndMarketingApplicationsScore = 
            Math.round(this.salesAndMarketingApplications * salesAndMarketingApplicationsWeight);
        let serviceAndSupportApplicationsScore = 
            Math.round(this.serviceAndSupportApplications * serviceAndSupportApplicationsWeight);
        let productivityAndCollaborationScore = 
            Math.round(this.productivityAndCollaboration * productivityAndCollaborationWeight);
        let dataAndAnalyticsManagementScore = 
            Math.round(this.dataAndAnalyticsManagement * dataAndAnalyticsManagementWeight);
        let workflowProcessAutomationScore = 
            Math.round(this.workflowProcessAutomation * workflowProcessAutomationWeight);
     
        let configurationAndSetupCorrectCount = 
            Math.round(this.configurationAndSetup / 100 * configurationAndSetupQuestionCount);
        let objectManagerAndLightningAppBuilderCorrectCount = 
            Math.round(this.objectManagerAndLightningAppBuilder / 100 * objectManagerAndLightningAppBuilderQuestionCount);
        let salesAndMarketingApplicationsCorrectCount = 
            Math.round(this.salesAndMarketingApplications / 100 * salesAndMarketingApplicationsQuestionCount);
        let serviceAndSupportApplicationsCorrectCount = 
            Math.round(this.serviceAndSupportApplications / 100 * serviceAndSupportApplicationsQuestionCount);
        let productivityAndCollaborationCorrectCount = 
            Math.round(this.productivityAndCollaboration / 100 * productivityAndCollaborationQuestionCount);
        let dataAndAnalyticsManagementCorrectCount = 
            Math.round(this.dataAndAnalyticsManagement / 100 * dataAndAnalyticsManagementQuestionCount);
        let workflowProcessAutomationCorrectCount = 
            Math.round(this.workflowProcessAutomation / 100 * workflowProcessAutomationQuestionCount);
        let sectionBreakdown = 
            `For Configuration and Setup, you got ${configurationAndSetupCorrectCount} out of ${configurationAndSetupQuestionCount} correct.` + '\n' + 
            `For Object Manager and Lightning App Builder, you got ${objectManagerAndLightningAppBuilderCorrectCount} out of ${objectManagerAndLightningAppBuilderQuestionCount} correct.` + '\n' +
            `For Sales and Marketing Applications, you got ${salesAndMarketingApplicationsCorrectCount} out of ${salesAndMarketingApplicationsQuestionCount} correct.` + '\n' +
            `For Service and Support Applications, you got ${serviceAndSupportApplicationsCorrectCount} out of ${serviceAndSupportApplicationsQuestionCount} correct.` + '\n' +
            `For Productivity and Collaboration, you got ${productivityAndCollaborationCorrectCount} out of ${productivityAndCollaborationQuestionCount} correct.` + '\n' +
            `For Data and Analytics Management, you got ${dataAndAnalyticsManagementCorrectCount} out of ${dataAndAnalyticsManagementQuestionCount} correct.` + '\n' +
            `For Workflow/Process Automation, you got ${workflowProcessAutomationCorrectCount} out of ${workflowProcessAutomationQuestionCount} correct.`;
        let score =
            configurationAndSetupScore + objectManagerAndLightningAppBuilderScore + salesAndMarketingApplicationsScore + serviceAndSupportApplicationsScore +
            productivityAndCollaborationScore + dataAndAnalyticsManagementScore + workflowProcessAutomationScore;

        //This checks the score retrieved with the passing score and outputs a sentence. 
        //This if statement checks for invalid values
        if(this.configurationAndSetup  > 100 ||
            this.configurationAndSetup  < 0 ||
            this.objectManagerAndLightningAppBuilder  > 100 ||
            this.objectManagerAndLightningAppBuilder  < 0 ||
            this.salesAndMarketingApplications  > 100 ||
            this.salesAndMarketingApplications  < 0 ||
            this.serviceAndSupportApplications  > 100 ||
            this.serviceAndSupportApplications  < 0 ||
            this.productivityAndCollaboration  > 100 ||
            this.productivityAndCollaboration  < 0 ||
            this.dataAndAnalyticsManagement   > 100 ||
            this.dataAndAnalyticsManagement   < 0 ||
            this.workflowProcessAutomation   > 100 ||
            this.workflowProcessAutomation   < 0 ){
                this.scoreMessage = INVALID_MESSAGE;
                this.sectionQuestionCount = INVALID_MESSAGE;
            }else{
                //This one checks if it is passing or failing and displays the appropriate score.
                if (score >= passingScore) {
                    this.scoreMessage = `Pass! Your overall score is ${score}`;
                    this.sectionQuestionCount = sectionBreakdown; 
                }else{
                    this.scoreMessage = `Fail, your overall score was ${score}`;
                    this.sectionQuestionCount = sectionBreakdown;
            }
        }
    }
    //This calculates the score of the Associate exam
    calculateScoreAssociate(){
        //variable storage
        const passingScore = 62;
        questionCount = 40;
        const salesforceEcosystemWeight = .32;
        const navigationWeight =.28;
        const dataModelWeight =.25;
        const reportsAndDashboardsWeight =.15;
        const salesforceEcosystemQuestionCount =
            Math.round(questionCount * salesforceEcosystemWeight);
        const navigationQuestionCount =
            Math.round(questionCount * navigationWeight);
        const dataModelQuestionCount =
            Math.round(questionCount * dataModelWeight);
        const reportsAndDashboardsQuestionCount =
            Math.round(questionCount * reportsAndDashboardsWeight);
        let salesforceEcosystemScore = 
            Math.round(this.salesforceEcosystem * salesforceEcosystemWeight);
        let navigationScore = 
            Math.round(this.navigation * navigationWeight);
        let dataModelScore =
            Math.round(this.dataModel * dataModelWeight);
        let reportsAndDashboardsScore = 
            Math.round(this.reportsAndDashboards * reportsAndDashboardsWeight);
        let salesforceEcosystemCorrectCount = 
            Math.round(this.salesforceEcosystem / 100 * salesforceEcosystemQuestionCount);
        let navigationCorrectCount = 
            Math.round(this.navigation / 100 * navigationQuestionCount);
        let dataModelCorrectCount = 
            Math.round(this.dataModel / 100 * dataModelQuestionCount);
        let reportsAndDashboardsCorrectCount = 
            Math.round(this.reportsAndDashboards / 100 * reportsAndDashboardsQuestionCount);
        let sectionBreakdown = 
            `For Salesforce Ecosystem, you got ${salesforceEcosystemCorrectCount} out of ${salesforceEcosystemQuestionCount} correct.` + '\n' + 
            `For Navigation, you got ${navigationCorrectCount} out of ${navigationQuestionCount} correct.` + '\n' +
            `For Data Model, you got ${dataModelCorrectCount} out of ${dataModelQuestionCount} correct.` + '\n' +
            `For Reports & Dashboards, you got ${reportsAndDashboardsCorrectCount} out of ${reportsAndDashboardsQuestionCount} correct.`;
        let score =
            salesforceEcosystemScore + navigationScore + dataModelScore + reportsAndDashboardsScore;

        //This checks the score retrieved with the passing score and outputs a sentence. 
        //This if statement checks for invalid values
        if(this.salesforceEcosystem  > 100 ||
            this.salesforceEcosystem  < 0 ||
            this.navigation  > 100 ||
            this.navigation  < 0 ||
            this.dataModel  > 100 ||
            this.dataModel  < 0 ||
            this.reportsAndDashboards   > 100 ||
            this.reportsAndDashboards   < 0 ){
                this.scoreMessage = INVALID_MESSAGE;
                this.sectionQuestionCount = INVALID_MESSAGE;
            }else{
                //This one checks if it is passing or failing and displays the appropriate score.
                if (score >= passingScore) {
                    this.scoreMessage = `Pass! Your overall score is ${score}`;
                    this.sectionQuestionCount = sectionBreakdown; 
                }else{
                    this.scoreMessage = `Fail, your overall score was ${score}`;
                    this.sectionQuestionCount = sectionBreakdown;
            }
        }
    }
    //Calculated the Advanced Administrator Score
    calculateScoreAdvancedAdministrator(){
        //Variable Storage
        const passingScore = 65;
        const securityAndAccessWeight = .2;
        const objectsAndApplicationsWeight = .19;
        const auditingAndMonitoringWeight = .10;
        const cloudApplicationsWeight = .11;
        const dataAndAnalyticsManagementAdvancedWeight = .13;
        const environmentManagementAndDeploymentWeight = .07;
        const processAutomationWeight = .20;
        const securityAndAccessQuestionCount = 
            Math.round(questionCount * securityAndAccessWeight);
        const objectsAndApplicationsQuestionCount = 
            Math.round(questionCount * objectsAndApplicationsWeight);
        const auditingAndMonitoringQuestionCount = 
            Math.round(questionCount * auditingAndMonitoringWeight);
        const cloudApplicationsQuestionCount = 
            Math.round(questionCount * cloudApplicationsWeight);
        const dataAndAnalyticsManagementAdvancedQuestionCount = 
            Math.round(questionCount * dataAndAnalyticsManagementAdvancedWeight);
        const environmentManagementAndDeploymentQuestionCount = 
            Math.round(questionCount * environmentManagementAndDeploymentWeight);
        const processAutomationQuestionCount = 
            Math.round(questionCount * processAutomationWeight);
        let securityAndAccessScore = 
            Math.round(this.securityAndAccess * securityAndAccessWeight);
        let objectsAndApplicationsScore = 
            Math.round(this.objectsAndApplications * objectsAndApplicationsWeight);
        let auditingAndMonitoringScore = 
            Math.round(this.auditingAndMonitoring * auditingAndMonitoringWeight);
        let cloudApplicationsScore = 
            Math.round(this.cloudApplications * cloudApplicationsWeight);
        let dataAndAnalyticsManagementAdvancedScore = 
            Math.round(this.dataAndAnalyticsManagement * dataAndAnalyticsManagementAdvancedWeight);
        let environmentManagementAndDeploymentScore = 
            Math.round(this.environmentManagementAndDeployment * environmentManagementAndDeploymentWeight);
        let processAutomationScore = 
            Math.round(this.processAutomation * processAutomationWeight);
        let securityAndAccessCorrectCount  =
            Math.round(this.securityAndAccess / 100 * securityAndAccessQuestionCount);
        let objectsAndApplicationsCorrectCount  = 
            Math.round(this.objectsAndApplications / 100 * objectsAndApplicationsQuestionCount);
        let auditingAndMonitoringCorrectCount  = 
            Math.round(this.auditingAndMonitoring / 100 * auditingAndMonitoringQuestionCount);
        let cloudApplicationsCorrectCount  = 
            Math.round(this.cloudApplications / 100 * cloudApplicationsQuestionCount);
        let dataAndAnalyticsManagementAdvancedCorrectCount =
            Math.round(this.dataAndAnalyticsManagementAdvanced / 100 * dataAndAnalyticsManagementAdvancedQuestionCount);
        let environmentManagementAndDeploymentCorrectCount  = 
            Math.round(this.environmentManagementAndDeployment / 100 * environmentManagementAndDeploymentQuestionCount);
        let processAutomationCorrectCount  = 
            Math.round(this.processAutomation / 100 * processAutomationQuestionCount);
        let sectionBreakdown = 
            `For Security and Access, you got ${securityAndAccessCorrectCount} out of ${securityAndAccessQuestionCount} correct.` + '\n' + 
            `For Objects and Applications, you got ${objectsAndApplicationsCorrectCount} out of ${objectsAndApplicationsQuestionCount} correct.` + '\n' +
            `For Auditing and Monitoring, you got ${auditingAndMonitoringCorrectCount} out of ${auditingAndMonitoringQuestionCount} correct.` + '\n' +
            `For Cloud Applications, you got ${cloudApplicationsCorrectCount} out of ${cloudApplicationsQuestionCount} correct.` + '\n' + 
            `For Data and Analytics Management, you got ${dataAndAnalyticsManagementAdvancedCorrectCount} out of ${dataAndAnalyticsManagementAdvancedQuestionCount} correct.` + '\n' +
            `For Environment Management and Deployment, you got ${environmentManagementAndDeploymentCorrectCount} out of ${environmentManagementAndDeploymentQuestionCount} correct.` + '\n' +
            `For Process Automation, you got ${processAutomationCorrectCount} out of ${processAutomationQuestionCount} correct.`;
        let score =
            securityAndAccessScore + objectsAndApplicationsScore + auditingAndMonitoringScore + cloudApplicationsScore + 
            dataAndAnalyticsManagementAdvancedScore + environmentManagementAndDeploymentScore + processAutomationScore;  

    //This checks the score retrieved with the passing score and outputs a sentence. 
        //This if statement checks for invalid values
        if(this.securityAndAccess  > 100 ||
            this.securityAndAccess  < 0 ||
            this.objectsAndApplications  > 100 ||
            this.objectsAndApplications  < 0 ||
            this.auditingAndMonitoring  > 100 ||
            this.auditingAndMonitoring  < 0 ||
            this.cloudApplications  > 100 ||
            this.cloudApplications  < 0 ||
            this.dataAndAnalyticsManagementAdvanced  > 100 ||
            this.dataAndAnalyticsManagementAdvanced  < 0 ||
            this.environmentManagementAndDeployment  > 100 ||
            this.environmentManagementAndDeployment  < 0 ||
            this.processAutomation   > 100 ||
            this.processAutomation   < 0 ){
                this.scoreMessage = INVALID_MESSAGE;
                this.sectionQuestionCount = INVALID_MESSAGE;
            }else{
                //This one checks if it is passing or failing and displays the appropriate score.
                if (score >= passingScore) {
                    this.scoreMessage = `Pass! Your overall score is ${score}`;
                    this.sectionQuestionCount = sectionBreakdown; 
                }else{
                    this.scoreMessage = `Fail, your overall score was ${score}`;
                    this.sectionQuestionCount = sectionBreakdown;
            }
        }
    }
}

