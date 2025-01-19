import { themeQuartz, iconSetMaterial } from 'ag-grid-community';

// to use myTheme in an application, pass it to the theme grid option
const myTheme = themeQuartz
	.withPart(iconSetMaterial)
	.withParams({
        accentColor: "#7D4F50",
        backgroundColor: "#F8F8F8",
        browserColorScheme: "light",
        cellTextColor: "#000000",
        chromeBackgroundColor: {
            ref: "foregroundColor",
            mix: 0.07,
            onto: "backgroundColor"
        },
        fontFamily: "inherit",
        fontSize: 16,
        foregroundColor: "#747474",
        headerBackgroundColor: "#B39391",
        headerFontSize: 16,
        headerTextColor: "#F8F8F8"
    });
