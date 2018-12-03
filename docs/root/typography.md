---
title: Typography
---
<style>
html {
  font-size: 12px;
}
.accent {
  color:blue;
}
.margin-bot {
  padding-bottom:16px;
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
  display:block;
}

.ml-subtitle2 {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  line-height: 24px;
  font-size: 14.21px;
  letter-spacing: 0.1px;
  display:block;
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
  display:block;
}

.ml-overline {
  font-family: Lato;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  font-size: 12.18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  display:block;
}

</style>

# Typography

[[toc]]

## Type Scale

Merlins typographic scale is an iteration of Material Designs scale. We're it's departed is in it's responsive design. The `REM` unit has been applied for `H1` to `H4` type elements. The font responds when scaled below `600px`.

- - -

<p class='display1'>Display 1</p>

```json
  font-size: 6.584rem;
  font-family: Georgia;
  font-style: normal;
  font-weight: 300;
  line-height: 7.5rem;
  letter-spacing: -1.5px;
```

<p class='display2'>Display 2</p>

```json
  font-size: 4.115rem;
  font-family: Georgia;
  font-style: normal;
  font-weight: 300;
  line-height: 4.625rem;
  letter-spacing: -0.5px;
```

<p class='display3'>Display 3 </p>

```json
  font-size: 3.291rem;
  font-family: Georgia;
  font-style: normal;
  font-weight: 400;
  line-height: 3.75rem;
```

<p class='display4'>Display 4</p>

```json
  font-size: 37.31px;
  font-family: Georgia;
  font-style: normal;
  font-weight: 400;
  line-height: 42px;
  letter-spacing: 0.25px;
```

<p class='display5'>Display 5</p>

```json
  font-family: Georgia;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  font-size: 26.34px;
```

<p class='display6'>Display 6</p>

```json
  font-family: Georgia;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
  font-size: 21.95px;
  letter-spacing: 0.25px;;
```

<p class='ml-p'>Body</p>

```json
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  font-size: 16.45px;
  letter-spacing: 0.5px;
```

<p class="ml-body2">Body 2</p>

```json
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  font-size: 14.39px;
  letter-spacing: 0.25px;
```

<span class="ml-subtitle">
Subtitle 1
</span>

```json
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  font-size: 16.45px;
  letter-spacing: 0.15px;
```

<span class="ml-subtitle2">
Subtitle 2
</span>

```json
  font-family: Lato;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  font-size: 14.21px;
  letter-spacing: 0.1px;
  display:block;
```

<p class='ml-button'> BUTTON </p>

```json
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  line-height: 16px;
  font-size: 14.21px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  margin: 0px;
```

<span class="ml-caption">
Caption
</span>

```json
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  font-size: 12.58px;
  letter-spacing: 0.4px;
  display:block;
```

<span class="ml-overline">Overline</span>

```json
  font-family: Lato;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  font-size: 12.18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  display:block;
```

## Line Measure

Reading a long line of type causes fatigue: the reader must move his head at the end of each line and search for the beginning of the next line. Too short a line breaks up words or phrases that are generally read as a unit. Which is why a length of  `45-75` characters is ideal.

- - -

### Without a Container

Shown below the first lines measure is 77 characters, this is more of typical sentence structure. While the second line is pure characters and has a measure or 43 characters. The max width should not exceed `600px`.

![Line_Measure](/images/screen-shot-2018-10-03-at-9.52.19-am.png)

### With a container

If the text is placed within a container, the text should occupy the `full width` of the container. Ideally the containers would be wide enough to conform to our defined measure length but at times this will not be possible. In those cases, just leave appropriate space for the padding to left and right.

![Line-Measure-Container](/images/screen-shot-2018-10-03-at-9.57.24-am.png)

### Mobile Measure

In practice, retaining a comfortable font size as much as possible better preserves readability. The result will be a less-than-ideal measure but a more comfortable reading experience.A responsive structure won’t help if small text on a hand-held device encourages readers to pinch and zoom!

### Recommended Widths

Below is a few recommendations for how many columns the body text should take up at any breakpoint for either 16px or 18px body text size.

![Line-Measure-Recommendations](/images/screen-shot-2018-10-03-at-9.58.57-am.png)
