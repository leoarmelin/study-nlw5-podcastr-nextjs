import Image from "next/image";
import styled from "styled-components";

export default styled.div`
  max-width: 45rem;
  padding: 3rem 2rem;
  margin: 0 auto;
`;

export const ThumbnailContainer = styled.div`
  position: relative;
`;

const Buttons = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  border: 0;
  position: absolute;
  z-index: 5;
  font-size: 0;
  transition: filter 0.2s ease;

  &:first-child {
    left: 0;
    top: 50%;
    background: var(--purple-500);
    transform: translate(-50%, -50%);
  }

  &:last-child {
    right: 0;
    top: 50%;
    background: var(--green-500);
    transform: translate(50%, -50%);
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ArrowLeftButton = styled(Buttons)``;

export const ArrowLeftImg = styled.img``;

export const Thumbnail = styled(Image)`
  border-radius: 1rem;
`;

export const PlayButton = styled(Buttons)``;

export const PlayButtonImg = styled.img``;

export const Header = styled.header`
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--gray-100);
`;

export const Title = styled.h1`
  margin-top: 2rem 0 1.5rem 0;
`;

export const Text = styled.span`
  display: inline-block;
  font-size: 0.875rem;

  & + span {
    margin-left: 1rem;
    padding-left: 1rem;
    position: relative;

    &::before {
      content: "";
      width: 4px;
      height: 4px;
      border-radius: 2px;
      background-color: #bbb;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export const DescriptionContainer = styled.div`
  margin-top: 2rem;
  line-height: 1.675rem;
  color: var(--gray-800);

  p {
    margin: 1.5rem 0;
  }
`;
