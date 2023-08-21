import { Table, Button, Progress, Rate } from "antd";
import ArrowSvg from "../svg/updownSVG";
import UserSvg from "../svg/userSVG";
import ResponseSvg from "../svg/responseSVG";
import ThreedotSvg from "../svg/threedotSVG";
import {
  ArrowStyle,
  Empty,
  NoSurvey,
  MainPage,
  CampignDiv,
  CampingText,
  LineDiv,
  MainDivStyle,
  NamePara,
  NameSpan,
  NameTableRow,
  RateStar,
  ReceiptionStyle,
  StarDiv,
  Stars,
  StyledStatus,
  StyledStatus1,
  StyledTable,
  UserStyle,
} from "./PageStyle";
import ThreedotSvgStyled from "../svg/threedot";
import FullStar from "../svg/starSvg/fullStar";
import HalfStar from "../svg/starSvg/halfStar";
import UnFilledStar from "../svg/starSvg/notfilledstar";
import Percent1 from "../svg/progressSVG/percent1";
import Percent from "../svg/progressSVG/percent";
import Percent2 from "../svg/progressSVG/percent2";

const TableComponent = () => {
  const columns = [
    {
      title: (
        <div>
          <span>Name</span>
          <span>
            <ArrowSvg />
          </span>
        </div>
      ),
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Completion Rate",
      dataIndex: "completionrate",
      key: "completionrate",
    },
    {
      title: "Average Score",
      dataIndex: "averagescore",
      key: "averagescore",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: (
        <span>
          Last Modified
          <ArrowSvg />
        </span>
      ),
      dataIndex: "lastmodified",
      key: "lastmodified",
    },
    {
      title: (
        <span>
          Last Actions
          <ArrowSvg />
        </span>
      ),
      dataIndex: "lastactions",
      key: "lastactions",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
    },
  ];

  const data = [
    {
      key: "1",
      name: (
        <NameTableRow>
          <div>
            <NamePara>Application Survey</NamePara>
          </div>
          <MainDivStyle>
            <UserStyle>
              <NameSpan>
                <UserSvg />
              </NameSpan>
              <NameSpan>Receiption</NameSpan>
              <NameSpan>100</NameSpan>
            </UserStyle>
            <LineDiv>
              <line>|</line>
            </LineDiv>
            <ReceiptionStyle>
              <NameSpan>
                <ResponseSvg />
              </NameSpan>
              <NameSpan>Receiption</NameSpan>
              <NameSpan>20</NameSpan>
            </ReceiptionStyle>
          </MainDivStyle>
        </NameTableRow>
      ),
      completionrate: (
        <div>
          <div>32%</div>
          <Percent />
        </div>
      ),
      averagescore: (
        <StarDiv>
          <Stars>
            {/* <RateStar value={3.5} allowHalf /> 3.5 */}
            <FullStar />
            <FullStar />
            <FullStar />
            <HalfStar />
            <UnFilledStar />
          </Stars>
          <div>3.5</div>
        </StarDiv>
      ),
      progress: "InActive",
      status: (
        <StyledStatus
          bgColor={"var(--green-t-96, #f6fcf9)"}
          fontColor={"#47ba78"}
        >
          Active
        </StyledStatus>
      ),
      lastmodified: "11 April,2023",
      lastactions: "21 June,2023",
      actions: <ThreedotSvg />,
    },
    {
      key: "2",
      name: (
        <NameTableRow>
          <div>
            <NamePara>CheckIn Survey</NamePara>
          </div>
          <MainDivStyle>
            <UserStyle>
              <NameSpan>
                <UserSvg />
              </NameSpan>
              <NameSpan>Receiption</NameSpan>
              <NameSpan>100</NameSpan>
            </UserStyle>
            <LineDiv>
              <line>|</line>
            </LineDiv>
            <ReceiptionStyle>
              <NameSpan>
                <ResponseSvg />
              </NameSpan>
              <NameSpan>Receiption</NameSpan>
              <NameSpan>80</NameSpan>
            </ReceiptionStyle>
          </MainDivStyle>
        </NameTableRow>
      ),
      completionrate: (
        <div>
          <div>65%</div>
          <Percent1 />
        </div>
      ),
      averagescore: (
        <StarDiv>
          <Stars>
            {/* <RateStar value={3.5} allowHalf /> 3.5 */}
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <UnFilledStar />
          </Stars>
          <div>4</div>
        </StarDiv>
      ),
      progress: "InActive",
      status: (
        <StyledStatus
          bgColor={"var(--green-t-96, #f6fcf9)"}
          fontColor={"#47ba78"}
        >
          Active
        </StyledStatus>
      ),
      lastmodified: "31 March,2021",
      lastactions: "12 Sept,2021",
      actions: <ThreedotSvg />,
    },
    {
      key: "3",
      name: (
        <NameTableRow>
          <div>
            <NamePara>Email Campign</NamePara>
          </div>
          <MainDivStyle>
            <UserStyle>
              <NameSpan>
                <UserSvg />
              </NameSpan>
              <NameSpan>Receiption</NameSpan>
              <NameSpan>100</NameSpan>
            </UserStyle>
          </MainDivStyle>
        </NameTableRow>
      ),
      completionrate: <NoSurvey>No Survey</NoSurvey>,
      averagescore: (
        <StarDiv>
          <Stars>
            <FullStar />
            <FullStar />
            <HalfStar />
            <UnFilledStar />
            <UnFilledStar />
          </Stars>
          <div>2.5</div>
        </StarDiv>
      ),
      progress: "InActive",
      status: (
        <StyledStatus
          border={"var(--blue-t-65, #afc8e1)"}
          bgColor={"var(--blue-t-65, #afc8e1)"}
          fontColor={"var(--blue-t-92, #edf3f8)"}
        >
          Draft
        </StyledStatus>
      ),
      lastmodified: "3 Sept,2021",
      lastactions: "11 Dec,2021",
      actions: <ThreedotSvg />,
    },
    {
      key: "4",
      name: (
        <NameTableRow>
          <div>
            <NamePara>Employee Satisfaction Campign</NamePara>
          </div>
          <MainDivStyle>
            <UserStyle>
              <NameSpan>
                <UserSvg />
              </NameSpan>
              <NameSpan>Receiption</NameSpan>
              <NameSpan>100</NameSpan>
            </UserStyle>
            <LineDiv>
              <line>|</line>
            </LineDiv>
            <ReceiptionStyle>
              <NameSpan>
                <ResponseSvg />
              </NameSpan>
              <NameSpan>Receiption</NameSpan>
              <NameSpan>80</NameSpan>
            </ReceiptionStyle>
          </MainDivStyle>
        </NameTableRow>
      ),
      completionrate: (
        <div>
          <div>100%</div>
          <Percent2 />
        </div>
      ),
      averagescore: (
        <StarDiv>
          <Stars>
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <HalfStar />
          </Stars>
          <div>4.5</div>
        </StarDiv>
      ),
      progress: "InActive",
      status: (
        <StyledStatus
          bgColor={"var(--green-t-96, #f6fcf9)"}
          fontColor={"#47ba78"}
        >
          Active
        </StyledStatus>
      ),
      lastmodified: "3 Oct,2021",
      lastactions: "12 Dec,2021",
      actions: <ThreedotSvg />,
    },
    {
      key: "4",
      name: (
        <NameTableRow>
          <div>
            <NamePara>Team Engagement Survey</NamePara>
          </div>
          <MainDivStyle>
            <UserStyle>
              <NameSpan>
                <UserSvg />
              </NameSpan>
              <NameSpan>Receiption</NameSpan>
              <NameSpan>-</NameSpan>
            </UserStyle>
            <LineDiv>
              <line>|</line>
            </LineDiv>
            <ReceiptionStyle>
              <NameSpan>
                <ResponseSvg />
              </NameSpan>
              <NameSpan>Receiption</NameSpan>
              <NameSpan>-</NameSpan>
            </ReceiptionStyle>
          </MainDivStyle>
        </NameTableRow>
      ),
      completionrate: <Empty>-</Empty>,
      averagescore: <Empty>-</Empty>,
      progress: "InActive",
      status: (
        <StyledStatus
          border={"var(--blue-t-65, #afc8e1)"}
          bgColor={"var(--blue-t-65, #afc8e1)"}
          fontColor={"var(--blue-t-92, #edf3f8)"}
        >
          Draft
        </StyledStatus>
      ),
      lastmodified: "3 Oct,2021",
      lastactions: "12 Dec,2021",
      actions: <ThreedotSvg />,
    },
  ];

  return (
    <MainPage>
      <CampignDiv>
        <CampingText>Campigns</CampingText>
        <ThreedotSvgStyled />
      </CampignDiv>
      <StyledTable columns={columns} dataSource={data} />
    </MainPage>
  );
};

export default TableComponent;
