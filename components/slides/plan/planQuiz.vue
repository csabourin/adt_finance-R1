<template>
  <span>
    <div>
      <b-card>
        <b-tabs v-model="tabIndex">
          <b-tab title="Question 1"><radioQuiz :question="$t('q1')" qId="1" /></b-tab>
          <b-tab title="Question 2"><checkboxQuiz :question="$t('q2')" qId="2" :Answer='["1","2"]' /></b-tab>
          <b-tab title="Question 3"><radioQuiz :question="$t('q3')" qId="3" /></b-tab>
          <b-tab title="Question 4"><radioQuiz :question="$t('q4')" qId="4" /></b-tab>
          <b-tab title="Question 5"><radioQuiz :question="$t('q5')" qId="5" /></b-tab>
          <b-tab title="Question 6"><radioQuiz :question="$t('q6')" qId="6" /></b-tab>
          <b-tab title="Question 7"><radioQuiz :question="$t('q7')" qId="7" /></b-tab>
          <b-tab title="Question 8"><checkboxQuiz :question="$t('q8')" qId="8" :Answer='["1","2","3"]' /></b-tab>
          <b-tab title="Question 9"><checkboxQuiz :question="$t('q9')" qId="9" :Answer='["3","4","5"]' /></b-tab>
          <b-tab title="Question 10"><radioQuiz :question="$t('q10')" qId="10" /></b-tab>
          <b-tab title="Question 11"><radioQuiz :question="$t('q11')" qId="11" /></b-tab>
          <b-tab title="Question 12"><radioQuiz :question="$t('q12')" qId="12" /></b-tab>
          <b-tab title="Question 13"><radioQuiz :question="$t('q13')" qId="13" /></b-tab>
          <b-tab title="Question 14"><radioQuiz :question="$t('q14')" qId="14" /></b-tab>
          <b-tab title="Question 15"><radioQuiz :question="$t('q15')" qId="15" /></b-tab>
        </b-tabs>
      </b-card>
      <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=14">{{$t('nextPage')}}</b-button>
        </b-button-group>
      </div>
    </div>
  </span>
