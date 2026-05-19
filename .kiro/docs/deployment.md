# Deployment

## Stack

The site is built with Vite and deployed to **AWS S3 + CloudFront**.

| Component | Detail |
|---|---|
| Build output | `dist/` (Vite) |
| Hosting | S3 bucket (static website) |
| CDN | CloudFront distribution |
| CI/CD | GitHub Actions (`.github/workflows/publish-to-s3.yml`) |
| Auth | OIDC — no long-lived AWS keys |

---

## GitHub Actions Workflow

Triggers on push to `main` or `master`. Steps:

1. Checkout + install Node 24.15.0 + `npm install`
2. `npm run build` → outputs to `./dist`
3. Assumes AWS role via OIDC (no static credentials)
4. Clears the S3 bucket
5. Uploads `dist/` to S3
6. Invalidates the CloudFront cache (`/*`)

### Required GitHub configuration

**Org-level secret** (github.com/Stemmlar-Technologies → Settings → Secrets → Actions):

| Secret | Value |
|---|---|
| `AWS_ROLE_ARN` | `arn:aws:iam::431812391116:role/github-deploy-s3-cloudfront` |

**Repo environment variables** (repo → Settings → Environments → `production` → Variables):

| Variable | Value |
|---|---|
| `AWS_BUCKET` | S3 bucket name |
| `AWS_DISTRIBUTION_ID` | CloudFront distribution ID |

---

## AWS OIDC Setup

GitHub is configured as an OIDC identity provider in IAM, allowing all repos and branches in the `Stemmlar-Technologies` organisation to assume the deploy role without static credentials.

- **Identity provider:** `token.actions.githubusercontent.com`
- **Role:** `arn:aws:iam::431812391116:role/github-deploy-s3-cloudfront`
- **Role permissions:** S3 (PutObject, DeleteObject, ListBucket) + CloudFront (CreateInvalidation)

---

## SPA Routing — CloudFront Error Pages

React Router handles all routing client-side. S3 has no knowledge of routes like `/links` or `/applications/*` — requesting them directly returns a 403.

**Fix:** CloudFront custom error responses redirect all 403s and 404s to `/index.html` with a 200 status, letting React Router render the correct page.

CloudFront → Distribution → Error pages:

| HTTP error code | Response page | Response code |
|---|---|---|
| `403` | `/index.html` | `200` |
| `404` | `/index.html` | `200` |

After changing error page rules, invalidate `/*` to clear any cached error responses.
