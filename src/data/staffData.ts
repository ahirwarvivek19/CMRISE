/**
 * Staff data with photo mapping.
 * Photos in public/staff/ use format: {uniqueId}-{FirstName}.{ext}
 * e.g. BP8742-Rajesh.jpg, CB6146-Neha.jpeg
 */
export const STAFF_PHOTO_MAP = {
  BP8742: 'BP8742-Rajesh.jpg',
  CB6146: 'CB6146-Neha.jpg',
  CA6919: 'CA6919-Adityaraj.jpg',
  CA6918: 'CA6918-Lokit.jpg',
  BP7051: 'BP7051-Ekta.jpeg',
  BO4308: 'BO4308-Arun.jpg',
  BY7077: 'BY7077-Maheshchandra.jpg',
  CA9694: 'CA9694-Dinesh.jpg',
  BX7035: 'BX7035-Bhagvan.jpeg',
  BQ5216: 'BQ5216-Seema.jpeg',
  AQ8625: 'AQ8625-Somesh.jpg',
  CB2655: 'CB2655-Rajesh.jpg',
  CB6644: 'CB6644-Roshini.jpg',
  CB2605: 'CB2605-Anuradha.jpg',
  CC2313: 'CC2313-Priti.jpg',
  CB3012: 'CB3012-Indira.jpg',
  CC2925: 'CC2925-Rubal.jpg',
  CB2999: 'CB2999-Ritcha.jpg',
  BW1312: 'BW1312-Rakesh.jpeg',
  AA4737: 'AA4737-Virshree.jpg',
  BD9052: 'BD9052-Sohan.jpg',
  BI8121: 'BI8121-Ravi.jpg',
  BE5085: 'BE5085-Shiv.jpg',
  BU2747: 'BU2747-Bharti.jpg',
  BE4477: 'BE4477-Manjula.jpg',
  BE4476: 'BE4476-Mohammad.jpg',
  BD7695: 'BD7695-Dinesh.jpeg',
  CF8989: 'CF8989-Sayyed.jpg',
  CE5174: 'CE5174-Rupali.jpg',
  CD2585: 'CD2585-Priyanka.jpg',
  BD9243: 'BD9243-Shailesh.jpeg',
  CC2411: 'CC2411-Ruchika.jpg',
  BE2465: 'BE2465-Urmila.jpg',
  CB5307: 'CB5307-Geeta.jpg',
};

const getDesignationSortOrder = (designation) => {
  const d = designation.toUpperCase();
  if (d.includes('PRINCIPAL')) return 1;
  if (d.startsWith('HM')) return 2;
  if (d.startsWith('SSS-1')) return 3;
  if (d.startsWith('SSS-2')) return 4;
  if (d.startsWith('SSS-3')) return 5;
  return 6;
};

const STAFF_RAW = [
  { id: 'BP8742', name: 'RAJESH RATHORE', designation: 'SSS-1 Biology' },
  { id: 'CB6146', name: 'NEHA JAMIDAR', designation: 'SSS-1 Sanskrit' },
  { id: 'CA6919', name: 'ADITYARAJ SINGH CHOUHAN', designation: 'SSS-3 Lab' },
  { id: 'CA6918', name: 'LOKIT CHAWDA', designation: 'SSS-3 Lab' },
  { id: 'BP7051', name: 'EKTA GOUR', designation: 'SSS-1 Hindi' },
  { id: 'BO4308', name: 'ARUN KUMAR PANDIT', designation: 'SSS-1 Economics' },
  { id: 'BY7077', name: 'DR MAHESHCHANDRA SHARMA', designation: 'SSS-2 Sanskrit' },
  { id: 'CA9694', name: 'DINESH BHATI', designation: 'SSS-1 Chemistry' },
  { id: 'BX7035', name: 'BHAGVAN SINGH LIMDIYA', designation: 'SSS-3' },
  { id: 'BQ5216', name: 'SEEMA PARMAR', designation: 'SSS-3' },
  { id: 'AQ8625', name: 'SOMESH VYAS', designation: 'SSS-2 Science' },
  { id: 'CB2655', name: 'RAJESH BAIRAGI', designation: 'SSS-1 English' },
  { id: 'CB6644', name: 'ROSHINI SUMAN', designation: 'SSS-1 Political Science' },
  { id: 'CB2605', name: 'ANURADHA KATARE', designation: 'SSS-1 English' },
  { id: 'CC2313', name: 'PRITI BHOJ', designation: 'SSS-1 History' },
  { id: 'CB3012', name: 'INDIRA MATHUR', designation: 'SSS-2 English' },
  { id: 'CC2925', name: 'RUBAL VERMA', designation: 'SSS-1 Geography' },
  { id: 'CB2999', name: 'RITCHA CHAUDHARY', designation: 'SSS-2 Maths' },
  { id: 'BW1312', name: 'RAKESH KUMAR JAISWAL', designation: 'SSS-1 Maths' },
  { id: 'AA4737', name: 'VIRSHREE DARPE', designation: 'SSS-1 English' },
  { id: 'BD9052', name: 'SOHAN LAL PANDYA', designation: 'HM-PS' },
  { id: 'BI8121', name: 'RAVI SAHU', designation: 'SSS-1 Agriculture' },
  { id: 'BE5085', name: 'SHIV SINGH AHIRWAR', designation: 'Principal-HSS' },
  { id: 'BU2747', name: 'BHARTI SONI', designation: 'SSS-2 Science' },
  { id: 'BE4477', name: 'MANJULA MARMAT', designation: 'SSS-2 Fine Art' },
  { id: 'BE4476', name: 'MOHAMMAD ALI KHAN', designation: 'SSS-2 Physical Education' },
  { id: 'BD7695', name: 'DINESH KUMAR PANDYA', designation: 'SSS-3' },
  { id: 'CF8989', name: 'SAYYED VAHID HUSSAIN', designation: 'SSS-1 Commerce' },
  { id: 'CE5174', name: 'RUPALI DUBEY', designation: 'SSS-3' },
  { id: 'CD2585', name: 'PRIYANKA SINGH', designation: 'SSS-3' },
  { id: 'BD9243', name: 'SHAILESH JOSHI', designation: 'SSS-3' },
  { id: 'CC2411', name: 'RUCHIKA VYAS', designation: 'SSS-2 English' },
  { id: 'BE2465', name: 'URMILA SHRIMALI', designation: 'SSS-2 Hindi' },
  { id: 'CB5307', name: 'GEETA CHANDNIYA', designation: 'SSS-2 Sanskrit' },
];

export const STAFF_LIST = [...STAFF_RAW].sort((a, b) => {
  const orderA = getDesignationSortOrder(a.designation);
  const orderB = getDesignationSortOrder(b.designation);
  if (orderA !== orderB) return orderA - orderB;
  return a.name.localeCompare(b.name);
});

const getDepartment = (designation) => {
  const d = designation.toUpperCase();
  if (d.includes('PRINCIPAL') || d.startsWith('HM')) return 'Administration';
  if (d.startsWith('SSS-1') || d.startsWith('SSS-2') || d.startsWith('SSS-3')) return 'Teaching Staff';
  return 'Support Staff';
};

export const STAFF_BY_DEPARTMENT = STAFF_LIST.reduce((acc, member) => {
  const dept = getDepartment(member.designation);
  if (!acc[dept]) acc[dept] = [];
  acc[dept].push(member);
  return acc;
}, {});
