module.exports = {
    extends: ["eslint:recommended", "plugin:astro/recommended"],
    overrides: [
        {
            // Define the configuration for `.astro` file.
            files: ["*.astro"],
            // Allows Astro components to be parsed.
            parser: "astro-eslint-parser",
            // Parse the script in `.astro` as TypeScript by adding the following configuration.
            // It's the setting you need when using TypeScript.
            parserOptions: {
                parser: "@typescript-eslint/parser",
                extraFileExtensions: [".astro"],
            },
        },
        {
          files: ['*.ts'],
          parser: '@typescript-eslint/parser',
          extends: ['plugin:@typescript-eslint/recommended']
        },
        {
          // Define the configuration for `<script>` tag.
          // Script in `<script>` is assigned a virtual file name with the `.js` extension.
          files: ['**/*.astro/*.js', '*.astro/*.js'],
          parser: '@typescript-eslint/parser',
        },
    ],
};
