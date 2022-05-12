<template>
  <span>
    <p>{{ $t('pwpInstructions') }}</p>
    <ul style="list-style: circle">
    <li>{{$t('thing1')}}</li>
    <li>{{$t('thing2')}}</li>
    <li>{{$t('thing3')}}</li>
  </ul>
  <b-container class="workplan-table wp-table-1">
      <b-row>
        <b-col class="encadrage">
          <h3 v-html="$t('pwpGovtPri')"></h3>
          <p v-html="$t('govtPriorities')"></p>
        
        </b-col>
      </b-row>
      <b-row>
        <b-col class="encadrage">
          <h3 v-html="$t('pwpDeptPri')"></h3>
          <p v-html="$t('deptPriorities')"></p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="encadrage">
          <h3 v-html="$t('pwpDirPri')"></h3>
          <p v-html="$t('dirPriorities')"></p>
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
          <p v-html="$t('pR1_1')"></p>
        </b-col>
        
        <!---------------------- ACTIVITY 2 --> 
        <b-col class="encadrage" sm="12" xl="4">
          <h4 v-html="$t('pA2')"></h4>
          <h5 v-html="$t('titleSubActivities')">Sous activités</h5>
          <p v-html="$t('pSA2')"></p>
          <h5 v-html="$t('titleDeliverables')">Livrables</h5>
          <p v-html="$t('pD2_1w')" ></p>
          <h5 v-html="$t('titleRisk')">Risque</h5>
          <p v-html="$t('pR2')">Roulement du personnel</p>
          <h5 v-html="$t('titleLikelihood')">Probabilité</h5>
          <p v-html="$t('low')">Faible</p>
          <h5 v-html="$t('titleImpact')">Impact</h5>
          <p v-html="$t('high')">Élevé</p>
          <h5 v-html="$t('titleMitigation')">Atténuation</h5>
          <p v-html="$t('pM2')"></p>
          <h5 v-html="$t('titleResources')">Resources</h5>
          <p v-html="$t('pRes2')"></p>
        </b-col>


        
        <!---------------------- ACTIVITY 3 --> 
        <b-col class="encadrage" sm="12" xl="4">
          <h4 v-html="$t('pA3')"></h4>
          <h5 v-html="$t('titleSubActivities')">Sous activités</h5>
          <p v-html="$t('pSA3')"></p>
          <h5 v-html="$t('titleDeliverables')">Livrables</h5>
          <p v-html="$t('pD3')"></p>
          
          <h5 v-html="$t('titleRisk')">Risque</h5>
          <p v-html="$t('pR2')"></p>
          <h5 v-html="$t('titleLikelihood')">Probabilité</h5>
          <p v-html="$t('low')">Faible</p>
          <h5 v-html="$t('titleImpact')">Impact</h5>
          <p v-html="$t('high')">Élevé</p>
          <h5 v-html="$t('titleMitigation')">Atténuation</h5>
          <p v-html="$t('pM2')"></p>
          <h5 v-html="$t('titleResources')">Resources</h5>
          <p v-html="$t('pRes3')">
          </p>
        </b-col>
        
      </b-row>
    </b-container>
    <br />
    <p><strong v-html="$t('pwpTitle')"></strong></p>

      <b-tabs content-class="mt-3" active-nav-item-class="font-weight-bold" v-model="tabIndex">
    <b-tab title="Question 1" ><radioQuiz :question="$t('q1')" qId="1" @response="Q1=$event"/></b-tab>
    <b-tab title="Question 2"><radioQuiz :question="$t('q2')" qId="2" @response="Q2=$event"/></b-tab>
    <b-tab title="Question 3"><radioQuiz :question="$t('q3')" qId="3" @response="Q3=$event"/></b-tab>
    <b-tab title="Question 4"><radioQuiz :question="$t('q4')" qId="4" @response="Q4=$event"/></b-tab>
  </b-tabs>

  </span>
