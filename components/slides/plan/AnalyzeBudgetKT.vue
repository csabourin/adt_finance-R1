<template>
  <fieldset>
    <legend>
      <p v-html="$t('instructions')" />
    </legend>
    <b-card>
      <b-tabs v-model="tabIndex">
        <b-tab title="Question 1">
          <fillTheBlanks :blanks="1" :sentence="$t('q1.sentence')" :termList="$t('q1.choices')" :answer="['2']" :feedback="$t('q1.feedback')" qid="q1" /><hr>
          <fillTheBlanks :blanks="1" :sentence="$t('q2.sentence')" :termList="$t('q2.choices')" :answer="['1']" :feedback="$t('q2.feedback')" qid="q2" /><hr>
          <fillTheBlanks :blanks="1" :sentence="$t('q3.sentence')" :termList="$t('q3.choices')" :answer="['1']" :feedback="$t('q3.feedback')" qid="q3" /><hr>
          <fillTheBlanks :blanks="1" :sentence="$t('q4.sentence')" :termList="$t('q4.choices')" :answer="['3']" :feedback="$t('q4.feedback')" qid="q4" /><hr>
          <fillTheBlanks :blanks="2" :sentence="$t('q5.sentence')" :termList="$t('q5.choices')" :answer="['1','2']" :feedback="$t('q5.feedback')" qid="q5" /><hr>
          <fillTheBlanks :blanks="1" :sentence="$t('q6.sentence')" :termList="$t('q6.choices')" :answer="['3']" :feedback="$t('q6.feedback')" qid="q6" /><hr>
          <fillTheBlanks :blanks="1" :sentence="$t('q7.sentence')" :termList="$t('q7.choices')" :answer="['4']" :feedback="$t('q7.feedback')" qid="q7" />
        </b-tab>
        <b-tab title="Question 2">
          <fillTheBlanks :blanks="1" :sentence="$t('q8.sentence')" :termList="$t('q8.choices')" :answer="['1']" :feedback="$t('q8.feedback')" qid="q8" /><hr>
          <fillTheBlanks :blanks="1" :sentence="$t('q9.sentence')" :termList="$t('q9.choices')" :answer="['2']" :feedback="$t('q9.feedback')" qid="q9" /><hr>
          <fillTheBlanks :blanks="1" :sentence="$t('q10.sentence')" :termList="$t('q10.choices')" :answer="['3']" :feedback="$t('q10.feedback')" qid="q10" />
        </b-tab>
        <b-tab title="Question 3">
          <fillTheBlanks :blanks="1" :sentence="$t('q11.sentence')" :termList="$t('q11.choices')" :answer="['1']" :feedback="$t('q11.feedback')" qid="q11" /><hr>
          <fillTheBlanks :blanks="1" :sentence="$t('q12.sentence')" :termList="$t('q12.choices')" :answer="['2']" :feedback="$t('q12.feedback')" qid="q12" />
        </b-tab>
      </b-tabs>
      <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=2">{{$t('nextPage')}}</b-button>
        </b-button-group>
      </div>
    </b-card>
  </fieldset>
</template>
<script type="text/javascript">
  import fillTheBlanks from "~/components/interface/fillTheBlanks"
