# VeriFi AI — savings task

Auth works. Goals live in memory. No database.

Complete the two `TODO`s, then push your branch. Do not push to `main`.

## Setup

```bash
git checkout main
git pull
git checkout -b solution/savings-goals
```

The API is at http://localhost:3001.

## Task

Open `server/src/routes/savings.routes.ts`. Goals live in the `goals` array in `server/src/store.ts`.

1. **GET `/api/savings`** — return this user’s goals (`req.user.userId`)
2. **POST `/api/savings`** — save a goal with `userId`, `name`, `targetAmount`, `currentAmount: 0`

POST body: `{ name, targetAmount }`  
Goal: `{ id, userId, name, targetAmount, currentAmount }`

Change `server/src/routes/savings.routes.ts` only.

**Working when:** a signed-in user can create a goal and GET returns that goal with their `userId`.

## Push the result

Stay on `solution/savings-goals`.

```bash
git add server/src/routes/savings.routes.ts
git commit -m "Return and create savings goals for the signed-in user"
git push -u origin solution/savings-goals
```

Open a pull request from `solution/savings-goals` into `main`.

**Done when:** that branch is on the remote and the pull request is open.
