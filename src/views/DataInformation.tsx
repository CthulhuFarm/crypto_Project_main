import View from '../components/View';
import ItemCard from '../components/ItemCard';
import DataContent from '../components/DataContent';
/**
 * LendingPool page view.
 */

export default function Risks() {
  const CardParameter = {
    totalSupply: '100',
    totalBorrow: '200',
    untializationRate: '300',
    supplyApy: '400',
    borrowApy: '500'
  };
  return (
    <View>
      <div className='container pt-5'>
        <div className='d-flex'>
          <ItemCard
            name='Rythm (RTHM)'
            avatar='0xdAC17F958D2ee523a2206206994597C13D831ec7'
            cardParameter={CardParameter} />
          <ItemCard
            name='DAI (DAI)'
            avatar='0x6B175474E89094C44Da98b954EedeAC495271d0F'
            cardParameter={CardParameter} />
        </div>
        <DataContent />
      </div>
    </View>
  );
}
