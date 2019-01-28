# Noah's Park Tree Care Website
By [Laxalt & McIver](https://www.laxaltandmciver.co/)
[Deployed with Netlify](https://app.netlify.com/sites/fervent-clarke-5ad7c7/overview)

Keeping your trees healthy and beautiful. Based off of by [gatsby-contentful-starter](https://github.com/contentful-userland/gatsby-contentful-starter).

## Features

- Contentful integration with ready to go placeholder content
- Netlify integration including a pre-built contact form
- Minimal responsive design - made to customize or tear apart
- Pagination logic
- Styled components
- SEO Friendly Component
  - JSON-LD Schema
  - OpenGraph sharing support
  - Sitemap Generation
- Google Analytics
- Progressive Web app
- Offline Support
- RSS Feed
- [Gatsby Standard module](https://www.npmjs.com/package/eslint-config-gatsby-standard) for linting Javascript with StandardJS
- Stylelint support for Styled Components to lint the CSS in JS

## Getting Started

### Install

## Install
```
npm i
```

## Local Development
```
gatsby develop
```

## Local Build Test
```
gatsby build
```

## Deploy to Production
We are using [Netlify](https://www.netlify.com/) to watch and build the `master` branch.
```
git add .
git commit -m "Sample Commit"
git push origin master --set-upstream
```

### Setup Contentful

1.  [Sign up](https://www.contentful.com/sign-up/) for Contentful and create a new empty space

2.  `npm run setup`

3.  Enter in the requested info for your Contentful space found here: **app.contentful.com** → **Space Settings** → **API keys**. You will need to provide both a standard API key (first tab) and a management key (second tab).

## Customization

### Website Data

Edit the Site config to adjust any Global Variables.

```js
module.exports = {
  siteTitle: "Noah's Park Tree Care",
  siteTitleAlt: "Noah's Park Tree Care", // This allows an alternative site title for SEO schema.
  publisher: "Noah's Park", // Organization name used for SEO schema
  siteDescription:
    'Keeping your trees healthy and beautiful',
  siteUrl: 'https://fervent-clarke-5ad7c7.netlify.com', // Site domain. Do not include a trailing slash! If you wish to use a path prefix you can read more about that here: https://www.gatsbyjs.org/docs/path-prefix/
  postsPerHomePage: 7, // Number of posts shown on the 1st page of of the index.js template (home page)
  postsPerPage: 6, // Number of posts shown on paginated pages
  author: 'Laxalt & McIver', // Author for RSS author segment and SEO schema
  authorUrl: 'https://www.laxaltandmciver.co/', // URL used for author and publisher schema, can be a social profile or other personal site
  userTwitter: '@twitter', // Change for Twitter Cards
  shortTitle: 'GCN App', // Used for App manifest e.g. Mobile Home Screen
  shareImage: '/logos/share.jpg', // Open Graph Default Share Image. 1200x1200 is recommended
  shareImageWidth: 900, // Change to the width of your default share image
  shareImageHeight: 600, // Change to the height of your default share image
  siteLogo: '/logos/logo-512.png', // Logo used for SEO, RSS, and App manifest
  backgroundColor: '#e9e9e9', // Used for Offline Manifest
  themeColor: '#121212', // Used for Offline Manifest
  copyright: "Copyright © 2019 Noah's Park Tree Care", // Copyright string for the RSS feed
}
```

**Note:** If you do not see your changes reflected when developing locally you may need to delete the `.cache` folder and restart the development server.

### Theme

Edit [`/src/styles/theme.js`](https://github.com/ryanwiemer/gatsby-starter-gcn/blob/master/src/styles/theme.js)

```js
const theme = {
  colors: {
    base: '#121212',
    secondary: '#e9e9e9',
    tertiary: '#f3f3f3',
    highlight: '#5b8bf7',
  },
  sizes: {
    maxWidth: '1200px',
    maxWidthCentered: '650px',
  },
  responsive: {
    small: '35em',
    medium: '50em',
    large: '70em',
  },
}
```

### Using Gatsby Standard

1.  Quickly check your code for errors with the `npm test` script
2.  You can view the [Gatsby Standard README](https://github.com/brandonkal/eslint-config-gatsby-standard) for details on how to integrate this project's included Gatsby Standard, Stylelint, and Prettier modules into your text editor

### Content and SEO

1.  You can replace the `share.jpg` and `logo-512` files in the `static/logos` directory. After replacing these files ensure that you edit the image size dimensions specified in `/src/utils/siteConfig.js`
2.  Meta descriptions are defined in Contentful. If you choose to leave this field blank on new posts a 320 character excerpt of the post/page will be used.
3.  **IMPORTANT:** Be sure to manually enter at least one meta description on a page and post in Contentful or the site will fail to build.

## Deployment

### Manual Netlify Deployment

1.  Run `gatsby build`

2.  Drag and drop the folder `/public/` into Netlify

### Netlify Deployment From Git (Recommended)

1.  [Go to the NPTC Deploy Dashboard.](https://app.netlify.com/sites/fervent-clarke-5ad7c7/overview)

2.  Connect with GitHub and select your repo

3.  Navigate to Netlify: **Settings** → **Build & Deploy** → **Build Environment Variables**. Add the following environment variables using the Space ID and Production Access Token from Contentful. Additionally if desired you can enter a Google Analytics ID. The variables must be named exactly like this in order to work properly.

```
ACCESS_TOKEN
SPACE_ID
GOOGLE_ANALYTICS
```

![](screenshots/netlify-build-environment-variables.jpg)

4.  Navigate to Netlify: **Deploys**. Click `Trigger deploy` to manually trigger a deploy to confirm the website is building successfully using your build environment variables. At this point be aware that every time you push to `master` a deploy will automatically start and be published to production.

## Additional Settings

### Contentful Webhook (Optional)

1.  Navigate to Netlify:
    **Settings** → **Build & Deploy** → **Build hooks**.
    Create a new build hook.

2.  Navigate to Contentful:
    **app.contentful.com** → **Space Settings** → **Webhooks**. Create a webhook using the Netlify build URL that you just created
    and configure which events should trigger the build on production. For example the following will rebuild the production website every time a post or page is published, unpublished or deleted:

![](screenshots/contentful-webhook-selected-events.jpg)

### Netlify Form Notifications (Optional)

1.  Navigate to Netlify:
    **Forms** → **Notifications**

2.  Click the add notification dropdown and select your desired notification method.

![](screenshots/netlify-form-notifcations.jpg)

## Useful Tips

- If you make edits to your Contentful space while running `gatsby develop` you will need to stop it and rerun the command to see the changes reflected. For example a new post or page will not automatically show up until the website has been rebuilt.
- The template assumes you have at least **one page**, **one post** and **one tag** in Contentful. If you do not the website will fail to build.
- The SEO component assumes you have entered at least one meta description in Contentful for a post and one for a page. If you do not the website will fail to build. See the Content and SEO section above.
- **DO NOT** store your Contentful access tokens or space ids anywhere in GitHub. Treat them like passwords.
- **Yarn Users:** remove the `yarn*` line from the `.gitignore` file to avoid discrepancies in the Netlify deploy.

#npts-contenful
