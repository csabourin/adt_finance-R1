<template>
  <span>
    <div class="pure-radiobutton pure-checkbox">
  <b-card>
    <b-tabs v-model="tabIndex">
      <b-tab title="Question 1">
        <!-- <p><strong v-html="$t('q1a.text')" /></p> -->
        <selectMatching :question="$t('q1content')" :match="q1Match" @response="Q1 = $event" exId="ex1" />
        <p v-if="Q1[0] && Q1[1] && Q1[2] && Q1[3]" v-html="$t('q1.conclusion')" />
      </b-tab>
      <b-tab title="Question 2">
        <selectMatching :question="$t('q2content')" :match="q2Match" @response="Q2 = $event" exId="ex2" />
        <p v-if="Q2[0] && Q2[1] && Q2[2] && Q2[3]" v-html="$t('q2.conclusion')" />
      </b-tab>
      <b-tab title="Question 3">
        <radioQuiz :question="$t('q3')" qId="3" />
      </b-tab>
      <b-tab title="Question 4">
        <radioQuiz :question="$t('q4')" qId="4" />
      </b-tab>
      <b-tab title="Question 5">
        <checkboxQuiz :question="$t('q5')" qId="5" :Answer="['1','2','3']" />
      </b-tab>
      <b-tab title="Question 6">
        <radioQuiz :question="$t('q6')" qId="6" />
      </b-tab>
      <b-tab title="Question 7">
        <radioQuiz :question="$t('q7')" qId="7" />
      </b-tab>
      <b-tab title="Question 8">
        <radioQuiz :question="$t('q8')" qId="8" />
      </b-tab>
    </b-tabs>
  </b-card>
  <!-- Control buttons-->
  <div class="text-center">
    <b-button-group :aria-label="$t('questionNav')" class="mt-2">
      <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
      <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=7">{{$t('nextPage')}}</b-button>
    </b-button-group>
  </div>
