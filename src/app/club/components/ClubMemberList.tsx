import React, { useState } from 'react';
import ClubMember from './ClubMember';
import CommonButton from '@/src/components/common/CommonButton';
import IconWarning from '../../shared/components/IconComponents/IconWarning';

interface RowData {
  [key: string]: boolean | string;
}

const initialData: RowData[] = [
  {
    이름: '5기 김재혁',
    col1: true,
    col2: false,
    col3: true,
    col4: true,
  },
  {
    이름: '5기 김재혁',
    col1: true,
    col2: true,
    col3: true,
    col4: true,
  },
  {
    이름: '5기 김재혁',
    col1: false,
    col2: true,
    col3: true,
    col4: true,
  },
  {
    이름: '5기 김재혁',
    col1: true,
    col2: true,
    col3: true,
    col4: false,
  },
];

const initialHeaders = Object.keys(initialData[0]);

const ClubMemberList = () => {
  const [data, setData] = useState(initialData);
  const [originalData, setOriginalData] = useState(initialData); // 원본 데이터 상태
  const [updateData, setUpdateData] = useState(initialData);

  const [headers, setHeaders] = useState(initialHeaders);
  const [isEditing, setIsEditing] = useState(false);

  const [newColumnName, setNewColumnName] = useState('');
  const [newColumnCost, setNewColumnCost] = useState('');
  const [columnCosts, setColumnCosts] = useState({});

  const [error, setError] = useState<string>('');

  // 특정 행을 업데이트하는 함수
  const handleRowUpdate = (index: number, updatedRow: RowData) => {
    const newUpdateData = updateData.map((row, rowIndex) =>
      rowIndex === index ? updatedRow : row,
    );
    setUpdateData(newUpdateData);
  };

  // 수정 버튼 클릭 이벤트 핸들러
  const handleEditClick = () => {
    setOriginalData([...data]); // 현재 데이터를 원본 데이터로 저장
    setIsEditing(true);
  };

  // 취소 버튼 클릭 이벤트 핸들러
  const handleCancelClick = () => {
    setData([...originalData]); // 원본 데이터로 복원
    setUpdateData([...originalData]);
    setHeaders([...initialHeaders]);
    setIsEditing(false);
  };

  const handleOkClick = () => {
    setData([...updateData]);
    setIsEditing(false);
  };

  // 새로운 행을 추가하는 함수
  const handleAddMember = () => {
    const newMember: RowData = { 이름: '' };
    headers.forEach((header) => {
      if (header !== '이름') {
        newMember[header] = false;
      }
    });

    const newUpdateData = [...updateData, newMember];
    setUpdateData(newUpdateData);
  };

  // 새로운 열을 추가하는 함수
  const handleAddColumn = () => {
    if (headers.includes(newColumnName)) {
      setError('이미 존재하는 열 이름입니다.');
    } else if (newColumnName.trim() === '') {
      setError('열 이름을 입력해주세요.');
    } else {
      const newUpdateData = updateData.map((row) => ({
        ...row,
        [newColumnName]: false,
      }));
      setUpdateData(newUpdateData);
      setHeaders([...headers, newColumnName]);
      setColumnCosts({ ...columnCosts, [newColumnName]: newColumnCost });
      setNewColumnName('');
      setNewColumnCost('');
      setError('');
    }
  };

  return (
    <div className="w-full relative">
      <div className="flex justify-end">
        {isEditing ? (
          <div className="flex space-x-2">
            <CommonButton
              text="완료"
              bgColor="orange"
              textColor="white"
              radius="moreRounded"
              shadowColor="lightShadow"
              fontSize="sm"
              additionalClass="w-[71px] h-[36px]"
              onClickEvent={handleOkClick}
            />
            <CommonButton
              text="취소"
              bgColor="white"
              textColor="black"
              radius="moreRounded"
              shadowColor="mediumShadow"
              fontSize="sm"
              additionalClass="w-[71px] h-[36px]"
              onClickEvent={handleCancelClick}
            />
          </div>
        ) : (
          <CommonButton
            text="수정"
            bgColor="orange"
            textColor="white"
            radius="moreRounded"
            shadowColor="lightShadow"
            fontSize="sm"
            additionalClass="w-[71px] h-[36px]"
            onClickEvent={handleEditClick}
          />
        )}
      </div>
      {isEditing && (
        <div className="relative -top-10 left-24">
          <div className="absolute bg-primary px-3 py-4 rounded shadow-lg text-[10px] text-white">
            동아리원 이름을 클릭하면
            <br />
            탈퇴 회원으로 변경됩니다.
            <div className="absolute top-full left-1/3 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-t-primary border-l-transparent border-r-transparent"></div>
          </div>
          <IconWarning className="absolute left-10 top-[70px] icon w-[20px] h-[20px] fill-primary" />
        </div>
      )}
      <div className="flex justify-center mt-[16px]">
        <table className="w-full">
          <thead className="py-[15px] border border-[#D1D1D1]">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className={`bg-[#F7F7F7] p-3 text-[14px] ${
                    header === '이름' ? 'w-[200px]' : ''
                  }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {updateData.map((row, rowIndex) => (
              <ClubMember
                key={rowIndex}
                row={row}
                headers={headers}
                isEditing={isEditing}
                onRowUpdate={(updatedRow) =>
                  handleRowUpdate(rowIndex, updatedRow)
                }
              />
            ))}
          </tbody>
        </table>
      </div>
      {isEditing && (
        <div className="flex flex-col items-center mt-8 space-y-4">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={newColumnName}
              onChange={(e) => setNewColumnName(e.target.value)}
              placeholder="새로운 열 이름"
              className="border border-gray-300 py-2 px-4"
            />
            <input
              type="number"
              value={newColumnCost}
              onChange={(e) => setNewColumnCost(e.target.value)}
              placeholder="비용"
              className="border border-gray-300 py-2 px-4"
            />
            <CommonButton
              text="+ 열 추가"
              bgColor="orange"
              textColor="white"
              radius="moreRounded"
              shadowColor="mediumShadow"
              fontSize="sm"
              additionalClass="w-[197px] h-[45px]"
              onClickEvent={handleAddColumn}
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <CommonButton
            text="+ 동아리원 추가"
            bgColor="orange"
            textColor="white"
            radius="moreRounded"
            shadowColor="mediumShadow"
            fontSize="sm"
            additionalClass="w-[197px] h-[45px]"
            onClickEvent={handleAddMember}
          />
        </div>
      )}
    </div>
  );
};

export default ClubMemberList;
