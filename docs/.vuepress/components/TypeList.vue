<template>
<VueFaqAccordion :items="myItems" :activeColor="`#3eaf7c`" />
</template>

<script>
import VueFaqAccordion from 'vue-faq-accordion'

export default {
  components: {
    VueFaqAccordion
  },
  data() {
    const display1 = `<p class='display1'>Display 1</p>`
    const display1Code =
      `<div class="language-json extra-class"><pre class="language-json"><code>font-size<span class="token operator">:</span> <span class="token number">6.584</span>rem<span class="token punctuation">;</span>
  font-family<span class="token operator">:</span> Georgia<span class="token punctuation">;</span>
  font-style<span class="token operator">:</span> normal<span class="token punctuation">;</span>
  font-weight<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">;</span>
  line-height<span class="token operator">:</span> <span class="token number">7.5</span>rem<span class="token punctuation">;</span>
  letter-spacing<span class="token operator">:</span> -<span class="token number">1.5</span>px<span class="token punctuation">;</span>
</code></pre></div>`

    const display2 = `<p class='display2'>Display 2</p>`;
    const display2Code =
      `<div class="language-json extra-class"><pre class="language-json"><code>  font-size<span class="token operator">:</span> <span class="token number">4.115</span>rem<span class="token punctuation">;</span>
  font-family<span class="token operator">:</span> Georgia<span class="token punctuation">;</span>
  font-style<span class="token operator">:</span> normal<span class="token punctuation">;</span>
  font-weight<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">;</span>
  line-height<span class="token operator">:</span> <span class="token number">4.625</span>rem<span class="token punctuation">;</span>
  letter-spacing<span class="token operator">:</span> -<span class="token number">0.5</span>px<span class="token punctuation">;</span>
</code></pre></div>`

    const display3 = `<p class='display3'>Display 3 </p>`;
    const display3Code =
      `<div class="language-json extra-class"><pre class="language-json"><code>  font-size<span class="token operator">:</span> <span class="token number">3.291</span>rem<span class="token punctuation">;</span>
  font-family<span class="token operator">:</span> Georgia<span class="token punctuation">;</span>
  font-style<span class="token operator">:</span> normal<span class="token punctuation">;</span>
  font-weight<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">;</span>
  line-height<span class="token operator">:</span> <span class="token number">3.75</span>rem<span class="token punctuation">;</span>
</code></pre></div>`

    const display4 = `<p class='display4'>Display 4</p>`;
    const display4Code =
      `<div class="language-json extra-class"><pre class="language-json"><code>  font-size<span class="token operator">:</span> <span class="token number">37.31</span>px<span class="token punctuation">;</span>
  font-family<span class="token operator">:</span> Georgia<span class="token punctuation">;</span>
  font-style<span class="token operator">:</span> normal<span class="token punctuation">;</span>
  font-weight<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">;</span>
  line-height<span class="token operator">:</span> <span class="token number">42</span>px<span class="token punctuation">;</span>
  letter-spacing<span class="token operator">:</span> <span class="token number">0.25</span>px<span class="token punctuation">;</span>
</code></pre></div>`;

    const display5 = `<p class='display5'>Display 5</p>`;
    const display5Code =
      `<div class="language-json extra-class"><pre class="language-json"><code>  font-family<span class="token operator">:</span> Georgia<span class="token punctuation">;</span>
  font-style<span class="token operator">:</span> normal<span class="token punctuation">;</span>
  font-weight<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">;</span>
  line-height<span class="token operator">:</span> <span class="token number">30</span>px<span class="token punctuation">;</span>
  font-size<span class="token operator">:</span> <span class="token number">26.34</span>px<span class="token punctuation">;</span>
</code></pre></div>`;

    const display6 = `<p class='display6'>Display 6</p>`;
    const display6Code =
      `<div class="language-json extra-class"><pre class="language-json"><code>  font-family<span class="token operator">:</span> Georgia<span class="token punctuation">;</span>
  font-style<span class="token operator">:</span> normal<span class="token punctuation">;</span>
  font-weight<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">;</span>
  line-height<span class="token operator">:</span> <span class="token number">25</span>px<span class="token punctuation">;</span>
  font-size<span class="token operator">:</span> <span class="token number">21.95</span>px<span class="token punctuation">;</span>
  letter-spacing<span class="token operator">:</span> <span class="token number">0.25</span>px<span class="token punctuation">;</span><span class="token punctuation">;</span>
</code></pre></div>`;

    const body1 = `<p class='ml-p'>Body</p>`;
    const body1Code =
      `<div class="language-json extra-class"><pre class="language-json"><code>  font-family<span class="token operator">:</span> Lato<span class="token punctuation">;</span>
  font-style<span class="token operator">:</span> normal<span class="token punctuation">;</span>
  font-weight<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">;</span>
  line-height<span class="token operator">:</span> <span class="token number">28</span>px<span class="token punctuation">;</span>
  font-size<span class="token operator">:</span> <span class="token number">16.45</span>px<span class="token punctuation">;</span>
  letter-spacing<span class="token operator">:</span> <span class="token number">0.5</span>px<span class="token punctuation">;</span>
</code></pre></div>`;

    const body2 = `<p class="ml-body2">Body 2</p>`;
    const body2Code =
      `<div class="language-json extra-class"><pre class="language-json"><code>  font-family<span class="token operator">:</span> Lato<span class="token punctuation">;</span>
  font-style<span class="token operator">:</span> normal<span class="token punctuation">;</span>
  font-weight<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">;</span>
  line-height<span class="token operator">:</span> <span class="token number">20</span>px<span class="token punctuation">;</span>
  font-size<span class="token operator">:</span> <span class="token number">14.39</span>px<span class="token punctuation">;</span>
  letter-spacing<span class="token operator">:</span> <span class="token number">0.25</span>px<span class="token punctuation">;</span>
</code></pre></div>`;

    const subtitle1 = `<span class="ml-subtitle"> Subtitle 1 </span>`;
    const subtitle1Code =
      `<div class="language-json extra-class"><pre class="language-json"><code>  font-family<span class="token operator">:</span> Lato<span class="token punctuation">;</span>
  font-style<span class="token operator">:</span> normal<span class="token punctuation">;</span>
  font-weight<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">;</span>
  line-height<span class="token operator">:</span> <span class="token number">24</span>px<span class="token punctuation">;</span>
  font-size<span class="token operator">:</span> <span class="token number">16.45</span>px<span class="token punctuation">;</span>
  letter-spacing<span class="token operator">:</span> <span class="token number">0.15</span>px<span class="token punctuation">;</span>
</code></pre></div>`;

    const subtitle2 = `<span class="ml-subtitle2"> Subtitle 2 </span>`;
    const subtitle2Code =
      `<div class="language-json extra-class"><pre class="language-json"><code>  font-family<span class="token operator">:</span> Lato<span class="token punctuation">;</span>
  font-style<span class="token operator">:</span> normal<span class="token punctuation">;</span>
  font-weight<span class="token operator">:</span> <span class="token number">700</span><span class="token punctuation">;</span>
  line-height<span class="token operator">:</span> <span class="token number">24</span>px<span class="token punctuation">;</span>
  font-size<span class="token operator">:</span> <span class="token number">14.21</span>px<span class="token punctuation">;</span>
  letter-spacing<span class="token operator">:</span> <span class="token number">0.1</span>px<span class="token punctuation">;</span>
  display<span class="token operator">:</span>block<span class="token punctuation">;</span>
</code></pre></div>`;

    const button = `<p class='ml-button'> BUTTON </p>`;
    const buttonCode =
      `<div class="language-json extra-class"><pre class="language-json"><code>  font-family<span class="token operator">:</span> Lato<span class="token punctuation">;</span>
  font-style<span class="token operator">:</span> normal<span class="token punctuation">;</span>
  font-weight<span class="token operator">:</span> bold<span class="token punctuation">;</span>
  line-height<span class="token operator">:</span> <span class="token number">16</span>px<span class="token punctuation">;</span>
  font-size<span class="token operator">:</span> <span class="token number">14.21</span>px<span class="token punctuation">;</span>
  letter-spacing<span class="token operator">:</span> <span class="token number">1.25</span>px<span class="token punctuation">;</span>
  text-transform<span class="token operator">:</span> uppercase<span class="token punctuation">;</span>
  margin<span class="token operator">:</span> <span class="token number">0</span>px<span class="token punctuation">;</span>
</code></pre></div>`;

    const caption = `<span class="ml-caption"> Caption </span>`;
    const captionCode =
      `<div class="language-json extra-class"><pre class="language-json"><code>  font-family<span class="token operator">:</span> Lato<span class="token punctuation">;</span>
  font-style<span class="token operator">:</span> normal<span class="token punctuation">;</span>
  font-weight<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">;</span>
  line-height<span class="token operator">:</span> <span class="token number">16</span>px<span class="token punctuation">;</span>
  font-size<span class="token operator">:</span> <span class="token number">12.58</span>px<span class="token punctuation">;</span>
  letter-spacing<span class="token operator">:</span> <span class="token number">0.4</span>px<span class="token punctuation">;</span>
  display<span class="token operator">:</span>block<span class="token punctuation">;</span>
</code></pre></div>`;

    const overline = `<span class="ml-overline">Overline</span>`;
    const overlineCode =
      `<div class="language-json extra-class"><pre class="language-json"><code>  font-family<span class="token operator">:</span> Lato<span class="token punctuation">;</span>
  font-style<span class="token operator">:</span> normal<span class="token punctuation">;</span>
  font-weight<span class="token operator">:</span> <span class="token number">700</span><span class="token punctuation">;</span>
  line-height<span class="token operator">:</span> <span class="token number">16</span>px<span class="token punctuation">;</span>
  font-size<span class="token operator">:</span> <span class="token number">12.18</span>px<span class="token punctuation">;</span>
  letter-spacing<span class="token operator">:</span> <span class="token number">2</span>px<span class="token punctuation">;</span>
  text-transform<span class="token operator">:</span> uppercase<span class="token punctuation">;</span>
  display<span class="token operator">:</span>block<span class="token punctuation">;</span>
</code></pre></div>`;

    return {
      myItems: [{
          title: display1,
          value: display1Code
        },
        {
          title: display2,
          value: display2Code,
        },
        {
          title: display3,
          value: display3Code,
        },
        {
          title: display4,
          value: display4Code,
        },
        {
          title: display6,
          value: display6Code,
        },
        {
          title: body1,
          value: body1Code,
        },
        {
          title: body2,
          value: body2Code,
        },
        {
          title: subtitle1,
          value: subtitle1Code,
        },
        {
          title: subtitle2,
          value: subtitle2Code,
        },
        {
          title: button,
          value: buttonCode,
        },
        {
          title: caption,
          value: captionCode,
        },
        {
          title: overline,
          value: overlineCode,
        },
      ]
    }
  }
}
</script>

