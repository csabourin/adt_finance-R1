<template>
  <span>
    <p><strong>{{ $t('pwpInstructions') }}</strong></p>
    <b-container class="workplan-table wp-table-1">
      <b-row>
        <b-col class="encadrage">
          <label><h3 v-html="$t('pwpGovtPri')"></h3>
          <p v-html="$t('govtPriorities')"></p>
        </label>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="encadrage">
          <label><h3 v-html="$t('pwpDeptPri')"></h3>
          <p v-html="$t('deptPriorities')"></p></label>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="encadrage">
          <label><h3 v-html="$t('pwpDirPri')"></h3>
          <p v-html="$t('dirPriorities')"></p></label>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="encadrage">
          <h3 v-html="$t('titleActivities')"></h3>
        </b-col>
      </b-row>

        <!---------------------- ACTIVITY 1 -->      
      <b-row>
        <b-col class="encadrage" sm="12" xl="4">
          <h4 v-html="$t('pA1')"></h4>
          <h5 v-html="$t('titleSubActivities')">Sous activités</h5>
          <p v-html="$t('psA1')"></p>
          <h5 v-html="$t('titleDeliverables')">Livrables</h5>
          <p v-html="$t('pD1')"></p>
          <h5 v-html="$t('titleRisk')">Risque</h5>
          <p v-html="$t('pR1')">Roulement du personnel</p>
          <h5 v-html="$t('titleLikelihood')">Probabilité</h5>
          <p v-html="$t('low')">Faible</p>
          <h5 v-html="$t('titleImpact')">Impact</h5>
          <p v-html="$t('high')">Élevé</p>
          <h5 v-html="$t('titleMitigation')">Atténuation</h5>
          <p v-html="$t('pM1')"></p>
          <h5 v-html="$t('titleResources')">Resources</h5>
          <p v-html="$t('pR1_1')">          </p>
        </b-col>
        
        <!---------------------- ACTIVITY 2 --> 
        <b-col class="encadrage" sm="12" xl="4">
          <h4 v-html="$t('pA2')"></h4>
          <h5 v-html="$t('titleSubActivities')">Sous activités</h5>
          <p v-html="$t('pSA2')"></p>
          <h5 v-html="$t('titleDeliverables')">Livrables</h5>
          <p>
            <ul>
              <li v-html="$t('pD2_1')"></li>
            </ul>
          </p>
          <h5 v-html="$t('titleRisk')">Risque</h5>
          <p v-html="$t('pR2')">Roulement du personnel</p>
          <h5 v-html="$t('titleLikelihood')">Probabilité</h5>
          <p v-html="$t('low')">Faible</p>
          <h5 v-html="$t('titleImpact')">Impact</h5>
          <p v-html="$t('high')">Élevé</p>
          <h5 v-html="$t('titleMitigation')">Atténuation</h5>
          <ul v-html="$t('pM2')"></ul>
          <h5 v-html="$t('titleResources')">Resources</h5>
          <ul v-html="$t('pRes2')"></ul>
        </b-col>


        
        <!---------------------- ACTIVITY 3 --> 
        <b-col class="encadrage" sm="12" xl="4">
          <h4 v-html="$t('pA3')"></h4>
          <h5 v-html="$t('titleSubActivities')">Sous activités</h5>
          <ul v-html="$t('pSA3')"></ul>
          <h5 v-html="$t('titleDeliverables')">Livrables</h5>
          <ul v-html="$t('pD3')"></ul>
          
          <h5 v-html="$t('titleRisk')">Risque</h5>
          <p v-html="$t('pR2')"></p>
          <h5 v-html="$t('titleLikelihood')">Probabilité</h5>
          <p v-html="$t('low')">Faible</p>
          <h5 v-html="$t('titleImpact')">Impact</h5>
          <p v-html="$t('high')">Élevé</p>
          <h5 v-html="$t('titleMitigation')">Atténuation</h5>
          <ul v-html="$t('pM2')"></ul>
          <h5 v-html="$t('titleResources')">Resources</h5>
          <ul v-html="$t('pRes3')">
              <li>1 adjoint administratif</li>
              <li>gestionnaire</li>
          </ul>
        </b-col>
        
      </b-row>
    </b-container>
    <br />
    <p><strong v-html="$t('pwpTitle')"></strong></p>
       <div>
    <b-tabs content-class="mt-3" active-nav-item-class="font-weight-bold" v-model="tabIndex">
    <b-tab title="Question 1">
      <radioQuiz :question="$t('q1')" qId="1" @response="Q1=$event"/>
    </b-tab>
    <b-tab title="Question 2">
      <radioQuiz :question="$t('q2')" qId="2" @response="Q2=$event"/>
    </b-tab>
    <b-tab title="Question 3">
      <radioQuiz :question="$t('q3')" qId="3" @response="Q3=$event"/>
    </b-tab>
  </b-tabs>
  </div>

    <!--------------------------------------------------------- END TABLE --> 

  </span>
