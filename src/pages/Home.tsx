import ProductsWrapper from '../components/productsWrapper';
import SearchBox from '../components/search';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <SearchBox />
      <ProductsWrapper />
    </>
  );
}
