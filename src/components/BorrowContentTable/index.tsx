// ray test touch <
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// ray test touch >
import './index.scss';
import BorrowContentTableItem from '../BorrowContentTableItem';

const avatarList1 = [
  '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  '0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b'
];
const avatarList2 = [
  '0xdAC17F958D2ee523a2206206994597C13D831ec7'
];

export default function BorrowContentTable(): JSX.Element {
  return (
    <div className='mt-3 bg-white mb-3'>
      <BorrowContentTableItem
        title='RTHM-DAI LP'
        coinValue='0 LP'
        priceValue={0}
        type='multi'
        avatar={avatarList1} />
      <BorrowContentTableItem
        title='RTHM-DAI LP'
        coinValue='0 LP'
        priceValue={0}
        type='simple'
        avatar={avatarList2} />
    </div>
  );
}
