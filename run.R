library(V8)

ctx <- v8()
ctx$source("dist/app.js")