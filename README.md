# angular-karma-jenkins

The purpose of this project is to demonstrate how a Jenkins pipeline can build and test a sample Angular project in a headless way.  Karma test results are then sent to Datadog.

For test results to be properly sent to Datadog, your API key for Datadog need to be stored in a Jenkins text credential with the name "DATADOG-API-KEY".


