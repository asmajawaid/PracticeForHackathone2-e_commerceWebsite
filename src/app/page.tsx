import Hero from "@/components/Hero";
import FlashSales from "./flashSales/page";
import Line5 from "@/components/Line5";
import Categories from "./categories/page";
import Products from "./products/page";
import GrandSale from "./grandSale/page";




export default function Home() {
  return (
  <div className="">
   
    <Hero/>
    <FlashSales/>
    <Line5/>
    <Categories/>
    <Products/>
    <GrandSale/>
  </div>
  );
}