</template>
<i18n>
  {
      "en":
      {
          "pwpInstructions": "Looking at your draft, you notice that some items may have been dropped into the wrong location or may be missing. Update your draft accordingly.",
          "pwpTitle": "Choose the best option for each section of this work plan.",
          "pwpGovtPri": "Government priorities",
          "pwpDeptPri": "Departmental priorities",
          "pwpDirPri": "Directorate priorities",
          "titleActivities": "Activities",
          "pwpPlanAct": "<strong>Activities</strong>",
          "titleSubActivities": "Sub-activities",
          "titleDeliverables": "Deliverables",
          "titleRisk": "Risk",
          "titleLikelihood": "Likelihood",
          "titleImpact": "Impact",
          "titleMitigation": "Mitigation",
          "titleResources": "Resources",
          "qDisabled": "Please select one",
          "govtPriorities": "To serve Canadians by securing the prosperous and sustainable use of aquatic ecosystems for future generations",
          "deptPriorities": "To support prosperous and sustainable commercial, Indigenous and recreational fisheries, aquaculture and other oceans industries",
          "dirPriorities": "To manage the commercial domestic fisheries",
          "pA1": "Manage and administer the directorate",
          "psA1": "<ul><li>Supervise, monitor and train staff&nbsp;</li><li>Schedule work&nbsp;</li><li>Provide clerical support&nbsp;</li><li>Move office to new location </li></ul>",
          "pD1": "<ul><li>Management of licensing activities</li><li>Reception covered from 9 to 5</li></ul>",
          "pR1": "<ul><li>Staff turnover</li></ul>",
          "low": "<ul><li>Low</li></ul>",
          "high": "<ul><li>High</li></ul>",
          "pM1": "<ul><li>Establish succession plan</li><li>Establish collective staffing pools</li><li>Recognize excellent work</li><li>Celebrate successes</li><li>Involve employees in decision-making</li></ul>",
          "pM1_1": "<ul><li>Implement flexible work hours</li></ul>",
          "pR1_1": "<ul><li>1 administrative assistant</li></ul>",
          "pR1_2": "<ul><li>manager</li></ul>",
          "pA2": "Issue commercial fishing licences",
          "pSA2": "<ul><li>Review applicant requests</li><li>Check reliability</li><li>Issue licences</li><li>Conduct inspections</li></ul>",
          "pD2_1": "Issue licence within 30 days of request",
          "pD2_2": "Issue 500 licences per year",
          "pR2": "<ul><li>Overfishing</li></ul>",
          "pM2": "<li>Protect habitat</li><li>Place catching limits</li><li>Implement fishing seasons</li>",
          "pRes2": "<li>1 officer</li><li>2 analysts</li><li>1 junior officer</li>",
          "pA3": "Renew commercial fishing licences",
          "pSA3": "<li>Review applicant renewal requests</li><li>Issue renewal licence</li>",
          "pD3": "<li>Issue licence renewal within 30 days of request</li><li>Issue 300 licence renewals per year </li>",
          "pRes3": "<li>1 officer</li><li>1 junior analyst</li>",
          "q1":
          {
              "text": "Currently, “Implement flexible work hours” is a <span class='bolder'>mitigation</span> strategy for the overfishing risk. Where should it appear in the work plan?",
              "options":
              {
                  "1": "Keep it as a mitigation strategy for the “Overfishing” risk.",
                  "2": "It should be a mitigation strategy for  the “Staff turnover” risk.",
                  "3": "Remove “Implement flexible work hours” completely."
              },
              "feedback":
              {
                  "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Actually, &ldquo;Implement flexible work hours&rdquo; relates better to the “Management and administration of the directorate” activity.",
                  "2": "<span class='v-right' /> <strong>Correct!</strong>",
                  "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Actually, “Implement flexible work hours” is a valid strategy to attract and retain employees."
              }
          },
          "q2":
          {
              "text": "The following <span class='bolder'>deliverable</span> is missing from your work plan: “Issue 500 licences per year.” With which activity should you place it?",
              "options":
              {
                  "1": "Manage and administer the directorate",
                  "2": "Issue commercial fishing licences",
                  "3": "Renew commercial fishing licences"
              },
              "feedback":
              {
                  "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> This deliverable relates to the “Issue commercial fishing licences” activity.",
                  "2": "<span class='v-right' /> <strong>Correct!</strong>",
                  "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> This deliverable relates to the “Issue commercial fishing licences” activity."
              }
          },
          "q3":
          {
              "text": "Looking under <span class='bolder'>Resources</span>, you notice that the manager position is missing. With which activity should you place it?",
              "options":
              {
                  "1": "Manage and administer the directorate",
                  "2": "Issue commercial fishing licences",
                  "3": "Renew commercial fishing licences"
              },
              "feedback":
              {
                  "1": "<span class='v-right' /> <strong>Correct!</strong>",
                  "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> The manager position should appear with the “Manage and administer the directorate” activity.",
                  "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> The manager position should appear with the “Manage and administer the directorate” activity."
              }
          }
      },
      "fr":
      {
          "pwpInstructions": "En regardant votre brouillon, vous remarquez que certains items peuvent avoir été placés au mauvais endroit ou manquer. Mettez à jour votre brouillon en conséquence. ",
          "pwpTitle": "Choisissez la meilleure option pour chaque partie du plan de travail.",
          "pwpGovtPri": "<strong>Priorités du gouvernement</strong>",
          "pwpDeptPri": "<strong>Priorités ministérielles</strong>",
          "pwpDirPri": "<strong>Priorités de la direction</strong>",
          "titleActivities": "Activités",
          "titleSubActivities": "Sous-activités",
          "titleDeliverables": "Livrables",
          "titleRisk": "Risque",
          "titleLikelihood": "Probabilité",
          "titleImpact": "Impact",
          "titleMitigation": "Atténuation",
          "titleResources": "Ressources",
          "qDisabled": "Veuillez faire un choix",
          "govtPriorities": "Servir les Canadiens en assurant l’utilisation prospère et durable des écosystèmes aquatiques pour les générations futures.",
          "deptPriorities": "Soutenir des pêches commerciales, autochtones et récréatives prospères et durables, l’aquaculture et d’autres industries maritimes.",
          "dirPriorities": "Gérer les pêches commerciales.",
          "pA1": "Gérer et administrer la direction&nbsp;",
          "psA1": "<ul><li> Superviser, surveiller et former le personnel&nbsp;<li> Planifier le travail&nbsp;</li><li> Fournir du soutien administratif&nbsp;</li><li> Déménagement des bureaux dans de nouveaux locaux</li></ul>",
          "pD1": "<ul><li> Gestion des activités de délivrance de permis</li><li> Réception ouverte de 9 h à 17 h</li></ul>",
          "pR1": "<ul><li>Roulement du personnel</li></ul>",
          "low": "<ul><li>Faible</li></ul>",
          "high": "<ul><li>&Eacute;levé</li></ul>",
          "pM1": "<ul><li>&Eacute;tablir un plan de relève</li><li>Établir des bassins de dotation collective</li><li> Reconna&icirc;tre l’excellence du travail</li><li> Célébrer les succès</li><li> Impliquer les employés dans la prise de décisions</li></ul>",
          "pM1_1": "Mettre en &oelig;uvre des horaires de travail flexibles",
          "pR1_1": "<ul><li>1 adjoint administratif</li></ul>",
          "pR1_2": "<ul><li>gestionnaire</li></ul>",
          "pA2": "Délivrer des permis de p&ecirc;che commerciale",
          "pSA2": "<ul><li>Examiner les dossiers des demandeurs</li><li>Vérifier la fiabilité</li><li>Délivrer des permis</li><li>Effectuer des inspections</li></ul>",
          "pD2_1": "Délivrer le permis dans les 30 jours suivant la demande",
          "pD2_2": "Délivrer 500 permis par an",
          "pR2": "<ul><li>Surp&ecirc;che</li></ul>",
          "pM2": "<li> Protéger l'habitat</li><li> Fixer des limites de capture</li><li> Lancer les saisons de p&ecirc;che</li>",
          "pRes2": "<li> 1 agent</li><li> 2 analystes</li><li> 1 agent subalterne</li>",
          "pA3": "Renouveler les permis de p&ecirc;che commerciale",
          "pSA3": "<li> Examiner les dossiers de renouvellement des demandeurs</li><li> Délivrer des renouvellements de permis&nbsp;</li></li>",
          "pD3": "<li> Émettre les renouvellements de permis dans les 30 jours suivant la demande</li><li> Émettre 300  renouvellements de permis par an</li>",
          "pRes3": "<li>1 agent</strong></li><li>1 analyste subalterne</li>",
          "q1":
          {
              "text": "Actuellement, &laquo; Horaires de travail flexibles &raquo; est une stratégie d’<span class='bolder'>atténuation</span> du risque de la surpêche. Où devrait-elle apparaître dans le plan de travail?",
              "options":
              {
                  "1": "Gardez-la comme stratégie d’atténuation du risque de la &laquo; Surpêche &raquo;.",
                  "2": "Il devrait faire partie de la stratégie d’atténuation du risque &laquo; Roulement du personnel &raquo;.",
                  "3": "Enlever complètement &laquo; Horaires de travail flexibles &raquo;."
              },
              "feedback":
              {
                  "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> En fait, les heures de travail flexibles se rapportent plus à l'activité &laquo; Gérer et administrer la direction &raquo;.",
                  "2": "<span class='v-right' />  <strong>Correct!</strong>",
                  "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> En fait, &laquo; Horaires de travail flexibles &raquo; est une stratégie valable pour attirer et retenir les employés."
              }
          },
          "q2":
          {
              "text": "Le <span class='bolder'>livrable</span> suivant ne figure pas dans le plan de travail : &laquo; Délivrer 500 permis par an &raquo;. À quelle activité devrait-il être associé?",
              "options":
              {
                  "1": "Gérer et administrer la direction",
                  "2": "Délivrer des permis de p&ecirc;che commerciale",
                  "3": "Renouveler les permis de p&ecirc;che commerciale"
              },
              "feedback":
              {
                  "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Ce livrable concerne l’activité de &laquo; Délivrer des permis de pêche commerciale &raquo;.",
                  "2": "<span class='v-right' />  <strong>Correct!</strong>",
                  "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Ce livrable concerne  l’activité de &laquo; Délivrer des permis de pêche commerciale &raquo;."
              }
          },
          "q3":
          {
              "text": "En regardant sous <span class='bolder'>Ressources</span>, vous remarquez que le poste de gestionnaire n’y figure pas. À quelle activité devrait-il être associé?",
              "options":
              {
                  "1": "Gérer et administrer la direction",
                  "2": "Délivrer des permis de p&ecirc;che commerciale",
                  "3": "Renouveler les permis de p&ecirc;che commerciale"
              },
              "feedback":
              {
                  "1": "<span class='v-right' /> <strong>Correct!</strong>",
                  "2": "<span class='v-wrong' /> <strong>Incorrect.</strong>   Le poste de gestionnaire devrait apparaître avec l’activité &laquo; Gérer et administrer la direction &raquo;.",
                  "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>  Le poste de gestionnaire devrait apparaître avec l’activité &laquo; Gérer et administrer la direction &raquo;."

              }
          }
      }
  }
