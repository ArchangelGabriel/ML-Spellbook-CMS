<template>
  <vue-tabs
    type="pills"
    active-text-color="#3eaf7c"
    >
      <v-tab title="Desktop">
        <h1 style="font-size: 6.584rem;font-family: Georgia;font-style: normal;font-weight: 300;line-height: 7.5rem;letter-spacing: -1.5px;">
        Display 1
        </h1>
        <div class="language-json extra-class"><pre class="language-json"><code>font-size<span class="token operator">:</span><span class="token number">16</span>px
        </code></pre></div>
      </v-tab>
      <v-tab title="Mobile">
        Second tab content
      </v-tab>
  </vue-tabs>
</template>

<script>
//local registration
import {VueTabs, VTab} from 'vue-nav-tabs'
import 'vue-nav-tabs/themes/vue-tabs.css'
// import VueMarkdown from 'vue-markdown'

export default {
    components: {
      VTab,
      VueTabs,
    }
}
</script>

<style>

.vue-tabs .nav{
  display: flex;
  flex-direction: row;
}

.vue-tabs .nav > li {
  display: flex;
  flex:5
}

.vue-tabs .nav-pills > li > a {
  border-radius: 0px;
  width:100%;
  border: 1px solid #dadada;
}

.vue-tabs .nav-pills > li.active > a, .vue-tabs .nav-pills > li.active > a:hover, .vue-tabs .nav-pills > li.active > a:focus {
  background-color: #ecf9f3;
  box-shadow: inset 0 0 0.8rem rgba(62, 175, 124, 0.30196078431372547);
}

#t-Mobile a {
  border-top-right-radius: .6rem;
  border-bottom-right-radius: .6rem;
}

#t-Desktop:first-child .tabs__link {
  border-top-left-radius: .6rem;
  border-bottom-left-radius: .6rem;
}

.vue-tabs .nav-pills > li + li {
  margin:0px;
}


</style>