<style>
html {
  font-size: 12px;
}

.accent {
  color: blue;
}

.margin-bot {
  padding-bottom: 16px;
}

@media (min-width: 600px) {
  html {
    font-size: 16px;
  }
}

.container {
  max-width: 900px;
  margin: auto;
}

.accordion {
  border: 0px solid !important;
  border-radius: 5px !important;
  margin-top: 15px !important;
  border-right: 0px !important;
  border-left: 0px !important;
  border-top: 0px !important;
}

.accordion__item {
  border-bottom: 2px solid #d8d8d8 !important;
}

.accordion__item:hover p {
  color: #000 !important;
}

.accordion__title_active {
  color: #000 !important;
}

.accordion p {
  margin: 0px
}

.accordion__title:hover {
  color: #000 !important;
}

.accordion .accordion__title-text {
  margin: 0px;
}

.accordion__title {
  padding-left: 0px !important;
  padding-right: 16px !important;
}

.display1 {
  font-size: 6.584rem;
  font-family: Georgia;
  font-style: normal;
  font-weight: 300;
  line-height: 7.5rem;
  letter-spacing: -1.5px;
}

.display2 {
  font-size: 4.115rem;
  font-family: Georgia;
  font-style: normal;
  font-weight: 300;
  line-height: 4.625rem;
  letter-spacing: -0.5px;
}

