// ray test touch <
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// ray test touch >
import './index.scss';
export interface BorrowContentTableItemProps {
  title: string,
  coinValue: string,
  priceValue: number,
  type: string,
  avatar: Array
}
export default function BorrowContentTableItem({ title, coinValue, priceValue, type, avatar }: BorrowContentTableItemProps): JSX.Element {
  console.log(avatar);
  return (
    <div className='mt-3 bg-white mb-3 border-top py-3'>
      <div className='d-flex justify-content-between'>
        <div className='align-self-center'>
          {avatar.map((item, index) => {
            console.log(item, 'bs---', index);
            return (
              <img
                key={index}
                src={`/assets/icons/${item}.png`}
                alt='no image'
                width={40}
                height={40}
                className={`${index === 0 ? 'img-avatar' : ''}`} />
            );
            // {index === 0 && (
            //   <img
            //     src={`/assets/icons/${item}.png`}
            //     width={40}
            //     height={40}
            //     className='img-avatar' />
            // );}
            // {index !== 0 && (
            //   <img
            //     src={`/assets/icons/${item}.png`}
            //     width={40}
            //     height={40} />
            // );}
          })}
        </div>
        <div className='align-self-center font-weight-bold'>
          {title}
        </div>
        <div
          className='d-flex align-self-center justify-content-between'>
          <span className='grey font-weight-bold'>Deposited :</span>
          <div className='pl-5'>
            <div>{coinValue}</div>
            <div>{priceValue}$</div>
          </div>
        </div>
        {type === 'multi' && (
          <div
            style={{ width: '300px' }}>
            <div className='d-flex justify-content-between py-1'>
              <div>
                <div className='button active'>Deposit</div>
              </div>
              <div>
                <div className='button'>Withdraw</div>
              </div>
            </div>
            <div className='d-flex justify-content-between py-1'>
              <div>
                <div className='button'>Leverage</div>
              </div>
              <div>
                <div className='button'>Deleverage</div>
              </div>
            </div>
          </div>
        )}
        {type === 'simple' && (
          <div
            style={{ width: '300px' }}>
            <div className='d-flex justify-content-between py-1'>
              <div>
                <div className='button'>Borrow</div>
              </div>
              <div>
                <div className='button'>Repay</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
