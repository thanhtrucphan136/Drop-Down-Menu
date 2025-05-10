# Drop-Down-Menu

## Demo: https://thanhtrucphan136.github.io/Drop-Down-Menu/

## NPM Package: https://www.npmjs.com/package/@trucphan136/drop-down-menu

## To install the package via npm

    **npm i @trucphan136/drop-down-menu**

### Usage

**In your HTML file, you can find the necessary HTML structure and classes in the dist/index.html file within the package.**

Example:

<div class="dropdown">
      <div class="dropdown-btn">
        <div class="dropdown-text">Menu</div>
        <div class="dropdown-arrow"></div>
      </div>
      <div class="dropdown-options">
        <a href="#" class="link">option 1</a>
        <a href="#" class="link">option 2</a>
        <a href="#" class="link">option 3</a>
    </div>
</div>

**After including the HTML structure, link the JavaScript file by adding the following <script> tag before the closing </body> tag in your HTML file:**

<script defer src="node_modules/@trucphan136/drop-down-menu/dist/main.js"></script>
