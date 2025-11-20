# Functional Programming (The Hard Parts)

## 1. Functors

Object yang punya method `.map()`. Array adalah Functor.

## 2. Monads

Functor yang punya method `.flatMap()` (atau `.bind()`).
Digunakan untuk menangani side-effects (seperti null check, async) dengan elegan.

- Maybe Monad (handle null)
- Either Monad (handle error)

## 3. Currying & Partial Application

Mengubah fungsi `f(a, b, c)` menjadi `f(a)(b)(c)`.
