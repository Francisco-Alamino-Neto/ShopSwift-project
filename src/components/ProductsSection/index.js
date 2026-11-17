import { useEffect, useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import { BoxProducts, ContainerProducts, TextHighlight, TextTitle } from "./style";
import { CardProducs } from "./CardProducts";
import { getProducts } from "../../services/fakeStoreApi";

export const ProductsSection = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const productsFromApi = await getProducts();
                setProducts(productsFromApi);
            } catch (requestError) {
                setError(requestError.message);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    return(
        <BoxProducts>

            <TextTitle>Nossos <TextHighlight>Produtos</TextHighlight></TextTitle>

            {loading && <ActivityIndicator />}
            {!!error && <Text>{error}</Text>}

            <ContainerProducts>
                {products.map((product) => (
                    <CardProducs
                        key={product.id}
                        image={product.image}
                        name={product.title}
                        price={product.price}
                    />
                ))}
            </ContainerProducts>

        </BoxProducts>
    )
}