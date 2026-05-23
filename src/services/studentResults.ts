export interface SubjectMark {
  name: string;
  marks: string | number;
}

export interface StudentResultRecord {
  scholarNumber: string;
  studentName: string;
  className: string;
  subjects: SubjectMark[];
  status: string;
}

const getSheetConfig = () => ({
  sheetId: import.meta.env.VITE_GOOGLE_SHEET_ID as string | undefined,
  sheetName: (import.meta.env.VITE_GOOGLE_SHEET_NAME as string | undefined) || 'Sheet1',
});

export const isResultsConfigured = (): boolean => {
  const { sheetId } = getSheetConfig();
  return Boolean(sheetId && sheetId !== 'SHEET_ID');
};

export const parseGvizResponse = (responseText: string): StudentResultRecord | null => {
  const jsonStart = responseText.indexOf('{');
  if (jsonStart === -1) {
    throw new Error('Invalid response from Google Sheets.');
  }

  const data = JSON.parse(responseText.substring(jsonStart)) as {
    table?: { cols: { label?: string }[]; rows: { c: ({ v?: string | number } | null)[] }[] };
  };

  if (!data.table?.rows?.length) {
    return null;
  }

  const { cols, rows } = data.table;
  const row = rows[0];

  const getCellValue = (index: number) => {
    const cell = row.c[index];
    if (cell?.v === undefined || cell?.v === null) return '';
    return cell.v;
  };

  const scholarNumber = String(getCellValue(0));
  const studentName = String(getCellValue(1));
  const className = String(getCellValue(2));

  const subjectColumnsStart = 3;
  const lastIndex = cols.length - 1;
  const subjects: SubjectMark[] = [];

  for (let i = subjectColumnsStart; i < lastIndex; i += 1) {
    const label = cols[i]?.label || `Subject ${i - subjectColumnsStart + 1}`;
    const value = getCellValue(i);
    if (label || value !== '') {
      subjects.push({ name: label, marks: value });
    }
  }

  const rawStatus = getCellValue(lastIndex);
  const status = typeof rawStatus === 'string' ? rawStatus.trim() : String(rawStatus || '');

  return {
    scholarNumber,
    studentName,
    className,
    subjects,
    status,
  };
};

const buildQueryUrl = (scholarNumber: string): string => {
  const { sheetId, sheetName } = getSheetConfig();

  if (!sheetId || sheetId === 'SHEET_ID') {
    throw new Error(
      'Results are not configured yet. Set VITE_GOOGLE_SHEET_ID in your environment.',
    );
  }

  const sanitized = scholarNumber.replace(/'/g, "''");
  const baseUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq`;
  const params = new URLSearchParams({
    tqx: 'out:json',
    sheet: sheetName,
    tq: `select * where A = '${sanitized}'`,
  });

  return `${baseUrl}?${params.toString()}`;
};

export const fetchStudentResult = async (
  scholarNumber: string,
): Promise<StudentResultRecord | null> => {
  const trimmed = scholarNumber.trim();
  if (!trimmed) {
    throw new Error('Please enter a valid Scholar Number.');
  }

  const url = buildQueryUrl(trimmed);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Unable to fetch result at the moment. Please try again later.');
  }

  const text = await response.text();
  return parseGvizResponse(text);
};
