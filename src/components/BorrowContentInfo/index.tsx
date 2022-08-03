// ray test touch <
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// ray test touch >
import './index.scss';
import BorrowContentInfoText from '../BorrowContentInfoText';
export default function BorrowContentInfo(): JSX.Element {
  return (
    <div className='mt-3 bg-white mb-3'>
      <div className='d-flex flex-warp'>
        <div className='w-50'>
          <BorrowContentInfoText
            title='Total Collateral'
            value='$0'
            icon='none' />
        </div>
        <div className='w-50'>
          <BorrowContentInfoText
            title='Current Leverage'
            value='1.00x'
            icon='question' />
        </div>
      </div>
      <div className='d-flex flex-warp'>
        <div className='w-50'>
          <BorrowContentInfoText
            title='Total Debt'
            value='$0'
            icon='none' />
        </div>
        <div className='w-50'>
          <BorrowContentInfoText
            title='Liquidation Prices'
            value='0 - Infinity'
            icon='question' />
        </div>
      </div>
      <div className='d-flex flex-warp'>
        <div className='w-50'>
          <BorrowContentInfoText
            title='Lp Equity'
            value='$0'
            icon='question' />
        </div>
        <div className='w-50'>
          <BorrowContentInfoText
            title='TWAP Price'
            value={`0.000001608 (current: 0.000001608)${<i className='fa fa-refresh'></i>}`}
            icon='none' />
        </div>
      </div>
    </div>
  );
}
