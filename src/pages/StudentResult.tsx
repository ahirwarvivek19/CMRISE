import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Layout components (following existing page patterns)
const PageContainer = styled.div`
  min-height: 100vh;
  background: var(--background-secondary);
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 5rem 0 3rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 3.5rem 0 2.5rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.1rem;
  opacity: 0.95;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Section = styled.section`
  padding: 3rem 0 4rem;

  @media (max-width: 768px) {
    padding: 2rem 0 3rem;
  }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 1.2fr);
  gap: 2.5rem;
  align-items: flex-start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: var(--background-primary);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
  padding: 1.75rem;

  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-family: 'Poppins', sans-serif;
`;

const CardSubtitle = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

// Form styles
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: var(--text-primary);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 0.9rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  font-size: 1rem;
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
  }
`;

const HelperText = styled.p`
  font-size: 0.85rem;
  color: var(--text-secondary);
`;

const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.9rem 1.5rem;
  border-radius: var(--border-radius);
  border: none;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  background: var(--primary-color);
  color: white;
  transition: var(--transition);
  margin-top: 0.5rem;

  &:hover {
    background: #1e3a8a;
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }

  &:disabled {
    background: var(--text-secondary);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

// Status & message styles
const StatusText = styled.p<{ $type?: string }>`
  font-size: 0.9rem;
  margin-top: 0.75rem;
  color: ${({ $type }) => {
    if ($type === 'error') return '#b91c1c';
    if ($type === 'success') return '#065f46';
    return 'var(--text-secondary)';
  }};
`;

const ResultStatusBadge = styled.span<{ $status?: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: ${({ $status }) => ($status === 'Pass' ? '#065f46' : '#991b1b')};
  background: ${({ $status }) =>
    $status === 'Pass' ? 'rgba(16, 185, 129, 0.12)' : 'rgba(248, 113, 113, 0.15)'};
`;

// Result card styles
const ResultHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;
  margin-bottom: 1.25rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StudentMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
`;

const StudentName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  font-family: 'Poppins', sans-serif;
`;

const StudentInfoLine = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
`;

const MarksTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 0.5rem;
  font-size: 0.95rem;
`;

const MarksHeaderCell = styled.th`
  text-align: left;
  padding: 0.6rem 0.5rem;
  background: var(--background-secondary);
  color: var(--text-secondary);
  font-weight: 600;
  border-bottom: 1px solid var(--border-color);
`;

const MarksCell = styled.td`
  padding: 0.55rem 0.5rem;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-primary);
`;

const MarksRow = styled.tr`
  &:last-child ${MarksCell} {
    border-bottom: none;
  }
`;

// Helper to parse Google Sheets gviz response
const parseGvizResponse = (responseText) => {
  const jsonStart = responseText.indexOf('{');
  if (jsonStart === -1) {
    throw new Error('Invalid response from Google Sheets.');
  }

  const jsonString = responseText.substring(jsonStart);
  const data = JSON.parse(jsonString);

  if (!data.table || !data.table.rows || data.table.rows.length === 0) {
    return null;
  }

  const { cols, rows } = data.table;
  const row = rows[0];

  // Defensive parsing based on column indices:
  // A: Scholar Number, B: Name, C: Class, D..(N-1): subjects, last column: Result
  const getCellValue = (index) => (row.c[index] ? row.c[index].v : '');

  const scholarNumber = getCellValue(0);
  const studentName = getCellValue(1);
  const className = getCellValue(2);

  // Build subjects from dynamic columns
  const subjectColumnsStart = 3;
  const lastIndex = cols.length - 1;

  const subjects = [];
  for (let i = subjectColumnsStart; i < lastIndex; i += 1) {
    const label = cols[i]?.label || `Subject ${i - subjectColumnsStart + 1}`;
    const value = getCellValue(i);
    if (label || value !== undefined) {
      subjects.push({
        name: label,
        marks: value,
      });
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

const buildQueryUrl = (scholarNumber) => {
  const SHEET_ID = 'SHEET_ID'; // Replace with your actual Google Sheet ID
  const SHEET_NAME = 'Sheet1'; // Replace if your sheet tab has a different name

  const baseUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq`;
  const query = `select * where A = '${scholarNumber}'`;

  const params = new URLSearchParams({
    tqx: 'out:json',
    sheet: SHEET_NAME,
    tq: query,
  });

  return `${baseUrl}?${params.toString()}`;
};