</template>
<script type="text/javascript">
import radioQuiz from "~/components/radioQuiz"
import checkboxQuiz from "~/components/checkboxQuiz"
export default {
  components: { radioQuiz, checkboxQuiz },
  data() {
    return {
      tabIndex: 0
    }
  },
  methods:{
    focus(){
      setTimeout(function(){
        document.querySelector(".tab-pane.active .pure-radiobutton fieldset, .tab-pane.active .pure-checkbox fieldset, .tab-pane.active .workplan-table").setAttribute("tabindex", 0);
        document.querySelector(".tab-pane.active .pure-radiobutton fieldset, .tab-pane.active .pure-checkbox fieldset, .tab-pane.active .workplan-table").focus();
      }, 300);
    }
  }
}
</script>
<i18n>{
  "en": {
    "qDisabled": "Choose",
        "q1": {
      "text": "What is a work plan?",
      "options": {
        "1": "A daily to-do list",
        "2": "The activities to be carried out over a fiscal year",
        "3": "The amounts of money to be spent ",
        "4": "A summary of what you have accomplished"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> The work plan is made up of all the activities to be carried out over a fiscal year. ",
        "2": "<span class='v-right' /> <strong>Correct!</strong> ",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> The work plan is made up of all the activities to be carried out over a fiscal year. ",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> Incorrect. The work plan is made up of all the activities to be carried out over a fiscal year. "
      }
    },
    "q2": {
      "text": "Which elements should you consider when drafting your new work plan? ",
      "options": {
        "1": "Government priorities, departmental priorities and directorate priorities",
        "2": "Previous year’s work plan, budget and, reports",
        "3": "Your colleague’s work plan from last year"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> ",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> You should consider government priorities, departmental priorities and directorate priorities as well as the previous year’s work plan, budget and reports when drafting your new work plan. Unless the activities of your colleague have been transferred to your team, you would not take them into account. "
      }
    },
    "q3": {
      "text": "A departmental priority in your work plan goes back to:",
      "options": {
        "1": "the directorate’s plan",
        "2": "the Departmental Plan",
        "3": "the Speech from the Throne"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Departmental priorities flow from the Speech from the Throne, where the Government lays out its priorities. ",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Departmental priorities flow from the Speech from the Throne, where the Government lays out its priorities. ",
        "3": "<span class='v-right' /> <strong>Correct!</strong>  To understand the big picture, start by looking at the priorities set out in the  Speech from the Throne."
      }
    },
    "q4": {
      "text": "To find your department’s core responsibilities, expected results and indicators, you would look at:",
      "options": {
        "1": "the directorate’s plan",
        "2": "the Departmental Plan",
        "3": "the Speech from the Throne",
        "4": "the sector’s plan"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Your department’s core responsibilities, expected results and indicators are found in the Departmental Plan.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> Your department’s core responsibilities, expected results and indicators are found in the Departmental Plan.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Your department’s core responsibilities, expected results and indicators are found in the Departmental Plan.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> Your department’s core responsibilities, expected results and indicators are found in the Departmental Plan."
      }
    },
    "q5": {
      "text": "The Prime Minister sets out the expectations and objectives for your department in: ",
      "options": {
        "1": "the Speech from the Throne",
        "2": "the Departmental Results Framework",
        "3": "the mandate letter",
        "4": "the Departmental Plan"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> The Prime Minister outlines the expectations and objectives for your department in the mandate letter to the minister responsible.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> The Prime Minister outlines the expectations and objectives for your department in the mandate letter to the minister responsible.",
        "3": "<span class='v-right' /> <strong>Correct!</strong> The Prime Minister outlines their expectations and objectives in the mandate letter to the minister responsible for the department.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> The Prime Minister outlines the expectations and objectives for your department in the mandate letter to the minister responsible."
      }
    },
    "q6": {
      "text": "To conduct a 360&deg; scan, you must do the following.",
      "options": {
        "1": "Get a sense of the current situation by examining what was done in the recent past.",
        "2": "Look at previous work plans, budgets and reports.",
        "3": "Identify challenges from the previous years.",
        "4": "Get a sense of the cultural context in your department, branch or directorate.",
        "5": "All of the above."
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> You must do all these activities to conduct a 360&deg; review.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> You must do all these activities to conduct a 360&deg; review.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> You must do all these activities to conduct a 360&deg; review.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> You must do all these activities to conduct a 360&deg; review.",
        "5": "<span class='v-right' /> <strong>Correct!</strong>  You must do all these activities to conduct a 360&deg; review."
      }
    },
    "q7": {
      "text": "Choose the priorities your work plan activities should link to, starting from the top.",
      "options": {
        "1": "Departmental priorities, directorate priorities, government priorities",
        "2": "Government priorities, departmental priorities, directorate priorities",
        "3": "Directorate priorities, government priorities, departmental priorities"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> The priorities starting from the top are: Government priorities, departmental priorities, directorate priorities.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> ",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> The priorities starting from the top are: Government priorities, departmental priorities, directorate priorities."
      }
    },
    "q8": {
      "text": "Which situations would cause you to update your work plan?",
      "options": {
        "1": "A new director is nominated",
        "2": "An employee leaves ",
        "3": "Mandatory training is pushed to next year",
        "4": "Over 500 licences have been issued ",
        "5": "Your software gets an update"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> ",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> The nomination of a new director, the departure of an employee and mandatory training being pushed back to the next year all require an update to the work plan."
      }
    },
    "q9": {
      "text": "What are a manager’s responsibilities?",
      "options": {
        "1": "To establish government-wide priorities",
        "2": "To negotiate government contracts",
        "3": "To plan the unit’s activities",
        "4": "To use public funds to carry out the unit’s activities",
        "5": "To report on the status of the unit’s activities"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> ",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> A manager is responsible for planning the unit’s activities, using public funds to carry out the unit’s activities and reporting on the status of the unit’s activities."
      }
    },
    "q10": {
      "text": "What are deliverables?",
      "options": {
        "1": "The work tasks to be accomplished to support your directorate’s priorities.",
        "2": "The specific and tangible items you should be able to check off your list when you accomplish them.",
        "3": "The budget, personnel, consultants, buildings and materials required to carry out the directorate activities."
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Deliverables are more specific and tangible than the activities.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> ",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> These are the resources. Deliverables are specific and tangible items you should be able to check off your list when you accomplish them."
      }
    },
    "q11": {
      "text": "Which activities should you include in your new work plan?",
      "options": {
        "1": "Ongoing activities, new activities, completed activities",
        "2": "Ongoing activities, new activities",
        "3": "New activities, completed activities",
        "4": "New activities, completed activities, project activities",
        "5": "Ongoing activities, completed activities, project activities"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Only ongoing activities and new activities should be included.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> ",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Only ongoing activities and new activities should be included.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> Only ongoing activities and new activities should be included.",
        "5": "<span class='v-wrong' /> <strong>Incorrect.</strong> Only ongoing activities and new activities should be included."
      }
    },
    "q12": {
      "text": "Which of the following is an example of a government priority?",
      "options": {
        "1": "Modernize and renew the organization’s workforce to better serve Canadians",
        "2": "Work with Canadians in all areas of the economy across the country to improve conditions for investment",
        "3": "Implement activity-based workstations to improve team collaboration and communication"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is “Work with Canadians in all areas of the economy across the country to improve conditions for investment.”",
        "2": "<span class='v-right' /> <strong>Correct!</strong> Broad goal and commitment statements such as this one are usually reserved for government priorities.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is “Work with Canadians in all areas of the economy across the country to improve conditions for investment.”"
      }
    },
    "q13": {
      "text": "Which of the following is an example of a sub-activity?",
      "options": {
        "1": "Buy and distribute tablets",
        "2": "Usage of tablets by employees",
        "3": "Equip employees with new digital tools to promote mobility"
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong> Sub-activities are activities broken into smaller parts.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is “Buy and distribute tablets.” Sub-activities are activities broken into smaller parts.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is “Buy and distribute tablets.” Sub-activities are activities broken into smaller parts."
      }
    },
    "q14": {
      "text": "Which of the following are considered to be risks?",
      "options": {
        "1": "A 15-minute power failure, minor software bugs",
        "2": "Licensing fees, fisheries management",
        "3": "Power failures, well-managed fish stocks",
        "4": "Overfishing, staff turnover"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong>  A 15-minute power failure shouldn’t be significant enough to be considered a risk. Overfishing and staff turnover are risks.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> These are not risks. Overfishing and staff turnover are risks.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Well-managed fish stocks are not risks. Overfishing and staff turnover are risks.",
        "4": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q15": {
      "text": "How often does a manager need to recertify to be able to continue to exercise their financial authority?",
      "options": {
        "1": "Every year",
        "2": "Every 2 years",
        "3": "Every 5 years"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Managers need to recertify every 5 years.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Managers need to recertify every 5 years.",
        "3": "<span class='v-right' /> <strong>Correct!</strong> "
      }
    }
  },
  "fr": {
    "qDisabled": "Choisissez",
        "q1": {
      "text": "Qu'est-ce qu'un plan de travail?",
      "options": {
        "1": "Une liste quotidienne des tâches à accomplir",
        "2": "Les activités à réaliser au cours d'un exercice comptable",
        "3": "Les sommes d'argent à dépenser",
        "4": "Un résumé de ce que vous avez accompli"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Le plan de travail est constitué de toutes les activités qui s'échelonneront au cours d'un exercice comptable.",
        "2": "<span class='v-right' /> <strong>Correct!</strong>",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>  Le plan de travail est constitué de toutes les activités à réaliser sur une période d'un an.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong>  Le plan de travail est constitué  de toutes les activités qui s'échelonneront au cours d'un exercice comptable."
      }
    },
    "q2": {
      "text": "Quels éléments devez-vous prendre en compte lors de l’élaboration de votre nouveau plan de travail? ",
      "options": {
        "1": "Priorités gouvernementales, priorités ministérielles et priorités de la Direction ",
        "2": "Plan de travail, budget et rapports de l’année précédente",
        "3": "Le plan de travail de votre collègue gestionnaire de l’année dernière"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> ",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Incorrect. Vous devriez tenir compte des priorités gouvernementales, ministérielles et de la direction, ainsi que du plan de travail, du budget et des rapports de l'année précédente lorsque vous rédigez votre nouveau plan de travail. À moins que les activités de votre collègue n'aient été transférées à votre équipe, vous n’en tiendrez pas compte. "
      }
    },
    "q3": {
      "text": "Une priorité ministérielle du plan de travail remonte au :",
      "options": {
        "1": "plan de la Direction ",
        "2": "plan ministériel",
        "3": "discours du Trône"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les priorités ministérielles découlent du discours du Trône, dans lequel le gouvernement énonce ses priorités.  ",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les priorités ministérielles découlent du discours du Trône, dans lequel le gouvernement énonce ses priorités.  ",
        "3": "<span class='v-right' /> <strong>Correct!</strong> Pour comprendre la vue d’ensemble, commencez en consultant les priorités énoncées dans le discours du Trône."
      }
    },
    "q4": {
      "text": "Pour trouver les principales responsabilités de votre ministère, les résultats escomptés et les indicateurs, vous devriez vous tourner vers :",
      "options": {
        "1": "le plan de la Direction ",
        "2": "le Plan ministériel",
        "3": "le discours du Trône",
        "4": "le plan du secteur"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les responsabilités fondamentales, les résultats escomptés et les indicateurs de votre ministère se trouvent dans le Plan ministériel. ",
        "2": "<span class='v-right' /> <strong>Correct!</strong> Les responsabilités fondamentales, les résultats escomptés et les indicateurs de votre ministère se trouvent dans le Plan ministériel.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les responsabilités fondamentales, les résultats escomptés et les indicateurs de votre ministère se trouvent dans le Plan ministériel. ",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les responsabilités fondamentales, les résultats escomptés et les indicateurs de votre ministère se trouvent dans le Plan ministériel. "
      }
    },
    "q5": {
      "text": "Le premier ministre énonce ses attentes et ses objectifs pour votre ministère dans : ",
      "options": {
        "1": "le discours du Trône",
        "2": "le Cadre ministériel des résultats ",
        "3": "la lettre de mandat",
        "4": "le plan ministériel"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Le premier ministre décrit ses attentes et ses objectifs dans la lettre de mandat adressée au ministre responsable de votre ministère.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Le premier ministre décrit ses attentes et ses objectifs dans la lettre de mandat adressée au ministre responsable de votre ministère.",
        "3": "<span class='v-right' /> <strong>Correct!</strong> Le premier ministre décrit ses attentes et ses objectifs dans la lettre de mandat adressée au ministre responsable de votre ministère.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> Le premier ministre décrit ses attentes et ses objectifs dans la lettre de mandat adressée au ministre responsable de votre ministère."
      }
    },
    "q6": {
      "text": "Pour effectuer un aperçu à 360 degrés, vous devez procéder comme il est indiqué ci-dessous : ",
      "options": {
        "1": "Se faire une idée de la situation actuelle en examinant ce qui a été fait dans un passé récent.",
        "2": "Examinez les plans de travail, budgets et rapports antérieurs.",
        "3": "Identifier les défis des années précédentes.",
        "4": "Se faire une idée du contexte culturel de son ministère, de sa direction générale ou de sa direction.",
        "5": "Toutes ces réponses."
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Vous devez faire toutes ces activités pour effectuer un aperçu à 360 degrés.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Vous devez faire toutes ces activités pour effectuer un aperçu à 360 degrés.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Vous devez faire toutes ces activités pour effectuer un aperçu à 360 degrés.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> Vous devez faire toutes ces activités pour effectuer un aperçu à 360 degrés.",
        "5": "<span class='v-right' /> <strong>Correct!</strong>  Vous devez faire toutes ces activités pour effectuer un aperçu à 360 degrés."
      }
    },
    "q7": {
      "text": "Choisissez les priorités auxquelles les activités du plan de travail devraient se rattacher, en commençant par le haut.",
      "options": {
        "1": "Priorités ministérielles, priorités de la Direction, priorités du gouvernement",
        "2": "Priorités gouvernementales, priorités ministérielles, priorités de la Direction",
        "3": "Priorités de la Direction, priorités gouvernementales, priorités ministérielles"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les priorités à partir du haut sont : Priorités gouvernementales, priorités ministérielles, priorités de la Direction.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> ",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les priorités à partir du haut sont : Priorités gouvernementales, priorités ministérielles, priorités de la Direction."
      }
    },
    "q8": {
      "text": "Quelles situations vous amèneraient à mettre à jour le plan de travail?",
      "options": {
        "1": "Un nouvel administrateur est nommé.",
        "2": "Un employé s’en va.",
        "3": "La formation obligatoire est reportée à l’année prochaine.",
        "4": "Plus de 500 permis ont été délivrés.",
        "5": "Votre logiciel fait l’objet d’une mise à jour."
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> ",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> La nomination d’un nouvel administrateur, le départ d’un employé et le report de la formation obligatoire à l’année suivante exigent tous une mise à jour du plan de travail."
      }
    },
    "q9": {
      "text": "Quelles sont les responsabilités d’un gestionnaire?",
      "options": {
        "1": "Établir des priorités à l’échelle du gouvernement",
        "2": "Négocier les contrats gouvernementaux",
        "3": "Planifier les activités de son unité",
        "4": "Utiliser les fonds publics pour mener à bien les activités de son unité",
        "5": "Faire rapport de l’état d’avancement des activités de son unité"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> ",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Un gestionnaire est responsable de la planification des activités de son unité, de l’utilisation des fonds publics pour mener à bien les activités de son unité et de la production de rapports sur l’état des activités de son unité."
      }
    },
    "q10": {
      "text": "Que sont les livrables?",
      "options": {
        "1": "Les tâches de travail à accomplir pour appuyer les priorités de votre direction.",
        "2": "Les éléments spécifiques et tangibles que vous devriez être en mesure de cocher sur votre liste lorsque vous les réalisez.",
        "3": "Le budget, le personnel, les consultants, les bâtiments et le matériel nécessaires à l’exécution des activités de la direction."
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les livrables sont plus précis et tangibles que les activités.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> ",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Ce sont les ressources. Les livrables font partie des éléments précis et tangibles que vous devriez être en mesure de cocher sur votre liste lorsque vous les réalisez."
      }
    },
    "q11": {
      "text": "Quelles activités devriez-vous inclure dans votre nouveau plan de travail?",
      "options": {
        "1": "Activités en cours, nouvelles activités, activités terminées",
        "2": "Activités en cours, nouvelles activités",
        "3": "Nouvelles activités, activités terminées",
        "4": "Nouvelles activités, activités terminées, activités du projet",
        "5": "Activités en cours, activités terminées, activités du projet"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Seules les activités en cours et les nouvelles activités devraient être incluses.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> ",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Seules les activités en cours et les nouvelles activités devraient être incluses.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> Seules les activités en cours et les nouvelles activités devraient être incluses.",
        "5": "<span class='v-wrong' /> <strong>Incorrect.</strong> Seules les activités en cours et les nouvelles activités devraient être incluses."
      }
    },
    "q12": {
      "text": "Lequel des éléments suivants est un exemple d’une priorité gouvernementale?",
      "options": {
        "1": "Moderniser et renouveler les effectifs de l'organisation pour mieux servir les Canadiens.",
        "2": "Travailler avec les Canadiens dans tous les secteurs de l'économie à travers le pays pour améliorer les conditions d'investissement.",
        "3": "Mettre en place des postes de travail basés sur les activités pour améliorer la collaboration et la communication au sein des équipes."
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> La bonne réponse est «&nbsp;Travailler avec les Canadiens dans tous les secteurs de l'économie à travers le pays pour améliorer les conditions d'investissement&nbsp;». ",
        "2": "<span class='v-right' /> <strong>Correct!</strong> De telles déclarations d'objectifs et d'engagements généraux sont généralement réservées aux priorités du gouvernement.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> La bonne réponse est «&nbsp;Travailler avec les Canadiens dans tous les secteurs de l'économie à travers le pays pour améliorer les conditions d'investissement&nbsp;». "
      }
    },
    "q13": {
      "text": "Lequel des éléments suivants est un exemple de sous-activité?",
      "options": {
        "1": "Acheter et distribuer des tablettes",
        "2": "L’utilisation de tablettes par les employés",
        "3": "Doter les salariés de nouveaux outils numériques pour favoriser la mobilité"
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong> Les sous-activités sont des activités divisées en plus petites parties.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> La bonne réponse est «&nbsp;Acheter et distribuer des tablettes&nbsp;». Les sous-activités sont des activités divisées en plus petites parties.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> La bonne réponse est «&nbsp;Acheter et distribuer des tablettes&nbsp;». Les sous-activités sont des activités divisées en plus petites parties."
      }
    },
    "q14": {
      "text": "Quels sont les risques considérés?",
      "options": {
        "1": "Panne d’électricité de 15 minutes, bogues mineurs de logiciels",
        "2": "Droits de permis, gestion des pêches",
        "3": "Pannes d’électricité, stocks de poissons bien gérés",
        "4": "Surpêche, roulement du personnel"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Une panne de courant de 15 minutes ne devrait pas être suffisante pour être considérée comme un risque. Par contre, la surpêche et le roulement du personnel sont des risques.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Ce ne sont pas des risques. Par contre, la surpêche et le roulement du personnel sont des risques.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les stocks de poissons bien gérés ne sont pas des risques. Par contre, la surpêche et le roulement du personnel sont des risques.",
        "4": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q15": {
      "text": "À quelle fréquence un gestionnaire doit-il renouveler son attestation pour pouvoir continuer à exercer ses pouvoirs financiers ?",
      "options": {
        "1": "Chaque année",
        "2": "Tous les 2 ans",
        "3": "Tous les 5 ans"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les gestionnaires doivent renouveler leur accréditation tous les 5 ans.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les gestionnaires doivent renouveler leur accréditation tous les 5 ans.",
        "3": "<span class='v-right' /> <strong>Correct!</strong> "
      }
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

.tableColoured td:before, .tableColoured div:before {
  counter-increment: wpParts;
  content: counter(wpParts);
  position: absolute;
  height: 2em;
  left: 0px;
  top: 0px;
  border-radius: 0 0 30px 0;
  padding: .1em .5em 0 .5em;
  color: white;
  font-weight:bold;
}

.tableColoured td, .tableColoured div{
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
  font-weight:bold;
}

/* Wokring ... in */
div.tableColoured div {
  height:40px;
}
div.tableColoured p {
  margin:0;
}

.microTablePart2 div.thNumbered {
  float:left;
  height:40px;
  /* display:inline-block; */
  padding:0;
  margin:0;
  width:12.5%;
}
.microTablePart2 {
  /* position:relative; */
  width:100%;
}

/* Wokring ... out */

</style>