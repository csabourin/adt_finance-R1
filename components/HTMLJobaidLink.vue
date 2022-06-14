<template>
  <p class="text-center">
    <externalLink :link="'jobaidHTML/' + $i18n.locale + '/' + filename" :title="title == '' ? $t('title') : title" :aria-label="title == '' ? $t('title') : title">{{$t('HTMLVersion')}}</externalLink>
  </p>
</template>

<script type="text/javascript">
  
  import externalLink from "~/components/externalLink"
  export default {
    components:{
      externalLink
    },
    props: {
      filename: { type: String, default: "" },
      title: { type: String, default: "" }
    },
  }

</script>

<i18n>

  {
    "en":{
      "HTMLVersion": "Web version",
      "title": "Open the web version of this document"
    },
    "fr":{
      "HTMLVersion": "Version web",
      "title": "Ouvrir la version web de ce document"
    }
  }

</i18n>