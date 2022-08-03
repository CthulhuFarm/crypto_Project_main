// ray test touch <
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// ray test touch >
import './index.scss';

import Card from 'react-bootstrap/esm/Card';
import { ListGroup } from 'react-bootstrap';

export enum ButtonState {
  Disabled = 'disabled',
  Ready = 'ready',
  Pending = 'pending',
  Done = 'done',
}
export interface InteractionButtonProps {
  name: string;
  avatar: string;
  cardParameter: Array;
}
export default function ItemCard({ name, avatar, cardParameter }: InteractionButtonProps): JSX.Element {
  return (
    <Card
      className='w-50 mx-3'
      style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='mb-0 p-2'>
          <img
            src={`/assets/icons/${avatar}.png`}
            width='50px'
            height='50px'
            className='mx-3' />
          {name}
        </Card.Title>
        <ListGroup variant='flush'>
          <ListGroup.Item className='border-top'>Total Supply <span className='pull-right'>$ {cardParameter.totalSupply}</span></ListGroup.Item>
          <ListGroup.Item className='border-top'>Total Borrow <span className='pull-right'>$ {cardParameter.totalBorrow}</span></ListGroup.Item>
          <ListGroup.Item className='border-top'>Utilization Rate <span className='pull-right'> {cardParameter.untializationRate}%</span></ListGroup.Item>
          <ListGroup.Item className='border-top'>Supply APY <span className='pull-right'> {cardParameter.supplyApy}%</span></ListGroup.Item>
          <ListGroup.Item className='border-top'>Borrow APY <span className='pull-right'> {cardParameter.borrowApy}%</span></ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
