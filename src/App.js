import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import SurveyEditor from "./SurveyEditor";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";
import 'image-picker/image-picker/image-picker.css';

import "jquery-bar-rating/dist/themes/css-stars.css";

import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "image-picker/image-picker/image-picker.js";
import "jquery-bar-rating";

import * as widgets from "surveyjs-widgets";

widgets.icheck(Survey, $);
widgets.select2(Survey, $);
widgets.imagepicker(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

class App extends Component {
  json = {
    title: "",
    showProgressBar: "",
    pages: [
      {
       name: "page1",
       elements: [
        {
         type: "radiogroup",
         name: "1",
         title: "Will IDCS be used by consumers or enterprise users? ",
         description: "http://www.google.com",
         choices: [
          {
           value: "Consumers",
           text: "Consumers"
          },
          {
           value: "Enterprise",
           text: "Enterprise"
          }
         ]
        },
        {
         type: "radiogroup",
         name: "2",
         title: "What will IDCS be protecting?",
         choices: [
          {
           value: "Oracle Cloud",
           text: "Oracle Cloud"
          },
          {
           value: "3rd Party",
           text: "3rd Party"
          },
          {
           value: "On Premises",
           text: "On Premises"
          }
         ]
        },
        {
         type: "radiogroup",
         name: "3",
         visibleIf: "{2} = 'Oracle Cloud'",
         title: "Which Oracle Cloud Services?",
         choices: [
          {
           value: "Oracle SaaS",
           text: "Oracle SaaS"
          },
          {
           value: "Oracle PaaS/IaaS consoles",
           text: "Oracle PaaS/IaaS consoles"
          },
          {
           value: "Oracle PaaS",
           text: "Oracle PaaS"
          },
          {
           value: "Oracle IaaS",
           text: "Oracle IaaS"
          }
         ]
        },
        {
         type: "radiogroup",
         name: "Which 3rd Party Clouds Applications?",
         visibleIf: "{2} = '3rd Party'",
         title: "Which 3rd Party Clouds Applications?",
         choices: [
          {
           value: "AWS",
           text: "AWS"
          },
          {
           value: "Office 365",
           text: "Office 365"
          },
          {
           value: "Azure",
           text: "Azure"
          },
          {
           value: "SalesForce",
           text: "SalesForce"
          },
          {
           value: "RackSpace",
           text: "RackSpace"
          },
          {
           value: "ServiceNow",
           text: "ServiceNow"
          },
          {
           value: "IBM",
           text: "IBM"
          },
          {
           value: "Box",
           text: "Box"
          },
          {
           value: "Slack",
           text: "Slack"
          },
          {
           value: "3rd Party Apps",
           text: "3rd Party Apps"
          }
         ]
        },
        {
         type: "radiogroup",
         name: "4",
         visibleIf: "{2} = 'On Premises'",
         title: "Which on Premises Applications? ",
         choices: [
          {
           value: "EBS",
           text: "EBS"
          },
          {
           value: "PeopleSoft",
           text: "PeopleSoft"
          },
          {
           value: "Siebel",
           text: "Siebel"
          },
          {
           value: "BI Enterprise Edition",
           text: "BI Enterprise Edition"
          },
          {
           value: "Agile PLM",
           text: "Agile PLM"
          },
          {
           value: "Hyperion",
           text: "Hyperion"
          },
          {
           value: "JD Edwards EnterpriseOne",
           text: "JD Edwards EnterpriseOne"
          },
          {
           value: "WebCenter",
           text: "WebCenter"
          },
          {
           value: "WebLogic",
           text: "WebLogic"
          },
          {
           value: "Qlik",
           text: "Qlik"
          },
          {
           value: "MS IIS/IWA",
           text: "MS IIS/IWA"
          },
          {
           value: "MS OWA/IWA",
           text: "MS OWA/IWA"
          },
          {
           value: "MS SHAREPOINT IWA",
           text: "MS SHAREPOINT IWA"
          },
          {
           value: "Access Gate",
           text: "Access Gate"
          },
          {
           value: "SAML Remote Service Provider",
           text: "SAML Remote Service Provider"
          },
          {
           value: "Client Cert",
           text: "Client Cert"
          },
          {
           value: "Other",
           text: "Other"
          }
         ]
        },
        {
         type: "radiogroup",
         name: "5",
         title: "Login to IDCS via:",
         choices: [
          {
           value: "Local IDCS Password",
           text: "Local IDCS Password"
          },
          {
           value: "Social Authentication",
           text: "Social Authentication"
          },
          {
           value: "Federated SAML",
           text: "Federated SAML"
          },
          {
           value: "Delegated Auth",
           text: "Delegated Auth"
          },
          {
           value: "Multi-Factor Authentication",
           text: "Multi-Factor Authentication"
          }
         ]
        },
        {
         type: "radiogroup",
         name: "6",
         visibleIf: "{5} = 'Delegated Auth' or {Login to IDCS via:} = 'Local IDCS Password';\n\n\n\n",
         title: "Will you allow users to change their forgotten password recovery email?",
         choices: [
          {
           value: "Yes",
           text: "Yes"
          },
          {
           value: "No",
           text: "No"
          }
         ]
        },
        {
         type: "radiogroup",
         name: "7",
         visibleIf: "{5}='Social Authentication'",
         title: "Will you be authenticating with a social login?",
         choices: [
          {
           value: "Google",
           text: "Google"
          },
          {
           value: "LinkedIn",
           text: "LinkedIn"
          },
          {
           value: "Facebook",
           text: "Facebook"
          },
          {
           value: "Microsoft",
           text: "Microsoft"
          },
          {
           value: "Twitter",
           text: "Twitter"
          },
          {
           value: "OpenID Connect",
           text: "OpenID Connect"
          }
         ]
        },
        {
         type: "checkbox",
         name: "8",
         visibleIf: "{5} = 'Multi-Factor Authentication'",
         title: "Will Multi-Factor Authentication be used?",
         choices: [
          {
           value: "Security Questions",
           text: "Security Questions"
          },
          {
           value: "Mobile Application OTP",
           text: "Mobile Application OTP"
          },
          {
           value: "Text Message",
           text: "Text Message"
          },
          {
           value: "Bypass Code",
           text: "Bypass Code"
          },
          {
           value: "Trusted Computer",
           text: "Trusted Computer"
          },
          {
           value: "Email",
           text: "Email"
          }
         ]
        },
        {
         type: "radiogroup",
         name: "9",
         title: "How would you like to create users/groups, manually or automatically?",
         choices: [
          {
           value: "Manually",
           text: "Manually"
          },
          {
           value: "CSV Import",
           text: "CSV Import"
          },
          {
           value: "Active Directory Bridge",
           text: "Active Directory Bridge"
          },
          {
           value: "IDCS Connector",
           text: "IDCS Connector"
          },
          {
           value: "Rest API's",
           text: "Rest API's"
          },
          {
           value: "SCIM",
           text: "SCIM"
          },
          {
           value: "Self Registration",
           text: "Self Registration"
          }
         ]
        }
       ]
      }
     ]
    }

  onValueChanged(result) {
  }

  onComplete(result) {
    console.log(result.data);
    var resultsData = JSON.stringify(result.data);
    document.querySelector('#root').innerHTML = "result: " + JSON.stringify(result.data);
  }

  render() {
    Survey.Survey.cssType = "bootstrap";
    Survey.JsonObject.metaData.addProperty("question", {name: "id:number"});
    var model = new Survey.Model(this.json);
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>IDCS Survey</h2>
        </div>
        <div className="surveyjs">
     
          <Survey.Survey model={model} onComplete={this.onComplete} onValueChanged={this.onValueChanged}/>
         
       
        </div>
      </div>
    );
  }
}

export default App;
