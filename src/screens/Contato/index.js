import { Image, Text, TextInput, View } from "react-native";
import {
  ButtonMessage,
  ContainerForm,
  Input,
  MapContainer,
  MapsImage,
  MessageText,
  TextButton,
  TextHighlight,
  TextLabel,
} from "./style";
import maps from "../../assets/maps.png";
import logo from "../../assets/logoShopSwift.png";

export const Contato = () => {
  return (
    <View>
      <Image source={logo} />

      <View>
        <MapContainer>
        <MessageText>Venha nos <TextHighlight>Visitar</TextHighlight></MessageText>
          <MapsImage source={maps} />
        </MapContainer>
      </View>

      <ContainerForm>
        <Text>Mande uma <TextHighlight>mensagem</TextHighlight></Text>

        <View>
          <TextLabel>Nome:</TextLabel>
          <Input />
        </View>

        <View>
          <TextLabel>Email:</TextLabel>
          <TextInput />
        </View>

        <View>
          <TextLabel>Mensagem:</TextLabel>
          <TextInput />
        </View>

        <ButtonMessage>
            <TextButton>Enviar</TextButton>
        </ButtonMessage>
      </ContainerForm>
    </View>
  );
};
