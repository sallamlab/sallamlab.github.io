# Sallam Research Lab website

This repository holds the website of the Sallam Research Lab (Thermofluids Laboratory,
Oklahoma State University). It is a static site built by [Jekyll](https://jekyllrb.com/) and
hosted for free on GitHub Pages. Every time a file in this repository changes, GitHub rebuilds
the site automatically (it takes about 1–2 minutes).

## How to update the site

You can do everything from the GitHub website — no software to install.

1. Open the file you want to change (see the table below) and click the **pencil icon**
   ("Edit this file") at the top right of the file view.
2. Make your change.
3. Click **Commit changes…**, optionally type a short note about what you changed, and click
   **Commit changes** again.
4. Wait a minute or two, then reload the website.

| To change…                              | Edit this file                 |
| --------------------------------------- | ------------------------------ |
| Site name, tagline, email, menu         | `_config.yml`                  |
| Current members, alumni, group photos   | `_data/team.yml`               |
| Publications (all four categories)      | `_data/publications.yml`       |
| Courses, lecture videos                 | `_data/courses.yml`            |
| Teaching photos, industry visits, ASME  | `_data/teaching.yml`           |
| News items                              | `_data/news.yml`               |
| Research areas and their pictures       | `_data/research.yml`           |
| Links on the News & Links page          | `_data/links.yml`              |
| Home page text                          | `index.html`                   |
| Colors and fonts                        | `assets/css/site.css`          |

Each data file begins with a short comment explaining its format. In general: copy an existing
entry, paste it where you want it (lists are shown in the order written, so new items go at the
top), and edit the text. Indentation matters in these files — keep the same number of spaces as
the entry you copied.

### Adding a photo

1. Open the `assets/img` folder in the repository.
2. Click **Add file → Upload files**, drag the picture in, and click **Commit changes**.
   Use a simple file name without spaces (for example `jane-doe.jpg`).
3. Refer to the picture by its file name in the data file (for example `photo: jane-doe.jpg`).

Pictures around 1200 pixels wide (or 600 pixels for portraits) look sharp and load fast.

### Adding a publication

Open `_data/publications.yml`, find the right section (`books`, `journal`, `conference` or
`magazine`), and paste a new entry at the top of that section:

```yaml
- year: 2026
  citation: |-
    <u>A. Student</u> and K.A. Sallam*, “Title of the Paper,” <i>Journal Name</i>, Vol. 1, 2026. <a href="https://doi.org/10.0000/example">https://doi.org/10.0000/example</a>.
```

`<u>…</u>` underlines student authors, `<i>…</i>` italicizes a title, and the `<a href="…">…</a>`
makes a clickable DOI link. Because of the `|-` marker, quotes need no special treatment.

### Adding a news item

Open `_data/news.yml` and paste a new entry at the very top:

```yaml
- date: March 2026
  year: 2026
  title: Short headline
  text: >-
    One or two sentences about the news.
  photos:
    - file: picture-name.jpg
      caption: What the picture shows
```

The `photos` and `link` parts are optional and can be deleted.

### Adding a video

Lecture videos are YouTube videos. Copy the 11-character ID from the YouTube link
(for `https://youtu.be/nOWZYy9QsFw` the ID is `nOWZYy9QsFw`) and add it under the course in
`_data/courses.yml`. A lab video can also be added as a file: put the `.mp4` in `assets/video/`
and list it in `_data/research.yml` or `_data/teaching.yml` with `file: name.mp4` (keep files
under about 50 MB; YouTube is the better home for large videos).

## If a change breaks the build

GitHub emails you if the site fails to build (almost always a stray indentation or missing
quote in a `.yml` file). Open the file, compare your new entry with its neighbours, fix the
indentation, and commit again. You can also open the repository's **Actions** tab to see the
error message, or paste the file into <https://www.yamllint.com/> to find the problem line.

## Previewing on your own computer (optional)

Not needed for normal editing. If you have Ruby installed:
`bundle install` then `bundle exec jekyll serve` and open <http://localhost:4000>.