</i18n>
<script>
  import radioQuiz from "~/components/radioQuiz"
  export default {
    components:{
      radioQuiz
    },
  data() {
   return {
     govtPri: '',
     deptPri: '',
     dirPri: '',
     tabIndex:0,
     Q1:'',
     Q2:'',
     Q3:''
   }
  }
}

</script>
<style type="text/css" scoped>
  
  .workplan-table .row:nth-child(1) h3:after, .workplan-table .row:nth-child(2) h3:after, .workplan-table .row:nth-child(3) h3:after {
    display: none;
  }
  
.tableColoured {
  table-layout: fixed;
  width: 100%;
  counter-reset: wpParts
}
.tableColoured td {
  vertical-align: top;
  position: relative;
  padding: 5px 15px 8px 55px;
  height:60px;
}

.tableColoured td:before {
  font-family:"Roboto";
  counter-increment: wpParts;
  content: counter(wpParts);
  position: absolute;
  height: 2em;
  left: 0px;
  top: 0px;
  border-radius: 0 0 30px 0;
  /*padding: .1em .5em 0 .5em;*/
  padding: 0em .5em 0 .3em;
  color: white;
  font-weight: bold;
}
.tableColoured td:nth-of-type(-n+6):before {
  content: "0"counter(wpParts);
}
.tableColoured td p{
  margin-bottom:0;
}

