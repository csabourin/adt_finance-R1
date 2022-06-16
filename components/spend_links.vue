<template>
  <span>
    <div v-if="$i18n.locale=='fr'">
      <div>
        <h4>Dépenses</h4>
        <ul>
          <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32495">Politique sur la gestion financière</externalLink></li>
          <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32503">Directive sur la délégation des pouvoirs de dépenser et des pouvoirs financiers</externalLink>
            <ul>
              <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32584&amp;section=html">Guide de délégation et de mise en &oelig;uvre des pouvoirs de dépenser et des pouvoirs financiers</externalLink></li>
              <li><externalLink link="https://papp.csps-efpc.gc.ca/ProdContent/cninv000000000015255/index_fr.html">Tableau de délégation des pouvoirs de dépenser et de signer des documents financiers</externalLink> (Lien vers un graphique fictif)&nbsp;</li>
            </ul>
          </li>
          <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=27228">Directive sur les dépenses de voyages, d’accueil, de conférences et d’événements</externalLink>
            <ul>
              <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32553">Guide sur les dépenses de voyages, d’accueil, de conférences et d’événements</externalLink></li>
              <li><externalLink link="https://www.njc-cnm.gc.ca/directive/d10/fr">Directive sur les voyages du Conseil national mixte (CNM)</externalLink></li>
              <li><externalLink link="https://www.gcpedia.gc.ca/wiki/Ensemble_de_politiques_sur_la_gestion_financi%C3%A8re/Conf%C3%A9rence_par_opposition_%C3%A0_formation">Conférence par opposition à formation</externalLink> (Doit être connecté au RPV pour consulter ce lien.)</li>
            </ul>
          </li>
          <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32504">Directive sur les paiements</externalLink></li>
          <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=14662">Directive sur la réinstallation du CNM</externalLink></li>
          <li><externalLink link="http://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32502">Directive sur l’imputation et les autorisations financières spéciales</externalLink></li>
          <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32505">Directive sur la gestion des fonds publics et des comptes débiteurs</externalLink></li>
        </ul>
      </div>
    </div>
    <div v-if="$i18n.locale=='en'">
      <div>
        <h4>Spend</h4>
        <ul class="list-unstyled">
          <li><externalLink link="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32495">Policy on Financial Management</externalLink></li>
          <li><externalLink link="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32503">Directive on Delegation of Spending and Financial Authorities</externalLink>
            <ul>
              <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32584&amp;section=html">Guide to Delegating and Applying Spending and Financial Authorities</externalLink></li>
              <li><externalLink link="https://papp.csps-efpc.gc.ca/ProdContent/cninv000000000015255/index_en.html">Delegation of Spending and Financial Signing Authorities Chart</externalLink> (Link to a sample chart)</li>
            </ul>
          </li>
          <li><externalLink link="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=27228">Directive on Travel, Hospitality, Conference and Event Expenditures</externalLink>
            <ul>
              <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32553">Guide to Travel, Hospitality, Conference and Event Expenditures</externalLink></li>
              <li><externalLink link="https://www.njc-cnm.gc.ca/directive/d10/en">National Joint Council (NJC) Travel Directive</externalLink></li>
              <li><externalLink link="https://www.gcpedia.gc.ca/wiki/Financial_Management_Policy_Suite/Conference_versus_training">Determination of training vs. conferences</externalLink> (Must be connected to VPN to see this link.)</li>
            </ul>
          </li>
          <li><externalLink link="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32504">Directive on Payments</externalLink></li>
          <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=14662">Relocation Directive, NJC</externalLink></li>
          <li><externalLink link="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32502">Directive on Charging and Special Financial Authorities</externalLink></li>
          <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32505">Directive on Public Money and Receivables</externalLink></li>
        </ul>
      </div>
    </div>
  </span>
</template>

<script>

  import externalLink from "~/components/externalLink"
  export default{
    components:{
      externalLink
    }
  }

</script>

<style scoped>
  p {
    font-weight: bold;
  }
</style>
