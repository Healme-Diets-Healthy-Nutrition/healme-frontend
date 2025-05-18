import * as React from 'react';
import { AllCommunityModule, ColDef, GridOptions, ModuleRegistry } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { themeQuartz, iconSetMaterial } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

const myTheme = themeQuartz
  .withPart(iconSetMaterial)
  .withParams({
    accentColor: "var(--accent)",
    backgroundColor: "var(--background)",
    browserColorScheme: "light",
    cellTextColor: "var(--foreground)",
    chromeBackgroundColor: {
      ref: "foregroundColor",
      mix: 0.07,
      onto: "backgroundColor",
    }, 
    fontFamily: "inherit",
    fontSize: 16,
    foregroundColor: "var(--muted-foreground)",
    headerBackgroundColor: "var(--muted)",
    headerFontSize: 16,
    headerTextColor: "var(--muted-foreground)",
  });


interface VitaminRow {
  nutrient: string;
  Mon: number;
  Tue: number;
  Wed: number;
  Thu: number;
  Fri: number;
  Sat: number;
  Sun: number;
}

const Week: React.FC = () => {
  const [rowData] = React.useState<VitaminRow[]>([
    { nutrient: 'Vitamin A', Mon: 900, Tue: 900, Wed: 900, Thu: 900, Fri: 900, Sat: 900, Sun: 900 },
    { nutrient: 'Vitamin B1', Mon: 1.2, Tue: 1.2, Wed: 1.2, Thu: 1.2, Fri: 1.2, Sat: 1.2, Sun: 1.2 },
    { nutrient: 'Vitamin B2', Mon: 1.3, Tue: 1.3, Wed: 1.3, Thu: 1.3, Fri: 1.3, Sat: 1.3, Sun: 1.3 },
    { nutrient: 'Vitamin B3', Mon: 16, Tue: 16, Wed: 16, Thu: 16, Fri: 16, Sat: 16, Sun: 16 },
    { nutrient: 'Vitamin B5', Mon: 5, Tue: 5, Wed: 5, Thu: 5, Fri: 5, Sat: 5, Sun: 5 },
    { nutrient: 'Vitamin B6', Mon: 1.3, Tue: 1.3, Wed: 1.3, Thu: 1.3, Fri: 1.3, Sat: 1.3, Sun: 1.3 },
    { nutrient: 'Vitamin B7', Mon: 30, Tue: 30, Wed: 30, Thu: 30, Fri: 30, Sat: 30, Sun: 30 },
    { nutrient: 'Vitamin B9', Mon: 400, Tue: 400, Wed: 400, Thu: 400, Fri: 400, Sat: 400, Sun: 400 },
    { nutrient: 'Vitamin B12', Mon: 2.4, Tue: 2.4, Wed: 2.4, Thu: 2.4, Fri: 2.4, Sat: 2.4, Sun: 2.4 },
    { nutrient: 'Vitamin C', Mon: 90, Tue: 90, Wed: 90, Thu: 90, Fri: 90, Sat: 90, Sun: 90 },
    { nutrient: 'Vitamin D', Mon: 20, Tue: 20, Wed: 20, Thu: 20, Fri: 20, Sat: 20, Sun: 20 },
    { nutrient: 'Vitamin E', Mon: 15, Tue: 15, Wed: 15, Thu: 15, Fri: 15, Sat: 15, Sun: 15 },
    { nutrient: 'Vitamin K', Mon: 120, Tue: 120, Wed: 120, Thu: 120, Fri: 120, Sat: 120, Sun: 120 },
    { nutrient: 'Calcium', Mon: 1000, Tue: 1000, Wed: 1000, Thu: 1000, Fri: 1000, Sat: 1000, Sun: 1000 },
    { nutrient: 'Chloride', Mon: 2300, Tue: 2300, Wed: 2300, Thu: 2300, Fri: 2300, Sat: 2300, Sun: 2300 },
    { nutrient: 'Chromium', Mon: 35, Tue: 35, Wed: 35, Thu: 35, Fri: 35, Sat: 35, Sun: 35 },
    { nutrient: 'Copper', Mon: 0.9, Tue: 0.9, Wed: 0.9, Thu: 0.9, Fri: 0.9, Sat: 0.9, Sun: 0.9 },
    { nutrient: 'Fluoride', Mon: 4, Tue: 4, Wed: 4, Thu: 4, Fri: 4, Sat: 4, Sun: 4 },
    { nutrient: 'Iodine', Mon: 150, Tue: 150, Wed: 150, Thu: 150, Fri: 150, Sat: 150, Sun: 150 },
    { nutrient: 'Iron', Mon: 18, Tue: 18, Wed: 18, Thu: 18, Fri: 18, Sat: 18, Sun: 18 },
    { nutrient: 'Magnesium', Mon: 400, Tue: 400, Wed: 400, Thu: 400, Fri: 400, Sat: 400, Sun: 400 },
    { nutrient: 'Manganese', Mon: 2.3, Tue: 2.3, Wed: 2.3, Thu: 2.3, Fri: 2.3, Sat: 2.3, Sun: 2.3 },
    { nutrient: 'Molybdenum', Mon: 45, Tue: 45, Wed: 45, Thu: 45, Fri: 45, Sat: 45, Sun: 45 },
    { nutrient: 'Phosphorus', Mon: 700, Tue: 700, Wed: 700, Thu: 700, Fri: 700, Sat: 700, Sun: 700 },
    { nutrient: 'Potassium', Mon: 4700, Tue: 4700, Wed: 4700, Thu: 4700, Fri: 4700, Sat: 4700, Sun: 4700 },
    { nutrient: 'Selenium', Mon: 55, Tue: 55, Wed: 55, Thu: 55, Fri: 55, Sat: 55, Sun: 55 },
    { nutrient: 'Sodium', Mon: 2300, Tue: 2300, Wed: 2300, Thu: 2300, Fri: 2300, Sat: 2300, Sun: 2300 },
    { nutrient: 'Zinc', Mon: 11, Tue: 11, Wed: 11, Thu: 11, Fri: 11, Sat: 11, Sun: 11 },
  ]);

  const [colDefs] = React.useState<ColDef<VitaminRow>[]>([
    { field: 'nutrient', headerName: 'Nutrient', flex: 2 },
    { field: 'Mon', headerName: 'Mon', flex: 1 },
    { field: 'Tue', headerName: 'Tue', flex: 1 },
    { field: 'Wed', headerName: 'Wed', flex: 1 },
    { field: 'Thu', headerName: 'Thu', flex: 1 },
    { field: 'Fri', headerName: 'Fri', flex: 1 },
    { field: 'Sat', headerName: 'Sat', flex: 1 },
    { field: 'Sun', headerName: 'Sun', flex: 1 },
  ]);

  const gridOptions: GridOptions<VitaminRow> = {
    domLayout: 'autoHeight',
    suppressHorizontalScroll: true,
    theme: myTheme,
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Weekly Vitamin & Mineral Intake Goals</h2>
      <div className="ag-theme-alpine w-full">
        <AgGridReact rowData={rowData} columnDefs={colDefs} gridOptions={gridOptions} />
      </div>
    </div>
  );
};

export default Week;