.striked{text-decoration: line-through}

.deptPri:before {
  background-color: #167777;
}

.deptPri {
  border-top: 4px solid #167777;
  background-color: #c7e0e0
}

.govtPri {
  border-top: 4px solid #6C076C;
  background-color: #e1c8e1
}

.govtPri:before {
  background-color: #6C076C;
}

.dirPri {
  border-top: 4px solid #6F1E0D;
  border-bottom: 4px solid #fff;
  background-color: #e2ceca
}

.dirPri:before {
  background-color: #6F1E0D;
}

.planAct {
  border-left:2px solid #577a90;
  background-color: #E2E8EC;
}

.planAct:before {
  background-color: #577a90;
}

.planSubAct {
  border-left:2px solid #3A8251;
  background-color: #dcefe3;
}

.planSubAct:before {
  background-color: #3A8251;
}

.planDelivs {
  border-left:2px solid #616EB8;
  background-color: #dfe2f1;
}

.planDelivs:before {
  background-color: #616EB8;
}

.planRisk {
  border-left:2px solid #8D9245;
  background-color: #f0f1df;
}

.planRisk:before {
  background-color: #8D9245;
}

.planLikely {
  border-left:2px solid #775F75;
  background-color: #E1DCE1;
}

.planLikely:before {
  background-color: #775F75;
}

