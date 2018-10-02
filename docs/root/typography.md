---
title: Typography
---
<script>
function toggle(button)
{
    if(button.value=="OFF")
    {
        button.value="ON";
    }
    else
    {
        button.value="OFF";
    }
}
</script>
<style>
html {
  font-size: 12px;
  background-color: bisque;
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
    background-color: white;
  }
}
</style>
<input type="button" value="OFF" id="button1" onclick="toggle(this)" />

# Hierarchy
---

<h1 style="font-size: 6.584rem;font-family: Georgia;font-style: normal;font-weight: 300;line-height: 7.5rem;letter-spacing: -1.5px;"> 
Display 1
</h1>

| Platform | Font Size | Font-Family | Line-height | Letter-Spacing | Font-Weight |
|----------|-----------|-------------|-------------|----------------|-------------|
| Mobile   | 6.5rem    | Georgia     | 1.4rem      | 1.5px          | 300         |
| Desktop  |           |             |             |                |             |
| CMS      |           |             |             |                |             |
