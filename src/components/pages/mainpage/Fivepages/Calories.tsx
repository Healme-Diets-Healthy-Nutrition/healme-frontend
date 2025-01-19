import * as React from 'react';
import { AllCommunityModule, ColDef, GridOptions, ModuleRegistry } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { themeQuartz, iconSetMaterial } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

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

export interface RowData1 {
  nutrient: string;
  value: string;
}

export interface RowData2 {
  food: string;
  time: string;
  quantity: number;
  protein: number;
  carbohydrates: number;
  fats: number;
  calories: number;
}

const Calories: React.FC = () => {
  const gridOptions1: GridOptions<RowData1> = {
    domLayout: 'normal',
    suppressHorizontalScroll: true,
    suppressScrollOnNewData: true,
  }

  const [rowData1, setRowData1] = React.useState<RowData1[]>([
    { nutrient: 'Protein', value: 168.32 + ' g' },
    { nutrient: 'Carbs', value: 303.94 + ' g' },
    { nutrient: 'Fats', value: 60.35 + ' g' },
    { nutrient: 'Total', value: 1332.28 + ' g' },
  ]);

  const [colDefs1, setColDefs1] = React.useState<ColDef<RowData1>[]>([
    { field: 'nutrient' },
    { field: 'value' },
  ]);

  const gridOptions2: GridOptions<RowData2> = {
    domLayout: 'normal',
    suppressHorizontalScroll: true,
    suppressScrollOnNewData: true,
    theme: myTheme,
    
  }

  const [rowData2, setRowData2] = React.useState<RowData2[]>([
    { food: 'Apple', time: '08:20', quantity: 1, protein: 23.5, carbohydrates: 100, fats: 30, calories: 18},
    { food: 'Eggs', time: '08:33', quantity: 3, protein: 56.6, carbohydrates: 120, fats: 46.3, calories: 16},
    { food: 'Bolognese', time: '12:20', quantity: 12, protein: 78, carbohydrates: 78.5, fats: 145, calories: 167},
    { food: 'Banana', time: '15:46', quantity: 2, protein: 87.3, carbohydrates: 56, fats: 175, calories: 134},
    { food: 'Protein powder', time: '17:27', quantity: 1, protein: 98, carbohydrates: 16, fats: 34, calories: 187},
    { food: 'Glass of milk', time: '18:48', quantity: 1, protein: 91.2, carbohydrates: 18, fats: 15, calories: 145},
    { food: 'Chicken soup', time: '20:30', quantity: 15, protein: 10, carbohydrates: 99, fats: 17.7, calories: 123},
]);

  const [colDefs2, setColDefs2] = React.useState<ColDef<RowData2>[]>([
    { field: 'food', flex: 1 },
    { field: 'time', flex: 1 },
    { field: 'quantity', flex: 1 },
    { field: 'protein', flex: 1 },
    { field: 'carbohydrates', flex: 1 },
    { field: 'fats', flex: 1 },
    { field: 'calories', flex: 1 },
]);

  return (
    <div className="grid grid-cols-12 gap-6 items-start bg-gray-100 p-6">
            {/* Smaller Table on the Left */}
            <div className="col-span-3 bg-rose-taupe text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold mb-4">Today</h2>
                <div className="ag-theme-alpine h-64 w-full">
                    <AgGridReact rowData={rowData1} columnDefs={colDefs1} gridOptions={gridOptions1} />
                </div>
            </div>

            {/* Larger Table on the Right */}
            <div className="col-span-9 bg-white text-black p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold mb-4">Journal</h2>
                <div className="ag-theme-alpine h-64 w-full overflow-auto">
                    <AgGridReact rowData={rowData2} columnDefs={colDefs2} gridOptions={gridOptions2} />
                </div>
            </div>
        </div>
  );
}

export default Calories;