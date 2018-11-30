---
title: Layout
---
<style>

/* HELPERS */

.h-center {
display: flex;
flex:1;
justify-content:center;
}

</style>

# Layout

The Merlin Labs responsive layout grid adapts to screen size and a set of determined breakpoints, ensuring consistency across layouts.

[[toc]]

## Breakpoints

We apply a 4-column, 8-column, or 12-column grid based on context and screen size. The grid can also accommodate designs that would otherwise not fall on the predefined columns via fixed grids, read further on for more info on this.

<div class='h-center'>

| Breakpoint |        Size | Col # | Gutter | Margins | 
|------------|------------:|------:|-------:|--------:|
| XS         |     0-600px |     4 |   16px |    16px |
| SM         |   601-960px |     8 |   16px |    16px |
| MD         |  961-1280px |    12 |   16px |    24px |
| LG         | 1281-1960px |    12 |   16px |    40px |
| XL         |     1961px+ |    12 |   16px |    40px |

</div>

## 8pt Grid

To achieve layouts that are visually balanced, most measurements align to an `8px` grid, which aligns both spacing and the overall layout. 

### Vertical Rhythm 

This determines the amount of vertical margin or padding between elements. To keep a consistent rhythm we adjust our rhythm based on context and screen sizes.

<div class='h-center'>

| Window |       Range | Spacing(s) |
|--------|------------:|-----------:|
| XS     |     0-600px |       32px |
| SM     |   601-960px | 32px, 40px |
| MD     |  961-1280px | 48px, 56px |
| LG     | 1281-1960px |       80px |
| XL     |     1961px+ |       80px |

</div>