</template>
<i18n>{
  "en":
  {
    "pwpInstructions": "Your director has been to a steering committee and now has new information that should be reflected in your work plan. Here are the 3 new pieces of information: ",
    "thing1": "New software will be implemented to speed up the issuing of licences ",
    "thing2": "A new policy now requires licences to be issued in 15 days, not 30 days, starting November 1 and",
    "thing3": "There’s been a decision not to replace a retiring employee.",
    "pwpTitle": "Adjust your work plan by selecting the best answer to the following questions.",
    "pwpGovtPri": "Government priorities",
    "pwpDeptPri": "Departmental priorities",
    "pwpDirPri": "Directorate priorities",
    "titleActivities": "Activities",
    "pwpPlanAct": "Activities",
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
    "pD1": "<ul><li>Management of licencing activities</li><li>Reception covered from 9 to 5</li></ul>",
    "pD1add":"Training for all officers on the new fisheries software",
    "pD2add":"Implementation of new fisheries software",
    "pR1": "<ul><li>Staff turnover</li></ul>",
    "low": "<ul><li>Low</li></ul>",
    "high": "<ul><li>High</li></ul>",
    "pM1": "<ul><li>Establish succession plan</li><li>Establish collective staffing pools</li><li>Recognize excellent work</li><li>Celebrate successes</li><li>Involve employees in decision-making</li></ul>",
    "pM1_1": "Implement flexible work hours",
    "pR1_1": "<ul><li>1 administrative assistant</li></ul>",
    "pR1_2": "<ul><li>Manager</li></ul>",
    "pA2": "Issue commercial fishing licenses",
    "pSA2": "<ul><li>Review applicant requests</li><li>Check reliability</li><li>Issue licenses</li><li>Conduct inspections</li></ul>",
    "pD2_1w": "<ul><li>Issue license within 30 days of request</li><li>Issue 500 licenses per year</li></ul>",
    "pR2": "<ul><li>Overfishing</li></ul>",
    "pM2": "<ul><li>Protect habitat</li><li>Place catching limits</li><li>Implement fishing seasons</li></ul>",
    "pRes2": "<ul><li>1 officer</li><li>2 analysts</li><li>1 junior officer</li></ul>",
    "pA3": "Renew commercial fishing licenses",
    "pSA3": "<ul><li>Review applicant renewal requests</li><li>Issue renewal license</li></ul>",
    "pD3": "<ul><li>Issue license renewal within 30 days of request</li><li>Issue 300 license renewals per year </li></ul>",
    "pRes3": "<ul><li>1 officer</li><li>1 junior analyst</li><ul>",
    "q1":
    {
      "text": "Where should you add the “Implementation of the new software” in your work plan?",
      "options":
      {
        "1": "With the “Manage and administer the directorate” activity under “Deliverables”",
        "2": "With the “Issue commercial fishing licences activity under “Mitigation”",
        "3": "With the “Renew commercial fishing licences” activity under “Sub-activities”"
      },
      "feedback":
      {
        "1": "<span class='v-right' /> <strong>Correct!</strong>",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> While “Implementation of the new software” could in certain cases be a “Mitigation” strategy, in this work plan it is a “Deliverable.”",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> While “Implementation of the new software” could in certain cases be a “Sub-activity”, in this work plan it is a “Deliverable.”"
      }
    },
    "q2":
    {
      "text": "What would you do with the statement &ldquo;Issue licence renewal within 30 days of request&rdquo; in your work plan?",
      "options":
      {
        "1": "Leave “Issue licence renewal within 30 days of request” as is.",
        "2": "Remove “Issue licence renewal within 30 days of request” from the work plan.",
        "3": "Change it to &ldquo;Issue licence renewal within 15 days of request.&rdquo;"
      },
      "feedback":
      {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> With the implementation of the new policy, change it to &ldquo;Issue licence renewal within 15 days of request.&rdquo;",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> With the implementation of the new policy, change it to &ldquo;Issue licence renewal within 15 days of request.&rdquo;",
        "3": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q3":
    {
      "text": "Do you need to adjust the Resources section given that your licensing officer is retiring?",
      "options":
      {
        "1": "I need to add more staff.",
        "2": "I can leave the Resources section as is.",
        "3": "I need to remove 1 employee Under Resources."
      },
      "feedback":
      {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> You have not received any additional full-time employees, so you cannot add more staff.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> You have an employee who is retiring, so you will need to remove a full-time employee from your work plan.",
        "3": "<span class='v-right' /> <strong>Correct!</strong>"
      }},
      "q4":
      {
        "text": "Should you indicate the need for officer training? ",
        "options":
        {
          "1": "Yes, with the &ldquo;Manage and administer the directorate&rdquo; activity under &ldquo;Deliverables&rdquo;",
          "2": "Yes, with the &ldquo;Issue commercial fishing licences&rdquo; activity under &ldquo;Mitigation&rdquo;",
          "3": "Yes, with the &ldquo;Renew commercial fishing licences&rdquo; activity under &ldquo;Sub-activities&rdquo;"
        },
        "feedback":
        {
          "1": "<span class='v-right' /> <strong>Correct!</strong>",
          "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> It should be included with the &ldquo;Manage and administer the directorate&rdquo; activity under &ldquo;Deliverables.&rdquo;",
          "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> It should be included with the &ldquo;Manage and administer the directorate&rdquo; activity, under &ldquo;Deliverables.&rdquo;"
        }
    }
  },
  "fr":
  {
    "pwpInstructions": "Votre directeur vous dit qu’il a participé à un comité directeur et qu’il dispose maintenant de nouveaux renseignements qui devraient se refléter dans votre plan de travail. Voici les trois nouveaux renseignements :",
    "thing1": "un nouveau logiciel sera installé pour accélérer la délivrance des permis;",
    "thing2": "une nouvelle politique qui exige maintenant que les permis soient délivrés en 15 jours, et non plus en 30 jours, à compter du 1er novembre;",
    "thing3": "une décision de ne pas remplacer un employé qui prend sa retraite.",
    "pwpTitle": "Ajustez votre plan de travail en choisissant la meilleure réponse aux questions suivantes&nbsp;:",
    "pwpGovtPri": "Priorités du gouvernement",
    "pwpDeptPri": "Priorités ministérielles",
    "pwpDirPri": "Priorités de la direction",
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
    "pD1": "<ul><li>Gestion des activités de délivrance de permis</li><li> Réception ouverte de 9&nbsp;h à 17&nbsp;h</li></ul>",
    "pD1add":"Formation de tous les agents sur le nouveau logiciel de gestion des pêches",
    "pD2add":"Lancement d’un nouveau logiciel de gestion des pêches",
    "pR1": "<ul><li>Roulement du personnel</li></ul>",
    "low": "<ul><li>Faible</li></ul>",
    "high": "<ul><li>&Eacute;levé</li></ul>",
    "pM1": "<ul><li>&Eacute;tablir un plan de relève</li><li>Établir des bassins de dotation collective</li><li> Reconna&icirc;tre l’excellence du travail</li><li> Célébrer les succès</li><li> Impliquer les employés dans la prise de décisions</li><li>Horaires de travail flexibles</li></ul>",
    "pM1_1": "<ul><li>Mettre en &oelig;uvre des horaires de travail flexibles</li></ul>",
    "pR1_1": "<ul><li>1 adjoint administratif</li><li>gestionnaire</li></ul>",
    "pA2": "Délivrer des permis de p&ecirc;che commerciale",
    "pSA2": "<ul><li>Examiner les dossiers des demandeurs</li><li>Vérifier la fiabilité</li><li>Délivrer des permis</li><li>Effectuer des inspections</li></ul>",
    "pD2_1w": "<ul><li>Délivrer le permis dans les 30 jours suivant la demande</li></ul>",
    "pD2_1r": "<ul><li>Délivrer le permis dans les 15 jours suivant la demande</li></ul>",
    "pD2_2": "<ul><li>Délivrer 500 permis par an</li></ul>",
    "pR2": "<ul><li>Surp&ecirc;che</li></ul>",
    "pM2": "<ul><li> Protéger l'habitat</li><li> Fixer des limites de capture</li><li> Lancer les saisons de p&ecirc;che</li></ul>",
    "pRes2": "<ul><li>1 agent</li><li>2 analystes</li><li>1 agent subalterne</li></ul>",
    "pA3": "Renouveler les permis de p&ecirc;che commerciale",
    "pSA3": "<ul><li> Examiner les dossiers de renouvellement des demandeurs</li><li> Délivrer des renouvellements de permis&nbsp;</li></li></ul>",
    "pD3": "<ul><li> Délivrer les renouvellements de permis dans les 30 jours suivant la demande</li><li> Délivrer 300  renouvellements de permis par an</li></ul>",
    "pRes3": "<ul><li>1 agent</li><li>1 analyste subalterne</li></ul>",
    "q1":
    {
      "text": "Où ajouteriez-vous la &laquo;&nbsp;Mise en œuvre du nouveau logiciel&nbsp;&raquo; dans votre plan de travail?",
      "options":
      {
        "1": "Avec l’activité «&nbsp;Gérer et administrer la direction&nbsp;» sous «&nbsp;Livrables&nbsp;»",
        "2": "Avec l’activité «&nbsp;Délivrer des permis de pêche commerciale&nbsp;», sous «&nbsp;Atténuation&nbsp;»",
        "3": "Avec l’activité «&nbsp;Renouveler les permis de pêche commerciale&nbsp;», sous «&nbsp;Sous-activités&nbsp;»"
      },
      "feedback":
      {
        "1": "<span class='v-right' /> <strong>Correct!</strong>",        
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Bien que la «&nbsp;Mise en œuvre du nouveau logiciel&nbsp;» puisse être dans certains cas une stratégie d'atténuation, dans ce plan de travail, il s'agit d'un «&nbsp;Livrable&nbsp;».",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Bien que la « Mise en œuvre du nouveau logiciel » pourrait dans certains cas être une « Sous-activité », dans ce plan de travail, il s’agit d’un « Livrable »."
      }
    },
    "q2":
    {
      "text": "Que feriez-vous de l’énoncé suivant dans le plan de travail&nbsp;: « Délivrer les renouvellements de permis dans les 30 jours suivant la demande »?",
      "options":
      {
        "1": "Laissez &laquo;&nbsp;Délivrer les renouvellements de permis dans les 30 jours suivant la demande&nbsp;&raquo; tel quel.",
        "2": "Enlevez &laquo;&nbsp;Délivrer les renouvellements de permis dans les 30 jours suivant la demande&nbsp;&raquo; du plan de travail.",
        "3": "Changez-le pour &laquo;&nbsp;Délivrer les renouvellements de permis dans les 15 jours suivant la demande&nbsp;&raquo;."
      },
      "feedback":
      {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Étant donné l’entrée en vigueur de la nouvelle politique, changez l’énoncé pour &laquo;&nbsp;Délivrer les renouvellements de permis dans les 15 jours suivant la demande&nbsp;&raquo;.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Avec l’entrée en vigueur de la nouvelle politique, changez l’énoncé pour &laquo;&nbsp;Délivrer les renouvellements de permis dans les 15 jours suivant la demande&nbsp;&raquo;.",
        "3": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q3":
    {
      "text": "Avez-vous besoin d'ajuster la section des Ressources étant donné que l’agent qui délivre les permis prend sa retraite?",
      "options":
      {
        "1": "Je dois ajouter du personnel.",
        "2": "Je peux laisser la section « Ressources » telle quelle.",
        "3": "Je dois enlever un employé du plan de travail sous « Ressources »."
      },
      "feedback":
      {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Vous n’avez pas d’employés supplémentaires à temps plein, vous ne pouvez donc pas ajouter d’employés.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Vous avez un employé qui prend sa retraite, vous devrez donc enlever un employé à temps plein de votre plan de travail.",
        "3": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },

    "q4":
    {
      "text": "Devriez-vous indiquer le besoin de formation des agents?",
      "options":
      {
        "1": "Oui, avec l’activité &laquo;&nbsp;Gérer et administrer la direction&nbsp;&raquo; sous &laquo;&nbsp;Livrables&nbsp;&raquo;.",
        "2": "Oui, avec l’activité &laquo;&nbsp;Délivrer des permis de pêche commerciale&nbsp;&raquo; sous &laquo;&nbsp;Atténuation&nbsp;&raquo;.",
        "3": "Oui, avec l’activité &laquo;&nbsp;Renouvellement de permis de pêche commerciale&nbsp;&raquo; sous &laquo;&nbsp;Sous-activités&nbsp;&raquo;."
      },
      "feedback":
      {
        "1": "<span class='v-right' /> <strong>Correct!</strong>",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Il devrait être inclus dans l’activité &laquo;&nbsp;Gérer et administrer la direction&nbsp;&raquo; sous la rubrique &laquo;&nbsp;Livrables&nbsp;&raquo;.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Il devrait être inclus dans l’activité &laquo;&nbsp;Gérer et administrer la direction&nbsp;&raquo; sous la rubrique &laquo;&nbsp;Livrables&nbsp;&raquo;."
      }
    }
  }
}
</i18n>
<script>
import radioQuiz from "~/components/radioQuiz"
export default {
  components: { radioQuiz },
  data() {
    return { tabIndex: 0, Q1: '', Q2: '', Q3: '', Q4: '' }
  },
  watch: {
    tabIndex: {
      immediate: true,
      handler(tab) {
        if (tab == 3) this.$scrollTo('#deliverableTab')
        if (tab == 2) this.$scrollTo('#resourcesTab')
        if (tab == 1) this.$scrollTo('#deliverableTab')
        if (tab == 0) this.$scrollTo('#subActTab')
      }
    }
  }
}
</script>
<style type="text/css" scoped>
.scrollMe {
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
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