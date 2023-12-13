```
apps
├── demo
│   ├── app
│   │   └── product
│   │       ├── Form.tsx
│   │       ├── MainSection.tsx
│   │       ├── page.test.tsx
│   │       └── page.tsx
│   ├── components (only for nescessary components)
│   ├── utils (only for nescessary components)
│   └── e2e

packages
├── config (not changed)
│   ...
├── core (optional)
│   ├── src
│   │   ├── api
│   │   │   ├── product
│   │   │   │   ├── productApi.ts
│   │   │   │   ├── ...
│   │   │   │   └── index.ts
│   │   │   ...
│   │   ├── hooks
│   │   │   ├── useLongPress.ts
│   │   │   ├── useOnClickOutside.ts
│   │   │   ...
│   │   ├── models
│   │   │   ├── product
│   │   │   ├── cms
│   │   │   ...
│   │   ├── utils
│   │   │   ├── storage
│   │   │   ├── ...
│   │   ├── types
│   │   │   ├── options.d.ts
│   │   │   ├── filters.d.ts
├── data
│   ├── src
│   │   ├── mock (not changed)
│   │   ├── [other data source files]
│   │   └── index.ts
├── ui-base
│   ├── src
│   │   ├── components
│   │   │   ├── Card
│   │   │   │   ├── Card.tsx
│   │   │   │   ├── Card.(test|utils|types)
│   │   │   │   └── index.ts
│   │   │   ...
├── ui-base
│   ├── src
│   │   ├── components
│   │   │   ├── ProductCard
│   │   │   |   ├── utils
│   │   │   │   │   ├── productCardAnimations.ts
│   │   │   │   ├── ProductCard.tsx
│   │   │   │   ├── ProductCard.(test|utils|types)
|   |   |   |   ├── useProductCard.tsx
│   │   │   │   └── index.ts
│   │   │   ...
│   │   ├── patterns
│   │   │   ├── ProductDetails
│   │   │   │   ├── ProductDetails.tsx
│   │   │   │   ├── ProductDetails.(test|utils|types)
│   │   │   │   └── index.ts
│   │   │   ...
│   │   ├── forms
│   │   │   ├── ProductQuantityForm
│   │   │   │   ├── ProductQuantityForm.tsx
│   │   │   │   ├── ProductQuantityForm.schema.tsx
│   │   │   │   ├── ProductQuantityForm.(test|utils|types).tsx
│   │   │   │   └── index.ts
│   │   ├── providers
│   │   │   ├── QueryProvider
│   │   │   │   ├── QueryProvider.tsx
│   │   │   │   ├── QueryProvider.(test|utils|types).tsx
│   │   │   │   └── index.ts
│   │   └── styles
```
