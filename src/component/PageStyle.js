import styled from "styled-components";

import { Rate, Table } from "antd";

export const MainPage = styled.div`
  font-family: "Poppins";
`;
export const StyledStatus = styled.div`
  display: inline-flex;
  padding: 4px 11px;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  border: 1px solid ${(props) => props.border || "var(--green-t-50, #93d7af)"};
  background: ${(props) => props.bgColor};
  color: ${(props) => props.fontColor};
`;

export const SvgStyle = styled.svg`
  cursor: pointer;
`;

export const NameTableRow = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

export const NamePara = styled.p`
  color: var(--blue-100, #1b63a9);
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

export const MainDivStyle = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  color: #768595;
`;

export const UserStyle = styled.div`
  display: flex;
  flex-direction: row;
  color: #768595;
  margin-right: 4px;

  svg {
    margin-top: 2px;
  }
`;

export const ReceiptionStyle = styled.div`
  display: flex;
  flex-direction: row;
  color: #768595;
  margin-left: 4px;

  svg {
    margin-top: 2px;
  }
`;
export const LineDiv = styled.div`
  margin-top: 0px;
`;

// export const RateStar = styled(Rate)`
//   color: #1b63a9;
// `;

export const StarDiv = styled.div`
  display: flex;
`;

export const Stars = styled.div`
  margin-right: 10px;
`;

export const StyledTable = styled(Table)`
  .ant-table-thead .ant-table-cell {
    background-color: #f0f2f4;
    color: var(--grey-t-15, #637487);
    font-size: 16px;
  }
`;

export const ThreeDotStyledSVG = styled.svg`
  margin-top: 13px;
  margin-bottom: 13px;
  margin-right: 17px;
  cursor: pointer;
`;

export const ArrowStyle = styled.svg`
  margin-left: 5px;
  margin-bottom: -1.5px;
`;

export const CampignDiv = styled.div`
  background-color: #e4e7ea;
  display: flex;
  flex-direction: rows;
  justify-content: space-between;
  width: 100%;
  height: 42px;
`;

export const CampingText = styled.div`
  color: #3a4a5b;
  font-size: 18px;
  margin-top: 11px;
  margin-bottom: 10px;
  margin-left: 19px;
`;

export const CampignSvg = styled.svg`
  margin-top: 13px;
  margin-bottom: 13px;
  margin-right: 45px;
`;

export const NameSpan = styled.span`
  margin-right: 9px;
`;

export const NoSurvey = styled.div`
  color: #8895a3;
`;

export const Empty = styled.p`
  margin-left: 20%;
`;
