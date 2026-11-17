import { Image } from "react-native"
import { BoxProducts, ContainerPrice, ProductImage, ProductPrice, ProductsDescription, ProductTitle } from "./style"
import iconAdd from '../../../assets/iconAdd.png'

export const CardProducs = ({image, name, price}) => {
    return(
        <BoxProducts>
            <ProductImage source={{ uri: image }}/>
        
            <ProductsDescription>
                <ProductTitle>{name}</ProductTitle>
                <ContainerPrice>
                    <ProductPrice>R$ {Number(price).toFixed(2).replace(".", ",")}</ProductPrice>
                    <Image source={iconAdd}/>
                </ContainerPrice>
            </ProductsDescription>

        </BoxProducts>
    )
}