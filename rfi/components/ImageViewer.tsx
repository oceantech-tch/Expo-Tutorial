import { ImageSourcePropType, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { useState } from "react";

type Props = {
    imgSource: ImageSourcePropType;
    selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);
    
    const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

    return <Image source={imageSource} style={styles.image} />;
};

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    }
})