# Set up a NestJS project, you can do it by running:

npm i -g @nestjs/cli
nest new my-crud-app

# Run the Project

npm run start

# Project Structure

src
├── app.module.ts
├── items
│ ├── items.controller.ts
│ ├── items.entity.ts
│ ├── items.module.ts
│ └── items.service.ts
├── middlewares
│ ├── auth.middleware.ts
│ ├── index.ts
