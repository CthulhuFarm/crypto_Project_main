// ray test touch <
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// ray test touch >
import './index.scss';
import BorrowContentInfo from '../BorrowContentInfo';
import BorrowContentTable from '../BorrowContentTable';

export default function BorrowContent(): JSX.Element {
  return (
    <div className='mx-3 mt-3 bg-white mb-3'>
      <BorrowContentInfo />
      <BorrowContentTable />
    </div>
  );
}
