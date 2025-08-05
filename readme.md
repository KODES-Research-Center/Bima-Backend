src/
├── index.ts
├── routes/
│   ├── customerRoutes.ts
│   └── policyRoutes.ts
├── config/
│   └── env.ts
├── lib/
│   └── prisma.ts
├── modules/
│   ├── customers/
│   │   ├── domain/
│   │   │   ├── entities/
│   │   │   ├── value-objects/
│   │   │   ├── repositories/
│   │   │   └── services/
│   │   ├── application/
│   │   │   └── use-cases/
│   │   ├── infrastructure/
│   │   │   └── persistence/
│   │   └── interfaces/
│   │       └── controllers/
│   └── shared/
│       └── domain/
│           └── BaseEntity.ts
prisma/
├── schema.prisma
.env
tsconfig.json
package.json
