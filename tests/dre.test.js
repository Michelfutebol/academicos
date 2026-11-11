import test from 'node:test';import assert from 'node:assert/strict';import {calculateDre} from '../src/dre.js';
test('DRE separa deduções, custos e despesas em centavos',()=>{const r=calculateDre({gross:100000,deductions:10000,taxes:5000,costs:40000,expenses:50000});assert.equal(r.net,85000);assert.equal(r.contribution,45000);assert.equal(r.operating,-5000)});
test('DRE rejeita fração e negativos',()=>{assert.throws(()=>calculateDre({gross:.1,deductions:0,taxes:0,costs:0,expenses:0}));assert.throws(()=>calculateDre({gross:0,deductions:-1,taxes:0,costs:0,expenses:0}))});
