<template>
  <div>
    <h1>Test Page</h1>
      <fillTheBlanks :blanks="2" :sentence="$t('q1.sentence')" :termList="$t('q1.choices')" :answer="[ '1', '2' ]" :feedback="$t('q1.feedback')" qid="q1" />
  </div>
</template>
<script type="text/javascript">
import fillTheBlanks from "~/components/interface/fillTheBlanks"
export default {
  components: {
    fillTheBlanks
  }
}
</script>
<i18n>
	{
    "en":
    {
        "q1":
        {
            "sentence": "The operating budget consists of both {0} and {1}.",
            "choices":
            {
                "1": "Operating &amp; Maintenance (O&amp;M)",
                "2": "Salary",
                "3": "Grants and Contributions (Gs&amp;Cs)",
                "4": "Capital"
            },
            "feedback":
            {
                "wrong": "The Operating budget consists of both Salary and Operating & Maintenance (O&M).",
                "right": "The Operating budget consists of both Salary and Operating & Maintenance (O&M)."
            }
        }
    },
    "fr":
    {
        "q1":
        {
            "sentence": "Le budget de fonctionnement comprend {0} et {1}.",
            "choices":
            {
                "1": "Fonctionnement et entretien (F et E)",
                "2": "Salaires",
                "3": "Subventions et contributions (S et C)",
                "4": "Immobilisations"
            },
            "feedback":
            {
                "wrong": "Le budget de fonctionnement comprend les salaires et le fonctionnement et l'entretien (F et E)",
                "right": "Le budget de fonctionnement comprend les salaires et le fonctionnement et l'entretien (F et E)"
            }
        }
    }
}
</i18n>