.display3 {
  font-size: 3.291rem;
  font-family: Georgia;
  font-style: normal;
  font-weight: 400;
  line-height: 3.75rem;
}

.display4 {
  font-size: 37.31px;
  font-family: Georgia;
  font-style: normal;
  font-weight: 400;
  line-height: 42px;
  letter-spacing: 0.25px;
}

.display5 {
  font-family: Georgia;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  font-size: 26.34px;
}

.display6 {
  font-family: Georgia;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
  font-size: 21.95px;
  letter-spacing: 0.25px;
}

.ml-p {
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  font-size: 16.45px;
  letter-spacing: 0.5px;
}

.ml-body {
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  font-size: 16.45px;
  letter-spacing: 0.5px;
}

.ml-body2 {
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  font-size: 14.39px;
  letter-spacing: 0.25px;
}

.ml-subtitle {
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  font-size: 16.45px;
  letter-spacing: 0.15px;
  margin: 0px;
  display: block;
}

.ml-subtitle2 {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  line-height: 24px;
  font-size: 14.21px;
  letter-spacing: 0.1px;
  display: block;
}

.ml-button {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  line-height: 16px;
  font-size: 14.21px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  margin: 0px;
}

.ml-caption {
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  font-size: 12.58px;
  letter-spacing: 0.4px;
  display: block;
}

.ml-overline {
  font-family: Lato;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  font-size: 12.18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: block;
}
</style>
