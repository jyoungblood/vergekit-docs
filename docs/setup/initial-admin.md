# Initial Admin

Use `npm run init:admin` after D1 migrations when the app needs its first
verified Better Auth user with the `admin` role.

The script prompts for a name, email address, and password. It hashes the
password with Better Auth, inserts the user and credential account records,
assigns the `admin` role, and writes directly to D1 through Wrangler. The Astro
dev server does not need to be running.

## Local Admin

Apply local migrations first:

```bash
npm run db:migrate:local
```

Create a verified local user with the `admin` role:

```bash
npm run init:admin
```

By default, the script reads `BETTER_AUTH_URL` from `.dev.vars` or the shell.
Localhost URLs target local D1. You can make that explicit:

```bash
npm run init:admin -- --local
```

## Remote Admin

Apply remote migrations first:

```bash
npm run db:migrate:remote
```

Create a verified remote user with the `admin` role:

```bash
npm run init:admin -- --remote
```

The script targets the D1 database named `vk`, matching the project Wrangler D1
scripts. Make sure your `wrangler.jsonc` `database_id` points at the intended
database before running the remote command.

## Target Selection

Usage:

```bash
npm run init:admin
npm run init:admin -- --local
npm run init:admin -- --remote
```

Without a flag, the script chooses local D1 when `BETTER_AUTH_URL` resolves to
`localhost`, `127.0.0.1`, `0.0.0.0`, or `::1`. Other URLs target remote D1.

Use `--local` or `--remote` when you want the target to be unambiguous,
especially in CI, staging, or production maintenance sessions.

## Safety Notes

- Run migrations before creating the user.
- Use a password with at least 8 characters.
- Confirm the D1 target before using `--remote`.
- Keep `BETTER_AUTH_SECRET` stable per environment so Better Auth sessions and
  tokens remain valid.
