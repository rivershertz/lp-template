# LP template for SSG-landing-pages

This template is for cutting dev time when initializing a new LP

## Functionallities

### Add a registration form

the form includes a telephone input, validations to all fields and an i18n infrastructure.

[validation library docs (version 4)](https://vee-validate.logaretm.com/v4/)

[telelphone input docs (vue 3 support)](https://vue-tel-input.iamstevendao.com/documentation/next.html)

```bash
  npm run add:register-form
```

❗️If you dont need this form, delete the 'register-form' folder in the src folder and the RegisterForm.vue component src/components

### Add a reviews carousel

Pretty straight forward...

[vue3-carousel docs](https://ismail9k.github.io/vue3-carousel/)

```bash
  npm run add:reviews
```

❗️If you dont want this carousel, delete the reviews folder in src/components

### Add a comments section

This is a specific need for Rina's projects, the comments are submitted and Rina can approve them or discard them as she wishes.

```bash
  npm run add:comments
```

After making sure a comment is submitted successfully (200 status code when submittimg a comment), we need to update the comments manager website:

- switch to "comments-manager" branch
- find the Header.vue component and add the new website to the list in pages array [like so](https://imgur.com/ziKrd4q).

❗️❗️❗️**the url has to be structured exactly like the others**

- push to github, build and deploy the updated comments-manager website

[comments-manager](https://comments-admin.crtmadness.online/) website

❗️If you dont want a comments section, delete the comments folder from src/components
