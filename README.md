# screening 1

## 1. Paréntesis balanceados 

Haz un algoritmo que determine si un string tiene paréntesis balanceados 

```javascript
balanced_parentheses? '(()(())())' # => true
balanced_parentheses? '(()' # => false
balanced_parentheses? '())()(' # => false
```

---

## 2. Producto de arreglos excepto el mismo

Dado un arreglo `nums` con `n` elementos enteros, entrega un arreglo tal que el elemento `i`, es equivalente al producto de todos los elementos en `nums`, excepto `nums[i]`. Puedes considerar que `nums` tiene siempre al menos un elemento. 

Ejemplo: Para `[1,2,3,4]`, debes entregar `[24,12,8,6]`. 