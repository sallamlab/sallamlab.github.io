# Putting the lab website on GitHub Pages — step by step

This takes about 20 minutes. Nothing here touches your current Weebly site, so
sallamresearchlab.com keeps working until you decide to switch it over (Part 4).

## Part 1 — Create a GitHub account (5 min)

1. Go to <https://github.com/signup>.
2. Enter your email, choose a password, and pick a **username**. The username becomes part of
   the site's address (`https://USERNAME.github.io`), so choose something you are happy to
   share — for example `sallamlab` gives `https://sallamlab.github.io`. Usernames can contain
   letters, numbers and single hyphens.
3. Verify your email address when GitHub sends the confirmation code. The free plan is all
   that is needed.

## Part 2 — Create the repository (3 min)

A "repository" is simply the folder on GitHub that holds the website files.

1. Signed in, click the **+** icon at the top right and choose **New repository**.
2. Repository name: type exactly **`USERNAME.github.io`**, replacing USERNAME with the
   username you chose (for example `sallamlab.github.io`). This special name is what makes
   GitHub serve the files as a website at `https://USERNAME.github.io`.
3. Leave it **Public** (required for free GitHub Pages). Do **not** tick "Add a README".
4. Click **Create repository**.

## Part 3 — Upload the website files (10 min)

Unzip `sallamresearchlab-site.zip` on your computer. Inside is a folder called
`sallamresearchlab` with the site files. Pick either method below.

### Method A — GitHub Desktop (recommended; handles all 150 files in one go)

1. Install GitHub Desktop from <https://desktop.github.com/> and sign in with your new account.
2. In GitHub Desktop choose **File → Clone repository**, pick `USERNAME.github.io`, choose a
   location on your computer, and click **Clone**. This creates an (almost empty) folder.
3. Copy **everything inside** the unzipped `sallamresearchlab` folder into that cloned folder
   (the `_config.yml` file should end up directly inside it, not in a subfolder).
4. Back in GitHub Desktop you will see the list of new files. Type a summary at the bottom left
   (for example "Initial website"), click **Commit to main**, then click **Push origin** at the
   top.

### Method B — Upload in the browser (no software to install)

GitHub accepts at most 100 files per upload, so the files are also provided pre-sorted into
three batches in `sallamresearchlab-upload-batches.zip`. Unzip it; inside are folders
`batch-1`, `batch-2` and `batch-3`.

1. On the new repository's page click **uploading an existing file**.
2. Open `batch-1` on your computer, select **everything inside it** (Ctrl+A / Cmd+A), and drag
   it onto the upload area. Wait for the file list to finish, then click **Commit changes**.
3. Go back to the repository's main page, click **Add file → Upload files**, and repeat with
   the contents of `batch-2`, then once more with `batch-3`. The folders inside the batches
   (`assets/img`) are recreated automatically and merge together.

## Part 3b — Turn on GitHub Pages (2 min)

1. In the repository click **Settings** (top tab), then **Pages** in the left menu.
2. Under **Build and deployment → Source**, make sure **Deploy from a branch** is selected, and
   under **Branch** choose **main** and **/ (root)**. Click **Save**.
3. Wait 1–3 minutes, then open **`https://USERNAME.github.io`**. The site is live.
   (The first build can take a little longer; refresh after a few minutes if you see a 404.)

From now on, editing any file in the repository republishes the site automatically. The
`README.md` file in the repository explains how to edit each part of the site.

## Part 4 — Point sallamresearchlab.com at the new site (when you are ready)

Your domain is registered at **Register.com (Network Solutions)**, and its DNS is managed
there too — independent of Weebly. The registration currently runs until **January 9, 2027**,
so keep it renewed. Do this only once you are happy with the new site.

1. **Tell GitHub about the domain.** Repository → Settings → Pages → **Custom domain**: type
   `www.sallamresearchlab.com` and click **Save**. GitHub adds a file named `CNAME` to the
   repository.
2. **Update DNS at Register.com.** Sign in at <https://www.register.com/>, open the domain's
   **DNS / Advanced DNS** settings and set:

   | Type  | Host / Name | Value                                  |
   | ----- | ----------- | -------------------------------------- |
   | CNAME | `www`       | `USERNAME.github.io`                   |
   | A     | `@`         | `185.199.108.153`                      |
   | A     | `@`         | `185.199.109.153`                      |
   | A     | `@`         | `185.199.110.153`                      |
   | A     | `@`         | `185.199.111.153`                      |

   Delete the existing records that point `www` and `@` at Weebly (they usually point to
   `199.34.228.x` or `*.weebly.com`). Leave MX or other records alone if you have email on the
   domain.
3. Wait for DNS to update (minutes to a few hours). Back in GitHub → Settings → Pages, when the
   domain check shows a green tick, turn on **Enforce HTTPS**.
4. In the repository edit `_config.yml` and set `url: "https://www.sallamresearchlab.com"` so
   that links in search-engine previews use the real address.
5. Once `https://www.sallamresearchlab.com` shows the new site, you can cancel the Weebly site
   plan. (Keep the domain registration at Register.com — that is separate from Weebly.)

## A few things to check on the new site

- **Esther Villalobos** appears in the current members with the placeholder role "Lab Member"
  (the old site had her photo but no listing) — edit `_data/team.yml`.
- A handful of older photos on the Team page had no captions on the old site; they are marked
  `TODO` in `_data/team.yml`. Add names or delete those lines.
- The research-area descriptions on the Research page are new text written from the
  publication titles — adjust the wording as you like in `_data/research.yml`.
- Five short lab videos hosted by Weebly (engine, wind, noneject, ejected, contours of
  vorticity) could not be downloaded from outside Weebly. If you want them on the new site,
  either upload them to your YouTube channel and add the IDs to `_data/research.yml` /
  `_data/teaching.yml`, or download the `.mp4` files from the Weebly editor and add them to
  `assets/video/`.
- The "How the SR-71 Blackbird works" heading on the old Teaching page had no video attached,
  so it was left out.
