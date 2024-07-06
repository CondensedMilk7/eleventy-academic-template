---
title: "Post 2"
description: "This is a post 2"
image: "https://images.unsplash.com/photo-1719051363209-b8c0cc108a94?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
imageAlt: "Monochrome image of a building"
date: 2024-06-29
eleventyNavigation:
  key: Post 2
  parent: Posts
---

## Vix semper

Lorem markdownum spicula picae? Per tum Esse clara, fixum prioribus Procne
*viribus quam dixerat*, axes digitos. Vitale Cecropide **corpore exhibuit** quam
in album, saeva alii; canis [cornua](http://tota-dixit.io/receptis.aspx), tu
agitque, Circes noli. Tuli ora et vulnere imitamina furtiva vitiorum mandasset
tempora in.

1. Gelida audet spectarat conplexaque fronde corve
2. Nec Occupat saxa non
3. Subito montis marmoreo at quod erat aquosis
4. Te Circen et carinas

```ts
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/styles");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/scripts");

  eleventyConfig.addGlobalData("globalData", GLOBAL_DATA);

  eleventyConfig.addPlugin(navigationPlugin);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addLiquidFilter("dateToRfc3339", pluginRss.dateToRfc3339);

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "includes/partials",
      layouts: "includes/layouts",
    },
  };
};
```

Non ora augendo **tota Amor** instructa `mora multis`, pestis. At Mavortis munera
sinusque: patiar qui ea fata frondibus illis et ictus, et Erinyn demittite.
Flava volanti, altaribus tua meas nunc recepta factorum de tibi vivis causam
deque non lympha violentia coniuge. Semper per nemorumque *harena* vulnere
moenia, est Luna iunctum hoc lumina minus.

> Coma qui quae dapes notavi Latous laeti secundi Fames. Illa terra abstinuit
> incidit referret Talia. Hecates infelix adempta miscentem relinquam auctoribus
> Medea eras mei illa, mea diriguit bellum facta inter benefacta. Cupiens
> mendacis quae nescio opus verba, intellectumque decerpta.

## Intrare visu Phaethon carebat vidistis a rogat

Armigerae quam, nutu naides nisi pallore, ratione simul venerat arce pisa
latentis saturos reddunt. Nec nunc loqui Iovi caeso opto **igitur lege**
nomenque carbasa si?

1. Cuncta promptum accipimus factas dolet
2. Pro aqua morsu
3. Annos saetigerosque Cressa instabilemque demas
4. Quietem nec ventos munera huic longos
5. Erat fidem

Parentis auras responsura Maeandri similis tenuit pulchros nec unde *Iris*
Deucalioneas aura excipit? Sit tum rerum signaque relictae plus: relinquunt, ego
decorem. Materiaque tellure invia; ne ecce domos, in Argosque non fiet alter.

Putavi nec novum Byblis sic ursaque, oro est Ismario quod odit patulos dulcis
teste tangendo. Mediis sit sine.
