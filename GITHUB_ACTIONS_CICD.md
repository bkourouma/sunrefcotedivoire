# GitHub Actions CI/CD

This repository now includes:

- `.github/workflows/ci.yml` to run `npm ci`, `npm run lint`, and `npm run build` on every push and pull request.
- `.github/workflows/deploy.yml` to deploy the `main` branch to production over SSH with Docker Compose.

## Deployment flow

The production workflow does the following:

1. Installs dependencies and validates the app.
2. Packages the current Git commit with `git archive`.
3. Uploads the release bundle to the server over SSH.
4. Extracts the release into `/var/www/sunrefcotedivoire/releases/<git-sha>`.
5. Writes the production env file from GitHub Secrets to a shared location.
6. Updates `/var/www/sunrefcotedivoire/current`.
7. Runs `docker compose -f docker-compose.production.yml up -d --build --remove-orphans`.

## One-time server preparation

Run these commands once on the server:

```bash
sudo mkdir -p /var/www/sunrefcotedivoire/releases /var/www/sunrefcotedivoire/shared
sudo chown -R deployer:deployer /var/www/sunrefcotedivoire
sudo usermod -aG docker deployer
```

Then sign out and back in for the `docker` group change to take effect.

For HTTP verification after deployment, it is helpful to have `curl` available on the server:

```bash
sudo apt update
sudo apt install -y curl
```

## GitHub environment configuration

Create a `production` environment in GitHub and add these variables:

- `DEPLOY_HOST`: `82.29.174.93`
- `DEPLOY_PORT`: `22`
- `DEPLOY_USER`: `deployer`
- `DEPLOY_PATH`: `/var/www/sunrefcotedivoire`

Add these secrets to the same environment:

- `DEPLOY_SSH_KEY`: the private key allowed in `~/.ssh/authorized_keys` for `deployer`
- `DEPLOY_KNOWN_HOSTS`: the output of `ssh-keyscan -H 82.29.174.93`
- `PROD_ENV_FILE`: the full contents of your production `.env.production`

You can use `.env.production.example` as the template for `PROD_ENV_FILE`.

## Notes

- Nginx should continue proxying requests to `127.0.0.1:3000`.
- The deploy user must be able to run `docker compose` without an interactive password prompt.
- If you later move servers, update the GitHub environment variables without changing the workflow file.
