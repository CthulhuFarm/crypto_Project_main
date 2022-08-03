// ray test touch <
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// ray test touch >
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
export interface BorrowContentInfoTextProps {
  title: string,
  value: HTMLAreaElement,
  icon: string,
}

export default function BorrowContentInfoText({ title, value, icon }: BorrowContentInfoTextProps): JSX.Element {
  return (
    <div className='mt-1 bg-white mb-1'>
      <p className='mb-0'>{title}{icon === 'none' ? '' : <FontAwesomeIcon
        icon={faQuestionCircle}
        size='sm'
        className='ml-1' />}
      </p>
      <p className='black font-weight-bold'>{value}</p>
    </div>
  );
}
