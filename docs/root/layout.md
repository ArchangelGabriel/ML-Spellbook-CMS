---
title: Layout
---
<style>

/* HELPERS */

.table-container {
overflow-x:scroll;
}

.table-container table {
display:table;
width:100%;
}

</style>

# Layout

The Merlin Labs responsive layout grid adapts to screen size and a set of determined breakpoints, ensuring consistency across layouts.

\[[toc]]

## Breakpoints

We apply a 4-column, 8-column, or 12-column grid based on context and screen size. The grid can also accommodate designs that would otherwise not fall on the predefined columns via fixed grids, read further on for more info on this.

<div class='table-container'>

| Window | Range       | Col # | Gutter | Margins |
| ------ | ----------- | ----- | ------ | ------- |
| XS     | 0-600px     | 4     | 16px   | 16px    |
| SM     | 601-960px   | 8     | 16px   | 16px    |
| MD     | 961-1280px  | 12    | 16px   | 24px    |
| LG     | 1281-1960px | 12    | 16px   | 40px    |
| XL     | 1961px+     | 12    | 16px   | 40px    |

</div>

## 8pt Grid

To achieve layouts that are visually balanced, most measurements align to an `8px` grid, which aligns both spacing and the overall layout. 

### Vertical Rhythm

This determines the amount of vertical margin or padding between elements. To keep a consistent rhythm we adjust our rhythm based on context and screen sizes.

#### Section Spacing

This is the amount of margin or padding applied between sections of content. Not to be confused with vertical spacing within blocks of content. 

<div class='table-container'>

| Window | Range       | Spacing(s) |
| ------ | ----------- | ---------- |
| XS     | 0-600px     | 32px       |
| SM     | 601-960px   | 32px, 40px |
| MD     | 961-1280px  | 48px, 56px |
| LG     | 1281-1960px | 80px       |
| XL     | 1961px+     | 80px       |

</div>

![](/images/layout-section-verticalspacing.jpg)

1. Example of section spacing at LG or XL window sizes.
2. Example of section spacing at SM or XS window sizes.



<AccordionList/>
