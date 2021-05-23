import { Col, Tab, Tabs } from '../../utils';
import { DefaultTab } from './DefaultTab';
import { SecondTab } from './SecondTab';
import './style.css';

export function Dashboard() {
  return (
    <div className='dashboard-container d-flex align-items-center justify-content-center'>
      <Col
        xl='4'
        lg='4'
        md='4'
        sm='12'
        xs='12'
        className='dashboard_container-column p-3'
      >
        <Tabs defaultActiveKey='roman' unmountOnExit>
          <Tab eventKey='roman' title='To roman numeral'>
            <DefaultTab />
          </Tab>
          <Tab eventKey='integer' title='To integer'>
            <SecondTab />
          </Tab>
        </Tabs>
      </Col>
    </div>
  );
}