export default {
  components: {
    fillTheBlanks
  },
  data(){
    return{
      tabIndex:0
    }
  },
  methods:{
    focus(){
      setTimeout(function(){
        document.querySelector(".tab-pane.active").setAttribute("tabindex", 0);
        document.querySelector(".tab-pane.active").focus();
      }, 300);
    }
  }
}
</script>
<i18n>
  {
  "en": {
    "instructions": "Here's a chance for you to confirm your knowledge of budgets and costs. Select the best choice to fill in the blanks.",
    "q1": {
      "sentence": "{0} includes indeterminate, term and casual positions, overtime, performance pay and leave cash-outs.",
      "choices": {
        "1": "Operating &amp; Maintenance (O&amp;M)",
        "2": "Salary",
        "3": "Grants and Contributions (Gs&amp;Cs)",
        "4": "Capital"
      },
      "feedback": {
        "right": "The Salary budget contains these items.",
        "wrong": "The Salary budget contains these items."
      }
    },
    "q2": {
      "sentence": "{0} includes items such as travel, training, translation, office supplies, etc.",
      "choices": {
        "1": "Operating &amp; Maintenance (O&amp;M)",
        "2": "Salary",
        "3": "Grants and Contributions (Gs&amp;Cs)",
        "4": "Capital"
      },
      "feedback": {
        "right": "The Operating & Maintenance (O&M) budget contains these items.",
        "wrong": "The Operating & Maintenance (O&M) budget contains these items."
      }
    },
    "q3": {
      "sentence": "Temporary help is considered a contract and paid out of {0}.",
      "choices": {
        "1": "Operating &amp; Maintenance (O&amp;M)",
        "2": "Salary",
        "3": "Grants and Contributions (Gs&amp;Cs)",
        "4": "Capital"
      },
      "feedback": {
        "right": "The Operating & Maintenance (O&M) budget would have a line item for a temporary help contract. ",
        "wrong": "The Operating & Maintenance (O&M) budget would have a line item for a temporary help contract. "
      }
    },
    "q4": {
      "sentence": "Money given to non-governmental organizations for refugee settlement, like language classes, would come out of the {0} budget.",
      "choices": {
        "1": "Operating &amp; Maintenance (O&amp;M)",
        "2": "Salary",
        "3": "Grants and Contributions (Gs&amp;Cs)",
        "4": "Capital"
      },
      "feedback": {
        "right": "These funds would come from the Grants and Contributions (Gs&Cs) budget.",
        "wrong": "These funds would come from the Grants and Contributions (Gs&Cs) budget."
      }
    },
    "q5": {
      "sentence": "The operating budget consists of both {0} and {1}.",
      "choices": {
        "1": "Operating &amp; Maintenance (O&amp;M)",
        "2": "Salary",
        "3": "Grants and Contributions (Gs&amp;Cs)",
        "4": "Capital"
      },
      "feedback": {
        "right": "The Operating budget consists of both Salary and Operating & Maintenance (O&M).",
        "wrong": "The Operating budget consists of both Salary and Operating & Maintenance (O&M)."
      }
    },
    "q6": {
      "sentence": "{0} is money that is provided to entities outside of the federal government to advance the department's mandate.",
      "choices": {
        "1": "Operating &amp; Maintenance (O&amp;M)",
        "2": "Salary",
        "3": "Grants and Contributions (Gs&amp;Cs)",
        "4": "Capital"
      },
      "feedback": {
        "right": "These funds would come from the Grants and Contributions (Gs&Cs) budget.",
        "wrong": "These funds would come from the Grants and Contributions (Gs&Cs) budget."
      }
    },
    "q7": {
      "sentence": "{0} is for items that will depreciate over time, such as a new addition to an existing building, vehicles, etc.",
      "choices": {
        "1": "Operating &amp; Maintenance (O&amp;M)",
        "2": "Salary",
        "3": "Grants and Contributions (Gs&amp;Cs)",
        "4": "Capital"
      },
      "feedback": {
        "right": "These funds would come from the Capital budget.",
        "wrong": "These funds would come from the Capital budget."
      }
    },
    "q8": {
      "sentence": "{0} costs are essential for delivering on your activities, and if cut, will result in you not being able to deliver on them.",
      "choices": {
        "1": "Non-discretionary",
        "2": "Discretionary",
        "3": "Notes"
      },
      "feedback": {
        "right": "Essential costs are non-discretionary. ",
        "wrong": "Essential costs are non-discretionary. "
      }
    },
    "q9": {
      "sentence": "{0} costs are less likely to have a negative impact on delivering your activities.",
      "choices": {
        "1": "Non-discretionary",
        "2": "Discretionary",
        "3": "Notes"
      },
      "feedback": {
        "right": "These costs would be discretionary. ",
        "wrong": "These costs would be discretionary. "
      }
    },
    "q10": {
      "sentence": "A best practice is to include a {0} column in your budget requirements to remind you how you arrived at your figures.",
      "choices": {
        "1": "Non-discretionary",
        "2": "Discretionary",
        "3": "Notes"
      },
      "feedback": {
        "right": "A notes column will help you keep track of your budget requirements. It may not be something you submit but it’s good to have in your “back pocket.” ",
        "wrong": "A notes column will help you keep track of your budget requirements. It may not be something you submit but it’s good to have in your “back pocket.” "
      }
    },
    "q11": {
      "sentence": "If you have reference levels, you start with {0}. ",
      "choices": {
        "1": "a predetermined budget amount",
        "2": "$0"
      },
      "feedback": {
        "right": "You have a predetermined budget amount for your budget, and will need to determine if it is enough, too too little, or too much. Some departments provide reference levels and others don’t. ",
        "wrong": "You have a predetermined budget amount for your budget, and will need to determine if it is enough, too too little, or too much. Some departments provide reference levels and others don’t. "
      }
    },
    "q12": {
      "sentence": "If you don't have reference levels, you start with {0}.",
      "choices": {
        "1": "a predetermined budget amount",
        "2": "$0"
      },
      "feedback": {
        "right": "Your starting point is $0. For continuing activities, you can use last year’s and the current year’s figures to help with your budget requirements. For new activities, you need to estimate the costs. ",
        "wrong": "Your starting point is $0. For continuing activities, you can use last year’s and the current year’s figures to help with your budget requirements. For new activities, you need to estimate the costs. "
      }
    }
  },
  "fr": {
    "instructions": "Voici l&rsquo;occasion pour vous de confirmer votre connaissance des budgets et des coûts. Sélectionnez le meilleur choix pour remplir les blancs. ",
    "q1": {
      "sentence": "{0} comprend les postes permanents, de durée déterminée et de durée occasionnelle, les heures supplémentaires, la rémunération au rendement et les demandes de remboursement des congés.",
      "choices": {
        "1": "Fonctionnement et entretien (F et E)",
        "2": "Salaires",
        "3": "Subventions et contributions (S et C)",
        "4": "Immobilisations"
      },
      "feedback": {
        "right": "Le budget salarial comprend ces postes.",
        "wrong": "Le budget salarial comprend ces postes."
      }
    },
    "q2": {
      "sentence": "{0} comprend des articles comme les voyages, la formation, la traduction, les fournitures de bureau, etc.",
      "choices": {
        "1": "Fonctionnement et entretien (F et E)",
        "2": "Salaires",
        "3": "Subventions et contributions (S et C)",
        "4": "Immobilisations"
      },
      "feedback": {
        "right": "Le budget de fonctionnement et d'entretien (F et E) comprend ces postes.",
        "wrong": "Le budget de fonctionnement et d'entretien (F et E) comprend ces postes."
      }
    },
    "q3": {
      "sentence": "L’aide temporaire est considérée comme un contrat et est payée à même {0}.",
      "choices": {
        "1": "Fonctionnement et entretien (F et E)",
        "2": "Salaires",
        "3": "Subventions et contributions (S et C)",
        "4": "Immobilisations"
      },
      "feedback": {
        "right": "Le budget de fonctionnement et d'entretien (F et E) comprendrait un poste pour un contrat d'aide temporaire.",
        "wrong": "Le budget de fonctionnement et d'entretien (F et E) comprendrait un poste pour un contrat d'aide temporaire."
      }
    },
    "q4": {
      "sentence": "L’argent donné aux organisations non gouvernementales pour l’établissement des réfugiés, comme les cours de langue, proviendrait du budget de {0}",
      "choices": {
        "1": "Fonctionnement et entretien (F et E)",
        "2": "Salaires",
        "3": "Subventions et contributions (S et C)",
        "4": "Immobilisations"
      },
      "feedback": {
        "right": "Ces fonds proviendraient du budget des subventions et contributions (S et C).",
        "wrong": "Ces fonds proviendraient du budget des subventions et contributions (S et C)."
      }
    },
    "q5": {
      "sentence": "Le budget de fonctionnement comprend {0} et {1}.",
      "choices": {
        "1": "Fonctionnement et entretien (F et E)",
        "2": "Salaires",
        "3": "Subventions et contributions (S et C)",
        "4": "Immobilisations"
      },
      "feedback": {
        "right": "Le budget de fonctionnement comprend les salaires et le fonctionnement et l'entretien (F et E)",
        "wrong": "Le budget de fonctionnement comprend les salaires et le fonctionnement et l'entretien (F et E)"
      }
    },
    "q6": {
      "sentence": "{0} est de l’argent qui est fourni à des entités extérieures au gouvernement fédéral, pour répondre au mandat du ministère.",
      "choices": {
        "1": "Fonctionnement et entretien (F et E)",
        "2": "Salaires",
        "3": "Subventions et contributions (S et C)",
        "4": "Immobilisations"
      },
      "feedback": {
        "right": "Ces fonds proviendraient du budget des subventions et contributions (S et C).",
        "wrong": "Ces fonds proviendraient du budget des subventions et contributions (S et C)."
      }
    },
    "q7": {
      "sentence": "{0} s’applique aux articles qui se déprécieront avec le temps, comme une annexe à un bâtiment, des véhicules, etc.",
      "choices": {
        "1": "Fonctionnement et entretien (F et E)",
        "2": "Salaires",
        "3": "Subventions et contributions (S et C)",
        "4": "Immobilisations"
      },
      "feedback": {
        "right": "Ces fonds proviendraient du budget des immobilisations.",
        "wrong": "Ces fonds proviendraient du budget des immobilisations."
      }
    },
    "q8": {
      "sentence": "Les coûts {0} sont essentiels à l’exécution de vos activités et, si des compressions budgétaires peuvent vous empêcher de les exécuter, vous pourriez ne pas être en mesure de les faire.",
      "choices": {
        "1": "non discrétionnaires",
        "2": "discrétionnaires",
        "3": "Notes"
      },
      "feedback": {
        "right": "Les coûts essentiels sont non discrétionnaires. ",
        "wrong": "Les coûts essentiels sont non discrétionnaires. "
      }
    },
    "q9": {
      "sentence": "Les coûts {0} sont moins susceptibles d’avoir une incidence négative sur l’exécution de vos activités.",
      "choices": {
        "1": "non discrétionnaires",
        "2": "discrétionnaires",
        "3": "Notes"
      },
      "feedback": {
        "right": " Ces coûts seraient discrétionnaires.",
        "wrong": " Ces coûts seraient discrétionnaires."
      }
    },
    "q10": {
      "sentence": "Une pratique exemplaire consiste à inclure une colonne supplémentaire {0} dans vos besoins budgétaires pour vous rappeler comment vous êtes arrivé aux chiffres que vous avez obtenus.",
      "choices": {
        "1": "non discrétionnaires",
        "2": "discrétionnaires",
        "3": "Notes"
      },
      "feedback": {
        "right": "Une colonne Notes vous aidera à faire le suivi de vos besoins budgétaires.Vous ne soumettez peut-être pas ces notes, mais c'est bien de les avoir.",
        "wrong": "Une colonne Notes vous aidera à faire le suivi de vos besoins budgétaires.Vous ne soumettez peut-être pas ces notes, mais c'est bien de les avoir."
      }
    },
    "q11": {
      "sentence": "Si vous avez des niveaux de référence, vous commencez par {0}.",
      "choices": {
        "1": "un montant prédéterminé prévu au budget",
        "2": "0 $"
      },
      "feedback": {
        "right": "Vous avez un montant prédéterminé prévu à votre budget et vous devrez déterminer s'il est suffisant, ou bien trop peu ou trop élevé. Certains ministères fournissent des niveaux de référence et d'autres pas.",
        "wrong": "Vous avez un montant prédéterminé prévu à votre budget et vous devrez déterminer s'il est suffisant, ou bien trop peu ou trop élevé. Certains ministères fournissent des niveaux de référence et d'autres pas."
      }
    },
    "q12": {
      "sentence": "Si vous n’avez pas de niveaux de référence, vous commencez par {0}.",
      "choices": {
        "1": "un montant prédéterminé prévu au budget",
        "2": "0 $"
      },
      "feedback": {
        "right": "Pour les activités continues, vous pouvez utiliser les chiffres de l'année dernière et de l'année en cours pour répondre à vos besoins budgétaires. Pour les nouvelles activités, vous devez en estimer les coûts.",
        "wrong": "Pour les activités continues, vous pouvez utiliser les chiffres de l'année dernière et de l'année en cours pour répondre à vos besoins budgétaires. Pour les nouvelles activités, vous devez en estimer les coûts."
      }
    }
  }
}
</i18n>
<style type="text/css" scoped>
select {
  border: 0;
  border-bottom: 1px solid black;
}
</style>