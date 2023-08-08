import { useState } from "react";
import { styled } from "styled-components";

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const BigImage = styled.img`
  max-width: 100%;
  max-height: 200px;
`;

const BigImageWrapper = styled.div`
  tex-aling: center;
`;

const ImageButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const ImageButton = styled.div`
  border: 2px solid #ccc;
  ${(props) =>
    props.active ? "border-color:red;" : "border-color:transparent;"}
  height: 40px;
  padding: 2px;
  cursor: pointer;
  border-radius: 5px;
`;

//Using hardcoded demo images - normaly images will come from maping through images in AWS

export default function ProductImages({ images }) {
  const src =
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80";
  const src2 =
    "https://images.unsplash.com/photo-1617294864705-eaf3c911259f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80";

  const [activeImage, setActiveImage] = useState(src);
  return (
    <>
      <BigImageWrapper>
        <BigImage src={activeImage} />
      </BigImageWrapper>
      <ImageButtons>
        <ImageButton
          active={activeImage === src2}
          onClick={() => setActiveImage(src2)}
        >
          <Image
            src="https://images.unsplash.com/photo-1617294864705-eaf3c911259f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </ImageButton>
        <ImageButton
          active={activeImage === src}
          onClick={() => setActiveImage(src)}
        >
          <Image src={src} />
        </ImageButton>
      </ImageButtons>
    </>
  );
}
