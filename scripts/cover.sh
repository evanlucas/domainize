#!/usr/bin/env bash

rm -rf lib-cov
jscoverage lib/ lib-cov/
DOMAINIZE_COV=1 mocha -R html-cov test/*.js > coverage.html
DOMAINIZE_COV=1 mocha -R json-cov test/*.js > coverage.json
