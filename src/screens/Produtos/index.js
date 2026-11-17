import { Pressable, TextInput, View } from "react-native";
import { Image, ScrollView } from "react-native";
import iconFilter from "../../assets/iconFilter.png";
import logo from "../../assets/logoShopSwift.png";
import { ContainerProducts, InputContainer, InputSearch } from "./style";
import { ProductsSection } from "../../components/ProductsSection";

export const Produtos = () => {
  return (
    <ScrollView>
      <ContainerProducts>
        
        <Image source={logo} />

        <InputContainer>
          <InputSearch />

          <Pressable>
            <Image source={iconFilter} />
          </Pressable>
        </InputContainer>

        <ProductsSection />
      </ContainerProducts>
    </ScrollView>
  );
};