</div>
</span>
</template>
<script type="text/javascript">
import radioQuiz from "~/components/radioQuiz"
import checkboxQuiz from "~/components/checkboxQuiz"
import selectMatching from "~/components/selectMatching"
export default {
  components: { radioQuiz, checkboxQuiz, selectMatching },
  data() {
    return {
      tabIndex: 0,
      Q1: [],
      Q2: [],
      
      q1Match: [2,3,1,4],
      q2Match: [3,4,1,2]
    }
  },
  methods:{
    focus(){
      setTimeout(function(){
        document.querySelector(".tab-pane.active").setAttribute("tabindex", 0);
        document.querySelector(".tab-pane.active").focus();
      }, 300);
    },
  }
}
</script>
<i18n>{
  "en": {
    "qDisabled": "Choose",
    "pwpGovtPri": "<strong>Government priorities</strong>",
    "pwpDeptPri": "<strong>Departmental priorities</strong>",
    "pwpDirPri": "<strong>Directorate priorities</strong>",
    "titleActivities": "Activities",
    "pwpPlanAct": "<strong>Activities</strong>",
    "titleSubActivities": "Sub-activities",
    "titleDeliverables": "Deliverables",
    "titleRisk": "Risk",
    "titleLikelihood": "Likelihood",
    "titleImpact": "Impact",
    "titleMitigation": "Mitigation",
    "titleResources": "Resources",
    "q1content": {
      "text": "Match the item to the budget in which it belongs. ",
      "options": {
        "1": "A contract with an agency for temp staff",
        "2": "Funds provided to a university to study fish habitat",
        "3": "Casual positions or leave cash-outs",
        "4": "Purchase a new fleet of trucks"
      },
      "matching": {
        "1": "Operating–Salary ",
        "2": "Operating–O&M ",
        "3": "Grants & Contributions",
        "4": "Capital "
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> ",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q1": {
      "conclusion": "<p><strong>A contract with an agency for temporary staff</strong> would be in <strong>Operating -O&amp;M</strong>, and not Operating-Salary, because temporary staff are not employees, and contracts are not paid out of Salary.&nbsp;</p><p><strong>Funds provided to a university to study fish habitat </strong>would be in <strong>Grants and Contributions</strong>. The nature of this transaction is such that it is a 1-way payment of money for which the government will not receive any good or service.</p><p><strong>Casual positions or leave cash-outs</strong> would be in <strong>Operating–Salary</strong> because they concern employees.&nbsp;</p><p><strong>Purchase a new fleet of trucks</strong> would be in <strong>Capital </strong>because they are assets that would depreciate over time.</p>"
    },
    "q2content": {
      "text": "Match the activity to its status. ",
      "options": {
        "1": "Issuing fishing licenses.",
        "2": "Next year, you are going to purchase software to replace a paper process.",
        "3": "Costs for an office move that was completed last year.",
        "4": "Consultations across Canada were stopped earlier this year."
      },
      "matching": {
        "1": "Sunsetted",
        "2": "Cancelled",
        "3": "Continuing",
        "4": "New"
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q2": {
      "conclusion": "<p><strong>Issuing fishing licenses</strong> is a <strong>continuing </strong>activity; it’s 1 of your main activities each year.&nbsp;</p><p><strong>Next year, you are going to purchase software to replace a paper process</strong> is a <strong>new </strong>activity, as you did not have this activity in previous plans.</p><p><strong>Costs for an office move that was completed last year</strong> is a <strong>sunsetted </strong>activity because it finished last year.&nbsp;</p><p><strong>Consultations across Canada were stopped earlier this year</strong> is a <strong>cancelled </strong>activity as the consultations were stopped and not completed.</p>"
    },
    "q3": {
      "text": "An employee will be retiring after 8 months next year, so you estimate their salary as:",
      "options": {
        "1": "Full salary",
        "2": "¾ of their salary",
        "3": "⅔ of their salary "
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is ⅔ of their salary. They will earn 8/12 of their salary or ⅔. ",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is ⅔ of their salary. They will earn 8/12 of their salary or ⅔. ",
        "3": "<span class='v-right' /> <strong>Correct!</strong>  They will earn 8/12 of their salary or ⅔."
      }
    },
    "q4": {
      "text": "An example of a trend is…",
      "options": {
        "1": "The budget for travel has increased year over year by a factor of 3%. ",
        "2": "An activity related to renewing fishing licenses was delayed due to Arctic weather. ",
        "3": "Less was spent on conferences last year because an employee left part-way through the year, so they didn’t attend a conference as planned.",
        "4": "The training budget was overspent by $6,000 last year."
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong> This is a trend because the increase has been the same percentage for a few years",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is “The budget for travel has increased year over year by a factor of 3%.” This is a trend because the increase has been the same percentage for a few years.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is The budget for travel has increased year over year by a factor of 3%. This is a trend because the increase has been the same percentage for a few years.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is The budget for travel has increased year over year by a factor of 3%. This is a trend because the increase has been the same percentage for a few years."
      }
    },
    "q5": {
      "text": "How would you use the information from trends in your budget requirements?",
      "options": {
        "1": "Use last year’s actual expenditures as a starting point to create my budget requirements.",
        "2": "Use last year’s budget as a starting point to create my budget requirements. ",
        "3": "Add last year’s numbers plus the projected increase in next year’s budget requirements."
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> All are correct. The trends you see may vary so how you use them in your budget requirements will differ.",
        "right": "<span class='v-right' /> <strong>Correct!</strong> The trends you see may vary so how you use them in your budget requirements will differ."
      }
    },
    "q6": {
      "text": "An example of a financial variance is …",
      "options": {
        "1": "$1,500 per employee used to calculate total training budget.",
        "2": "A surplus in the relocation budget of $10,000.",
        "3": "Issuing fishing licenses in 15 days."
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is “a surplus in the relocation budget of $10,000,” as $10,000 is the difference between budget and actual expenditures.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> $10,000 is the difference between budget and actual expenditures.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is “a surplus in the relocation budget of $10,000,” as $10,000 is the difference between budget and actual expenditures."
      }
    },
    "q7": {
      "text": "Last year’s travel variance was due to a new departmental priority to conduct a 3-year cross-Canada consultation, which resulted in more trips. Will you put this in your budget requirements for next year?",
      "options": {
        "1": "Yes.",
        "2": "No."
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong>",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is “yes.”"
      },
      "conclusion":" Consultations started last year, are continuing in the current year, and should end next year."
    },
    "q8": {
      "text": "Non-discretionary costs are: ",
      "options": {
        "1": "Costs that are not directly linked to your activities and therefore are less likely to have a negative impact on them.",
        "2": "Costs you planned for at the beginning of the fiscal year and that were incurred over the year.",
        "3": "Costs that are essential for delivering on your activities and, if cut, may result in not being able to deliver those activities."
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is “costs that are essential for delivering on your activities and, if cut, may result in not being able to deliver those activities.”",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is “costs that are essential for delivering on your activities and, if cut, may result in not being able to deliver those activites.”",
        "3": "<span class='v-right' /> <strong>Correct!</strong> "
      },
      "conclusion":"Non-discretionary costs, if reduced or cut, will seriously affect your ability to deliver on priorities."
    }
  },
  "fr": {
  "q1content": {
      "text": "Faites correspondre le poste au budget auquel il appartient. ",
      "options": {
        "1": "Un contrat avec une agence d'intérim",
        "2": "Fonds versés à une université pour étudier l'habitat du poisson",
        "3": "Les postes occasionnels ou les encaissements de congés",
        "4": "Achat d’un nouveau parc de camions"
      },
      "matching": {
        "1": "Fonctionnement – Salaires ",
        "2": "Fonctionnement – F et E",
        "3": "Subventions et contributions",
        "4": "Immobilisation "
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> ",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "qDisabled": "Choisissez",
    "q1a": {
      "text": "Faites correspondre le poste au budget auquel il appartient.",
      "options": {
        "1": "Un contrat avec une agence d’intérim"
      },
      "matching": {
        "1": "Fonctionnement - Salaires",
        "2": "Fonctionnement - F et E",
        "3": "Subventions et contributions",
        "4": "Capital"
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q1b": {
      "text": " ",
      "options": {
        "2": "Fonds versés à une université pour étudier l'habitat du poisson"
      },
      "matching": {
        "1": "Fonctionnement - Salaires",
        "2": "Fonctionnement - F et E",
        "3": "Subventions et contributions",
        "4": "Capital"
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q1c": {
      "text": " ",
      "options": {
        "3": "Les postes occasionnels ou les encaissements de congés"
      },
      "matching": {
        "1": "Fonctionnement - Salaires",
        "2": "Fonctionnement - F et E",
        "3": "Subventions et contributions",
        "4": "Capital"
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q1d": {
      "text": " ",
      "options": {
        "4": "Achat d’un nouveau parc de camions"
      },
      "matching": {
        "1": "Fonctionnement - Salaires",
        "2": "Fonctionnement - F et E",
        "3": "Subventions et contributions",
        "4": "Capital"
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q1": {
      "conclusion": "<p><strong>Un contrat avec une agence d’intérim</strong> devrait se trouver sous <strong>Fonctionnement - F et E</strong>, et non pas sous Fonctionnement - Salaires, parce que le personnel temporaire n’a pas le statut d'employé et que les contrats ne sont pas payés à même le poste des salaires.&nbsp;</p><p><strong>Les fonds allant à une université pour étudier l'habitat du poisson</strong> seraient fournis sous forme de <strong>subventions et de contributions</strong>. La nature de cette transaction est telle qu’il s’agit d’un paiement à sens unique pour lequel le gouvernement ne recevra aucun bien ni service.</p><p><strong>Les postes occasionnels ou les demandes de remboursement des congés</strong> se trouveraient dans la catégorie <strong>Fonctionnement - Salaires</strong> parce qu’ils concernent des employés.&nbsp;</p><p><strong>L’achat d’un nouveau parc de camions</strong> se trouverait sous <strong>Immobilisations  </strong>parce que ce sont des biens qui se déprécient avec le temps.</p>"
    },
        "q2content": {
      "text": "Faites correspondre l'activité à son statut. ",
      "options": {
        "1": "Délivrance des permis de pêche.",
        "2": "L'année prochaine, vous allez acheter un logiciel pour remplacer un processus manuel.",
        "3": "Les sommes prévues pour un déménagement de bureaux ont été dépensées l'an dernier.",
        "4": "Les consultations à l'échelle du Canada ont été interrompues plus tôt dans l’année."
      },
      "matching": {
        "1": "Éliminée progressivement",
        "2": "Annulée",
        "3": "Continue",
        "4": "Nouvelle "
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q2a": {
      "text": "Faites correspondre l’activité à son statut.",
      "options": {
        "1": "Délivrance des permis de pêche."
      },
      "matching": {
        "1": "Éliminé progressivement",
        "2": "Annulé",
        "3": "Continu",
        "4": "Nouveau"
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q2b": {
      "text": " ",
      "options": {
        "2": "L’année prochaine, vous allez acheter un logiciel pour remplacer un processus manuel."
      },
      "matching": {
        "1": "Éliminé progressivement",
        "2": "Annulé",
        "3": "Continu",
        "4": "Nouveau"
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q2c": {
      "text": " ",
      "options": {
        "3": "Les sommes prévues pour un déménagement de bureaux ont été dépensées l’an dernier."
      },
      "matching": {
        "1": "Éliminé progressivement",
        "2": "Annulé",
        "3": "Continu",
        "4": "Nouveau"
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q2d": {
      "text": " ",
      "options": {
        "4": "Les consultations à l’échelle du Canada ont été interrompues plus tôt dans l'année"
      },
      "matching": {
        "1": "Éliminé progressivement",
        "2": "Annulé",
        "3": "Continu",
        "4": "Nouveau"
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q2":{"conclusion":"<p><strong>L'émission de permis de pêche</strong> est une activité <strong>continue</strong>; c’est l’une de vos principales activités chaque année.&nbsp;</p><p><strong>L’année prochaine, vous allez acheter un logiciel pour remplacer un processus manuel,</strong> c'est une <strong>nouvelle</strong> activité, car cette activité n'était pas dans les plans précédents.</p><p><strong>Les coûts d’un déménagement de bureau qui a été effectué l’an dernier</strong> sont <strong>éliminés progressivement</strong>, car cette activité est terminée.&nbsp;</p><p><strong>Les consultations à travers le Canada ont été interrompues plus t&ocirc;t cette année</strong>, c’est une activité <strong>annulée</strong>, car les consultations ont été interrompues, donc non terminées.</p>"},
    "q3": {
      "text": "Un employé prendra sa retraite après 8 mois l’année prochaine, donc vous estimez son salaire comme étant :",
      "options": {
        "1": "salaire complet",
        "2": "¾ de son salaire",
        "3": "⅔ de son salaire"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong>  La bonne réponse est ⅔ de son salaire. Il gagnera 8/12 de son salaire, soit ⅔.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> La bonne réponse est ⅔ de son salaire. Il gagnera 8/12 de son salaire, soit ⅔.",
        "3": "<span class='v-right' /> <strong>Correct!</strong>  Il gagnera 8/12 de son salaire, soit ⅔."
      }
    },
    "q4": {
      "text": "Un exemple de tendance est ...",
      "options": {
        "1": "Le budget des voyages a augmenté de 3 % année après année.",
        "2": "Une activité liée au renouvellement des permis de pêche a été retardée en raison des conditions météorologiques dans l'Arctique.",
        "3": "L’an dernier, on a consacré moins d’argent aux conférences parce qu’un employé, parti au milieu d'année, n’a pas assisté à des conférences comme prévu.",
        "4": "Le budget de formation a été dépassé de 6&nbsp;000&nbsp;$ l’an dernier."
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong> Il s'agit d'une tendance parce que l'augmentation est la même depuis quelques années. ",

        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong>  La bonne réponse est « Le budget des voyages a augmenté de 3 % année après année ». Il s’agit d’une tendance parce que l’augmentation est la même depuis quelques années.",

        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>  La bonne réponse est « Le budget des voyages a augmenté de 3 % année après année ». Il s’agit d’une tendance parce que l’augmentation est la même depuis quelques années.",

        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong>  La bonne réponse est « Le budget des voyages a augmenté de 3 % année après année ». Il s’agit d’une tendance parce que l’augmentation est la même depuis quelques années."
      }
    },
    "q5": {
      "text": "Comment utiliseriez-vous l’information tirée des tendances de vos besoins budgétaires?",
      "options": {
        "1": "Utiliser les dépenses réelles de l’année dernière comme point de départ pour créer mes besoins budgétaires.",
        "2": "Utiliser le budget de l’année dernière comme point de départ pour créer mes besoins budgétaires.",
        "3": "Ajoutez les chiffres de l’an dernier et l’augmentation prévue des besoins budgétaires de l’an prochain."
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Toutes les réponses sont exactes. Les tendances que vous voyez peuvent varier, de sorte que la façon dont vous les utilisez dans vos besoins budgétaires peut changer. ",
        "right": "<span class='v-right' /> <strong>Correct!</strong> Les tendances que vous voyez peuvent varier, de sorte que la façon dont vous les utilisez dans vos besoins budgétaires peut changer."
      }
    },
    "q6": {
      "text": "Un exemple d’écart est …",
      "options": {
        "1": "1&nbsp;500&nbsp;$ par employé est utilisé pour calculer le budget total de formation.",
        "2": "Un surplus de 10&nbsp;000&nbsp;$ dans le budget de réinstallation.",
        "3": "Délivrance des permis de pêche en 15 jours. "
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong>  La bonne réponse est « Un surplus de 10&nbsp;000&nbsp;$ dans le budget de réinstallation », car 10&nbsp;000&nbsp;$ est la différence entre le budget et les dépenses réelles.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> 10&nbsp;000&nbsp;$ est la différence entre le budget et les dépenses réelles. ",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>  La bonne réponse est « Un surplus de 10&nbsp;000&nbsp;$ dans le budget de réinstallation », car 10&nbsp;000&nbsp;$ est la différence entre le budget et les dépenses réelles."
      }
    },
    "q7": {
      "text": "L'écart par rapport à l’an dernier s’explique par une nouvelle priorité ministérielle, soit la tenue d’une consultation de 3 ans à l’échelle du Canada, qui a entraîné un plus grand nombre de déplacements. En ferez-vous état dans votre budget de l’année prochaine?",
      "options": {
        "1": "Oui",
        "2": "Non"
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong>",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong>  La bonne réponse est Oui. "
      },
      "conclusion":"Les consultations ont commencé l’année dernière, se poursuivent pendant l’année en cours et devraient se terminer l’année prochaine."
    },
    "q8": {
      "text": "Les coûts non discrétionnaires sont :",
      "options": {
        "1": "Les coûts ne sont pas directement liés à vos activités et sont donc moins susceptibles d’avoir un impact négatif sur celles-ci.",
        "2": "Coûts que vous avez budgétés au début de l’exercice et qui ont été engagés au cours de l’exercice.",
        "3": "Les fonds qui sont essentiels à la réalisation de vos activités et qui, s’ils sont réduits, pourraient vous empêcher de les réaliser. "
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> La bonne réponse est « Les coûts qui sont essentiels à la réalisation de vos activités » et qui, s’ils sont réduits, pourraient vous empêcher de les réaliser.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> La bonne réponse est « Les coûts qui sont essentiels à la réalisation de vos activités » et qui, s’ils sont réduits, pourraient vous empêcher de les réaliser.",
        "3": "<span class='v-right' /> <strong>Correct!</strong> "
      },
      "conclusion":" Les fonds non discrétionnaires, s’ils sont réduits ou éliminés, affecteront sérieusement votre capacité à respecter vos priorités."
    }
  }
}</i18n>
<style type="text/css" scoped>
select {
  width: 100%;
}

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

.tableColoured td:before {
  counter-increment: wpParts;
  content: counter(wpParts);
  position: absolute;
  height: 2em;
  left: 0px;
  top: 0px;
  border-radius: 0 0 30px 0;
  padding: .1em .5em 0 .5em;
  color: white;
}

.tableColoured td {
  vertical-align: top;
  position: relative;
  padding-left: 35px;
}

.tableColoured select {
  max-width: 100%;
}

.vertical {
  transform: rotate(90deg);
}

.deptPri:before {
  background-color: #167777;
}

.deptPri {
  border-top: 2px solid #167777;
  background-color: #c7e0e0
}

.govtPri {
  border-top: 2px solid #6C076C;
  background-color: #e1c8e1
}

.govtPri:before {
  background-color: #6C076C;
}

.dirPri {
  border-top: 2px solid #6F1E0D;
  background-color: #e2ceca
}

.dirPri:before {
  background-color: #6F1E0D;
}

.planAct {
  border-top: 2px solid #577a90;
  background-color: #E2E8EC;
}

.planAct:before {
  background-color: #577a90;
}

.planSubAct {
  border-top: 2px solid #3A8251;
  background-color: #dcefe3;
}

.planSubAct:before {
  background-color: #3A8251;
}

.planDelivs {
  border-top: 2px solid #616EB8;
  background-color: #dfe2f1;
}

.planDelivs:before {
  background-color: #616EB8;
}

.planRisk {
  border-top: 2px solid #8D9245;
  background-color: #f0f1df;
}

.planRisk:before {
  background-color: #8D9245;
}

.planLikely {
  border-top: 2px solid #775F75;
  background-color: #E1DCE1;
}

.planLikely:before {
  background-color: #775F75;
}

.planImpact {
  border-top: 2px solid #607293;
  background-color: hsl(219, 21%, 91%);
}

.planImpact:before {
  background-color: #607293;
}

.planMitigat {
  border-top: 2px solid #B35685;
  background-color: #f1dfe8;
}

.planMitigat:before {
  background-color: #B35685;
}

.planRes {
  border-top: 2px solid #C35522;
  background-color: #f1e5df;
}

.planRes:before {
  background-color: #C35522;
}

.thNumbered {
  position: relative;
  text-align: center;
  padding-left: 25px;
}

.thNumbered:before {
  position: absolute;
  counter-increment: wpParts;
  content: counter(wpParts);
  height: 2em;
  left: 0px;
  top: 0px;
  border-radius: 0 0 30px 0;
  padding: .1em .5em 0 .5em;
  color: white;
}
</style>