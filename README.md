# PSG-Theme: A Pug, Sass, and Gulp Project
PSG-Theme is a customizable and responsive theme that can be used for any company website. It is built using SASS, Pug, and Gulp, making it easy to edit and maintain.

## Getting Started
To get started with PSG-Theme, clone the repository to your local machine. Then, navigate to the project directory and run npm install to install the necessary dependencies. Once the dependencies have been installed, run gulp to compile the SASS and Pug files and start the development server.

```
 git clone https://github.com/moaelkady/PSG-Theme-A-Pug-Sass-and-Gulp-Project.git
 cd PSG-Theme: A Pug, Sass, and Gulp Project
 npm install
 gulp
```

## Customization
PSG-Theme is designed to be easy to customize. 
. The main styles are defined in `stage/scss/main.scss`
. The layout is defined in `stage/pug/layout.pug`. 
. To make changes to the theme, simply edit these files and re-run gulp to compile the changes.

In addition to the main styles, SassyCompany also includes several variables that can be customized in src/scss/_variables.scss. These variables allow you to easily change the colors, fonts, and other design elements of the theme.

## Deployment
. When you are ready to deploy your PSG-Theme theme, simply run `gulp build` to compile the final version of the theme. 
. This will create a `dist` directory containing the compiled HTML, CSS, and JavaScript files. 
. You can then upload these files to your web server to make your theme live.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
