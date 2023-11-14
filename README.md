# :loudspeaker: Talk templates

## Before starting with `hygge` template

Install the following packages:

```R
install.packages('countdown')
devtools::install_github("ropenscilabs/icon")
```

Once the `ìcon` package has been installed, you will have to download icons libraries.

```R
icons::download_ionicons()
icons::download_fontawesome()
```

Be aware that the package is named `icon` on github but uses the namespace `icons`.

## Xaringan templates 

### About

The [xaringan](https://github.com/yihui/xaringan) R package eases the creation
of slideshows with [remarkjs](https://remarkjs.com/#1) through R Markdown.
There are several themes available (see https://github.com/yihui/xaringan/wiki/Themes). To render a presentation, use `rmarkdown::render("index.Rmd")`.

### Themes 

- `tamu_like` inSileco theme inspired by the [TAMU template](https://github.com/nanhung/xaringan-tamu). 
- `hygge`: use the `hygge` theme.


### How to get a pdf version

Use [`pagedown`](https://github.com/rstudio/pagedown) as suggested in https://github.com/yihui/xaringan/issues/168 :

```R
install.packages('pagedown')
pagedown::chrome_print('index.html')
```
