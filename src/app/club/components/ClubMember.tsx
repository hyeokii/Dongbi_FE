'use client';
import React, { useState, ChangeEvent, useEffect } from 'react';
import Checkbox from '@/src/components/common/Checkbox';

interface RowData {
  [key: string]: boolean | string;
}

interface TableRowProps {
  row: RowData;
  headers: string[];
  isEditing: boolean;
  onRowUpdate: (updatedRow: RowData) => void;
}

const ClubMember = ({
  row,
  headers,
  isEditing,
  onRowUpdate,
}: TableRowProps) => {
  const [rowData, setRowData] = useState<RowData>(row);
  const [editingHeader, setEditingHeader] = useState<string | null>(null);

  useEffect(() => {
    setRowData(row);
  }, [row]);

  // 체크박스 변경 핸들러
  const handleCheckboxChange = (
    header: string,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const updatedRow = { ...rowData, [header]: event.target.checked };
    setRowData(updatedRow);
    onRowUpdate(updatedRow);
  };

  // 입력 필드 변경 핸들러
  const handleInputChange = (
    header: string,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const updatedRow = { ...rowData, [header]: event.target.value };
    setRowData(updatedRow);
  };

  // 입력 필드의 포커스를 잃었을 때 업데이트
  const handleBlur = () => {
    onRowUpdate(rowData);
    setEditingHeader(null);
  };

  return (
    <tr className="border border-primary">
      {headers.map((header, index) => (
        <td key={index} className="px-4 py-3 text-center">
          {typeof rowData[header] === 'boolean' ? (
            <Checkbox
              isDisabled={!isEditing}
              isChecked={rowData[header] as boolean}
              onChange={(event) => handleCheckboxChange(header, event)}
            />
          ) : isEditing &&
            (editingHeader === header || rowData[header] === '') ? (
            <input
              type="text"
              className="bg-white border border-gray-300 py-1 text-center"
              value={rowData[header] as string}
              onFocus={() => setEditingHeader(header)}
              onChange={(event) => handleInputChange(header, event)}
              onBlur={handleBlur} // 입력 박스의 포커스를 잃었을 때 업데이트
            />
          ) : (
            <span className="text-center">{rowData[header]}</span>
          )}
        </td>
      ))}
    </tr>
  );
};

export default ClubMember;
