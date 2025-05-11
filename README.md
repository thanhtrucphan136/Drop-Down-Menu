# Drop-Down-Menu

## [Demo](https://thanhtrucphan136.github.io/Drop-Down-Menu/)

## [NPM Package](https://www.npmjs.com/package/@trucphan136/drop-down-menu)

## Install the package via npm

    npm i @trucphan136/drop-down-menu

### Usage

**1. HTML structure**

Example HTML code (detailed example can also be found in dropdown.html):

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

**2. Import the function and CSS into your script**

    import dropdown from "@trucphan136/drop-down-menu"; // Import the dropdown function
    import "@trucphan136/drop-down-menu/styles.css"; // Import the styles

    dropdown(); // Initialize the dropdown