.planLikely {
  border-left:2px solid #775F75;
  background-color: #E1DCE1;
}

.planImpact {
  border-left:2px solid #607293;
  background-color: hsl(219, 21%, 91%);
}


.planImpact:before {
  background-color: #607293;
}

.planMitigat {
  border-left:2px solid #B35685;
  background-color: #f1dfe8;
}

.planMitigat:before {
  background-color: #B35685;
}

.planRes {
  border-left:2px solid #C35522;
  background-color: #f1e5df;
}

.planRes:before {
  background-color: #C35522;
}

.thNumbered {
  position: relative;
  text-align: center;
  padding-left: 32px;
}

.thNumbered:before {
 font-family:"Roboto";
  counter-increment: wpParts;
  content: counter(wpParts);
  position: absolute;
  height: 2em;
  left: 0px;
  top: 0px;
  border-radius: 0 0 30px 0;
  /*padding: .1em .5em 0 .5em;*/
  padding: 0em .5em 0 .2em;
  color: white;
  font-weight: bold;
}

.thNumbered:nth-of-type(-n+6):before {
  content: "0"counter(wpParts);
}

.thNumbered:nth-of-type(1) {
  border-top: 4px solid #577a90;
}

.thNumbered:nth-of-type(2) {
  border-top: 4px solid #3A8251;
}

.thNumbered:nth-of-type(3) {
  border-top: 4px solid #616EB8;
}

.thNumbered:nth-of-type(4) {
  border-top: 4px solid #8D9245;
}

.thNumbered:nth-of-type(5) {
  border-top: 4px solid #775F75;
}

.thNumbered:nth-of-type(6) {
  border-top: 4px solid #607293;

}

.thNumbered:nth-of-type(7) {
  border-top: 4px solid #B35685;
}

.thNumbered:nth-of-type(8) {
  border-top: 4px solid #C35522;
}
</style>