import { useEffect } from "react";
import "./i18n/config";
import Product from "@/components/Product";

const Index = () => {
  useEffect(() => {
    document.title = "Farm Fresh Product Hub";
  }, []);

  return <Product />;
};

export default Index;