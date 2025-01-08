import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody, { TableBodyProps } from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer, { TableContainerProps } from '@mui/material/TableContainer';
import TableHead, { TableHeadProps } from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { TableComponents, TableVirtuoso } from 'react-virtuoso';

interface Data {
  id: number;
  City: string;
  Population: string;
  September: number;
  October: number;
  November: number;
  December: number;
}

interface ColumnData {
  dataKey: keyof Data;
  label: string;
  numeric?: boolean;
  width?: number;
}

const rows: Data[] = [
  { id: 1, City: 'Khon Kaen', Population: '1,767,601', September: 30, October: 28, November: 26, December: 24 },
  { id: 2, City: 'Maha Sarakham', Population: '1,167,000', September: 31, October: 30, November: 28, December: 26 },
  { id: 3, City: 'Nong Khai', Population: '982,578', September: 30, October: 29, November: 27, December: 25 },
  { id: 4, City: 'Nakhon Phanom', Population: '703,392', September: 32, October: 31, November: 29, December: 27 },
  { id: 5, City: 'Sakon Nakhon', Population: '1,000,000', September: 31, October: 30, November: 28, December: 26 },
  { id: 6, City: 'Udon Thani', Population: '1,500,000', September: 33, October: 32, November: 30, December: 28 },
  { id: 7, City: 'Mukdahan', Population: '500,000', September: 34, October: 33, November: 31, December: 29 },
  { id: 8, City: 'Chaiyaphum', Population: '1,127,423', September: 32, October: 31, November: 29, December: 27 },
  { id: 9, City: 'Buriram', Population: '1,553,765', September: 33, October: 32, November: 30, December: 28 },
  { id: 10, City: 'Kalasin', Population: '982,578', September: 31, October: 30, November: 28, December: 26 },
  { id: 11, City: 'Surin', Population: '1,500,000', September: 33, October: 31, November: 29, December: 27 },
  { id: 12, City: 'Roi Et', Population: '1,225,600', September: 32, October: 30, November: 28, December: 26 },
  { id: 13, City: 'Sisaket', Population: '1,000,000', September: 31, October: 29, November: 27, December: 25 },
  { id: 14, City: 'Amnat Charoen', Population: '480,000', September: 30, October: 28, November: 26, December: 24 },
  { id: 15, City: 'Chaiyaphum', Population: '1,127,423', September: 32, October: 31, November: 29, December: 27 },
  { id: 16, City: 'Nong Bua Lamphu', Population: '600,000', September: 30, October: 28, November: 26, December: 24 },
  { id: 17, City: 'Loei', Population: '650,000', September: 30, October: 28, November: 26, December: 24 },
  { id: 18, City: 'Saraburi', Population: '500,000', September: 30, October: 28, November: 26, December: 24 },
];

const columns: ColumnData[] = [
  { width: 150, label: 'City', dataKey: 'City' },
  { width: 180, label: 'Population (people)', dataKey: 'Population' },
  { width: 120, label: 'September', dataKey: 'September', numeric: true },
  { width: 120, label: 'October', dataKey: 'October', numeric: true },
  { width: 120, label: 'November', dataKey: 'November', numeric: true },
  { width: 120, label: 'December', dataKey: 'December', numeric: true },
];

const VirtuosoTableComponents: TableComponents<Data> = {
  Scroller: React.forwardRef<HTMLDivElement, TableContainerProps>((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead: React.forwardRef<HTMLTableSectionElement, TableHeadProps>((props, ref) => (
    <TableHead {...props} ref={ref} />
  )),
  TableRow,
  TableBody: React.forwardRef<HTMLTableSectionElement, TableBodyProps>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric ? 'right' : 'left'}
          style={{ width: column.width, fontWeight: 'bold' }}  // Bold header text
          sx={{ backgroundColor: 'background.paper' }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index: number, row: Data) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric ? 'right' : 'left'}
        >
          {column.dataKey === 'September' || column.dataKey === 'October' || column.dataKey === 'November' || column.dataKey === 'December' ? (
            <>
              <Typography variant="body2" sx={{ display: 'block', fontSize: '0.875rem' }}>
                {row[column.dataKey]}°
              </Typography>
            </>
          ) : (
            row[column.dataKey]
          )}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function UserTable() {
  const firstTenRows = rows.slice(0, 18);

  return (
    <div className="flex w-full text-white shadow-lg mb-5">
      <Paper style={{ height: 450, width: '100%', borderRadius: '24px' }}>
        <TableVirtuoso
          data={firstTenRows}
          components={VirtuosoTableComponents}
          fixedHeaderContent={fixedHeaderContent}
          itemContent={rowContent}
        />
      </Paper>
    </div>
  );
}