const StudentResult = () => {
  const [scholarNumber, setScholarNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');
  const [resultNotFound, setResultNotFound] = useState(false);
  const [studentResult, setStudentResult] = useState<any>(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setResultNotFound(false);
    setStudentResult(null);

    const trimmed = scholarNumber.trim();
    if (!trimmed) {
      setError('Please enter a valid Scholar Number.');
      return;
    }

    setIsLoading(true);
    try {
      const url = buildQueryUrl(trimmed);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Unable to fetch result at the moment. Please try again later.');
      }

      const text = await response.text();
      const parsed = parseGvizResponse(text);

      if (!parsed) {
        setResultNotFound(true);
      } else {
        setStudentResult(parsed);
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      setError(err.message || 'Something went wrong while fetching the result.');
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = Boolean(scholarNumber.trim());

  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <HeroTitle>Student Result Portal</HeroTitle>
            <HeroSubtitle>
              Enter your Scholar Number to securely view your academic result.
            </HeroSubtitle>
          </motion.div>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <ContentGrid>
            <Card as={motion.div} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <CardTitle>Check Result</CardTitle>
              <CardSubtitle>
                Results are fetched securely from our official records. Please double-check
                the Scholar Number before submitting.
              </CardSubtitle>

              <Form onSubmit={handleSubmit} noValidate>
                <FormGroup>
                  <Label htmlFor="scholarNumber">Scholar Number</Label>
                  <Input
                    id="scholarNumber"
                    name="scholarNumber"
                    type="text"
                    autoComplete="off"
                    placeholder="Enter your Scholar Number"
                    value={scholarNumber}
                    onChange={(e) => setScholarNumber(e.target.value)}
                    required
                  />
                  <HelperText>
                    This number is provided by the school and printed on your ID card / fee receipt.
                  </HelperText>
                </FormGroup>

                <SubmitButton type="submit" disabled={!isFormValid || isLoading}>
                  {isLoading ? 'Checking result…' : 'Check Result'}
                </SubmitButton>

                {error && <StatusText $type="error">{error}</StatusText>}
                {resultNotFound && !error && (
                  <StatusText $type="error">
                    Result not found for the entered Scholar Number. Please verify the number
                    or contact the school office for assistance.
                  </StatusText>
                )}
                {!error && !resultNotFound && !studentResult && !isLoading && (
                  <StatusText>
                    Results shown here are for information purposes only. For official queries,
                    please contact the school administration.
                  </StatusText>
                )}
              </Form>
            </Card>

            <Card as={motion.div} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <CardTitle>Result Details</CardTitle>
              <CardSubtitle>
                Once you search, your name, class, subject-wise marks, and overall status
                (Pass/Fail) will appear here.
              </CardSubtitle>

              {studentResult ? (
                <>
                  <ResultHeader>
                    <StudentMeta>
                      <StudentName>{studentResult.studentName || 'Student'}</StudentName>
                      <StudentInfoLine>
                        Scholar No: <strong>{studentResult.scholarNumber}</strong>
                      </StudentInfoLine>
                      <StudentInfoLine>
                        Class: <strong>{studentResult.className || 'N/A'}</strong>
                      </StudentInfoLine>
                    </StudentMeta>
                    {studentResult.status && (
                      <ResultStatusBadge $status={studentResult.status}>
                        {studentResult.status}
                      </ResultStatusBadge>
                    )}
                  </ResultHeader>

                  {studentResult.subjects && studentResult.subjects.length > 0 ? (
                    <MarksTable>
                      <thead>
                        <MarksRow>
                          <MarksHeaderCell>Subject</MarksHeaderCell>
                          <MarksHeaderCell>Marks</MarksHeaderCell>
                        </MarksRow>
                      </thead>
                      <tbody>
                        {studentResult.subjects.map((subject) => (
                          <MarksRow key={subject.name}>
                            <MarksCell>{subject.name}</MarksCell>
                            <MarksCell>{subject.marks}</MarksCell>
                          </MarksRow>
                        ))}
                      </tbody>
                    </MarksTable>
                  ) : (
                    <StatusText>
                      Subject-wise marks are not available for this record. Please contact the
                      school office if you believe this is an error.
                    </StatusText>
                  )}
                </>
              ) : (
                <StatusText>
                  Enter a Scholar Number and click &ldquo;Check Result&rdquo; to view the
                  student&apos;s performance here.
                </StatusText>
              )}
            </Card>
          </ContentGrid>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default StudentResult;

